import type { NextConfig } from "next";

// Security headers applied to every response. CSP is intentionally permissive
// enough for a Next.js app (inline styles/scripts for the framework) while
// still blocking framing (clickjacking) and mixed content.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js injects small inline scripts; 'unsafe-inline' is required for them.
      // mc.yandex.ru — Yandex.Metrika counter (tag.js).
      "script-src 'self' 'unsafe-inline' https://mc.yandex.ru",
      "style-src 'self' 'unsafe-inline'",
      // mc.yandex.ru — Metrika tracking pixel / webvisor assets.
      "img-src 'self' data: blob: https://mc.yandex.ru",
      "font-src 'self' data:",
      // Form posts to our own /api/lead; Telegram call happens server-side.
      // mc.yandex.ru — Metrika data + webvisor uploads.
      "connect-src 'self' https://mc.yandex.ru",
      // Embedded Yandex Maps widget + Metrika webvisor (mc.yandex.ru).
      "frame-src 'self' https://yandex.ru https://*.yandex.ru",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Serve AVIF first (smaller), fall back to WebP for older browsers.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days on the CDN/edge.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
