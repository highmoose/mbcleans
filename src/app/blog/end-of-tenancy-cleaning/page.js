"use client";

import Image from "next/image";
import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function EndOfTenancyCleaningBlog() {
    const router = useRouter();
    return (
        <div className="w-full bg-zinc-50 pb-28">
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
                        src="/images/blog/end-of-tenancy-clean.png"
                        alt="End of Tenancy Cleaning Hero"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white w-2/3">
                            End of Tenancy Cleaning
                        </h1>
                        <p className="mt-2 text-lg md:text-xl text-white w-2/3">
                            What Landlords & Tenants Need to Know
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-black bg-white shadow-2xl shadow-black/5 rounded-2xl px-8 md:px-16 lg:px-28 pb-20">
                    <h1 className="text-3xl font-bold">
                        End of Tenancy Cleaning: What Landlords & Tenants Need
                        to Know
                    </h1>
                    <p className="mt-4">
                        When a tenancy comes to an end, ensuring the property is
                        cleaned to a high standard is crucial for both landlords
                        and tenants. A thorough clean can help tenants secure
                        their full deposit return while ensuring landlords
                        present a fresh, move-in-ready space for the next
                        occupant.
                    </p>
                    <p className="mt-4">
                        End of tenancy cleaning involves more than just a quick
                        tidy-up. It requires deep cleaning of all rooms,
                        removing stains, sanitizing surfaces, and addressing
                        areas that may have been overlooked during regular
                        cleaning routines. A detailed approach ensures a
                        seamless transition for all parties involved.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Why End of Tenancy Cleaning Matters
                    </h2>
                    <p className="mt-4">
                        For tenants, leaving the property in excellent condition
                        is often a requirement in tenancy agreements. A
                        well-cleaned property increases the chances of receiving
                        the full deposit back without disputes. Many landlords
                        will compare the state of the property against the
                        original inventory report, making cleanliness a key
                        factor in determining deposit deductions.
                    </p>
                    <p className="mt-4">
                        Landlords and letting agents also benefit from a
                        spotless property, as it ensures a good impression for
                        prospective tenants and reduces the time it takes to
                        find new occupants. A clean property suggests that it
                        has been well-maintained, which can justify rental
                        pricing and attract responsible tenants who appreciate a
                        well-kept living space.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Essential End of Tenancy Cleaning Checklist
                    </h2>
                    <p className="mt-4">
                        To ensure no area is missed, follow this checklist to
                        complete a thorough end of tenancy clean:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>
                            Vacuum and deep clean carpets and flooring to remove
                            embedded dirt and dust.
                        </li>
                        <li>
                            Wipe down skirting boards, walls, and light switches
                            to remove scuffs and marks.
                        </li>
                        <li>
                            Deep clean kitchen appliances, including the oven,
                            fridge, microwave, and extractor fans.
                        </li>
                        <li>
                            Sanitize countertops, cabinets, and sinks to remove
                            grease, food residue, and bacteria.
                        </li>
                        <li>
                            Remove limescale, soap scum, and mold buildup from
                            bathrooms, including tiles and shower screens.
                        </li>
                        <li>
                            Wash windows, mirrors, and glass surfaces for a
                            streak-free shine.
                        </li>
                        <li>
                            Dust and clean all furniture, shelving, and hard
                            surfaces.
                        </li>
                        <li>
                            Dispose of any remaining waste, empty bins, and
                            deodorize indoor spaces.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12">
                        Tips for Tenants
                    </h2>
                    <p className="mt-4">
                        - Start the cleaning process early to avoid last-minute
                        stress. - Use high-quality cleaning products to remove
                        tough stains and grime. - Pay special attention to
                        high-traffic areas, such as entryways and kitchens. -
                        Take photos after cleaning as proof of the property’s
                        condition before handing back the keys. - Consider
                        hiring a professional cleaning service if time is
                        limited or if required by your tenancy agreement.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Tips for Landlords
                    </h2>
                    <p className="mt-4">
                        - Conduct a thorough property inspection after the
                        tenant moves out, checking for any damages or
                        maintenance issues. - Ensure professional cleaning if
                        necessary to maintain the property’s rental appeal and
                        hygiene standards. - Keep a checklist for future
                        tenancies to maintain high cleaning standards and
                        streamline move-out processes. - If working with a
                        letting agency, confirm their cleaning expectations to
                        avoid disputes with new tenants.
                    </p>

                    <div className="w-full flex justify-center my-16">
                        <Image
                            src="/images/blog/end-of-tenancy-clean-2.png"
                            alt="End of Tenancy Cleaning Tasks"
                            width={1000}
                            height={300}
                            className="rounded-lg shadow-2xl shadow-black/5"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-12">
                        Need Professional End of Tenancy Cleaning?
                    </h2>
                    <p className="mt-4">
                        At MB Cleans, we specialize in deep cleaning services to
                        help tenants secure their deposits and ensure landlords
                        present properties in pristine condition. Our expert
                        team offers comprehensive cleaning solutions tailored to
                        meet end of tenancy standards, tackling every corner
                        with professional care.
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
