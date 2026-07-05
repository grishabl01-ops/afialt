import Image from "next/image";
import { RequestButton } from "@/components/RequestButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#282828]">
      <div className="mx-auto flex h-[74px] max-w-[1312px] items-center justify-between px-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="АФИАЛЬТ">
          <Image
            src="/images/633029377c2c475f979ea08b64b2dc91.webp"
            alt="АФИАЛЬТ"
            width={160}
            height={30}
            priority
            className="h-[26px] w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="tel:+79153404466"
            className="hidden text-[16px] text-[#fcfcfc] transition-opacity hover:opacity-80 sm:block"
          >
            +7 (915) 340-44-66
          </a>
          <RequestButton className="afialt-btn h-[42px] px-6 text-[14px] sm:px-8">
            Оставить заявку
          </RequestButton>
        </div>
      </div>
    </header>
  );
}
