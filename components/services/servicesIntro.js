import Image from "next/image";
import React from "react";

export default function ServiceIntro({
    title,
    body1,
    body2,
    body3,
    body4,
    image1,
    image2,
    alt1,
    alt2,
    button,
}) {
    return (
        <section className="bg-white">
            <div className="gap-16 items-center py-16 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 px-10 lg:px-6 text-center lg:text-start">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-theme2">
                        {title}
                    </h2>
                    <p className="mb-4 text-base leading-5">{body1}</p>
                    <p className="mb-4 text-base leading-5">{body2}</p>
                    <p className="mb-4 text-base leading-5">{body3}</p>
                    <p className="mb-4 text-base leading-5">{body4}</p>
                    <button className="font-semibold my-4 md:pt-0 mx-auto sm:mx-0">
                        <a className="bg-theme1 text-white cursor-pointer justify-center text-xl text-center rounded-lg shadow px-10 py-3 flex items-center">
                            {button}
                        </a>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        className="w-full rounded-lg"
                        src={image1}
                        alt={alt1}
                        width={800}
                        height={800}
                    />
                    <Image
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src={image2}
                        alt={alt2}
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </section>
    );
}
