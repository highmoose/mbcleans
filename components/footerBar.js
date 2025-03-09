"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const locations = [
    ["Rushden", "Higham Ferrers", "Irchester", "Wellingborough", "Sharnbrook"],
    [
        "Souldrop",
        "Great Doddington",
        "Little Irchester",
        "Wilby",
        "Earls Barton",
    ],
    ["Wollaston", "Bozeat", "Grendon", "Yardley Hastings", "Wymington"],
    ["Cogenhoe", "Billing", "Sywell", "Mears Ashby", "Ecton"],
    [
        "Northampton",
        "Hardingstone",
        "Weston Favell",
        "Great Houghton",
        "Little Houghton",
    ],
];

export default function FooterBar() {
    return (
        <div className="bg-white">
            {/* Top Section */}
            <div className="w-full px-8 xl:px-0 sm:flex items-center justify-center py-20 mx-auto max-w-6xl gap-x-8">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-4xl mb-1 text-theme2 font-bold text-center sm:text-start tracking-tight">
                        We&apos;re happy to help!
                    </h2>
                    <p className="text-xl text-gray-400 text-center sm:text-start mt-4">
                        If you&apos;re in the Wellingborough, Northamptonshire
                        and surrounding area, we want to work with you!{" "}
                        <strong className="text-sky-600">Call us today!</strong>
                    </p>
                </div>

                <div
                    onClick={backToTop}
                    className="w-80 pt-6 md:pt-0 mx-auto sm:mx-0"
                >
                    <button className="bg-theme3 w-full cursor-pointer text-lg font-bold rounded-lg shadow px-10 py-3">
                        Back to top
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-slate-900">
                <div className="max-w-6xl mx-auto px-6 xl:px-0 py-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-8 border-b border-white/10 pb-10">
                        <Image
                            alt="MBCleans Logo"
                            src="/logo/mbcleans-logo-white.svg"
                            className="h-7"
                            width={140}
                            height={100}
                        />

                        <nav className="hidden md:flex items-center flex-wrap gap-4 lg:gap-6 w-2/4 justify-center text-white">
                            {[
                                "home",
                                "plans",
                                "aboutUs",
                                "partners",
                                "testimonials",
                            ].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="hover:text-sky-500 transition-colors capitalize"
                                >
                                    {section.replace(/([A-Z])/g, " $1").trim()}
                                </button>
                            ))}
                            <Link
                                href="/contact"
                                className="hover:text-sky-500 transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/faq"
                                className="hover:text-sky-500 transition-colors"
                            >
                                FAQ&apos;s
                            </Link>
                        </nav>

                        <div className="flex flex-row space-x-4 items-center justify-center lg:justify-end">
                            <a
                                href="https://www.facebook.com/mbcleans"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/icons/facebook.svg"
                                    alt="Facebook"
                                    width={26}
                                    height={26}
                                />
                            </a>
                            {/* <a
                                href="https://www.instagram.com/mbcleans"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/icons/instagram.svg"
                                    alt="Instagram"
                                    width={26}
                                    height={26}
                                />
                            </a> */}
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="w-full">
                        <p className="text-lg w-full text-center text-white mb-6">
                            Areas We Serve:
                        </p>

                        <div className="mb-8 w-full">
                            <ul className="flex flex-wrap gap-y-10 justify-center">
                                {locations.map((column, index) => (
                                    <ul
                                        key={index}
                                        className="text-center w-full sm:w-1/3 lg:w-1/4 xl:w-1/5"
                                    >
                                        {column.map((town) => (
                                            <li key={town}>
                                                <Link
                                                    href={`/locations/${town
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "_")}`}
                                                    className="text-blue-400  hover:underline text-sm"
                                                >
                                                    {town} Cleaning Services
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className="text-center text-sm mt-4 text-gray-400">
                        Copyright © 2024 - 2025 MBCleans
                    </p>
                </div>
            </div>
        </div>
    );
}
