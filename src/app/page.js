import TestimonialsBar2 from "@components/testimonialsBar2";
import PartnersBar2 from "@components/partnersBar2";
import EstimateBar from "@components/estimateBar";
import ServicesBar from "@components/servicesBar";
import HeroBlock from "@components/heroBlock";
import StepsBar from "@components/stepsBar";
import Articles from "@components/articles";
// import MapBar from "@components/mapBar";
import Plans from "@components/plans";
import Head from "next/head";

export default function Home() {
    const locationName = "Wellingborough";

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
        <>
            <main className="flex min-h-screen flex-col  bg-gray-100">
                <Head>
                    <title>MB Cleans | Professional Cleaning Services</title>
                    <meta
                        name="description"
                        content="MB Cleans offers professional cleaning services for homes and businesses. We provide deep cleaning, regular maintenance, and specialized services to keep your spaces spotless."
                    />
                    <meta
                        property="og:title"
                        content="MB Cleans | Professional Cleaning Services"
                    />
                    <meta
                        property="og:description"
                        content="MB Cleans offers professional cleaning services for homes and businesses. We provide deep cleaning, regular maintenance, and specialized services to keep your spaces spotless."
                    />
                    <meta
                        property="og:image"
                        content="https://www.mbcleans.co.uk/images/social/social.png"
                    />
                    <meta
                        property="og:url"
                        content="https://www.mbcleans.co.uk/"
                    />
                    <meta
                        name="twitter:title"
                        content="MB Cleans | Professional Cleaning Services"
                    />
                    <meta
                        name="twitter:description"
                        content="MB Cleans offers professional cleaning services for homes and businesses. We provide deep cleaning, regular maintenance, and specialized services to keep your spaces spotless."
                    />
                    <meta
                        name="twitter:image"
                        content="https://www.mbcleans.co.uk/images/social/social.png"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="canonical" href="https://www.mbcleans.co.uk/" />
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
