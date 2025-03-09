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
                <title>
                    Professional Medical Facility Cleaning Services | MB Cleans
                </title>
                <meta
                    name="description"
                    content="Ensure a sterile and safe environment in your medical facility with MB Cleans' specialized cleaning services. Our expert team adheres to the highest standards to promote patient safety and compliance."
                />
                <meta
                    name="keywords"
                    content="medical facility cleaning, healthcare cleaning services, hospital cleaning, infection control cleaning, MB Cleans"
                />
                <meta name="author" content="MB Cleans" />
                <meta
                    property="og:title"
                    content="Professional Medical Facility Cleaning Services | MB Cleans"
                />
                <meta
                    property="og:description"
                    content="Maintain hygiene and safety in your medical facility with our specialized cleaning services. Trust MB Cleans to uphold the highest standards of cleanliness and compliance."
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:url"
                    content="https://www.mbcleans.co.uk/services/medical-facility-cleaning"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="canonical"
                    href="https://www.mbcleans.co.uk/services/medical-facility-cleaning"
                />
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>
            <SubHeaderBar
                title={"Medical Facility Cleaning"}
                description={
                    "Searching for professional medical facility cleaning services?"
                }
                image={"/images/sub_banner_1.png"}
            />
            <ServicesIntro
                title={
                    "Maintain Hygiene and Safety in Medical Facilities with Professional Cleaning Services"
                }
                body1={
                    "In medical facilities, cleanliness is not just important—it's critical for patient safety, infection control, and overall well-being. Our professional cleaning services are specifically designed to meet the rigorous cleanliness standards of medical facilities, ensuring a sterile, sanitized, and safe environment for patients, staff, and visitors."
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
                    "Key Reasons for Hiring Professional Medical Facility Cleaners:"
                }
                image1={"/images/services/sink-sponge-glove.png"}
                alt1={"Home Cleaning Shower"}
                keyTitle1={"Patient Safety and Infection Control"}
                keyBody1={
                    "Reduce the risk of healthcare-associated infections (HAIs) with thorough disinfection. Ensure safety through regular cleaning of high-touch surfaces and medical equipment."
                }
                keyTitle2={"Compliance with Healthcare Regulations"}
                keyBody2={
                    "Stay compliant with cleanliness and sanitation standards. Demonstrate commitment to patient care by maintaining a hygienic environment."
                }
                keyTitle3={"Specialized Cleaning for Healthcare Settings"}
                keyBody3={
                    "Benefit from expertise in cleaning medical facilities. Use hospital-grade disinfectants and strict protocols."
                }
                keyTitle4={"Enhanced Staff Productivity and Morale"}
                keyBody4={
                    "Provide a clean, organized workplace for staff. Boost morale and reduce absenteeism."
                }
                keyTitle5={"Customized Cleaning Plans"}
                keyBody5={
                    "Tailor services to fit specific needs and requirements. Offer daily cleaning, terminal disinfection, and emergency response."
                }
                keyTitle6={"Protection of Patient Privacy and Confidentiality"}
                keyBody6={
                    "Maintain patient privacy during cleaning procedures. Ensure compliance with DPA regulations."
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
