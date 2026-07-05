import { DisplayHeading } from "@/components/DisplayHeading";
import { RequestButton } from "@/components/RequestButton";

export function CtaDark() {
  return (
    <section className="bg-[#282828] py-14 lg:py-20">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 border border-[#979797]/70 p-10 sm:p-16 lg:flex-row lg:items-center lg:justify-between">
          <DisplayHeading
            className="text-[30px] leading-[1.05] text-[#fcfcfc] sm:text-[40px] lg:text-[48px]"
            lines={[
              [{ text: "Начать новую", tone: "light" }],
              [{ text: "главу в ", tone: "light" }, { text: "АФИАЛЬТ", tone: "gray" }],
            ]}
          />
          <RequestButton className="afialt-btn h-[54px] shrink-0 px-12 text-[14px]">
            Получить консультацию
          </RequestButton>
        </div>
      </div>
    </section>
  );
}
