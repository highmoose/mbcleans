import { notFound } from "next/navigation";
import ServicesBar from "@components/servicesBar";
import Plans from "@components/plans";
import PartnersBar2 from "@components/partnersBar2";
import StepsBar from "@components/stepsBar";
import EstimateBar from "@components/estimateBar";
import MapBar from "@components/mapBar";
import TestimonialsBar2 from "@components/testimonialsBar2";
import HeroBlock from "@components/heroBlock";
import Head from "next/head";
import HeadMarkup from "../../../../components/seo/headMarkup";

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

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "MB Cleans",
        url: "https://www.mbcleans.co.uk/",
        image: "https://www.mbcleans.co.uk/images/social/social.png",
        logo: "https://www.mbcleans.co.uk/images/social/social.png",
        description:
            "MB Cleans offers professional cleaning services for homes and businesses, providing deep cleaning, regular maintenance, and specialized services.",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+447710172363",
            contactType: "Customer Service",
            areaServed: locationName,
            availableLanguage: "English",
        },
        sameAs: [
            "https://www.facebook.com/mbcleans",
            // "https://twitter.com/mbcleans",
            // "https://www.instagram.com/mbcleans",
        ],
        openingHours: "Mo-Su 08:00-18:00",
        priceRange: "££",
        serviceArea: {
            "@type": "Place",
            name: locationName,
        },
    };

    return (
        <main className="flex min-h-screen flex-col  bg-gray-100">
            <Head>
                <title>
                    Professional Cleaning Services in {locationName} | MB Cleans
                </title>
                <meta
                    name="description"
                    content={`MB Cleans provides top-notch cleaning services in ${locationName} and surrounding areas. Get your free quote today!`}
                />
                <meta
                    property="og:title"
                    content={`Professional Cleaning Services in ${locationName} | MB Cleans`}
                />
                <meta
                    property="og:description"
                    content={`MB Cleans provides top-notch cleaning services in ${locationName} and surrounding areas. Get your free quote today!`}
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:url"
                    content={`https://www.mbcleans.co.uk/${params.slug}`}
                />
                <meta
                    name="twitter:title"
                    content={`Professional Cleaning Services in ${locationName} | MB Cleans`}
                />
                <meta
                    name="twitter:description"
                    content={`MB Cleans provides top-notch cleaning services in ${locationName} and surrounding areas. Get your free quote today!`}
                />
                <meta
                    name="twitter:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="canonical"
                    href={`https://www.mbcleans.co.uk/${params.slug}`}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>

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
