import Image from "next/image";
import BannerBar from "../../components/bannerBar";
import HeaderBar from "../../components/headerBar";
import HeroBlock from "../../components/heroBlock";
import IntroBar from "../../components/introBar";
import InfoBar2 from "../../components/infoBar2";
import PartnersBar2 from "../../components/partnersBar2";

import StepsBar from "../../components/stepsBar";
import EstimateBar from "../../components/estimateBar";
import FooterBar from "../../components/backups/footerBar";
import TestimonialsBar2 from "../../components/testimonialsBar2";
import ServicesBar from "../../components/servicesBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-gray-100">
      <BannerBar />
      <HeaderBar />
      <HeroBlock />
      <ServicesBar />
      <IntroBar />
      <InfoBar2 />
      <StepsBar />
      <PartnersBar2 />
      <EstimateBar />
      <TestimonialsBar2 />
      <FooterBar />
    </main>
  );
}
