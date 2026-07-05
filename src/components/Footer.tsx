import Image from "next/image";
import { DOCS } from "@/lib/links";

export function Footer() {
  return (
    <footer className="bg-[#282828] text-[#fcfcfc]">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        {/* Top row */}
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:gap-16">
          <Image
            src="/images/633029377c2c475f979ea08b64b2dc91.webp"
            alt="АФИАЛЬТ"
            width={190}
            height={36}
            className="h-[34px] w-auto object-contain"
          />
          <div className="flex flex-col gap-1">
            <a
              href="tel:+79153404466"
              className="text-[18px] text-[#fcfcfc] transition-opacity hover:opacity-80"
            >
              +7 (915) 340-44-66
            </a>
            <p className="text-[14px] text-[#979797]">
              г Москва, Алтуфьевское шоссе, д 11 к 2
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        {/* Bottom row */}
        <div className="py-10">
          <div className="max-w-3xl space-y-5">
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[14px] text-[#979797]">
              <a
                href={DOCS.consentPersonalData}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#fcfcfc]"
              >
                Согласие на обработку персональных данных
              </a>
              <a
                href={DOCS.privacyPolicyFooter}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#fcfcfc]"
              >
                Политика конфиденциальности
              </a>
            </nav>
            <p className="text-[13px] leading-relaxed text-[#6f6f6f]">
              Сайт носит информационный характер. Информация, размещённая на
              сайте, не является офертой, не является приглашением делать оферты
              и не содержит существенных условий сделок, заключаемых
              застройщиком. Описание объекта строительства и инфраструктуры,
              представленное на сайте, является концепцией и носит
              информационный характер.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
