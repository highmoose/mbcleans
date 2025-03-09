"use client";

import Image from "next/image";
import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";
import Head from "next/head";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function OfficeCleaningChecklistBlog() {
    const router = useRouter();

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
        <div className="w-full bg-zinc-50 pb-28">
            <Head>
                <title>Office Cleaning Checklist | MB Cleans</title>
                <meta
                    name="description"
                    content="Explore our comprehensive office cleaning checklist, covering daily, weekly, and monthly tasks to maintain a clean and healthy workspace for your employees."
                />
                <meta
                    property="og:title"
                    content="Office Cleaning Checklist | MB Cleans"
                />
                <meta
                    property="og:description"
                    content="Explore our comprehensive office cleaning checklist, covering daily, weekly, and monthly tasks to maintain a clean and healthy workspace for your employees."
                />
                <meta
                    property="og:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta
                    property="og:url"
                    content="https://www.mbcleans.co.uk/blog/office-cleaning-checklist"
                />
                <meta
                    name="twitter:title"
                    content="Office Cleaning Checklist | MB Cleans"
                />
                <meta
                    name="twitter:description"
                    content="Explore our comprehensive office cleaning checklist, covering daily, weekly, and monthly tasks to maintain a clean and healthy workspace for your employees."
                />
                <meta
                    name="twitter:image"
                    content="https://www.mbcleans.co.uk/images/social/social.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="canonical"
                    href="https://www.mbcleans.co.uk/blog/office-cleaning-checklist"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaMarkup),
                    }}
                />
            </Head>

            <div className="flex flex-col items-center w-full max-w-5xl mx-auto ">
                <button
                    className="w-fit px-4 mb-4 py-2 mt-6 rounded bg-theme1 text-white text-lg font-bold"
                    onClick={() => router.push("/")}
                >
                    Back to home
                </button>
                <p
                    className={`text-slate-900 text-2xl sm:text-4xl  text-center pt-6 mb-4 ${shadows_Into_Light.className}`}
                >
                    Blog Article
                </p>
                {/* Hero Section */}
                <div className="relative h-80 md:h-96 w-full mb-4 rounded-2xl">
                    <Image
                        src="/images/blog/office-cleaning.png"
                        alt="Office Cleaning Checklist Hero"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white w-2/3">
                            Office Cleaning Checklist
                        </h1>
                        <p className="mt-2 text-lg md:text-xl text-white w-2/3">
                            Daily, Weekly & Monthly Tasks for a Spotless
                            Workspace
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-black bg-white shadow-2xl shadow-black/5 rounded-2xl px-8 md:px-16 lg:px-28 pb-20">
                    <h1 className="text-3xl font-bold">
                        Office Cleaning Checklist: Daily, Weekly & Monthly Tasks
                    </h1>
                    <p className="mt-4">
                        A clean office is more than just a pleasant sight—it
                        directly impacts employee productivity, workplace
                        hygiene, and the overall professional image of your
                        business. Regular cleaning ensures a healthy
                        environment, reduces the spread of germs, and enhances
                        the morale of employees who appreciate a tidy workspace.
                    </p>
                    <p className="mt-4">
                        To keep an office in top condition, cleaning tasks
                        should be divided into daily, weekly, and monthly
                        routines. By following a structured approach, businesses
                        can maintain a pristine environment without overwhelming
                        their staff or janitorial teams.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Daily Office Cleaning Tasks
                    </h2>
                    <p className="mt-4">
                        Daily cleaning is crucial to maintaining basic hygiene
                        and organization in the workplace. These tasks help
                        eliminate surface-level dirt, food crumbs, and bacteria
                        that accumulate throughout the workday.
                    </p>
                    <p className="mt-4">
                        High-touch areas such as desks, keyboards, and office
                        equipment should be disinfected daily to prevent the
                        spread of illness. Keeping common areas like the kitchen
                        and restrooms clean ensures a healthier workspace for
                        everyone.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Empty waste bins and replace liners.</li>
                        <li>
                            Wipe down desks, keyboards, and office equipment.
                        </li>
                        <li>
                            Sanitize high-touch surfaces such as door handles
                            and light switches.
                        </li>
                        <li>
                            Vacuum or sweep office floors, especially in common
                            areas.
                        </li>
                        <li>
                            Clean and sanitize kitchen areas, including
                            countertops and sinks.
                        </li>
                        <li>
                            Restock restroom supplies and disinfect bathroom
                            surfaces.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12">
                        Weekly Office Cleaning Tasks
                    </h2>
                    <p className="mt-4">
                        While daily cleaning tackles surface-level dirt, weekly
                        cleaning focuses on deeper cleaning tasks that maintain
                        long-term cleanliness and hygiene. These tasks ensure
                        that overlooked areas remain free of dust, grime, and
                        clutter.
                    </p>
                    <p className="mt-4">
                        Office chairs, shelves, and kitchen appliances
                        accumulate dust and bacteria over time. Wiping down
                        these surfaces weekly will help prevent long-term
                        buildup and keep the office looking professional and
                        fresh.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>
                            Dust shelves, windowsills, and office furniture.
                        </li>
                        <li>
                            Deep clean kitchen appliances such as microwaves and
                            refrigerators.
                        </li>
                        <li>Vacuum and mop hard floors.</li>
                        <li>Wipe down office chairs and fabric surfaces.</li>
                        <li>
                            Polish glass doors and mirrors for a streak-free
                            shine.
                        </li>
                        <li>
                            Disinfect shared meeting rooms and reception areas.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12">
                        Monthly Office Cleaning Tasks
                    </h2>
                    <p className="mt-4">
                        Monthly cleaning tasks focus on deep-cleaning areas that
                        are less frequently used but still require attention.
                        These tasks help maintain a high standard of hygiene
                        while preserving the longevity of office equipment and
                        furniture.
                    </p>
                    <p className="mt-4">
                        Carpets and upholstery collect dust, allergens, and
                        bacteria over time, making deep cleaning a necessity.
                        Proper air circulation also plays a crucial role in
                        workplace health, so checking and replacing air filters
                        monthly ensures fresh, clean air for employees.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Deep clean carpets and upholstery.</li>
                        <li>
                            Check and replace air filters for improved air
                            quality.
                        </li>
                        <li>Wash windows inside and out.</li>
                        <li>
                            Declutter storage areas and organize office
                            supplies.
                        </li>
                        <li>
                            Sanitize and inspect ventilation systems to prevent
                            dust buildup.
                        </li>
                    </ul>

                    <div className="w-full flex justify-center my-16">
                        <Image
                            src="/images/blog/office-cleaning-2.png"
                            alt="Office Cleaning Tasks"
                            width={1000}
                            height={300}
                            className="rounded-lg shadow-2xl shadow-black/5"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-12">
                        Need Professional Office Cleaning Services?
                    </h2>
                    <p className="mt-4">
                        At MB Cleans, we provide expert commercial cleaning
                        services across Wellingborough and Northamptonshire.
                        Whether you need daily upkeep or a deep monthly clean,
                        our professional team ensures your workplace remains
                        spotless and hygienic.
                    </p>
                    <div className="flex flex-col items-center text-center mt-10">
                        <p className="mt-4 font-bold text-2xl">
                            Book your office cleaning today!
                        </p>
                        <span
                            onClick={() => router.push("/contact")}
                            className="text-theme3 hover:text-theme1 text-2xl font-bold cursor-pointer"
                        >
                            <span className="underline">Contact us</span> for a
                            free quote.
                        </span>
                        <button
                            className=" w-fit px-4 py-2 mt-12 rounded bg-theme1 text-white text-lg font-bold"
                            onClick={() => router.push("/")}
                        >
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
