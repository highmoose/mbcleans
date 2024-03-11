import React from "react";
import { Shadows_Into_Light } from "next/font/google";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function IntroBar() {
  return (
    <div className="w-full bg-white">
      <div className="text-black w-full text-4xl">
        <div className=" max-w-6xl mx-auto flex">
          <div className="w-1/2 pr-10 flex justify-end">
            <img
              alt="MBCleans Logo"
              src="/images/cleaner-basket-mop.png"
              className="flex my-auto max-h-[550px]  max-w-none "
            />
          </div>
          <div className="w-1/2 my-auto p-10">
            <p
              className={`text-theme3 text-3xl ${Shadows_Into_Light1.className}`}
            >
              The MBCleans Team!
            </p>
            <p className="text-[#004976] font-medium  tracking-tight  text-4xl  mb-6">
              Let us introduce ourselves!
            </p>

            <p className="text-sm text-gray-400 mb-8">
              Welcome to our cleaning haven! We are a dedicated team of two
              passionate women who take immense pride in transforming spaces
              into sparkling sanctuaries. With a commitment to meticulous
              attention to detail and a genuine love for what we do, our
              cleaning services go beyond the surface. Whether it&apos;s your
              home, office, or any other space, we bring care and precision to
              every corner. Our mission is to create an environment that not
              only looks pristine but also feels inviting and refreshed. Trust
              us to make cleanliness a seamless and joyful experience for you,
              leaving your space not just clean, but truly revitalized.
            </p>
            <div className="">
              <div className="flex gap-x-2">
                <div className="bg-theme3 rounded-md p-3 mb-2 flex">
                  <p className="font-semibold text-white mr-2">20+</p>
                  <p className="font-semibold text-base leading-5 text-white">
                    Years Combined Cleaning Experience
                  </p>
                </div>
                <div className="bg-theme2 rounded-md p-3 mb-2">
                  <p className="font-semibold text-base leading-5 text-white">
                    Obsessive Eye for Detail
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <div className="bg-theme1 rounded-md p-3 mb-2">
                  <p className="font-semibold text-base leading-5 text-white">
                    Respectful & Respectable
                  </p>
                </div>
                <div className="bg-blue-300 rounded-md p-3 mb-2">
                  <p className="font-semibold text-base leading-5 text-white">
                    Proactive & Positive
                  </p>
                </div>
                <div className="bg-blue-500 rounded-md p-3 mb-2">
                  <p className="font-semibold text-base leading-5 text-white">
                    Time-tested Teamwork
                  </p>
                </div>
              </div>

              {/* <div className="bg-blue-500 rounded-md w-2/7">20+</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
