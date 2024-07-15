import React from "react";

export default function HeaderBar2() {
  return (
    <div className=" flex justify-center py-20 gap-6">
      <div className="w-4/5 max-w-4xl flex flex-col gap-6 py-20">
        <div className="flex gap-6">
          <div className="w-2/3 text-7xl font-bold text-black">
            Spotless Cleaning Services for Your Home and Office
          </div>
          <div className="bg-zinc-500 w-1/3 h-full; rounded-2xl"></div>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="w-3/4 text-xl text-zinc-400 mb-6">
              MBCleans is your premier choice for comphensive cleaning services
              designed to give you a fresh start to your day.
            </div>
            <div className=" bg-white w-4/5 h-[100px] shadow-lg/50 rounded-2xl p-3">
              <div className="text-zinc-400">Select Cleaning Service</div>
            </div>
          </div>
          <div className="bg-zinc-500 w-1/3 h-[200px] rounded-2xl"></div>
        </div>
      </div>
      <div className="w-1/5  flex flex-col gap-6">
        <div className="w-2/3 h-[200px] bg-yellow-500 rounded-2xl"></div>
        <div className="w-full h-[350px] bg-yellow-500 rounded-2xl"></div>
      </div>
    </div>
  );
}
