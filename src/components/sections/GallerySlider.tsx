"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { GallerySlide } from "@/types";

const slides: GallerySlide[] = [
  { image: "/images/f498a4e79d6740129f8c932edd00e675.webp", alt: "АФИАЛЬТ — вид 1" },
  { image: "/images/cc4a25baf5db4df987b0181d4fc4909f.webp", alt: "АФИАЛЬТ — вид 2" },
  { image: "/images/d00e8a4e0c234d629670d1cabccc6e8d.webp", alt: "АФИАЛЬТ — вид 3" },
  { image: "/images/2e5e8c2f825f4ff9bb2edf4a771a9fb1.webp", alt: "АФИАЛЬТ — вид 4" },
  { image: "/images/db6fe9c6a5514a65b76ab23f598180b0.webp", alt: "АФИАЛЬТ — вид 5" },
  { image: "/images/0d2811df21004d49aeccbadc931a2e33.webp", alt: "АФИАЛЬТ — вид 6" },
  { image: "/images/12bf233fcb8148be907f2dcd2fd8b73d.webp", alt: "АФИАЛЬТ — вид 7" },
  { image: "/images/fac4367887424084a0a3b228fced7338.webp", alt: "АФИАЛЬТ — вид 8" },
];

export function GallerySlider() {
  const [i, setI] = useState(0);
  const go = (dir: 1 | -1) =>
    setI((p) => (p + dir + slides.length) % slides.length);

  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <p className="mb-6 text-right font-display text-[40px] text-[#282828] sm:text-[56px]">
          {String(i + 1).padStart(2, "0")}{" "}
          <span className="text-[#979797]">/ {String(slides.length).padStart(2, "0")}</span>
        </p>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {slides.map((s, idx) => {
            // Only mount the current slide and its immediate neighbours so the
            // browser doesn't fetch all 8 full-size images when the section
            // scrolls into view. Neighbours stay ready for a smooth crossfade.
            const dist = Math.min(
              Math.abs(idx - i),
              slides.length - Math.abs(idx - i),
            );
            if (dist > 1) return null;
            return (
              <Image
                key={s.image}
                src={s.image}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={
                  "object-cover transition-opacity duration-500 " +
                  (idx === i ? "opacity-100" : "opacity-0")
                }
              />
            );
          })}

          <button
            onClick={() => go(-1)}
            aria-label="Предыдущий"
            className="absolute left-4 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#282828] backdrop-blur transition-colors hover:bg-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Следующий"
            className="absolute right-4 top-1/2 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#282828] backdrop-blur transition-colors hover:bg-white"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
