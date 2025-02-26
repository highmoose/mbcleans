"use client";

import React, { useState } from "react";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const Shadows_Into_Light1 = Shadows_Into_Light({
    subsets: ["latin"],
    weight: ["400"],
});

// create an array of the items in residentail plan
const residentialPlan = [
    "Window sills & ledges",
    "Hard surface floors",
    "Remove cobwebs",
    "Empty trash",
    "Dust furniture & shelves",
    "Clean kitchen countertops",
    "Sanitize bathroom surfaces",
    "Vacuum carpets & rugs",
    "Clean mirrors & glass surfaces",
    "Wipe down appliances",
    "Clean light fixtures & switches",
    "Wipe down baseboards",
    "Tidy and organize living spaces",
    "Clean and disinfect doorknobs",
    "Spot clean walls and doors",
    "Clean ceiling fans",
    "Clean and sanitize sinks",
    "Mop tile and laminate floors",
    "Dust and wipe down blinds",
    "Change bed linens (if provided)",
    "Deep clean grout lines",
    "Clean and polish faucets",
    "Remove pet hair from furniture",
];

const commercialPlan = [
    "Office Building",
    "Manufacturing Facilities",
    "Educational Facilities",
    "Medical Facilities",
    "Retail Spaces",
    "Restaurants and Cafes",
    "Hotels and Hospitality",
    "Warehouses",
    "Gyms and Fitness Centers",
    "Car Dealerships",
    "Banks and Financial Institutions",
    "Government Buildings",
    "Daycare Centers",
    "Event Venues",
    "Religious Institutions",
    "Shopping Malls",
    "Theaters and Cinemas",
    "Libraries",
    "Museums and Galleries",
    "Parking Lots and Garages",
    "Construction Sites",
    "Real Estate Properties",
    "Senior Living Facilities",
    "Transportation Hubs",
];

const emergencyPlan = [
    "Fire Damage",
    "Debris Removal",
    "Mold Remediation",
    "Graffiti Removal",
    "Water Damage Restoration",
    "Biohazard Cleanup",
    "Flood Cleanup",
    "Storm Damage Cleanup",
    "Smoke Damage Cleanup",
    "Hoarding Cleanup",
    "Accident Cleanup",
    "Vandalism Cleanup",
    "Chemical Spill Cleanup",
    "Hazardous Waste Removal",
    "Emergency Carpet Cleaning",
    "Odor Removal",
    "Allergen Removal",
    "Emergency Disinfection",
    "Post-Construction Cleanup",
    "Emergency Board-Up Services",
    "Pest Infestation Cleanup",
    "Structural Damage Assessment",
    "Soot Removal",
];

