"use client";

import { useState, type FormEvent } from "react";
import { DOCS } from "@/lib/links";
import { METRIKA_COUNTER_ID, METRIKA_LEAD_GOAL } from "@/lib/metrika";

interface RequestFormProps {
  title?: string;
  submitLabel?: string;
}

type Status = "idle" | "sending" | "sent" | "error";

export function RequestForm({
  title = "Заказать персональную консультацию",
  submitLabel = "Заказать звонок",
}: RequestFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const sent = status === "sent";

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") ?? "").toString();
    const phone = (fd.get("phone") ?? "").toString();
    const company = (fd.get("company") ?? "").toString();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, source: title, company }),
      });
      if (res.ok) {
        setStatus("sent");
        // Track the conversion in Yandex.Metrika (no-op if Metrika is blocked).
        window.ym?.(METRIKA_COUNTER_ID, "reachGoal", METRIKA_LEAD_GOAL);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#fcfcfc] p-8 sm:p-12">
      <h2 className="afialt-heading text-[26px] leading-[1.1] text-[#282828] sm:text-[34px]">
        {title}
      </h2>

      {sent ? (
        <p className="mt-8 text-[16px] text-[#282828]/70">
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
          {/* Honeypot: hidden from users, catches auto-filling bots. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <input
            required
            name="name"
            placeholder="Имя"
            className="h-[48px] rounded-full border border-[#282828]/12 bg-transparent px-5 text-[14px] text-[#0b0b0c] placeholder:text-[#979797] outline-none focus:border-[#282828]/40"
          />
          <input
            required
            name="phone"
            type="tel"
            placeholder="Телефон"
            className="h-[48px] rounded-full border border-[#282828]/12 bg-transparent px-5 text-[14px] text-[#0b0b0c] placeholder:text-[#979797] outline-none focus:border-[#282828]/40"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="afialt-btn mt-2 h-[52px] w-full text-[14px] disabled:opacity-70"
          >
            {status === "sending" ? "Отправляем…" : submitLabel}
          </button>
          {status === "error" && (
            <p className="text-[13px] text-red-600">
              Не удалось отправить заявку. Попробуйте позже или позвоните нам.
            </p>
          )}

          <label className="mt-2 flex items-start gap-3 text-[13px] leading-snug text-[#282828]/60">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#979797]" />
            <span>
              Принимаю{" "}
              <a
                href={DOCS.privacyPolicy}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline underline-offset-2 transition-colors hover:text-[#282828]"
              >
                политику конфиденциальности
              </a>{" "}
              и даю согласие на{" "}
              <a
                href={DOCS.personalData}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="underline underline-offset-2 transition-colors hover:text-[#282828]"
              >
                обработку персональных данных
              </a>
            </span>
          </label>
          <label className="flex items-start gap-3 text-[13px] leading-snug text-[#282828]/60">
            <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-[#979797]" />
            <span>
              Даю согласие на получение рекламно-информационных материалов
            </span>
          </label>
        </form>
      )}
    </div>
  );
}
