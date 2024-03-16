"use client";

import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
});

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
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

export default function HeaderBar() {
  return (
    <section class="flex bg-gray-900 w-full max-h-[500px] :max-h-[700px] lg:max-h-[600px]">
      <div className="absolute w-full h-full">
        <img
          alt="MBCleans cleaner hoovering floor"
          src="/images/mbcleans_hero_image_2.png"
          className="object-cover w-full h-full  max-h-[500px] :max-h-[700px] lg:max-h-[600px]"
        />
      </div>
      <div className=" flex pb-10 mx-auto max-w-6xl relative w-full  items-center justify-between px-10 sm:px-16 lg:px-20 my-16 md:my-20 lg:my-10 xl:my-8">
        <div className="max-w-6xl w-full lg:w-4/5 ">
          <p
            className={`text-yellow-300 text-3xl sm:text-4xl mb-2 text-center lg:text-start ${Shadows_Into_Light1.className}`}
          >
            Commerical & Domestic
          </p>
          <p className="text-[55px] sm:text-[90px] mb-6 leading-[50px] sm:leading-[75px] font-semibold text-center lg:text-start ">
            Professional Cleaning Specialists.
          </p>
          <p className="text-md  mb-6 leading-5 text-center lg:text-start">
            We work closely with clients in finding the most cost effective
            solutions while still providing a level of service that will produce
            a clean, healthy environment, while saving them time.
          </p>
          <div className="flex gap-x-3 justify-center lg:justify-start">
            <div class="relative inline-flex group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44ffef] via-[#25daf2] to-[#5efffa] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                onClick={scrollToPlans}
                title="Get quote now"
                class="relative inline-flex items-center justify-center px-5 p-3 sm:px-8 sm:py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Our Services
              </a>
            </div>
            <div onClick={scrollToContact} class="relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#89beff] via-[#44f6ff] to-[#5eefff] rounded-md blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                title="Get quote now"
                class="relative inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-hidden pt-8">
          <img
            alt="Cleaning cloth"
            className=""
            src="/images/cleaning-cloth.png"
          />
        </div>
        <div className="">
          {/* <button className="h-20 w-20 border-4 rounded-full">
            <img
              src="/icons/arrow-right.svg"
              alt="arrow right"
              className=" w-6 flex m-auto h-full text-white "
            />
          </button> */}
        </div>
      </div>
    </section>
  );
}
