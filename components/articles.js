"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";

const Shadows_Into_Light1 = Shadows_Into_Light({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Articles() {
    const router = useRouter();

    const [transform, setTransform] = useState(0);

    const goNext = () => {
        setTransform((prev) => {
            const newTransform = prev - 398;
            const slider = document.getElementById("slider");
            if (Math.abs(newTransform) >= slider.scrollWidth / 1.7) {
                return 0;
            }
            return newTransform;
        });
    };

    const goPrev = () => {
        setTransform((prev) => {
            const newTransform = prev + 398;
            if (newTransform === 0) return 0;
            return newTransform;
        });
    };

    const cardData = [
        {
            image: "/images/blog/end-of-tenancy-clean.png",
            catalog: "Article 1",
            title: "End of Tenancy Cleaning",
            link: "/blog/end-of-tenancy-cleaning",
        },
        {
            image: "/images/blog/spring-clean-article.png",
            catalog: "Article 2",
            title: "Spring Cleaning Made Simple",
            link: "/blog/spring-clean-article",
        },
        {
            image: "/images/blog/warehouse-cleaning-article-2.png",
            catalog: "Article 3",
            title: "Office Cleaning Checklist",
            link: "/blog/office-cleaning-checklist",
        },
        {
            image: "/images/blog/warehouse-cleaning-article.png",
            catalog: "Article 4",
            title: "Warehouse Cleaning Tips & Tricks",
            link: "/blog/warehouse-cleaning-tips",
        },
        {
            image: "/images/blog/workplace-cleaning.png",
            catalog: "Article 5",
            title: "Why A Clean Workplace Boosts Productivity",
            link: "/blog/why-a-clean-workplace-boosts-productivity",
        },
        {
            image: "/images/blog/home-cleaning.png",
            catalog: "Article 6",
            title: "Our Winter Cleaning Guide",
            link: "/blog/winter-cleaning-guide",
        },
    ];

    return (
        <div className="w-full bg-white py-28">
            <h3
                className={`text-theme3 text-center text-3xl ${Shadows_Into_Light1.className}`}
            >
                Blog Articles
            </h3>
            <h3 className="max-w-xl w-fit flex mx-auto text-4xl font-medium tracking-tight text-center text-theme2">
                Useful cleaning guides and tips!
            </h3>
            <div className=" max-w-7xl w-full mx-auto ">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    <div className="w-full relative flex items-center justify-center">
                        <button
                            aria-label="slide backward"
                            className="absolute z-30 left-0 ml-10 cursor-pointer"
                            onClick={goPrev}
                        >
                            <ArrowLeft size={42} className="text-gray-900" />
                        </button>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                            <div
                                id="slider"
                                className="h-full flex lg:gap-8 md:gap-6 gap-2 items-center justify-start transition ease-out duration-700 "
                                style={{
                                    transform: `translateX(${transform}px)`,
                                }}
                            >
                                {cardData.map((card, index) => (
                                    <div
                                        key={index}
                                        onClick={() => router.push(card.link)}
                                        className="flex flex-shrink-0 relative w-[200px] md:w-[340px] h-[440px] rounded-xl overflow-hidden cursor-pointer group "
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="object-cover object-center w-full transition-transform duration-700 group-hover:scale-110 "
                                        />
                                        <div className="bg-gradient-to-t from-gray-800/40 to-transparent absolute w-full h-full p-6">
                                            <h2 className="lg:text-lg leading-4 text-base lg:leading-5 text-white dark:text-gray-900 bg-white/60 px-4 py-1 w-fit rounded-full">
                                                {card.catalog}
                                            </h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="font-bold text-4xl md:text-5xl leading-9 lg:leading-[40px] text-white">
                                                    {card.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            aria-label="slide forward"
                            className="absolute z-30 right-0 mr-10"
                            onClick={goNext}
                        >
                            <ArrowRight size={42} className="text-gray-900" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
