import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function StepsBar() {
  return (
    <div>
      <div className="text-black bg-slate-50 w-full text-4xl py-16 flex-col mx-auto px-10 lg:px-0">
        <div className=" max-w-6xl mx-auto gap-x-4 mb-10">
          <h3
            className={`text-theme3 text-center text-3xl mb-1 ${Shadows_Into_Light1.className}`}
          >
            See How It Works!
          </h3>
          <h3 className="max-w-xl flex mx-auto text-4xl font-medium tracking-tight text-center text-theme2">
            Easy steps for a clean and healthy environment
          </h3>
        </div>
        <div className="w-full max-w-6xl px-6 2xl:p-0 mx-auto lg:mt-16">
          <div className="lg:flex gap-x-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 rounded-md group relative inline-block border-gray-100  py-2  lg:py-8 font-medium   active:text-white  transition duration-100 ease-in-out ">
              <div className="lg:-mt-20  flex  mb-2 mx-auto items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  1
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold lg:mb-2">
                Provide us with your details
              </p>
              <p className="text-base text-center font-light text-gray-400 tracking-tight px-6 lg:px-6">
                Call us, or use our online contact form to provide us with your
                details and information
              </p>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 rounded-md group relative inline-block border-gray-100 py-2  lg:py-8 font-medium   active:text-white  transition duration-100 ease-in-out">
              <div className="lg:-mt-20  flex  mb-2 mx-auto items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  2
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold lg:mb-2">
                Arrange a visit from us
              </p>
              <p className="text-base text-center font-light text-gray-400 tracking-tight px-6 lg:px-6">
                We come to you to discuss your requirements and provide a
                competative quotation
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 rounded-md group relative inline-block border-gray-100 py-2  lg:py-8 font-medium   active:text-white  transition duration-100 ease-in-out">
              <div className="lg:-mt-20  flex  mb-2 mx-auto items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  3
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold lg:mb-2">
                Agree on time and frequency
              </p>
              <p className="text-base text-center font-light text-gray-400 tracking-tight px-6 lg:px-6">
                Whether you need us once, or every week, we will create a
                schedule that works around you
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 rounded-md group relative inline-block border-gray-100 py-2  lg:py-8 font-medium   active:text-white  transition duration-100 ease-in-out">
              <div className="lg:-mt-20  flex  mb-2 mx-auto items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  4
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold lg:mb-2">
                Sit back and relax
              </p>
              <p className="text-base text-center font-light text-gray-400 tracking-tight px-6 lg:px-6">
                We will take care of the rest so you can enjoy your consistantly
                clean and healthy environment
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="flex mx-auto text-base mt-10 lg:mt-0 leading-5 tracking-tight text-theme2  text-center lg:text-start">
            We keep the cleaning process as simple as possible!
          </p>
        </div>
      </div>
    </div>
  );
}
