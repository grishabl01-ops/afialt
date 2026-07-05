import { RevealSection } from "@/components/RevealSection";
import type { StatItem } from "@/types";

const stats: StatItem[] = [
  {
    value: "3",
    label: "Станции метро",
    description:
      "Метро и МЦК «Окружная» — 5 минут пешком, метро «Владыкино» — 10 минут. Рядом также станция «Отрадное»: из дома легко выстроить быстрый маршрут в любую точку города без машины.",
  },
  {
    value: "3",
    label: "Парка рядом",
    description:
      "Комплекс окружён парковыми зонами, рекой Лихоборка и зелёным массивом — вдоль русла реки проложена эко-тропа для прогулок и пробежек. До парка «Отрада» — 10 минут пешком, а в шаговой доступности и Ботанический сад — один из крупнейших зелёных массивов столицы.",
  },
  {
    value: "3",
    label: "Съезда на основные магистрали",
    description:
      "Съезды на Алтуфьевское и Дмитровское шоссе, а также на Северо-Восточную хорду — 5 минут на машине. Дальше по маршруту: ТТК — 10 минут, Садовое кольцо — 20 минут, центр Москвы — 25 минут, аэропорт Внуково — 45 минут.",
  },
];

export function MetroStats() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1312px] grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:gap-0 sm:px-8 lg:px-10">
        {stats.map((s, i) => (
          <RevealSection
            key={i}
            className={
              "flex flex-col sm:px-8 " +
              (i > 0 ? "sm:border-l sm:border-[#282828]/12 " : "sm:pl-0 ") +
              (i === stats.length - 1 ? "sm:pr-0" : "")
            }
          >
            <span className="font-display text-[64px] leading-none text-[#282828]">
              {s.value}
            </span>
            <h3 className="mt-4 text-[18px] uppercase tracking-wide text-[#282828]">
              {s.label}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.5] text-[#282828]/60">
              {s.description}
            </p>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
