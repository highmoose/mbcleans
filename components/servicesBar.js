import Image from "next/image";
import React from "react";

export default function ServicesBar() {
    return (
        <div className=" z-0 bg-slate-50">
            <div className="max-w-6xl gap-2 items-center mx-auto px-2 sm:px-4 md:px-6 -mt-10">
                <div className="flex gap-1 sm:gap-2 md:gap-4 pb-1 sm:pb-2 md:pb-4">
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/house.svg"
                                alt="house"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                House Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Routine cleaning: Dusting, vacuuming,
                                    mopping, and surface cleaning in living
                                    spaces.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/office.svg"
                                alt="office"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Office Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Office cleaning: Maintaining clean
                                    workspaces, including desks, restrooms, and
                                    more.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/commercial.svg"
                                alt="commercial"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Commercial Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Tailored cleaning for retail, restaurants,
                                    gyms, and warehouses.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/bucket.svg"
                                alt="bucket"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Deep Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Deep cleaning: Targeting overlooked areas
                                    like baseboards and light fixtures.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-1 sm:gap-2 md:gap-4">
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/truck.svg"
                                alt="truck"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Move-In/Out Clean
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Move-in/move-out cleaning for homes:
                                    Ensuring a fresh start or prep for new
                                    occupants.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/bubbles.svg"
                                alt="bubbles"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Eco-Friendly Cleaning{" "}
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Eco-friendly cleaning: Non-toxic products
                                    and sustainable methods for healthier
                                    spaces.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/window.svg"
                                alt="window"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Window Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Window washing: Professional services for
                                    streak-free windows, inside and out.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center rounded-md  w-1/4 p-2 sm:p-4  bg-white shadow-sm">
                        <div className="flex-col text-center md:text-start">
                            <Image
                                src="/icons/sofa.svg"
                                alt="sofa"
                                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
                                width={100}
                                height={100}
                            />
                            <h2 className="text-theme2 text-base sm:text-lg font-semibold mb-1">
                                Specialist Cleaning
                            </h2>
                            <div className="">
                                <h3 className="text-zinc-400 text-base leading-4 hidden md:block">
                                    Floor care: Carpet, hardwood, tile, and
                                    grout cleaning for lasting quality.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
