import Head from "next/head";
import React from "react";

export default function HeadMarkup({ locationName = "Wellingborough" }) {
    console.log("locationName", locationName);

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
            areaServed: "Wellingborough",
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
            name: "Wellingborough",
        },
    };

    return (
        <>
            <Head>
                <title>Winter Cleaning Guide | MB Cleans</title>
                <meta
                    name="description"
                    content="Learn how to tackle common winter cleaning challenges, such as mud, salt stains, and damp, with our winter cleaning guide. Keep your space fresh, dry, and inviting."
                />
                <meta
                    property="og:title"
                    content="Winter Cleaning Guide | MB Cleans"
                />
                <meta
                    property="og:description"
                    content="Learn how to tackle common winter cleaning challenges, such as mud, salt stains, and damp, with our winter cleaning guide. Keep your space fresh, dry, and inviting."
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:url"
                    content="https://www.mbcleans.co.uk/blog/winter-cleaning-guide"
                />
                <meta
                    name="twitter:title"
                    content="Winter Cleaning Guide | MB Cleans"
                />
                <meta
                    name="twitter:description"
                    content="Learn how to tackle common winter cleaning challenges, such as mud, salt stains, and damp, with our winter cleaning guide. Keep your space fresh, dry, and inviting."
                />
                <meta
                    name="twitter:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="canonical"
                    href="https://www.mbcleans.co.uk/blog/winter-cleaning-guide"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>
        </>
    );
}
