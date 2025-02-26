import React from "react";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const Shadows_Into_Light1 = Shadows_Into_Light({
    subsets: ["latin"],
    weight: "400",
});

export default function SubHeaderBar({ title, description, image }) {
    return (
        <div className="relative w-full">
            <div className="bg-cover bg-center text-white object-fill min-h-[200px] md:h-[130px] overflow-hidden flex items-center">
                <Image
                    layout="responsive"
                    alt="MBCleans cleaner hoovering floor"
                    src={image}
                    className="w-full min-h-[200px] md:h-[130px] object-cover"
                    width={1000}
                    height={1000}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                    <div className="max-w-6xl mx-auto px-10 xl:px-0">
                        <p className="text-4xl md:text-6xl font-bold leading-45 text-center">
                            {title}
                        </p>
                        <p
                            className={`text-yellow-300 text-3xl sm:text-3xl mb-2 text-center ${Shadows_Into_Light1.className}`}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