export default function IntroBar() {
    const [showResidential, setShowResidential] = useState(false);
    const [showCommercial, setShowCommercial] = useState(false);
    const [showEmergency, setShowEmergency] = useState(false);

    const openResidential = () => {
        setShowResidential(true);
        setShowCommercial(false);
        setShowEmergency(false);
    };

    const closeResidential = () => {
        setShowResidential(false);
    };

    const openCommercial = () => {
        setShowResidential(false);
        setShowCommercial(true);
        setShowEmergency(false);
    };

    const closeCommercial = () => {
        setShowCommercial(false);
    };

    const openEmergency = () => {
        setShowResidential(false);
        setShowCommercial(false);
        setShowEmergency(true);
    };

    const closeEmergency = () => {
        setShowEmergency(false);
    };

    return (
        <div id="plans" className="w-full bg-slate-50">
            <div className="w-full bg-white">
                <div className="absolute w-full "></div>
            </div>
            <div className="text-black  w-full text-4xl pt-12 flex-col mx-auto">
                <div className=" max-w-6xl mx-auto gap-x-4 mb-10">
                    <h2
                        className={`text-theme3 text-center text-3xl mb-1 ${Shadows_Into_Light1.className}`}
                    >
                        Customised Cleaning Plans!
                    </h2>
                    <div className="flex items-center">
                        <h2 className="flex mx-auto text-4xl text-center  font-medium tracking-tight text-theme2">
                            Tailored to fit your specific needs!
                        </h2>
                    </div>
                </div>
                <div className="w-full max-w-6xl px-6 2xl:p-0 mx-auto mb-12">
                    <div className="md:flex gap-x-4">
                        <div className="relative md:w-1/3 pb-6 sm:pb-0 hover:scale-105  transition duration-100 ease-in-out">
                            <div className="flex-col h-fit rounded-md group relative inline-block overflow-hidden border-gray-100 bg-white pt-10 text-base font-medium   active:text-white">
                                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                                <p
                                    className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                                >
                                    For Homes
                                </p>
                                <p className="text-xl text-theme2 text-center font-semibold">
                                    Residential Plans
                                </p>
                                <p className="text-base text-gray-400 mb-6 px-10">
                                    Residential house cleaning services always
                                    focus on cleaning for health, while our
                                    extensive industry experience gives us the
                                    upperhand.
                                </p>
                                <div className="mb-16">
                                    {residentialPlan
                                        .slice(0, showResidential ? 30 : 10)
                                        .map((task, index) => (
                                            <div
                                                key={index}
                                                className="text-base text-gray-400 mb-2 px-8"
                                            >
                                                <div className="flex item gap-x-2 items-center mb-1">
                                                    <div className="bg-theme2 w-4 h-4 flex items-center justify-center rounded-full ">
                                                        <Image
                                                            src="/icons/check-white.svg"
                                                            alt="check"
                                                            className="h-3"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <p className="font-light text-gray-400 text-base">
                                                        {task}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                {showResidential === false && (
                                    <div class="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-transparent to-white" />
                                )}
                                <button
                                    onClick={
                                        showResidential
                                            ? closeResidential
                                            : openResidential
                                    }
                                    className="absolute bottom-0 inset-x-0 h-12 w-full bg-theme2 text-white"
                                >
                                    {showResidential
                                        ? "Show Less"
                                        : "Show More"}
                                </button>
                            </div>
                        </div>
                        <div className=" md:w-1/3 pb-6 sm:pb-0 hover:scale-105  transition duration-100 ease-in-out">
                            <div className="flex-col h-fit rounded-md group relative inline-block overflow-hidden border-gray-100 bg-white pt-10 text-base font-medium   active:text-white">
                                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                                <p
                                    className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                                >
                                    For Business
                                </p>
                                <p className="text-xl text-theme2 text-center font-semibold">
                                    Commercial Plans
                                </p>
                                <p className="text-base text-gray-400 mb-6 tracking-tight px-10">
                                    Commercial cleaning services will help you
                                    protect and care for your customers and
                                    employees, we care about clean, and it shows
                                    in our work.
                                </p>
                                <div className="mb-16">
                                    {commercialPlan
                                        .slice(0, showCommercial ? 30 : 10)
                                        .map((task, index) => (
                                            <div
                                                key={index}
                                                className="text-base text-gray-400 mb-2 px-8"
                                            >
                                                <div className="flex item gap-x-2 items-center mb-1">
                                                    <div className="bg-theme1 w-4 h-4 flex items-center justify-center rounded-full ">
                                                        <Image
                                                            src="/icons/check-white.svg"
                                                            alt="check"
                                                            className="h-3"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <p className="font-light text-gray-400 text-base">
                                                        {task}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                {showCommercial === false && (
                                    <div class="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-transparent to-white" />
                                )}
                                <button
                                    onClick={
                                        showCommercial
                                            ? closeCommercial
                                            : openCommercial
                                    }
                                    className="absolute bottom-0 inset-x-0 h-12 w-full bg-theme2 text-white"
                                >
                                    {showCommercial ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/3 pb-6 sm:pb-0 hover:scale-105  transition duration-100 ease-in-out">
                            <div className="flex-col h-fit rounded-md group relative inline-block overflow-hidden border-gray-100 bg-white  pt-10 text-base font-medium   active:text-white">
                                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                                <p
                                    className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                                >
                                    For Emergencies
                                </p>
                                <p className="text-xl text-theme2 text-center font-semibold">
                                    Incident Plans
                                </p>
                                <p className="text-base text-gray-400 mb-6 tracking-tight px-10">
                                    In the case of an emergency an urgent clean
                                    up may be required. We have the tools,
                                    chemicals and skills to provide the fast
                                    clean up you need.
                                </p>
                                <div className="mb-16">
                                    {emergencyPlan
                                        .slice(0, showEmergency ? 30 : 10)
                                        .map((task, index) => (
                                            <div
                                                key={index}
                                                className="text-base text-gray-400 mb-2 px-8"
                                            >
                                                <div className="flex item gap-x-2 items-center mb-1">
                                                    <div className="bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full ">
                                                        <Image
                                                            src="/icons/check-white.svg"
                                                            alt="check"
                                                            className="h-3"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </div>
                                                    <p className="font-light text-gray-400 text-base">
                                                        {task}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                {showEmergency === false && (
                                    <div class="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-transparent to-white" />
                                )}
                                <button
                                    onClick={
                                        showEmergency
                                            ? closeEmergency
                                            : openEmergency
                                    }
                                    className="absolute bottom-0 inset-x-0 h-12 w-full bg-theme2 text-white"
                                >
                                    {showEmergency ? "Show Less" : "Show More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="max-w-2xl mb-20 flex mx-auto text-2xl leading-7 px-4 lg:px-0 tracking-tight text-center text-theme2">
                For a clean that meets your highest standards, you need a
                dedicated team of trained specialists. We arrive at each visit
                with all supplies needed to thoroughly clean your premises.
            </p>
        </div>
    );
}
