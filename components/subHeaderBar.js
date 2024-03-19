import React from "react";

export default function SubHeaderBar() {
  return (
    <div className="relative w-full">
      <div className="bg-cover bg-center text-white object-fill min-h-[200px] md:h-[130px] overflow-hidden flex items-center">
        <img
          layout="responsive"
          alt="MBCleans cleaner hoovering floor"
          src="/images/sub_banner_1.png"
          className="w-full min-h-[200px] md:h-[130px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="max-w-6xl mx-auto px-10 xl:px-0">
            <p className="text-4xl md:text-5xl font-bold leading-45 text-center">
              Frequently Asked Questions (FAQs)
            </p>
            <p className="text-2xl text-center leading-6">
              Have some questions? You might find the answers here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
