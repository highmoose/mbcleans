"use client";

import React from "react";
import { useState } from "react";
import SubHeaderBar from "../../../../components/subHeaderBar";
import ServicesIntro from "../../../../components/services/servicesIntro";
import ServiceKeyPoints from "../../../../components/services/serviceKeyPoints";
import ServiceReady from "../../../../components/services/serviceReady";
import Head from "next/head";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(
        Array.from({ length: 10 }, () => false)
    );

    const toggleFAQ = (index) => {
        setIsOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

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
        <div className="bg-slate-50">
            <Head>
                {/* Standard Meta Tags */}
                <meta
                    name="description"
                    content="Enhance your retail space with professional cleaning solutions from MB Cleans. Ensure a pristine and welcoming environment for your customers."
                />
                <meta
                    name="keywords"
                    content="retail cleaning services, professional cleaners, store cleaning, commercial cleaning, MB Cleans"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="MB Cleans" />
                <title>Retail Cleaning Services | MB Cleans</title>

                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Retail Cleaning Services | MB Cleans"
                />
                <meta
                    property="og:description"
                    content="Enhance your retail space with professional cleaning solutions from MB Cleans. Ensure a pristine and welcoming environment for your customers."
                />
                <meta
                    property="og:url"
                    content="https://www.mbcleans.co.uk/services/retail-cleaning-services"
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:image:alt"
                    content="MB Cleans Retail Cleaning"
                />
                <meta property="og:site_name" content="MB Cleans" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Retail Cleaning Services | MB Cleans"
                />
                <meta
                    name="twitter:description"
                    content="Enhance your retail space with professional cleaning solutions from MB Cleans. Ensure a pristine and welcoming environment for your customers."
                />
                <meta
                    name="twitter:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    name="twitter:image:alt"
                    content="MB Cleans Retail Cleaning"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>
            <SubHeaderBar
                title={"Retail Cleaning Services"}
                description={
                    "Enhance Your Retail Space with Professional Cleaning Solutions!"
                }
                image={"/images/sub_banner_1.png"}
            />
            <ServicesIntro
                title={
                    "Enhance Your Retail Space with Professional Cleaning Solutions"
                }
                body1={
                    "In the competitive retail industry, maintaining a clean and inviting store environment is essential for attracting customers, enhancing their shopping experience, and ultimately driving sales. Our professional cleaning services are tailored to meet the unique needs of retail establishments, ensuring a pristine and welcoming space that leaves a lasting impression on shoppers."
                }
                button={"Get in Touch"}
                // body2={"Let us transform your space into a clean and tidy sanctuary."}
                image1="/images/services/shower-soap-wiper.png"
                alt1={"Image 1 alt"}
                image2="/images/services/duster-mirror.png"
                alt2={"Image 1 alt"}
            />
            <ServiceKeyPoints
                title={
                    "Key Benefits for Hiring Professional Retail Store Cleaners:"
                }
                image1={"/images/services/sink-sponge-glove.png"}
                alt1={"Home Cleaning Shower"}
                keyTitle1={"Improved Customer Experience"}
                keyBody1={
                    "Create a positive first impression and instill confidence in shoppers with a clean and well-maintained store environment. Enhance the overall shopping experience, leading to increased customer satisfaction and loyalty."
                }
                keyTitle2={"Enhanced Brand Image"}
                keyBody2={
                    "Reflect your brand's commitment to excellence and attention to detail through a clean and organized retail space. Establish your store as a trusted destination for quality products and exceptional service."
                }
                keyTitle3={"Increased Sales Performance"}
                keyBody3={
                    "Attract more customers and encourage repeat visits by maintaining a visually appealing and hygienic store environment. Boost sales and revenue potential through the positive impact of a clean and well-presented retail space."
                }
                keyTitle4={"Tailored Cleaning Solutions for Retail"}
                keyBody4={
                    "Benefit from our expertise in cleaning retail environments, including showroom floors, product displays, fitting rooms, and checkout areas. Our trained cleaners use specialized techniques and equipment to ensure every corner of your store shines."
                }
                keyTitle5={"Flexible Cleaning Plans"}
                keyBody5={
                    "Customize cleaning schedules and services to fit the unique needs and operating hours of your retail store. Whether you require daily maintenance or periodic deep cleaning, we can accommodate your preferences."
                }
                keyTitle6={"Protection of Merchandise and Fixtures"}
                keyBody6={
                    "Safeguard your valuable merchandise and store fixtures from damage caused by dirt, dust, and neglect. Extend the lifespan of displays, shelves, and fixtures through regular cleaning and maintenance."
                }
            />
            <ServiceReady
                body1={
                    "Investing in professional retail store cleaning services is investing in the success and reputation of your brand. Ensure a clean, inviting, and customer-friendly shopping environment that enhances the overall retail experience and drives business growth. "
                }
                question={"Ready to get started?"}
                button={"Get in Touch"}
            />
        </div>
    );
}
