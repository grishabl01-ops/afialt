import Image from "next/image";
import { DisplayHeading } from "@/components/DisplayHeading";
import { RevealSection } from "@/components/RevealSection";

export function Symphony() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <RevealSection className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:min-h-[620px]">
          <Image
            src="/images/d337d1dfaf5648bd9bf79a5915d51fbe.webp"
            alt="АФИАЛЬТ — ансамбль башен"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealSection>

        <RevealSection className="flex flex-col lg:pt-4">
          <DisplayHeading
            className="text-right text-[34px] leading-[1.02] sm:text-[46px] lg:text-[60px]"
            lines={[
              [{ text: "Симфония комфорта", tone: "dark" }],
              [{ text: "в каждой детали", tone: "dark" }],
            ]}
          />
          <div className="mt-8 flex flex-col items-end gap-8 lg:mt-12">
            <p className="max-w-[460px] text-[16px] leading-[1.5] text-[#282828]/[0.64]">
              Семь башен высотой от 16 до 58 этажей складываются в единый
              ансамбль, в основе которого — образ альта. Плавные линии
              фасадов, динамичные объёмы и разновысотный силуэт формируют
              выразительную композицию — новый архитектурный ориентир
              северо-востока Москвы.
            </p>
            <div className="relative aspect-[16/11] w-full max-w-[460px] overflow-hidden">
              <Image
                src="/images/143f1c13edf6473893f845eb506ddce9.webp"
                alt="АФИАЛЬТ — фрагмент фасада"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
