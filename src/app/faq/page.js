"use client";

import React from "react";
import { useState } from "react";
import SubHeaderBar from "../../../components/subHeaderBar";
import Image from "next/image";
import Head from "next/head";
import HeadMarkup from "../../../components/seo/headMarkup";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(
        Array.from({ length: 10 }, () => false)
    );

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

    const questions = [
        {
            question: "What types of cleaning services do you offer?",
            answer: "We offer a wide range of cleaning services for both commercial and domestic spaces, including regular cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, window cleaning, and more.",
        },
        {
            question: "How do you determine the cost of cleaning services?",
            answer: "The cost of our cleaning services depends on factors such as the size of the space, the level of cleaning required, and any additional services requested. We provide customized quotes based on individual needs after assessing the property.",
        },
        {
            question: "Are your cleaning products safe for pets and children?",
            answer: "Yes, we prioritize the use of eco-friendly and non-toxic cleaning products that are safe for both pets and children. We understand the importance of maintaining a healthy environment for your loved ones.",
        },
        {
            question: "Do I need to provide cleaning equipment and supplies?",
            answer: "No, we come fully equipped with all the necessary cleaning supplies and equipment. However, if you have specific preferences or special products you'd like us to use, feel free to let us know, and we'll accommodate your requests.",
        },
        {
            question:
                "How often should I schedule cleaning services for my home or business?",
            answer: "The frequency of cleaning services depends on various factors such as the size of the space, foot traffic, and personal preferences. We offer flexible scheduling options, including daily, weekly, bi-weekly, or monthly cleaning.",
        },
        {
            question: "Are your cleaners insured and background-checked?",
            answer: "Yes, all our cleaners undergo rigorous background checks and are fully insured for your peace of mind. We ensure that our team members are trustworthy and professional.",
        },
        {
            question:
                "Can I request specific areas or tasks to be prioritized during the cleaning?",
            answer: "Absolutely! We welcome your input and can tailor our cleaning services to focus on specific areas or tasks according to your preferences. Your satisfaction is our top priority.",
        },
        {
            question:
                "What happens if I'm not satisfied with the cleaning service?",
            answer: "Customer satisfaction is our priority, and if you're not fully satisfied with the service, please let us know immediately. We will promptly address any concerns and ensure that the cleaning meets your expectations.",
        },
        {
            question:
                "Do you offer one-time cleaning services for special occasions or events?",
            answer: "Yes, we offer one-time cleaning services for special occasions, events, or when you need an extra deep clean. Whether it's before a party, after a renovation, or for any other reason, we're here to help.",
        },
        {
            question:
                "How far in advance do I need to schedule a cleaning appointment?",
            answer: "We recommend scheduling your cleaning appointment at least a few days in advance to ensure availability. However, we do our best to accommodate last-minute requests whenever possible.",
        },
        {
            question:
                "Do you provide cleaning services on weekends or holidays?",
            answer: "Yes, we offer cleaning services seven days a week, including weekends and holidays, to accommodate your schedule and cleaning needs.",
        },
        {
            question:
                "Can I trust your cleaners to respect my privacy and belongings?",
            answer: "Absolutely, our cleaners are trained to respect your privacy and handle your belongings with care. We value your trust and take every precaution to ensure the security of your property.",
        },
        {
            question:
                " Are there any contracts or long-term commitments required for your cleaning services?",
            answer: "No, we offer flexible cleaning services with no contracts or long-term commitments required. You can schedule cleanings as needed, and we'll be there to assist you.",
        },
        {
            question:
                "Do you offer any discounts or promotions for regular clients?",
            answer: "Yes, we value our loyal customers and offer discounts and promotions for regular cleaning services. Feel free to inquire about our special offers when scheduling your appointments.",
        },
        {
            question: "How do I pay for your cleaning services?",
            answer: "Bank transfer payments are prefferd, but we may also accept cash or credit card payments. Please speak with the team for more details.",
        },
    ];

    const toggleFAQ = (index) => {
        setIsOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="bg-slate-50">
            <Head>
                <title>Frequently Asked Questions | MB Cleans</title>
                <meta
                    name="description"
                    content="Find answers to your cleaning service questions. Explore our FAQ for details on services, pricing, and more. We're here to help!"
                />
                <meta
                    property="og:title"
                    content="Frequently Asked Questions | MB Cleans"
                />
                <meta
                    property="og:description"
                    content="Find answers to your cleaning service questions. Explore our FAQ for details on services, pricing, and more. We're here to help!"
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:url"
                    content="https://www.mbcleans.co.uk/faq"
                />
                <meta
                    name="twitter:title"
                    content="Frequently Asked Questions | MB Cleans"
                />
                <meta
                    name="twitter:description"
                    content="Find answers to your cleaning service questions. Explore our FAQ for details on services, pricing, and more. We're here to help!"
                />
                <meta
                    name="twitter:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://www.mbcleans.co.uk/faq" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>

            <SubHeaderBar
                title={"Frequently Asked Questions (FAQ's)"}
                description={
                    "Have some questions? You might find the answers here!"
                }
                image={"/images/sub_banner_1.png"}
            />
            <div className="py-6">
                <div className="text-black max-w-6xl bg-white rounded-md mx-auto px-6 lg:px-10 py-16  ">
                    <div className="max-w-3xl flex-row mx-auto cursor-pointer">
                        <p className="text-xl mb-5 text-center font-semibold">
                            Quick answers to your cleaning service questions.
                            Can&apos;t find what you need? Just ask!
                        </p>
                        {questions.map((faq, index) => (
                            <div key={faq.question}>
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className={`flex justify-between ${
                                        isOpen[index]
                                            ? "bg-theme1"
                                            : "bg-theme2"
                                    } rounded-md mb-1 text-white py-3 px-6 cursor-pointer`}
                                >
                                    <div>{faq.question}</div>
                                    <Image
                                        src={
                                            isOpen[index]
                                                ? "/icons/x.svg"
                                                : "/icons/chevron-down.svg"
                                        }
                                        className={`transform transition-transform duration-300 ml-6 ${
                                            isOpen[index] ? "rotate-180" : ""
                                        }`}
                                        alt={isOpen[index] ? "Close" : "Open"}
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-opacity transition-height duration-1000 ${
                                        isOpen[index]
                                            ? "opacity-100 max-h-full"
                                            : "opacity-0 max-h-0"
                                    }`}
                                >
                                    <div className="py-5 px-6 text-black">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
