import { notFound } from "next/navigation";
import ServicesBar from "@components/servicesBar";
import Plans from "@components/plans";
import PartnersBar2 from "@components/partnersBar2";
import StepsBar from "@components/stepsBar";
import EstimateBar from "@components/estimateBar";
import MapBar from "@components/mapBar";
import TestimonialsBar2 from "@components/testimonialsBar2";
import HeroBlock from "@components/heroBlock";

const locations = [
    "rushden",
    "higham_ferrers",
    "irchester",
    "wymington",
    "sharnbrook",
    "souldrop",
    "great_doddington",
    "little_irchester",
    "wilby",
    "earls_barton",
    "wollaston",
    "bozeat",
    "grendon",
    "yardley_hastings",
    "dentons",
    "cogenhoe",
    "billing",
    "sywell",
    "mears_ashby",
    "ecton",
    "northampton",
    "hardingstone",
    "weston_favell",
    "great_houghton",
    "little_houghton",
    "wellingbourgh",
];

export async function generateStaticParams() {
    return locations.map((slug) => ({ slug }));
}

function formatLocationName(slug) {
    if (!slug) return "";
    return slug
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateMetadata({ params }) {
    const locationName = formatLocationName(params.slug);
    if (!locationName) return notFound();

    return {
        title: `Professional Cleaning Services in ${locationName} | MB Cleans`,
        description: `MB Cleans provides top-notch cleaning services in ${locationName} and surrounding areas. Get your free quote today!`,
    };
}

export default function LocationPage({ params }) {
    const locationName = formatLocationName(params.slug);
    if (!locationName) return notFound();

    return (
        <main className="flex min-h-screen flex-col  bg-gray-100">
            <HeroBlock locationName={locationName} />
            <ServicesBar />
            <Plans />
            <PartnersBar2 />
            <StepsBar />
            <EstimateBar />
            {/* <MapBar /> */}
            <TestimonialsBar2 />
        </main>
    );
}
