import React from "react";

export default function ServicesBar() {
  return (
    <div className="-mt-12 z-0 bg-zinc">
      <div className="max-w-6xl gap-2 items-center mx-auto px-6">
        <div className="flex gap-4 pb-4">
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                House Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Routine cleaning: Dusting, vacuuming, mopping, and surface
                  cleaning in living spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Office Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Office cleaning: Maintaining clean workspaces, including
                  desks, restrooms, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Commercial Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Tailored cleaning for retail, restaurants, gyms, and
                  warehouses.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Deep Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Deep cleaning: Targeting overlooked areas like baseboards and
                  light fixtures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Move-In/Move-Out Clean
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Move-in/move-out cleaning for homes: Ensuring a fresh start or
                  prep for new occupants.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Eco-Friendly Cleaning{" "}
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Eco-friendly cleaning: Non-toxic products and sustainable
                  methods for healthier spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Window Cleaning
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
                  Window washing: Professional services for streak-free windows,
                  inside and out.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-md h-46 w-1/4 p-4  bg-white shadow-sm">
            <div className="flex-col">
              <img src="/icons/house.svg" alt="house" className=" w-12 mb-2" />
              <p className="text-theme2 text-lg font-semibold mb-1">
                Specialist Cleaning{" "}
              </p>
              <div className="">
                <p className="text-zinc-400 text-sm leading-4">
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
