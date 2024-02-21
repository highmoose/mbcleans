import React from "react";

export default function InfoBar3() {
  return (
    <div className="w-full h-[870px] bg-[#F7FBFF] py-24">
      <div className="flex gap-x-6 justify-center">
        <img
          src="/icons/information.svg"
          alt="Information"
          className=" w-20 "
        />
        <div className="flex gap-x-2">
          <p className="text-lg font-black my-auto text-[#68CDE8]">04</p>
          <p className="text-lg font-black text-black my-auto tracking-wider">
            Process
          </p>
        </div>
      </div>
      <p className="text-[#004976] leading-[65px] text-6xl font-extrabold my-6 text-center">
        How It Works
      </p>
      <div className="flex gap-x-8 max-w-6xl mx-auto mt-14 h-[440px]">
        <div class="w-1/3 hover:shadow-2xl hover:shadow-black/5 group relative inline-block overflow-hidden border-gray-100 bg-white  px-12 py-3 text-sm font-medium   active:text-white">
          <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[6px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>
          <div className="flex justify-center gap-x-2 pb-6 py-12">
            <p className="text-[#009FE3] font-bold text-base text-center">
              Step 1
            </p>
            <img
              src="/icons/arrow-right-blue.svg"
              alt="Arrow Right Blue"
              className=" w-5"
            />
          </div>
          <p className="text-[#004976] font-bold text-3xl text-center pb-6">
            Speak With Us
          </p>
          <p className="text-black text-sm text-center tracking-wide pb-6">
            Every job is different and we are here to help! Let us help and
            guide you through process so that you recieve the best and most
            appropriate service for you.
          </p>
          <img
            src="/icons/support.svg"
            alt="Support"
            className=" w-24 flex m-auto"
          />
        </div>
        <div class="w-1/3 hover:shadow-2xl hover:shadow-black/5 group relative inline-block overflow-hidden border-gray-100 bg-white  px-12 py-3 text-sm font-medium   active:text-white">
          <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[6px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>
          <div className="flex justify-center gap-x-2 pb-6 py-12">
            <p className="text-[#009FE3] font-bold text-base text-center">
              Step 2
            </p>
            <img
              src="/icons/arrow-right-blue.svg"
              alt="Arrow Right Blue"
              className=" w-5"
            />
          </div>
          <p className="text-[#004976] font-bold text-3xl text-center pb-6">
            Book An Appointment
          </p>
          <p className="text-black text-sm text-center tracking-wide pb-6">
            Every job is different and we are here to help! Let us help and
            guide you through process so that you recieve the best and most
            appropriate service for you.
          </p>
          <img
            src="/icons/appointment.svg"
            alt="Appointment"
            className=" w-24 flex m-auto"
          />
        </div>
        <div class="w-1/3 hover:shadow-2xl hover:shadow-black/5 group relative inline-block overflow-hidden border-gray-100 bg-white  px-12 py-3 text-sm font-medium   active:text-white">
          <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[6px] border-[#009FE3] transition-all duration-200 group-hover:w-full"></span>
          <div className="flex justify-center gap-x-2 pb-6 py-12">
            <p className="text-[#009FE3] font-bold text-base text-center">
              Step 3
            </p>
            <img
              src="/icons/check-blue.svg"
              alt="Check Marck"
              className=" w-5"
            />
          </div>
          <p className="text-[#004976] font-bold text-3xl text-center pb-6">
            We Do The Rest!
          </p>
          <p className="text-black text-sm text-center tracking-wide pb-6">
            Every job is different and we are here to help! Let us help and
            guide you through process so that you recieve the best and most
            appropriate service for you.
          </p>
          <img
            src="/icons/hoover.svg"
            alt="Hoover"
            className=" w-24 flex m-auto"
          />
        </div>
      </div>
    </div>
  );
}
