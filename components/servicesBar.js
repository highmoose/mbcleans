import React from "react";

export default function ServicesBar() {
  return (
    <div className=" z-0 -mt-10">
      <div className="max-w-6xl gap-2 items-center mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex gap-1 sm:gap-2 md:gap-4 pb-1 sm:pb-2 md:pb-4">
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/house.svg"
                alt="house"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                House Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Routine cleaning: Dusting, vacuuming, mopping, and surface
                  cleaning in living spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/office.svg"
                alt="office"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Office Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Office cleaning: Maintaining clean workspaces, including
                  desks, restrooms, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/commercial.svg"
                alt="commercial"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Commercial Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Tailored cleaning for retail, restaurants, gyms, and
                  warehouses.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/bucket.svg"
                alt="bucket"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Deep Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Deep cleaning: Targeting overlooked areas like baseboards and
                  light fixtures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-1 sm:gap-2 md:gap-4">
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/truck.svg"
                alt="truck"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Move-In/Out Clean
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Move-in/move-out cleaning for homes: Ensuring a fresh start or
                  prep for new occupants.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/bubbles.svg"
                alt="bubbles"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Eco-Friendly Cleaning{" "}
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Eco-friendly cleaning: Non-toxic products and sustainable
                  methods for healthier spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/window.svg"
                alt="window"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Window Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Window washing: Professional services for streak-free windows,
                  inside and out.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md  w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col text-center md:text-start">
              <img
                src="/icons/sofa.svg"
                alt="sofa"
                className=" w-20 mb-2 mx-auto md:mx-0 flex justify-center md:justify-start"
              />
              <p className="text-theme2 text-sm sm:text-lg font-semibold mb-1">
                Specialist Cleaning{" "}
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4 hidden md:block">
                  Floor care: Carpet, hardwood, tile, and grout cleaning for
                  lasting quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
