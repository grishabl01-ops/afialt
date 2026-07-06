import { SITE_URL } from "@/lib/site";

// Facts verified from afialt.ru + real-estate aggregators (AFI Development project).
const faqs = [
  {
    q: "Кто застройщик ЖК АФИАЛЬТ?",
    a: "Девелопер — AFI Development (АФИ Девелопмент), проект бизнес-класса на северо-востоке Москвы.",
  },
  {
    q: "Где находится ЖК АФИАЛЬТ?",
    a: "Москва, СВАО, район Отрадное, Алтуфьевское шоссе, 11к2. В пешей доступности — метро Окружная, Владыкино и Отрадное, а также станции МЦК.",
  },
  {
    q: "Сколько в комплексе корпусов и какая этажность?",
    a: "Ансамбль из семи разновысотных башен высотой от 16 до 58 этажей. Силуэт комплекса вдохновлён музыкальным инструментом — альтом.",
  },
  {
    q: "Какие квартиры в продаже?",
    a: "От одно- до трёхкомнатных квартир с гибкими планировками и кухнями-нишами. Актуальные планировки пришлём по запросу.",
  },
  {
    q: "Какая инфраструктура на территории?",
    a: "Собственная набережная у реки Лихоборки, школа и детский сад, комьюнити-центр с кинозалом и коворкингом, коммерческая галерея с кафе и ресторанами, подземный паркинг и закрытый двор с охраной 24/7.",
  },
  {
    q: "Какие сроки сдачи?",
    a: "Плановый срок ввода в эксплуатацию — IV квартал 2029 года.",
  },
  {
    q: "Как купить квартиру, есть ли ипотека и рассрочка?",
    a: "Покупка оформляется по ДДУ с эскроу-счётом. Доступны ипотека, рассрочка, трейд-ин и 100% оплата.",
  },
  {
    q: "Сколько стоят квартиры?",
    a: "Актуальные цены и подборку планировок пришлём по запросу — оставьте заявку, и менеджер свяжется с вами.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section className="bg-[#fcfcfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1312px] px-4 sm:px-8 lg:px-10">
        <h2 className="afialt-heading text-[34px] leading-[1.02] text-[#282828] sm:text-[46px] lg:text-[60px]">
          Вопросы и ответы
        </h2>

        <div className="mt-12 border-t border-[#282828]/12">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-[#282828]/12">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[18px] leading-snug text-[#282828] sm:text-[22px] [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="shrink-0 text-[28px] font-light leading-none text-[#979797] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[900px] pb-6 text-[15px] leading-[1.6] text-[#282828]/70 sm:text-[16px]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
