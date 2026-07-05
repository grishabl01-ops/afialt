"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const slides = [
  {
    image: "/images/8cdd1b041d5543cca4d89f1d977fb9dd.webp",
    title: "Пешеходная галерея",
    text: "На первых этажах комплекса — пешеходная галерея коммерческих помещений: кафе, рестораны, магазины и повседневные сервисы в шаговой доступности от подъезда.",
  },
  {
    image: "/images/26c899e4dbb64e4a83528db83e18e8ab.webp",
    title: "Комьюнити-центр",
    text: "Комьюнити-центр площадью 200 кв.м объединяет жителей квартала: кинозал для совместных вечеров, лаунж-зона для отдыха, коворкинг для работы вне дома и отдельная детская комната.",
  },
  {
    image: "/images/42cb730e96074632b198f1d6cec83e49.webp",
    title: "Собственная набережная",
    text: "По периметру комплекса — тротуары и велодорожка, а вдоль воды обустроена собственная набережная с прогулочными маршрутами и зонами отдыха у реки.",
  },
  {
    image: "/images/122d4a00d27b435f8dee01fe6b3cf2a7.webp",
    title: "Образование",
    text: "В составе квартала — собственные школа и детский сад: детям не придётся ездить через весь город, чтобы учиться рядом с домом.",
  },
  {
    image: "/images/2b10baf818cb4d8dbabc33fbb5dbdc17.webp",
    title: "Лобби",
    text: "Высокие потолки, лаунж-зоны для отдыха и приёма гостей и отдельные помещения для сезонного хранения вещей — гостеприимство АФИАЛЬТ чувствуется с первых минут в лобби.",
  },
  {
    image: "/images/parking-plan.png",
    title: "Подземный паркинг",
    text: "Двухпутная рампа с раздельными полосами на въезд и выезд и лифтовой доступ ведут прямо в подземный паркинг — на этом же уровне расположены кладовые для сезонных вещей.",
    fit: "contain",
  },
];

export function Community() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const s = slides[i];

  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[1.35fr_1fr]">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#eceae7] lg:aspect-[16/11]">
            {slides.map((sl, idx) => (
              <Image
                key={sl.image}
                src={sl.image}
                alt={sl.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={
                  (sl.fit === "contain" ? "object-contain p-6 " : "object-cover ") +
                  "transition-opacity duration-500 " +
                  (idx === i ? "opacity-100" : "opacity-0")
                }
              />
            ))}
          </div>

          <div className="relative z-10 -mt-10 mx-4 bg-[#fcfcfc] p-8 sm:p-12 lg:-ml-16 lg:mt-0">
            <p className="text-[13px] uppercase tracking-wider text-[#979797]">
              {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <h3 className="afialt-heading mt-4 text-[28px] leading-tight text-[#282828] sm:text-[40px] lg:text-[48px]">
              {s.title}
            </h3>
            <p className="mt-6 min-h-[120px] max-w-[440px] text-[16px] leading-[1.55] text-[#282828]/60">
              {s.text}
            </p>
            <button
              onClick={next}
              aria-label="Следующий"
              className="mt-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#282828]/25 text-[#282828] transition-colors hover:bg-[#282828] hover:text-[#fcfcfc]"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
