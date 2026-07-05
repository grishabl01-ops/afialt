import Image from "next/image";
import { RevealSection } from "@/components/RevealSection";
import { RequestButton } from "@/components/RequestButton";

export function PersonalSpace() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 items-center gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <RevealSection className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[5/4]">
          <Image
            src="/images/c46abc89e5164989b45e1ece3be42559.webp"
            alt="Интерьер квартиры АФИАЛЬТ"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealSection>

        <RevealSection className="flex flex-col">
          <h2 className="afialt-heading text-[34px] leading-[1.02] text-[#c7b299] sm:text-[46px] lg:text-[60px]">
            <span className="block">Личное пространство</span>
            <span className="block">для работы</span>
            <span className="block">и отдыха</span>
          </h2>
          <p className="mt-8 max-w-[440px] text-[16px] leading-[1.5] text-[#282828]/60">
            В АФИАЛЬТ представлены квартиры разных форматов — под любой
            сценарий жизни. Панорамные окна есть в каждом лоте и наполняют
            пространство естественным светом в течение всего дня.
          </p>
          <RequestButton className="afialt-btn mt-8 h-[54px] w-fit px-12 text-[14px]">
            Получить предложение
          </RequestButton>
        </RevealSection>
      </div>
    </section>
  );
}
