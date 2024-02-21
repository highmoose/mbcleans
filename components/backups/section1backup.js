import React from "react";
import { Shadows_Into_Light } from "@next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function IntroBar() {
  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <div className="absolute w-full">
          <div className="-m-20 flex mx-auto w-full max-w-6xl px-6 2xl:p-0 h-40 text-black">
            <div className="bg-blue-300 rounded-lg w-1/3 mr-4 p-5 flex flex-col justify-between">
              <p
                className={`text-white text-xl  tracking-wider ${Shadows_Into_Light1.className}`}
              >
                For A Healthy Environment
              </p>
              <p className="text-white text-sm leading-5 text-start">
                The processes we put in place provide a high quality service
                with a focus on safety.
              </p>
              <div className="flex gap-x-2 items-center">
                <img
                  alt="right arrow"
                  src="/icons/arrow-right-circle-white.svg"
                />
                <p className="text-sm text-white font-bold">Read More</p>
              </div>
            </div>
            <div className="flex w-2/3 bg-gray-50 rounded-lg ">
              <div className="w-1/3 p-5 flex flex-col justify-between ">
                <div className="font-bold text-sm text-start text-theme2">
                  Save Time & Money
                </div>
                <p className="text-gray-400 text-[12px] leading-5 text-start">
                  Outsourcing cleaning services can help streamline expenses and
                  reduce cleaning time
                </p>
                <div className="flex gap-x-2 items-center">
                  <img alt="right arrow" src="/icons/arrow-right-circle.svg" />
                  <p className="text-sm text-theme2 font-bold">Read More</p>
                </div>
              </div>
              <div className="w-1/3 p-5 border-x-[1px] border-gray-100 flex flex-col justify-between">
                <div className="font-bold text-sm text-start text-theme2">
                  Healthy Environment
                </div>
                <p className="text-gray-400 text-[12px] leading-5 text-start">
                  A clean workspace decreases employee sick days and helps
                  protect customers
                </p>
                <div className="flex gap-x-2 items-center">
                  <img alt="right arrow" src="/icons/arrow-right-circle.svg" />
                  <p className="text-sm text-theme2 font-bold">Read More</p>
                </div>
              </div>
              <div className="w-1/3 p-5 flex flex-col justify-between">
                <div className="font-bold text-sm text-start text-theme2">
                  Professional Service
                </div>
                <p className="text-gray-400 text-[12px] leading-5 text-start">
                  Our experts are trained and use cleaning disinfecting systems
                  that dramatically decreases
                </p>
                <div className="flex gap-x-2 items-center">
                  <img alt="right arrow" src="/icons/arrow-right-circle.svg" />
                  <p className="text-sm text-theme2 font-bold">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black w-full text-4xl h-[950px] pt-40">
        <div className=" max-w-6xl mx-auto flex gap-x-4 h-[550px]">
          <div className="w-1/2 pr-10">
            <img
              alt="MBCleans Logo"
              src="/images/intro_image.png"
              className="w-full my-auto"
            />
          </div>
          <div className="w-1/2 p-10">
            <div className="flex gap-x-6">
              <img
                src="/icons/bucket-brush.svg"
                alt="bucket & brush"
                className=" w-20 "
              />
              <div className="flex gap-x-2">
                <p className="text-lg font-black my-auto text-[#68CDE8]">01</p>
                <p className="text-lg font-black my-auto">About Us</p>
              </div>
            </div>
            <p className="text-[#004976] leading-[55px] text-6xl font-bold my-6">
              Making Your House As Good As New
            </p>
            <div className="bg-white w-full p-6 text-base font-bold border-l-[6px] border-[#009FE3]">
              <p>Operations team on call 24 hours a day.</p>
              <p>Emergency call out service available.</p>
            </div>
            <div className="flex-row py-10 text-sm">
              <div className="flex item gap-x-4 items-center mb-3">
                <div className="bg-white w-9 h-9 flex items-center justify-center rounded-full ">
                  <img src="/icons/check.svg" alt="check" className="" />
                </div>
                <p className="font-semibold tracking-wide">
                  Neat & Tidy Cleaning Services
                </p>
              </div>
              <div className="flex item gap-x-4 items-center mb-3">
                <div className="bg-white w-9 h-9 flex items-center justify-center rounded-full ">
                  <img src="/icons/check.svg" alt="check" className="" />
                </div>
                <p className="font-semibold tracking-wide">
                  Office & Property Cleaning
                </p>
              </div>
              <div className="flex item gap-x-4 items-center mb-3">
                <div className="bg-white w-9 h-9 flex items-center justify-center rounded-full ">
                  <img src="/icons/check.svg" alt="check" className="" />
                </div>
                <p className="font-semibold tracking-wide">Expert Cleaning</p>
              </div>
              <div className="flex item gap-x-4 items-center mb-3">
                <div className="bg-white w-9 h-9 flex items-center justify-center rounded-full ">
                  <img src="/icons/check.svg" alt="check" className="" />
                </div>
                <p className="font-semibold tracking-wide">
                  Situational Specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
