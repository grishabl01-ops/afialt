import Image from "next/image";
import { RequestForm } from "@/components/RequestForm";

export function ConsultationForm() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/1a48f23e109140118c90bd0bd4d4fe60.webp"
        alt="АФИАЛЬТ — фасад"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative mx-auto flex max-w-[1312px] justify-center px-4 py-16 sm:px-8 lg:justify-end lg:px-10 lg:py-24">
        <div className="w-full max-w-[480px] shadow-xl">
          <RequestForm />
        </div>
      </div>
    </section>
  );
}
