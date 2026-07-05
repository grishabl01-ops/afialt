import Image from "next/image";
import { RotatingWord } from "@/components/DisplayHeading";
import { RevealSection } from "@/components/RevealSection";

export function Architecture() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <h2 className="afialt-heading text-[34px] leading-[1.03] sm:text-[46px] lg:text-[60px]">
          <span className="block text-[#0b0b0c]">Архитектурная гармония</span>
          <RotatingWord
            className="block"
            words={["высоты", "динамики", "ритма"]}
          />
        </h2>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-[1fr_1.25fr_0.85fr]">
          {/* Left: stat + paragraph */}
          <RevealSection className="order-2 flex flex-col lg:order-1">
            <span className="font-display text-[56px] leading-none text-[#282828] sm:text-[69px]">
              16-58
            </span>
            <span className="font-display mt-1 text-[24px] text-[#282828]">
              этажей
            </span>
            <p className="mt-6 max-w-[340px] text-[16px] leading-[1.5] text-[#282828]/60">
              Разница в этажности — от 16 до 58 — задаёт вертикальный ритм
              всего квартала: невысокие корпуса служат опорой композиции, а
              высотные акценты вытягивают силуэт вверх. Изгибы фасадов и
              плавные переходы между объёмами создают ощущение движения,
              будто комплекс застыл в момент исполнения музыкальной фразы.
            </p>
          </RevealSection>

          {/* Center: tall tower render */}
          <div className="relative order-1 aspect-[3/4] w-full overflow-hidden lg:order-2">
            <Image
              src="/images/a18f63a277574afbab70f28cd6dc1576.webp"
              alt="АФИАЛЬТ — архитектура башен"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right: smaller render */}
          <div className="relative order-3 aspect-[4/5] w-full overflow-hidden lg:mt-24">
            <Image
              src="/images/d00e8a4e0c234d629670d1cabccc6e8d.webp"
              alt="АФИАЛЬТ — благоустройство"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
