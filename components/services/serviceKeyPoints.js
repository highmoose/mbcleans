import Image from "next/image";
import React from "react";

export default function ServiceIntro({
    title,
    image1,
    alt1,
    keyTitle1,
    keyBody1,
    keyTitle2,
    keyBody2,
    keyTitle3,
    keyBody3,
    keyTitle4,
    keyBody4,
    keyTitle5,
    keyBody5,
    keyTitle6,
    keyBody6,
}) {
    return (
        <section className="bg-zinc-100 ">
            <div>
                <div className="gap-16 items-center py-16  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-24 px-10 lg:px-6">
                    <div className="grid gap-4">
                        <Image
                            className="w-full hidden lg:block rounded-lg"
                            src={image1}
                            alt={alt1}
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-10 lg:py-0">
                        <h2 className="mb-4 text-4xl text-theme2 tracking-tight font-extrabold text-theme text-center lg:text-start">
                            {title}
                        </h2>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle1}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody1}
                            </p>
                        </div>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle2}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody2}
                            </p>
                        </div>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle3}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody3}
                            </p>
                        </div>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle4}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody4}
                            </p>
                        </div>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle5}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody5}
                            </p>
                        </div>
                        <div className="py-2 border-b-[1px] border-theme2/10">
                            <p className="text-xl text-theme3  text-center lg:text-start">
                                {keyTitle6}
                            </p>
                            <p className="leading-5 text-base text-center lg:text-start">
                                {keyBody6}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
