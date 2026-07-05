import Image from "next/image";
import { DOCS } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[calc(100vh-74px)] max-h-[966px] min-h-[560px] items-center overflow-hidden"
    >
      <Image
        src="/images/27f5679818004e2b9ca25c1d5d3148d9.webp"
        alt="АФИАЛЬТ — панорама района"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* legibility scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <div className="max-w-[760px]">
          <h1 className="afialt-text-outline afialt-heading text-[#fcfcfc] text-[40px] leading-[0.98] sm:text-[52px] lg:text-[65px]">
            <span className="sr-only">ЖК АФИАЛЬТ — </span>
            <span className="block">Главный аккорд</span>
            <span className="block pl-[38%] sm:pl-[42%]">Района</span>
          </h1>

          <p className="afialt-text-outline mt-8 text-center text-[18px] uppercase leading-[1.5] text-[#fcfcfc] sm:text-[22px] lg:text-[25px]">
            Звучание жизни
            <br />
            начинается здесь
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={DOCS.presentation}
              target="_blank"
              rel="noreferrer"
              className="afialt-btn h-[54px] px-12 text-[14px]"
            >
              Скачать презентацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
