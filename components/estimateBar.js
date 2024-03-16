"use client";

import React, { useState } from "react";
import { Shadows_Into_Light } from "next/font/google";
import Image from "next/image";

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
});

export default function EstimateBar() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    chooseService: "",
    typeOfClean: "",
    propertyType: "",
    companyName: "",
    roomsSelect: "",
    hallwaySelect: "",
    staircaseSelect: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue, // Use newValue instead of value ?????????????????????? im not sure
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully!");
        setSubmitted(true);
      } else {
        console.error("Failed to send email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div id="contact">
      <img
        alt="MBCleans cleaner hoovering floor"
        src="/images/mbcleans_estimate_image_2.png"
        className="absolute object-cover h-full "
      />
      <div className=" relative flex">
        <div className="lg:flex gap-x-8 px-10 lg:px-0 max-w-6xl mx-auto">
          {/* Contact Information Section */}
          <div className="lg:w-1/2 rounded-md lg:my-auto my-16 md:my-20">
            <p
              className={`text-yellow-300 text-3xl sm:text-4xl mb-2 text-center lg:text-start ${Shadows_Into_Light1.className}`}
            >
              We&lsquo;re the best in the business!
            </p>
            <p className="text-white font-medium tracking-tight text-4xl leading-8 md:text-5xl mb-2  lg:mb-6 text-center lg:text-start">
              Your clients & employees deserve a clean, safe and healthy
              environment!
            </p>

            <p className="text-white text-sm mb-2  lg:mb-6 text-center lg:text-start">
              Hiring someone to clean your property can feel like a big decision
              as your want to hire the best house cleaning service you can.
            </p>
            <div className="flex gap-x-4 items-center mb-2  lg:mb-6 justify-center lg:justify-start">
              <div className=" border-4 rounded-full p-2">
                <Image
                  src="/icons/check-white.svg"
                  width={25}
                  height={25}
                  className="text-white"
                />
              </div>
              <p className="text-white font-semibold text-2xl ">
                Worry Free Services
              </p>
            </div>
            <p className="text-white text-sm mb-2  lg:mb-6 text-center lg:text-start">
              We do everything we can to make out services as affordable as
              possible. Our budget flexability extends all the way to employing
              the right amount of help at the right times to make a positive
              difference in our customers lives and give confidence in our
              services.
            </p>
            <div className="items-center gap-x-4 text-center lg:text-start">
              <p className="text-3xl ">You can call us on:</p>

              <p className="text-5xl font-bold ">07710172363</p>
              <p className="text-1xl font-extralight ">
                Open Hours: Mon-Sat (9am-5pm)
              </p>
            </div>
          </div>
          {/* Estimate Form Section */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-white rounded-md p-6 "
          >
            <p className="text-theme2 tracking-tight text-2xl font-bold mb-2 lg:mb-4">
              Request an estimate:
            </p>
            <p className=" font-regular text-sm mb-4 text-zinc-400 ">
              For a cleaning that meets your highest standards, you need a
              dedicated team of trained specialists with all supplies needed to
              thoroughly clean your home.
            </p>
            <div className="text-black">
              <div className="flex gap-x-4 mb-4">
                <div className="w-1/2 ">
                  <label
                    for="typeOfClean"
                    class="block text-base font-medium text-gray-900 "
                  >
                    Name:
                  </label>

                  <input
                    required
                    name="names"
                    id="names"
                    value={formData.names}
                    onChange={handleChange}
                    placeholder=""
                    type="text"
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  ></input>
                </div>
                <div className="w-1/2 ">
                  <label
                    for="name"
                    class="block text-base font-medium text-gray-900 "
                  >
                    Email:
                  </label>

                  <input
                    required
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    type="email"
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  ></input>
                </div>
              </div>
              <div className="flex gap-x-4 mb-4">
                <div className="w-1/2">
                  <label
                    for="chooseService"
                    class="block text-base font-medium text-gray-900"
                  >
                    Choose your service *
                  </label>

                  <select
                    required
                    name="chooseService"
                    id="chooseService"
                    value={formData.chooseService}
                    onChange={handleChange}
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="One time clean">One time clean</option>
                    <option value="Weekly clean">Weekly clean</option>
                    <option value="Bi weekly clean">Bi weekly clean</option>
                    <option value="Monthly clean">Monthly clean</option>
                    <option value="Multi day per week clean">
                      Multi day per week clean
                    </option>
                    <option value="End of tenancy clean">
                      End of tenancy clean
                    </option>
                    <option value="Incident clean">Incident clean</option>
                    <option value="Other">Other</option>
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
                    required
                    name="typeOfClean"
                    id="typeOfClean"
                    value={formData.typeOfClean}
                    onChange={handleChange}
                    class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                  >
                    <option value="">Please select</option>
                    <option value="Light clean">Light clean</option>
                    <option value="Medium clean">Medium clean</option>
                    <option value="Deep clean">Deep clean</option>
                  </select>
                </div>
              </div>
              <div className="flex text-black">
                <div className="flex gap-x-4 mb- w-full mb-2">
                  <div className="w-1/2">
                    <label
                      for="email"
                      class="block text-base font-medium text-gray-900"
                    >
                      Property type *
                    </label>

                    <select
                      required
                      name="propertyType"
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="">Please select</option>
                      <option value="Home">Home</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Office">Office</option>
                      <option value="Store">Store</option>
                      <option value="Warehouse">Warehouse</option>
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
                      required
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder=""
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
                      required
                      name="roomsSelect"
                      id="roomsSelect"
                      value={formData.roomsSelect}
                      onChange={handleChange}
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
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
                      required
                      name="hallwaySelect"
                      id="hallwaySelect"
                      value={formData.hallwaySelect}
                      onChange={handleChange}
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
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
                      name="staircaseSelect"
                      id="staircaseSelect"
                      value={formData.staircaseSelect}
                      onChange={handleChange}
                      class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-2 font-semibold">
                Do you have the neccesary cleaning supplies? *
              </div>
              <div class="control mb-4" required onChange={handleChange}>
                <label class="radio pr-4">
                  <input
                    type="radio"
                    name="haveSupplies"
                    value="Yes"
                    className="mr-1"
                  />
                  Yes
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    name="haveSupplies"
                    value="No"
                    className="mr-1"
                  />
                  No
                </label>
              </div>
              <button
                type="submit"
                className="bg-theme2 hover:bg-slate-800 flex justify-between font-bold w-full text-left p-4 rounded-md"
              >
                <p className="text-white ">Submit Request</p>
                <img
                  alt="right arrow"
                  src="/icons/arrow-right-circle-white.svg"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
