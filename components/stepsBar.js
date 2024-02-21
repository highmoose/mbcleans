import React from "react";
import { Shadows_Into_Light } from "@next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function StepsBar() {
  return (
    <div>
      <div className="text-black bg-slate-50 w-full text-4xl py-16 flex-col mx-auto">
        <div className=" max-w-6xl mx-auto gap-x-4 mb-10">
          <p
            className={`text-theme3 text-center text-3xl mb-1 ${Shadows_Into_Light1.className}`}
          >
            See How It Works!
          </p>
          <p className="max-w-xl flex mx-auto text-4xl font-medium  tracking-tight text-center text-theme2">
            Easy steps for a clean and healthy environment
          </p>
        </div>
        <div className="w-full mt-20 max-w-6xl px-6 2xl:p-0 mx-auto  mb-6">
          <div className="flex gap-x-4">
            <div className="w-1/4 shadow-xl shadow-gray-100 hover:shadow-gray-200 rounded-md  group relative inline-block border-gray-100 bg-white py-8 font-medium   active:text-white hover:scale-105 hover:shadow-2xl transition duration-100 ease-in-out ">
              <div className="-mt-20 bg-white flex w-24 h-24 rounded-full mx-auto shadow-md items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  1
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold mt-4 mb-6">
                Provide us with your details
              </p>
              <p className="text-sm text-center font-light text-gray-400 mb-4 tracking-tight px-6">
                Call us, or use our online contact form to provide us with your
                details and information
              </p>
              <div className=" mx-auto">
                <img
                  src="/icons/details.svg"
                  alt="details"
                  className=" w-16 flex m-auto h-full"
                />
              </div>
            </div>

            <div className="w-1/4  shadow-xl shadow-gray-100 hover:shadow-gray-200 rounded-md  group relative inline-block border-gray-100 bg-white py-8 font-medium   active:text-white hover:scale-105 hover:shadow-2xl transition duration-100 ease-in-out">
              <div className="-mt-20 bg-white flex w-24 h-24 rounded-full mx-auto shadow-md items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  2
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold mt-4 mb-6">
                Arrange a visit from us
              </p>
              <p className="text-sm text-center font-light text-gray-400 mb-4 tracking-tight px-6">
                We come to you to discuss your requirements and provide a
                competative quotation
              </p>
              <div className=" mx-auto">
                <img
                  src="/icons/woman-icon.svg"
                  alt="woman"
                  className=" w-16 flex m-auto h-full"
                />
              </div>
            </div>
            <div className="w-1/4  shadow-xl shadow-gray-100 hover:shadow-gray-200 rounded-md  group relative inline-block border-gray-100 bg-white py-8 font-medium   active:text-white hover:scale-105 hover:shadow-2xl transition duration-100 ease-in-out">
              <div className="-mt-20 bg-white flex w-24 h-24 rounded-full mx-auto shadow-md items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  3
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold mt-4 mb-6">
                Agree on time and frequency
              </p>
              <p className="text-sm text-center font-light text-gray-400 mb-4 tracking-tight px-6">
                Whether you need us once, or every week, we will create a
                schedule that works around you
              </p>
              <div className=" mx-auto">
                <img
                  src="/icons/calendar.svg"
                  alt="calendar"
                  className=" w-16 flex m-auto h-full"
                />
              </div>
            </div>
            <div className="w-1/4  shadow-xl shadow-gray-100 hover:shadow-gray-200 rounded-md  group relative inline-block border-gray-100 bg-white py-8 font-medium   active:text-white hover:scale-105 hover:shadow-2xl transition duration-100 ease-in-out">
              <div className="-mt-20 bg-white flex w-24 h-24 rounded-full mx-auto shadow-md items-center justify-center">
                <div className="mx-auto border-[3px] border-theme3 flex items-center justify-center w-20 h-20 rounded-full  text-4xl text-theme3 text-center">
                  4
                </div>
              </div>
              <p className="text-lg text-theme2 text-center font-semibold mt-4 mb-6">
                Sit back and relax
              </p>
              <p className="text-sm text-center font-light text-gray-400 mb-4 tracking-tight px-6">
                We will take care of the rest so you can enjoy your consistantly
                clean and healthy environment
              </p>
              <div className=" mx-auto">
                <img
                  src="/icons/review.svg"
                  alt="review"
                  className=" w-16 flex m-auto h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="flex mx-auto text-lg leading-5 tracking-tight text-theme2">
            We keep the cleaning process as simple as possible!
          </p>
        </div>
      </div>
    </div>
  );
}
