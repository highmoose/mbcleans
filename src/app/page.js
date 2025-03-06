import HeroBlock from "../../components/heroBlock";
import Plans from "../../components/plans";
import PartnersBar2 from "../../components/partnersBar2";
import StepsBar from "../../components/stepsBar";
import EstimateBar from "../../components/estimateBar";
import TestimonialsBar2 from "../../components/testimonialsBar2";
import ServicesBar from "../../components/servicesBar";
import MapBar from "../../components/mapBar";
import HeaderBar2 from "../../components/headerBar2";
import Articles from "../../components/articles";

export default function Home() {
    const locationName = "Wellingborough";
    return (
        <>
            <main className="flex min-h-screen flex-col  bg-gray-100">
                <HeroBlock locationName={locationName} />
                <ServicesBar />
                <Plans />
                <PartnersBar2 locationName={locationName} />
                <StepsBar />
                <EstimateBar />
                <Articles />
                {/* <MapBar /> */}
                <TestimonialsBar2 />
            </main>
        </>
    );
}
