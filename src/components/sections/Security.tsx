import { RevealSection } from "@/components/RevealSection";

const items = [
  "Двор закрыт от автомобилей — только пешеходы и жители",
  "Круглосуточная охрана и видеонаблюдение по периметру",
  "Консьерж-сервис принимает гостей и решает бытовые вопросы",
  "Доступ в паркинг — только для владельцев машино-мест и кладовых",
];

export function Security() {
  return (
    <section className="bg-[#282828] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <h2 className="afialt-heading text-[34px] leading-[1.02] text-[#fcfcfc] sm:text-[46px] lg:text-[60px]">
          <span className="block">Безопасность — наш</span>
          <span className="block">приоритет</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((text, i) => (
            <RevealSection key={i} className="flex flex-col">
              <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#fcfcfc]/30 font-display text-[26px] text-[#fcfcfc]">
                {i + 1}
              </span>
              <p className="mt-6 text-[14px] leading-[1.6] text-[#fcfcfc]/80">
                {text}
              </p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
