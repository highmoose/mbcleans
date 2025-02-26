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
        telephone: "",
        chooseService: "",
        typeOfClean: "",
        propertyType: "",
        roomsSelect: "",
        bathroomSelect: "",
        hallwaySelect: "",
        staircaseSelect: "",
    });

    const [emailSuccess, setEmailSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
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
                setEmailSuccess(true);
                setSubmitted(true);
            } else {
                console.error("Failed to send email:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div id="contact" className="relative py-16">
            <Image
                alt="MBCleans cleaner hoovering floor"
                src="/images/mbcleans_estimate_image_3.png"
                class="absolute inset-0 w-full h-full object-cover"
                width={2600}
                height={1500}
            />
            <div className="bg-gradient-to-r from-black to-transparent opacity-10 absolute inset-0 z-100"></div>
            <div className=" relative flex my-16 md:my-20 lg:my-10 xl:my-8">
                <div className="lg:flex gap-x-8 sm:px-3 sm:px-8 md:px-10 max-w-6xl mx-auto ">
                    {/* Contact Information Section */}
                    <div className="lg:w-1/2 rounded-md lg:my-auto px-4 sm:px-16 lg:px-0  mb-8">
                        <p
                            className={`text-yellow-300 text-3xl sm:text-4xl mb-2 text-center lg:text-start ${Shadows_Into_Light1.className}`}
                        >
                            We&lsquo;re the best in the business!
                        </p>
                        <p className="text-white font-medium tracking-tight text-4xl leading-8 md:leading-[44px] md:text-5xl mb-2  lg:mb-4 text-center lg:text-start">
                            Your clients & employees deserve a clean, safe and
                            healthy environment!
                        </p>

                        <p className="text-white text-base mb-2  lg:mb-4 text-center lg:text-start">
                            We do everything we can to make our services as
                            affordable as possible.
                        </p>
                        <a href="tel:07710172363">
                            <div className="flex mb-4 items-center gap-x-4 justify-center lg:justify-start">
                                <div className="items-center gap-x-4 text-white text-center lg:text-start">
                                    <p className="text-2xl md:text-3xl ">
                                        You can call us on:
                                    </p>

                                    <div className="flex">
                                        <p className="text-4xl md:text-5xl font-bold mr-3 ">
                                            07710172363
                                        </p>
                                        <Image
                                            src="/icons/phone-circle.svg"
                                            className="h-12 w-12 scale-x-[-1]"
                                            alt="Contact Us Phone"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    {/* <p className="text-lg md:text-xl font-extralight ">
                    Open Hours: 24/7
                  </p> */}
                                </div>
                            </div>
                        </a>
                        <a>
                            <p className="text-white text-base  text-center lg:text-start">
                                Alternatively, you can email us at:
                            </p>
                            <p className="text-white text-3xl text-center lg:text-start">
                                support@mbcleans.co.uk
                            </p>
                        </a>
                    </div>
                    {/* Estimate Form Section */}
                    <form
                        onSubmit={handleSubmit}
                        className="lg:w-1/2 bg-white rounded-md p-4 sm:p-6 "
                    >
                        <p className="text-theme2 tracking-tight text-2xl text-center lg:text-start font-bold">
                            Request an estimate:
                        </p>
                        <p className=" font-regular text-md mb-2 text-zinc-400 text-center lg:text-start">
                            Fill out the form below or call us directly.
                        </p>
                        <div className="text-black">
                            <div className="flex gap-x-4 mb-2">
                                <div className="w-1/2 ">
                                    <label
                                        for="names"
                                        q
                                        class="block text-base font-medium text-gray-900 "
                                    >
                                        Name: *
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
                                        Email: *
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
                            <div className="flex gap-x-4 mb-2">
                                <div className="w-1/2 ">
                                    <label
                                        for="telephone"
                                        class="block text-base font-medium text-gray-900 "
                                    >
                                        Contact No. *
                                    </label>

                                    <input
                                        required
                                        name="telephone"
                                        id="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        placeholder=""
                                        type="tel"
                                        class="mt-1.5 w-full p-2 h-14 bg-zinc-100 rounded-lg border-gray-300 text-gray-700 sm:text-base"
                                    ></input>
                                </div>
                                <div className="w-1/2">
                                    <label
                                        for="chooseService"
                                        class="block text-base font-medium text-gray-900"
                                    >
                                        Choose service *
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
                                        <option value="One time clean">
                                            One time clean
                                        </option>
                                        <option value="Weekly clean">
                                            Weekly clean
                                        </option>
                                        <option value="Bi weekly clean">
                                            Bi weekly clean
                                        </option>
                                        <option value="Monthly clean">
                                            Monthly clean
                                        </option>
                                        <option value="Multi day per week clean">
                                            Multi day per week clean
                                        </option>
                                        <option value="End of tenancy clean">
                                            End of tenancy clean
                                        </option>
                                        <option value="Incident clean">
                                            Incident clean
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex text-black  mb-2">
                                <div className="flex gap-x-4 mb- w-full mb-2">
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
                                            <option value="">
                                                Please select
                                            </option>
                                            <option value="Light clean">
                                                Light clean
                                            </option>
                                            <option value="Medium clean">
                                                Medium clean
                                            </option>
                                            <option value="Deep clean">
                                                Deep clean
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-1/2">
                                        <label
                                            for="propertyType"
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
                                            <option value="">
                                                Please select
                                            </option>
                                            <option value="Home">Home</option>
                                            <option value="Apartment">
                                                Apartment
                                            </option>
                                            <option value="Office">
                                                Office
                                            </option>
                                            <option value="Store">Store</option>
                                            <option value="Warehouse">
                                                Warehouse
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex text-black mb-6 gap-x-4">
                                <div className="w-1/4 ">
                                    <div className="">
                                        <label
                                            for="roomsSelect"
                                            class="block text-base font-medium text-gray-900"
                                        >
                                            Room(s)
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
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/4 ">
                                    <div className="">
                                        <label
                                            for="bathroomSelect"
                                            class="block text-base font-medium text-gray-900"
                                        >
                                            Bathroom(s)
                                        </label>

                                        <select
                                            name="bathroomSelect"
                                            id="bathroomSelect"
                                            value={formData.bathroomSelect}
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
                                <div className="w-1/4 ">
                                    <div className="">
                                        <label
                                            for="hallwaySelect"
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
                                <div className="w-1/4 ">
                                    <div className="">
                                        <label
                                            for="staircaseSelect"
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
                            <div
                                class="control mb-4"
                                required
                                onChange={handleChange}
                            >
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
                            {emailSuccess ? (
                                <button
                                    type="submit"
                                    className="bg-green-600 hover:bg-slate-800 flex justify-between font-bold w-full text-left p-4 rounded-md"
                                >
                                    <p className="text-white">
                                        Request Sent Successfully!
                                    </p>
                                    <Image
                                        alt="right arrow"
                                        src="/icons/circle-check.svg"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="bg-theme2 hover:bg-slate-800 flex justify-between font-bold w-full text-left p-4 rounded-md"
                                >
                                    <p className="text-white">Submit Request</p>
                                    <Image
                                        alt="right arrow"
                                        src="/icons/arrow-right-circle-white.svg"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
