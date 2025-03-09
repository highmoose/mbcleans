import Image from "next/image";
import React from "react";

export default function PartnersBar2({ locationName }) {
    return (
        <div id="partners" className="w-full">
            <div>
                <meta charSet="utf-8" />
            </div>

            <div className="relative font-inter antialiased">
                <div className="relative max-h-[280px] flex flex-col justify-center bg-slate-900 overflow-hidden">
                    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                        <p className="text-center text-white text-xl ">
                            We work with amazing people around {locationName} &
                            Northamptonshire.
                        </p>
                        <p className="text-center text-white text-xl mb-12">
                            Here are some you may already know...
                        </p>
                        <div className="text-center">
                            <div
                                x-data="{}"
                                x-init="$nextTick(() => {
                            let ul = $refs.logos;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                        })"
                                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                            >
                                <ul
                                    x-ref="logos"
                                    className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                                >
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/insituform-white.png"
                                            alt="insituform"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/coley-white.png"
                                            alt="coley"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/isefire-white.png"
                                            alt="isefire"
                                            width={140}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/greencold-white.png"
                                            alt="greencold"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/whitebox-white.png"
                                            alt="whitebox"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/beacon-white.png"
                                            alt="beacon"
                                            width={160}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[25px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/highamvets-white.png"
                                            alt="higham vets"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/ukbrandsales-white.png"
                                            alt="uk brand sales"
                                            width={160}
                                            height={100}
                                        />
                                    </li>
                                </ul>
                                <ul
                                    x-ref="logos"
                                    className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                                >
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/insituform-white.png"
                                            alt="insituform"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/coley-white.png"
                                            alt="coley"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/isefire-white.png"
                                            alt="isefire"
                                            width={140}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[50px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/greencold-white.png"
                                            alt="greencold"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[40px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/whitebox-white.png"
                                            alt="whitebox"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/beacon-white.png"
                                            alt="beacon"
                                            width={160}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[25px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/highamvets-white.png"
                                            alt="highamvets"
                                            width={200}
                                            height={100}
                                        />
                                    </li>
                                    <li>
                                        <Image
                                            className="max-h-[60px] hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out"
                                            src="/images/partners/ukbrandsales-white.png"
                                            alt="ukbrandsales"
                                            width={160}
                                            height={100}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
