import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingRail } from "@/components/FloatingRail";
import { RequestModalProvider } from "@/components/RequestModalProvider";
import { Hero } from "@/components/sections/Hero";
import { Symphony } from "@/components/sections/Symphony";
import { InfraCarousel } from "@/components/sections/InfraCarousel";
import { InfraMap } from "@/components/sections/InfraMap";
import { MetroStats } from "@/components/sections/MetroStats";
import { CtaDark } from "@/components/sections/CtaDark";
import { FullBleed } from "@/components/sections/FullBleed";
import { PersonalSpace } from "@/components/sections/PersonalSpace";
import { Community } from "@/components/sections/Community";
import { Security } from "@/components/sections/Security";
import { Architecture } from "@/components/sections/Architecture";
import { GallerySlider } from "@/components/sections/GallerySlider";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

export default function Home() {
  return (
    <RequestModalProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Symphony />
        <InfraCarousel />
        <InfraMap />
        <MetroStats />
        <CtaDark />
        <FullBleed
          src="/images/a11b6a295da44c34beda6ac466b6edb2.webp"
          alt="АФИАЛЬТ — панорама района ночью"
        />
        <PersonalSpace />
        <Community />
        <Security />
        <FullBleed
          src="/images/9d70828df9ea4074b1a917f76b09ae12.webp"
          alt="АФИАЛЬТ — фасад башен"
        />
        <Architecture />
        <GallerySlider />
        <ConsultationForm />
      </main>
      <Footer />
      <FloatingRail />
    </RequestModalProvider>
  );
}
