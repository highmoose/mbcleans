import React from "react";

export default function SubHeaderBar() {
  return (
    <div className="relative w-full">
      <div className="bg-cover bg-center text-white object-fill h-[160px] overflow-hidden flex items-center">
        <img
          layout="responsive"
          alt="MBCleans cleaner hoovering floor"
          src="/images/sub_banner_1.png"
          className="w-full min-h-[160px] object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="max-w-6xl mx-auto px-10 xl:px-0">
          <p className="text-6xl font-bold leading-45 text-center lg:text-left">
            FAQ's
          </p>
          <p className="text-2xl text-center lg:text-left leading-6">
            Have some questions? You might find the answers here!
          </p>
        </div>
      </div>
    </div>
  );
}
