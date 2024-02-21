import React from "react";

export default function BannerBar() {
  return (
    <div className="w-full  bg-white">
      <div className="w-full lg:w-4/6 xl:w-3/5 max-w-4xl mx-auto">
        <div className="bg-slate-900 h-[35px] text-sm rounded-b-md ">
          <div className="flex items-center justify-center h-full text-sm text-white">
            <b>Now Hiring:</b>
            <p className="mx-1">
              Are you a driven and motivated in Corona Situation. Need a
            </p>
            <b>
              <u>Professional Cleaner?</u>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
