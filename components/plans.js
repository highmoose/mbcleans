import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function IntroBar() {
  return (
    <div id="plans" className="w-full bg-slate-50">
      <div className="w-full bg-white">
        <div className="absolute w-full "></div>
      </div>
      <div className="text-black  w-full text-4xl pt-12 flex-col mx-auto">
        <div className=" max-w-6xl mx-auto gap-x-4 mb-10">
          <p
            className={`text-theme3 text-center text-3xl mb-1 ${Shadows_Into_Light1.className}`}
          >
            Customised Cleaning Plans!
          </p>
          <div className="flex items-center">
            <p className="flex mx-auto text-4xl text-center  font-medium tracking-tight text-theme2">
              Tailored to fit your specific needs!
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl px-6 2xl:p-0 mx-auto mb-12">
          <div className="md:flex gap-x-4">
            <div className="md:w-1/3 hover:scale-105  transition duration-100 ease-in-out">
              <div className="flex-col rounded-md  h-full group relative inline-block overflow-hidden border-gray-100 bg-white pt-10 text-sm font-medium   active:text-white">
                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                <p
                  className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                >
                  For Homes
                </p>
                <p className="text-xl text-theme2 text-center font-semibold">
                  Residential Plans
                </p>
                {/* <div className="flex my-6 justify-center">
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/trash.svg"
                      alt="trash"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/vacuum.svg"
                      alt="vacuum"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/house.svg"
                      alt="house"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                </div> */}
                <p className="text-sm text-gray-400 mb-6 px-10">
                  Residential house cleaning services always focus on cleaning
                  for health, while our extensive industry experience gives us
                  the upperhand.
                </p>
                <div className="mb-8">
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme2 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Window sills & ledges
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme2 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Hard surface floors
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme2 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Remove cobwebs
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme2 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Empty trash
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 hover:scale-105  transition duration-100 ease-in-out">
              <div className="flex-col rounded-md  h-full group relative inline-block overflow-hidden border-gray-100 bg-white pt-10 text-sm font-medium   active:text-white">
                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                <p
                  className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                >
                  For Business
                </p>
                <p className="text-xl text-theme2 text-center font-semibold">
                  Commercial Plans
                </p>
                {/* <div className="flex my-6 justify-center">
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/bin.svg"
                      alt="bin"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/toilet.svg"
                      alt="toilet"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/sponge.svg"
                      alt="sponge"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                </div> */}
                <p className="text-sm text-gray-400 mb-6 tracking-tight px-10">
                  Commercial cleaning services will help you protect and care
                  for your customers and employees, we care about clean, and it
                  shows in our work.
                </p>
                <div className="mb-8">
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme1 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Office Building
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme1 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Manufacturing Facilities
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme1 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Educational Facilities
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-theme1 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Medical Facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 hover:scale-105  transition duration-100 ease-in-out">
              <div className="flex-col rounded-md group relative inline-block overflow-hidden border-gray-100 bg-white h-full pt-10 text-sm font-medium   active:text-white">
                <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>{" "}
                <p
                  className={`text-theme2 text-center text-2xl mb-2 ${Shadows_Into_Light1.className}`}
                >
                  For Emergencies
                </p>
                <p className="text-xl text-theme2 text-center font-semibold">
                  Incident Plans
                </p>
                {/* <div className="flex my-6 justify-center">
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/bucket.svg"
                      alt="bucket"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/washer.svg"
                      alt="washer"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                  <div className=" bg-gray-100 w-16 h-16 rounded-full">
                    <img
                      src="/icons/wiper.svg"
                      alt="wiper"
                      className=" w-10 flex m-auto h-full"
                    />
                  </div>
                </div> */}
                <p className="text-sm text-gray-400 mb-6 tracking-tight px-10">
                  In the case of an emergency an urgent clean up may be
                  required. We have the tools, chemicals and skills to provide
                  the fast clean up you need.
                </p>
                <div className="mb-8">
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Fire Damage
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Debris Removal
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Mold Remediation
                    </p>
                  </div>
                  <div className="flex px-10 item gap-x-2 items-center mb-1">
                    <div className="bg-blue-300 w-4 h-4 flex items-center justify-center rounded-full ">
                      <img
                        src="/icons/check-white.svg"
                        alt="check"
                        className="h-3"
                      />
                    </div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Graffiti Removal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="max-w-2xl mb-20 flex mx-auto text-base leading-5  tracking-tight text-center text-theme2">
          For a clean that meets your highest standards, you need a dedicated
          team of trained specialists. We arrive at each visit with all supplies
          needed to thoroughly clean your premises.
        </p>
      </div>
    </div>
  );
}
