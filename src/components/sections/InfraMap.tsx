"use client";

import { useState } from "react";
import { MetroIcon, StarIcon, TransportIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

// АФИАЛЬТ — Москва, Алтуфьевское шоссе, 11к2
const LAT = 55.853294;
const LON = 37.579951;
const LL = `${LON},${LAT}`;

const filters = [
  { id: "all", label: "Все", Icon: null, query: null },
  { id: "metro", label: "Метро", Icon: MetroIcon, query: "станция метро" },
  {
    id: "leisure",
    label: "Культура и отдых / Развлечения",
    Icon: StarIcon,
    query: "культура и развлечения",
  },
  { id: "transport", label: "Транспорт", Icon: TransportIcon, query: "остановка транспорта" },
];

function mapSrc(query: string | null) {
  if (!query) {
    // Centered map with the АФИАЛЬТ placemark
    return `https://yandex.ru/map-widget/v1/?ll=${LL}&z=15&pt=${LON},${LAT},pm2rdm`;
  }
  return `https://yandex.ru/map-widget/v1/?ll=${LL}&z=14&mode=search&text=${encodeURIComponent(
    query,
  )}`;
}

export function InfraMap() {
  const [active, setActive] = useState("all");
  const current = filters.find((f) => f.id === active) ?? filters[0];

  return (
    <section className="bg-[#fcfcfc] pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pb-6">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#282828]/30 text-[13px] text-[#282828]">
            6
          </span>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                "flex items-center gap-2 text-[14px] uppercase tracking-wide transition-colors",
                active === f.id
                  ? "text-[#282828]"
                  : "text-[#979797] hover:text-[#282828]",
              )}
            >
              {f.Icon && <f.Icon className="h-4 w-4" />}
              {f.label}
            </button>
          ))}
        </div>

        {/* Interactive Yandex map */}
        <div className="relative h-[420px] w-full overflow-hidden bg-[#eceae7] sm:h-[560px]">
          <iframe
            key={active}
            src={mapSrc(current.query)}
            title="АФИАЛЬТ на карте"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ border: 0, display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
