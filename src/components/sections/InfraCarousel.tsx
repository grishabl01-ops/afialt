"use client";

import { useRef } from "react";
import Image from "next/image";
import { DisplayHeading } from "@/components/DisplayHeading";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import type { InfraCard } from "@/types";

const cards: InfraCard[] = [
  { image: "/images/03b9857c0d4a4549b917614fadf0233e.webp", title: "ТРЦ «Алтуфьевский»", distance: "5 минут пешком" },
  { image: "/images/a7811dc45ef640668e203743be737731.webp", title: "Частная школа «Венда»", distance: "4 минуты пешком" },
  { image: "/images/6e162e9d1f0e47eda77923c4feb56453.webp", title: "Марфинские бани", distance: "5 минут на машине" },
  { image: "/images/bf01c10386f843e69cf87ee07f001e06.webp", title: "Фитнес-клуб «Зебра»", distance: "10 минут пешком" },
  { image: "/images/c0e9d04345784ca992b6897467f0ca9a.webp", title: "Бильярдный клуб «Библиотека»", distance: "10 минут на машине" },
  { image: "/images/55f07f63b88d45289454f2ed01f01876.webp", title: "Парк «Отрада»", distance: "10 минут пешком" },
];

export function InfraCarousel() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <DisplayHeading
          className="text-[34px] leading-[1.02] sm:text-[46px] lg:text-[60px]"
          lines={[
            [{ text: "В центре ритма,", tone: "ink" }],
            [{ text: "в окружении парков", tone: "ink" }],
          ]}
        />
        <div className="mt-8 h-px w-full bg-[#282828]/15" />

        <div className="mt-8 flex justify-end gap-3">
          <button onClick={() => scroll(-1)} aria-label="Назад" className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#282828]/25 text-[#282828] transition-colors hover:bg-[#282828] hover:text-[#fcfcfc]">
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button onClick={() => scroll(1)} aria-label="Вперёд" className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#282828]/25 text-[#282828] transition-colors hover:bg-[#282828] hover:text-[#fcfcfc]">
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div ref={track} className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth">
          {cards.map((c) => (
            <article
              key={c.title}
              data-card
              className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden sm:w-[46%] lg:w-[calc((100%-48px)/3)]"
            >
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#fcfcfc]">
                <h3 className="text-[20px] leading-tight">{c.title}</h3>
                <p className="mt-1 text-[14px] text-[#fcfcfc]/75">{c.distance}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
