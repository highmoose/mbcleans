"use client";

import Image from "next/image";
import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function WinterCleaningBlog() {
    const router = useRouter();
    return (
        <div className="w-full bg-zinc-50 pb-28">
            <div className="w-full max-w-5xl mx-auto ">
                <p
                    className={`text-slate-900 text-2xl sm:text-4xl mb-2 text-center pt-16 mb-6 ${shadows_Into_Light.className}`}
                >
                    Blog Article
                </p>
                {/* Hero Section */}
                <div className="relative h-80 md:h-96 w-full mb-4 rounded-2xl">
                    <Image
                        src="/images/blog/home-cleaning.png"
                        alt="Winter Cleaning Hero"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white w-2/3">
                            Winter Cleaning Guide
                        </h1>
                        <p className="mt-2 text-lg md:text-xl text-white w-2/3">
                            How to Tackle Mud, Salt & Damp Indoors
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-black bg-white shadow-2xl shadow-black/5 rounded-2xl px-8 md:px-16 lg:px-28 pb-20">
                    <h1 className="text-3xl font-bold">
                        Winter Cleaning: How to Tackle Mud, Salt & Damp Indoors
                    </h1>
                    <p className="mt-4">
                        Winter brings colder temperatures, increased moisture,
                        and outdoor elements like mud and road salt being
                        tracked indoors. These factors can make maintaining a
                        clean home or office more challenging. However, with the
                        right strategies, you can keep your space fresh, dry,
                        and inviting throughout the season.
                    </p>
                    <p className="mt-4">
                        Whether you're dealing with muddy footprints in
                        entryways, salt stains on floors, or damp issues causing
                        mold and mildew, having a winter cleaning plan in place
                        can help protect your indoor environment and maintain a
                        comfortable atmosphere.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Managing Mud & Dirt
                    </h2>
                    <p className="mt-4">
                        One of the biggest winter cleaning challenges is mud
                        being brought in from outside. Wet and muddy shoes can
                        quickly turn entryways and carpets into a mess. To
                        combat this, place durable doormats both inside and
                        outside entryways and encourage family members or
                        employees to wipe their shoes thoroughly.
                    </p>
                    <p className="mt-4">
                        Consider setting up a designated shoe removal area near
                        the entrance. Using a boot tray can help contain dirt
                        and water from footwear. For carpets, regular vacuuming
                        combined with a deep clean every few weeks can prevent
                        embedded dirt from becoming a long-term problem.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Dealing with Salt Stains
                    </h2>
                    <p className="mt-4">
                        Road salt is commonly used to prevent icy surfaces
                        during winter, but it can leave behind stubborn white
                        stains on floors and carpets. These salt stains not only
                        make surfaces look dirty but can also cause damage to
                        certain flooring materials if left untreated.
                    </p>
                    <p className="mt-4">
                        To remove salt stains from hard floors, mix warm water
                        with a splash of vinegar and use a microfiber mop to
                        clean the affected areas. For carpets, a gentle mixture
                        of water and mild detergent can help lift salt residue.
                        Blot the stain rather than scrubbing to prevent damage
                        to fibers.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Preventing Damp & Mold
                    </h2>
                    <p className="mt-4">
                        Winter months often bring increased humidity indoors due
                        to heating systems and reduced ventilation. This excess
                        moisture can lead to damp spots, condensation on
                        windows, and even mold growth if left unchecked.
                    </p>
                    <p className="mt-4">
                        To minimize dampness, ensure good air circulation by
                        opening windows periodically and using dehumidifiers in
                        problem areas. Wipe down windows and walls where
                        condensation builds up to prevent mold from forming.
                        Additionally, keeping heating at a consistent level
                        rather than extreme fluctuations can help regulate
                        indoor humidity.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Winter Cleaning Checklist
                    </h2>
                    <ul className="list-disc pl-6 mt-4">
                        <li>
                            Place absorbent mats at all entry points to trap mud
                            and water.
                        </li>
                        <li>
                            Vacuum carpets and rugs regularly to prevent dirt
                            buildup.
                        </li>
                        <li>
                            Mop hard floors weekly to remove salt and grime.
                        </li>
                        <li>
                            Use a shoe rack or boot tray to keep footwear
                            organized.
                        </li>
                        <li>
                            Check windows and walls for signs of condensation
                            and wipe them dry.
                        </li>
                        <li>Run a dehumidifier in rooms prone to dampness.</li>
                        <li>
                            Deep clean upholstery to remove hidden dirt and
                            allergens.
                        </li>
                        <li>
                            Wash curtains or blinds to keep dust and mold spores
                            at bay.
                        </li>
                    </ul>

                    <div className="w-full flex justify-center my-16">
                        <Image
                            src="/images/blog/home-cleaning-2.png"
                            alt="Winter Cleaning Tasks"
                            width={1000}
                            height={300}
                            className="rounded-lg shadow-2xl shadow-black/5"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-12">
                        Need Help with Winter Cleaning?
                    </h2>
                    <p className="mt-4">
                        At MB Cleans, we offer expert cleaning services to
                        tackle winter messes in homes and workplaces across
                        Wellingborough and Northamptonshire. Whether you need
                        help removing stubborn mud and salt stains or require a
                        deep clean to eliminate damp and mold, our team is ready
                        to assist.
                    </p>
                    <div className="text-center mt-10">
                        <p className="mt-4 font-bold text-2xl">
                            Book your winter cleaning today!
                        </p>
                        <span
                            onClick={() => router.push("/contact")}
                            className="text-theme3 hover:text-theme1 text-2xl font-bold cursor-pointer"
                        >
                            <span className="underline">Contact us</span> for a
                            free quote.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
