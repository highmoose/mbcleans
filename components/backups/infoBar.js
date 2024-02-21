import React from "react";

export default function InfoBar() {
  return (
    <div className="w-full">
      <div className="w-full ">
        <div className="absolute w-full">
          <div className="m-[330px] gap-x-8 flex mx-auto w-full max-w-6xl h-80  text-black p-4">
            <div className="w-1/3 bg-white">
              <img
                alt="Commercial Cleaning"
                src="/images/commercial_cleaning.png"
                className="object-cover hidden-none w-full h-full"
              />
              <div className="relative bg-white mx-6 h-28 -mt-14 flex items-center justify-between p-8">
                <div>
                  <p className="text-sm font-bold text-[#009FE3]">
                    £500 - £1000
                  </p>
                  <p className="font-bold text-2xl text-[#004976] tracking-wide">
                    Commercial
                  </p>
                  <p className="-mt-1 text-md text-[#004976] tracking-wide">
                    Cleaning
                  </p>
                </div>
                <div className="-mt-28 relative shadow-lg bg-white w-24 h-24 rounded-full">
                  <img
                    src="/icons/office-desk.svg"
                    alt="office desk"
                    className=" w-14 flex m-auto h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-white">
              <img
                alt="Home Cleaning"
                src="/images/home-cleaning.png"
                className="object-cover hidden-none w-full h-full"
              />
              <div className="relative bg-white mx-6 h-28 -mt-14 flex items-center justify-between p-8">
                <div>
                  <p className="text-sm font-bold text-[#009FE3]">
                    £500 - £1000
                  </p>
                  <p className="font-bold text-2xl text-[#004976] tracking-wide">
                    Domestic
                  </p>
                  <p className="-mt-1 text-md text-[#004976] tracking-wide">
                    Cleaning
                  </p>
                </div>
                <div className="-mt-28 relative shadow-lg bg-white w-24 h-24 rounded-full">
                  <img
                    src="/icons/domestic.svg"
                    alt="Home Domestic"
                    className=" w-14 flex m-auto h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3 bg-white">
              <img
                alt="Specialist Cleaning"
                src="/images/specialist-cleaning.png"
                className="object-cover hidden-none w-full h-full"
              />
              <div className="relative bg-white mx-6 h-28 -mt-14 flex items-center justify-between p-8">
                <div>
                  <p className="text-sm font-bold text-[#009FE3]">
                    £500 - £1000
                  </p>
                  <p className="font-bold text-2xl text-[#004976] tracking-wide">
                    Specialist
                  </p>
                  <p className="-mt-1 text-md text-[#004976] tracking-wide">
                    Cleaning
                  </p>
                </div>
                <div className="-mt-28 relative shadow-lg bg-white w-24 h-24 rounded-full">
                  <img
                    src="/icons/brush.svg"
                    alt="Brush"
                    className=" w-14 flex m-auto h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#004976] w-full mx-auto flex gap-x-4 h-[500px]">
        <div className="max-w-6xl flex w-full mx-auto p-20">
          <div className="w-2/5">
            <div className="flex gap-x-6">
              <img src="/icons/247.svg" alt="24/7" className=" w-20 " />
              <div className="flex gap-x-2">
                <p className="text-lg font-black my-auto text-[#68CDE8]">02</p>
                <p className="text-lg font-black my-auto tracking-wider">
                  Services
                </p>
              </div>
            </div>
            <p className="text-[#ffffff] leading-[65px] text-6xl font-extrabold my-6">
              What We Do
            </p>
          </div>
          <div className="w-3/5 ">
            <p className="border-l-[6px] border-[#009FE3] pl-10 mt-10 leading-7 tracking-wider">
              MBCleans champions professionalism in the cleaning industry by
              providing top-quality cleaning and related services that meet and
              exceed the expectations of today’s demanding corporate, office,
              industrial and warehouse clients…
            </p>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 w-full mx-auto flex gap-x-4 h-[400px] justify-center items-end pb-24">
        <p className="text-xl text-[#004976]">
          Stop wasting time and money on Cleaning.
          <b className="text-[#68CDE8] border-b-[3px] border-[#68CDE8]">
            Make An Appointment
          </b>
        </p>
      </div>
    </div>
  );
}
