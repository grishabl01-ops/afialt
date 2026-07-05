"use client";

import { useState } from "react";
import {
  PhoneCallbackIcon,
  WhatsappIcon,
  TelegramIcon,
  ChatIcon,
  CloseIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import { useOpenRequestModal } from "@/components/RequestModalProvider";

const links = [
  { label: "Заказать звонок", href: "tel:+79153404466", Icon: PhoneCallbackIcon },
  { label: "WhatsApp", href: "https://wa.me/79153404466", Icon: WhatsappIcon },
  { label: "Telegram", href: "https://t.me/+79153404466", Icon: TelegramIcon },
];

export function FloatingRail() {
  const [open, setOpen] = useState(false);
  const openRequestModal = useOpenRequestModal();

  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col items-center gap-3 lg:right-6">
      {/* Expandable contact buttons */}
      <div
        className={cn(
          "flex flex-col items-center gap-3 transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        {links.map(({ label, href, Icon }, i) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#282828] text-[#fcfcfc] shadow-lg transition-transform hover:scale-105"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <button
          type="button"
          aria-label="Чат"
          onClick={() => {
            setOpen(false);
            openRequestModal();
          }}
          style={{ transitionDelay: open ? `${links.length * 40}ms` : "0ms" }}
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#282828] text-[#fcfcfc] shadow-lg transition-transform hover:scale-105"
        >
          <ChatIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Закрыть контакты" : "Открыть контакты"}
        className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#282828] text-[#fcfcfc] shadow-xl transition-transform hover:scale-105"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
      </button>
    </div>
  );
}
