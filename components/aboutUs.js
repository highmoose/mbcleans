import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function IntroBar() {
  return (
    <div id="aboutUs" className="w-full bg-white">
      <div className="text-black w-full text-4xl">
        <div className=" max-w-6xl mx-auto lg:flex">
          <div className="lg:w-1/2 pr-10 flex justify-end">
            <img
              alt="MBCleans Logo"
              src="/images/cleaner-basket-mop.png"
              className=" my-auto max-h-[550px] max-w-none  hidden lg:block"
            />
          </div>
          <div className="lg:w-1/2 my-auto p-10 ">
            <p
              className={`text-theme3 text-3xl text-center lg:text-start ${Shadows_Into_Light1.className}`}
            >
              The MBCleans Team!
            </p>
            <p className="text-[#004976] font-medium  tracking-tight text-center lg:text-start text-4xl  mb-6">
              Let us introduce ourselves!
            </p>

            <p className="text-base text-gray-400 mb-8 text-center lg:text-start">
              Welcome to our cleaning haven! We're two passionate women
              dedicated to transforming spaces into sparkling sanctuaries. With
              meticulous attention to detail and genuine love for our work, we
              go beyond the surface to clean homes, offices, and more. Trust us
              to make cleanliness seamless and joyful, leaving your space
              revitalized
            </p>
            <div className="flex-col w-full">
              <div className="bg-theme3 rounded-md py-3 w-4/5 mx-auto lg:mx-0 mb-1">
                <p className="font-semibold text-base text-center lg:text-start lg:px-4  leading-5 text-white">
                  20+ Years Combined Cleaning Experience
                </p>
              </div>
              <div className="bg-theme2 rounded-md py-3 w-4/6 mx-auto lg:mx-0 mb-1">
                <p className="font-semibold text-base text-center lg:text-start lg:px-4  leading-5 text-white">
                  Obsessive Eye for Detail
                </p>
              </div>
              <div className="bg-theme1 rounded-md py-3 w-3/5 mx-auto lg:mx-0 mb-1">
                <p className="font-semibold text-base text-center lg:text-start lg:px-4  leading-5 text-white">
                  Respectful & Respectable
                </p>
              </div>
              <div className="bg-blue-300 rounded-md py-3 w-2/3 mx-auto lg:mx-0 mb-1">
                <p className="font-semibold text-base text-center lg:text-start lg:px-4  leading-5 text-white">
                  Proactive & Positive
                </p>
              </div>
              <div className="bg-blue-500 rounded-md py-3 w-3/4 mx-auto lg:mx-0 mb-1">
                <p className="font-semibold text-base text-center lg:text-start lg:px-4  leading-5 text-white">
                  Time-tested Teamwork
                </p>
              </div>
            </div>
            {/* <div className="bg-blue-500 rounded-md w-2/7">20+</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
