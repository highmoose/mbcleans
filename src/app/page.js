import Image from "next/image";
import HeroBlock from "../../components/heroBlock";
import Plans from "../../components/plans";
import AboutUs from "../../components/aboutUs";
import PartnersBar2 from "../../components/partnersBar2";

import StepsBar from "../../components/stepsBar";
import EstimateBar from "../../components/estimateBar";
import TestimonialsBar2 from "../../components/testimonialsBar2";
import ServicesBar from "../../components/servicesBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-gray-100">
      <HeroBlock />
      <ServicesBar />
      <Plans />
      <AboutUs />
      <StepsBar />
      <PartnersBar2 />
      <EstimateBar />
      <TestimonialsBar2 />
    </main>
  );
}
