// Server-side lead handler: forwards form submissions to a Telegram bot.
// The bot token lives only in TELEGRAM_BOT_TOKEN (server env) and is never
// shipped to the browser.

interface LeadPayload {
  name?: string;
  phone?: string;
  source?: string;
  // Honeypot field — real users never fill this (it's hidden via CSS).
  // Bots that auto-fill every input will populate it and get silently dropped.
  company?: string;
}

// Simple in-memory sliding-window rate limiter, keyed by client IP.
// Enough to stop casual spam/flooding of the Telegram chat. For multi-instance
// deployments a shared store (Redis/Upstash) would be needed, but for a single
// standalone server this is effective and dependency-free.
const RATE_LIMIT_MAX = 5; // requests
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const hits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => t <= windowStart)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json(
      { ok: false, error: "Lead delivery is not configured." },
      { status: 500 },
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Слишком много заявок. Попробуйте позже." },
      { status: 429 },
    );
  }

  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: if the hidden field is filled, it's a bot. Return a fake success
  // so the bot thinks it worked and doesn't retry — but send nothing.
  if ((data.company ?? "").toString().trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = (data.name ?? "").toString().trim().slice(0, 200);
  const phone = (data.phone ?? "").toString().trim().slice(0, 60);
  const source = (data.source ?? "Сайт АФИАЛЬТ").toString().trim().slice(0, 200);

  if (!name || !phone) {
    return Response.json(
      { ok: false, error: "Укажите имя и телефон" },
      { status: 422 },
    );
  }

  const text = [
    "🏢 Новая заявка — АФИАЛЬТ",
    "",
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    `📍 Источник: ${source}`,
    `🕒 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} (МСК)`,
  ].join("\n");

  try {
    const tg = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );
    const result = await tg.json();
    if (!result.ok) {
      return Response.json(
        { ok: false, error: "Telegram error" },
        { status: 502 },
      );
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Delivery failed" },
      { status: 502 },
    );
  }
}
