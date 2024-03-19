import React from "react";

export default function BannerBar() {
  return (
    <div className="w-full hidden md:block  bg-white">
      <div className="w-full lg:w-4/6 xl:w-3/5 max-w-4xl mx-auto">
        <div className="bg-slate-900 h-[35px] text-sm rounded-b-md ">
          <div className="flex items-center justify-center h-full text-sm text-white">
            <b>Need a cleaner?</b>
            <p className="mx-1">We pride ourselves on our competitive rates.</p>
            <b>
              <u>Get in touch!</u>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
