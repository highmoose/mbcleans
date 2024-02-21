import React from "react";
import { Shadows_Into_Light } from "@next/font/google";
import Image from "next/image";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EstimateBar() {
  return (
    <div>
      <img
        alt="MBCleans cleaner hoovering floor"
        src="/images/mbcleans_estimate_image_2.png"
        className="absolute object-cover  w-full h-[770px] "
      />
      <div className=" relative  flex">
        <div className="flex gap-x-8 max-w-6xl mx-auto">
          <div className="w-1/2 bg-white rounded-md my-24 p-6">
            <p className="text-theme2 tracking-tight text-2xl font-bold mb-4">
              Request an estimate:
            </p>
            <p className=" font-regular text-sm mb-4 text-zinc-400 ">
              For a cleaning that meets your highest standards, you need a
              dedicated team of trained specialists with all supplies needed to
              thoroughly clean your home.
            </p>
            <div className="text-black">
              <div className="flex gap-x-4 mb-4">
                <div className="w-1/2">
                  <label
                    for="chooseService"
                    class="block text-base font-medium text-gray-900"
                  >
                    Choose your service *
                  </label>

                  <select
                    name="chooseService"
                    id="chooseService"
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="otc">One time clean</option>
                    <option value="wc">Weekly clean</option>
                    <option value="bwc">Bi weekly clean</option>
                    <option value="mc">Monthly clean</option>
                    <option value="mdc">Multi day per week clean</option>
                    <option value="eotc">End of tenancy clean</option>
                    <option value="ic">Incident clean</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-1/2 ">
                  <label
                    for="typeOfClean"
                    class="block text-base font-medium text-gray-900 "
                  >
                    Type of clean *
                  </label>

                  <select
                    name="typeOfClean"
                    id="typeOfClean"
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="lc">Light clean</option>
                    <option value="mdc">Medium clean</option>
                    <option value="dc">Deep clean</option>
                  </select>
                </div>
              </div>
              <div className="flex text-black">
                <div className="flex gap-x-4 mb- w-full">
                  <div className="w-1/2">
                    <label
                      for="propertyType"
                      class="block text-base font-medium text-gray-900"
                    >
                      Property type *
                    </label>

                    <select
                      name="propertyType"
                      id="propertyType"
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="">Please select</option>
                      <option value="Home">Home</option>
                      <option value="apartment">Apartment</option>
                      <option value="office">Office</option>
                      <option value="store">Store</option>
                      <option value="warehouse">Warehouse</option>
                    </select>
                  </div>
                  <div className="w-1/2 ">
                    <label
                      for="typeOfClean"
                      class="block text-base font-medium text-gray-900 "
                    >
                      Company?
                    </label>

                    <input
                      name="typeOfClean"
                      id="typeOfClean"
                      placeholder="Company name?"
                      type="text"
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex text-black mb-6 gap-x-4">
                <div className="w-1/3 ">
                  <div className="">
                    <label
                      for="propertyType"
                      class="block text-base font-medium text-gray-900"
                    >
                      Rooms(s)
                    </label>

                    <select
                      name="propertyType"
                      id="propertyType"
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="">1</option>
                      <option value="Home">2</option>
                      <option value="apartment">3</option>
                      <option value="office">4</option>
                      <option value="store">5</option>
                      <option value="warehouse">6</option>
                      <option value="store">7</option>
                      <option value="warehouse">8</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="">
                    <label
                      for="propertyType"
                      class="block text-base font-medium text-gray-900"
                    >
                      Hallway(s)
                    </label>

                    <select
                      name="propertyType"
                      id="propertyType"
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="">1</option>
                      <option value="Home">2</option>
                      <option value="apartment">3</option>
                      <option value="office">4</option>
                      <option value="store">5</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="">
                    <label
                      for="propertyType"
                      class="block text-base font-medium text-gray-900"
                    >
                      Staircase(s)
                    </label>

                    <select
                      name="propertyType"
                      id="propertyType"
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="">1</option>
                      <option value="Home">2</option>
                      <option value="apartment">3</option>
                      <option value="office">4</option>
                      <option value="store">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-2 font-semibold">
                Do you have the neccesary cleaning supplies? *
              </div>
              <div class="control mb-4">
                <label class="radio pr-4">
                  <input type="radio" name="answer" className="mr-1" />
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="answer" className="mr-1" />
                  No
                </label>
              </div>
              <button className="bg-theme2 hover:bg-slate-800 flex justify-between font-bold w-full text-left p-4 rounded-md">
                <p className="text-white ">Submit Request</p>
                <img
                  alt="right arrow"
                  src="/icons/arrow-right-circle-white.svg"
                />
              </button>
            </div>
          </div>
          <div className="w-1/2 rounded-md my-auto">
            <p
              className={`text-yellow-300 mb-2 text-3xl ${Shadows_Into_Light1.className}`}
            >
              We&lsquo;re the best in the business!
            </p>
            <p className="text-white font-medium  tracking-tight  text-5xl  mb-6">
              Your clients & employees deserve a clean, safe and healthy
              environment!
            </p>

            <p className="text-white text-sm mb-4">
              Hiring someone to clean your property can feel like a big decision
              as your want to hire the best house cleaning service you can.
            </p>
            <div className="flex gap-x-4 items-center mb-6">
              <div className=" border-4 rounded-full p-2">
                <Image
                  src="/icons/check-white.svg"
                  width={25}
                  height={25}
                  className="text-white"
                />
              </div>
              <p className="text-white font-semibold text-2xl">
                Worry Free Services
              </p>
            </div>
            <p className="text-white text-sm mb-8">
              We do everything we can to make out services as affordable as
              possible. Our budget flexability extends all the way to employing
              the right amount of help at the right times to make a positive
              difference in our customers lives and give confidence in our
              services.
            </p>
            <div className="items-center gap-x-4">
              <p className="text-2xl font-extralight ">Or call us on:</p>
              <p className="text-5xl font-bold ">0800 123 4567</p>
              <p className="text-1xl font-extralight ">
                Open Hours: Mon-Sat (9am-5pm)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
