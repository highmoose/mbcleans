"use client";

import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToPlans = () => {
    const contactSection = document.getElementById("plans");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

export default function HeaderBar({ locationName }) {
    return (
        <section class="flex relative bg-gray-900 w-full min-h-[550px] sm:max-h-[600px] lg:max-h-[650px] overflow-hidden">
            <div className="absolute w-full h-full ">
                <Image
                    alt="MBCleans cleaner hoovering floor"
                    src="/images/mbcleans_hero_image_3.png"
                    className="object-cover w-full h-full max-h-[550px] sm:max-h-[600px] lg:max-h-[650px] opacity-100 "
                    layout="fill"
                />

                <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent opacity-20 top-0"></div>
            </div>
            <div className=" flex pb-10 text-white mx-auto max-w-6xl relative w-full  items-center justify-between px-10 sm:px-16 lg:px-20 my-16 md:my-20 lg:my-10 xl:my-8">
                <div className="max-w-6xl w-full lg:w-2/3 lg:py-20">
                    <p
                        className={`text-slate-900 text-3xl sm:text-5xl mb-2 text-center lg:text-start ${shadows_Into_Light.className}`}
                    >
                        {locationName}&apos;s Recommended
                    </p>
                    <h1 className="text-[55px] sm:text-[90px] mb-4 lg:mb-6 leading-[50px] sm:leading-[75px] font-semibold tracking-tight text-center lg:text-start ">
                        Professional Cleaning Specialists.
                    </h1>

                    <div className="flex gap-x-3 justify-center lg:justify-start pr-10">
                        <p className="text-2xl  mb-6 leading-6 tracking-tight text-center lg:text-start">
                            We work closely with clients around {locationName}{" "}
                            and Northamptonshire to provide cost effective &
                            high quality cleaning solutions.
                        </p>
                    </div>
                    <div className="flex gap-x-3 justify-center lg:justify-start">
                        <div class="relative inline-flex group">
                            <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#d8d8d8] via-[#3ca7ffa3] to-[#e9e9e9] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <a
                                onClick={scrollToPlans}
                                title="Get quote now"
                                class="relative inline-flex items-center justify-center px-5 p-3 sm:px-8 sm:py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Our Services
                            </a>
                        </div>
                        <div
                            onClick={scrollToContact}
                            class="relative inline-flex group"
                        >
                            <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#d8d8d8] via-[#3ca7ffa3] to-[#e9e9e9] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <a
                                title="Get quote now"
                                class="relative inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block overflow-hidden pt-8"></div>
            </div>
        </section>
    );
}
