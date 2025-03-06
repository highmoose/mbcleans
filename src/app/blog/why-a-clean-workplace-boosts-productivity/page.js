"use client";

import Image from "next/image";
import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function WorkplaceProductivityBlog() {
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
                        src="/images/blog/workplace-cleaning.png"
                        alt="Clean Workplace Hero"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-b-lg rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-bold text-white w-2/3">
                            Why a Clean Workplace Boosts Productivity
                        </h1>
                        <p className="mt-2 text-lg md:text-xl text-white w-2/3">
                            Enhance efficiency, morale, and wellbeing
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 text-black bg-white shadow-2xl shadow-black/5 rounded-2xl px-8 md:px-16 lg:px-28 pb-20">
                    <h1 className="text-3xl font-bold">
                        The Impact of a Clean Workplace on Productivity &
                        Wellbeing
                    </h1>
                    <p className="mt-4">
                        A clean and organized workspace is more than just
                        visually appealing—it plays a crucial role in employee
                        efficiency, motivation, and health. Studies have shown
                        that a well-maintained office leads to better
                        concentration, reduced stress, and fewer sick days.
                        Employees are more likely to be engaged and productive
                        when working in a clutter-free and sanitized
                        environment.
                    </p>

                    <p className="mt-4">
                        In today’s fast-paced work culture, businesses need to
                        focus on creating an environment that fosters efficiency
                        and comfort. A neglected workspace filled with dust,
                        mess, and clutter can contribute to employee fatigue,
                        frustration, and lack of focus. By prioritizing
                        cleanliness, businesses can create an environment where
                        employees feel valued and motivated to perform at their
                        best.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Why Cleanliness Matters in the Workplace
                    </h2>
                    <p className="mt-4">
                        A well-maintained office is a reflection of a company’s
                        professionalism and culture. It sets the standard for
                        employees and visitors, showing that the business values
                        order and hygiene. More importantly, a clean office
                        reduces distractions and promotes efficiency by
                        eliminating unnecessary mess and clutter that may
                        otherwise slow down productivity.
                    </p>
                    <p className="mt-4">
                        Poor hygiene in the workplace can also lead to increased
                        illness among employees. Bacteria and viruses thrive on
                        shared office surfaces such as desks, keyboards, and
                        communal kitchen areas. Regular cleaning and
                        sanitization significantly reduce the risk of workplace
                        infections, helping to maintain a healthier and happier
                        team.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12">
                        Benefits of a Clean Workplace
                    </h2>
                    <ul className="list-disc pl-6 mt-4">
                        <li>
                            **Increased Productivity** – Employees can focus
                            better in an environment free of clutter and
                            distractions.
                        </li>
                        <li>
                            **Reduced Stress & Anxiety** – A well-organized
                            workspace fosters a sense of order and control,
                            improving mental well-being.
                        </li>
                        <li>
                            **Fewer Sick Days** – Regular disinfection prevents
                            the spread of bacteria and viruses, leading to fewer
                            employee absences.
                        </li>
                        <li>
                            **Positive Company Image** – A clean office enhances
                            professionalism, creating a welcoming atmosphere for
                            both employees and clients.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12">
                        Best Practices for Maintaining Workplace Cleanliness
                    </h2>
                    <p className="mt-4">
                        Ensuring a clean workplace requires a proactive
                        approach. Here are some simple yet effective steps for
                        maintaining workplace hygiene:
                    </p>
                    <ol className="list-decimal pl-6 mt-4">
                        <li>
                            Implement a **daily cleaning routine** for desks and
                            shared spaces to prevent buildup of dust and dirt.
                        </li>
                        <li>
                            Encourage employees to **declutter and organize**
                            their workstations regularly to maintain a tidy
                            environment.
                        </li>
                        <li>
                            Sanitize high-touch areas such as **keyboards, door
                            handles, and shared office equipment** to reduce the
                            spread of germs.
                        </li>
                        <li>
                            Hire a **professional cleaning service** for
                            thorough deep cleaning, ensuring a consistently
                            clean and fresh workplace.
                        </li>
                    </ol>

                    <div className="w-full flex justify-center my-16">
                        <Image
                            src="/images/blog/workplace-cleaning-2.png"
                            alt="Workplace Cleaning"
                            width={1000}
                            height={300}
                            className="rounded-lg shadow-2xl shadow-black/5"
                        />
                    </div>

                    <h2 className="text-2xl font-semibold mt-12">
                        Need Professional Office Cleaning?
                    </h2>
                    <p className="mt-4">
                        At MB Cleans, we specialize in commercial cleaning
                        services across Wellingborough and Northamptonshire. Our
                        expert team ensures your office stays spotless,
                        promoting a healthier and more productive work
                        environment. From daily maintenance to deep cleaning, we
                        provide tailored solutions to meet your needs.
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
