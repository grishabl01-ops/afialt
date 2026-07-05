import Image from "next/image";

interface FullBleedProps {
  src: string;
  alt: string;
}

/** Full-width cinematic image band (~966px on desktop). */
export function FullBleed({ src, alt }: FullBleedProps) {
  return (
    <section className="relative h-[56vw] max-h-[820px] min-h-[280px] w-full overflow-hidden bg-[#282828]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
