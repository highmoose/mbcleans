"use client";
import React from "react";
import Link from "next/link";

const scrollToHome = () => {
    const contactSection = document.getElementById("home");
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

const scrollToAboutUs = () => {
    const contactSection = document.getElementById("aboutUs");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToPartners = () => {
    const contactSection = document.getElementById("partners");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToTestimonials = () => {
    const contactSection = document.getElementById("testimonials");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

export default function FooterBar() {
    return (
        <div className="bg-white">
            <div class="w-full px-8 xl:px-0 sm:flex items-center justify-center py-20 mx-auto max-w-6xl gap-x-8 ">
                <div class="max-w-6xl w-full text-white flex flex-col gap-x-2 ">
                    <div class="w-full text-7xl font-bold">
                        <p class="w-full text-4xl md:text-4xl mb-1 text-theme2 text-center tracking-tight sm:text-start">
                            We&lsquo;re happy to help!
                        </p>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between">
                        <p class="w-full md:w-2/3 text-xl text-gray-400  text-center sm:text-start">
                            If you&lsquo;re in the Wellingborough,
                            Northamptonshire and surrounding area, we want to
                            work with you!
                            <strong className="text-sky-600 ml-2">
                                Call us today!
                            </strong>
                        </p>
                    </div>
                </div>
                <div
                    onClick={backToTop}
                    class="w-80 pt-6 md:pt-0 mx-auto sm:mx-0"
                >
                    <a class="bg-theme3 cursor-pointer justify-center text-lg font-bold text-center rounded-lg shadow px-10 py-3 flex items-center">
                        Back to top
                    </a>
                </div>
            </div>
            <div className="bg-slate-900">
                <div class="flex flex-col max-w-6xl w-full mx-auto">
                    <div class="flex my-10 flex-row justify-between px-6 xl:px-0">
                        <div class="w-1/4">
                            <img
                                alt="MBCleans Logo"
                                src="/logo/mbcleans-logo-white.svg"
                                className="h-7 my-auto"
                            />
                        </div>
                        <div className="w-2/4 hidden md:flex justify-center gap-x-3 lg:gap-x-4">
                            <div
                                className="cursor-pointer"
                                onClick={scrollToHome}
                            >
                                Home
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={scrollToPlans}
                            >
                                Plans
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={scrollToAboutUs}
                            >
                                About Us
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={scrollToPartners}
                            >
                                Partners
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={scrollToContact}
                            >
                                Contact
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={scrollToTestimonials}
                            >
                                Testimonials
                            </div>
                            <Link href="/faq">FAQ&apos;s</Link>
                        </div>
                        <div className="w-1/4">
                            <div class="flex flex-row space-x-8 items-center justify-end">
                                <a
                                    href="https://www.facebook.com/mbcleans"
                                    target="_blank"
                                >
                                    <svg
                                        height="26"
                                        viewBox="0 0 6 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                                <a>
                                    <svg
                                        height="26"
                                        viewBox="0 0 12 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z"
                                            fill="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-600" />
                    <p class="w-full text-center text-sm my-4 text-gray-400">
                        Copyright © 2024 MBCleans
                    </p>
                </div>
            </div>
        </div>
    );
}
