"use client";

import React from "react";
import { useState } from "react";

const scrollToHome = () => {
  const contactSection = document.getElementById("home");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToPlans = () => {
  const contactSection = document.getElementById("plans");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToAboutUs = () => {
  const contactSection = document.getElementById("aboutUs");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToPartners = () => {
  const contactSection = document.getElementById("partners");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTestimonials = () => {
  const contactSection = document.getElementById("testimonials");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      {/* Full Width */}
      <div className="hidden lg:block">
        <div id="home" className="w-full bg-white">
          <div className="bg-white px-6 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-end">
            <div className=" flex">
              <div href="/" className="flex my-auto h-[70px] cursor-pointer">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className="h-9 my-auto"
                />
              </div>
            </div>
            <div className="">
              <div className="flex items-center h-[85px] justify-center">
                <div className="flex items-center font-semibold text-md gap-x-2 md:gap-x-6">
                  <div
                    onClick={scrollToHome}
                    href="#home"
                    className="cursor-pointer"
                  >
                    Home
                  </div>
                  <div onClick={scrollToPlans} className="cursor-pointer">
                    Plans
                  </div>
                  <div
                    onClick={scrollToAboutUs}
                    href="#aboutus"
                    className="cursor-pointer"
                  >
                    About Us
                  </div>
                  <div onClick={scrollToPartners} className="cursor-pointer">
                    Partners
                  </div>
                  <div onClick={scrollToContact} className="cursor-pointer">
                    Contact
                  </div>
                  <div
                    onClick={scrollToTestimonials}
                    className="cursor-pointer"
                  >
                    Testimonials
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-col justify-center my-auto w-full z-20">
                <a
                  href="tel:07710172363"
                  className="text-4xl tracking-tight font-bold text-theme3 w-full h-full"
                >
                  07710172363
                </a>
                <p className="-mt-1.5 text-sm italic font-extralight ">
                  Open Hours: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Width */}
      <div className="hidden sm:block lg:hidden">
        <div id="home" className="w-full bg-white">
          <div className="flex-col bg-white pt-4 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
            <div className="flex justify-between mb-6 px-6 lg:px-0">
              <div className="flex my-auto w-1/2">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className="w-full max-w-[200px] my-auto"
                />
              </div>
              <div className=" max-w-[200px] my-auto w-1/2">
                <a
                  href="tel:07710172363"
                  className="text-3xl sm:text-4xl tracking-tight font-bold text-theme3 justify-end flex"
                >
                  07710172363
                </a>

                <p className="-mt-1.5 text-sm text-end sm:text-sm italic font-extralight">
                  Open Hours: 24/7
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto w-full bg-slate-50">
              <div
                className="flex-col sm:flex-row items-center font-semibold text-md gap-x-2 sm:gap-x-6 ${
                  flex gap-y-2 py-4"
              >
                <div onClick={scrollToHome} className="cursor-pointer">
                  Home
                </div>
                <div onClick={scrollToPlans} className="cursor-pointer">
                  Plans
                </div>
                <div onClick={scrollToAboutUs} className="cursor-pointer">
                  About Us
                </div>
                <div onClick={scrollToPartners} className="cursor-pointer">
                  Partners
                </div>
                <div onClick={scrollToContact} className="cursor-pointer">
                  Contact
                </div>
                <div onClick={scrollToTestimonials} className="cursor-pointer">
                  Testimonials
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Narrow Width */}
      <div className="sm:hidden">
        <div id="home" className="w-full bg-white">
          <div className="flex-col bg-white pt-4 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
            <div className="flex justify-between mb-6 px-6 lg:px-0">
              <div className="flex my-auto w-1/2">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className="w-full max-w-[200px] my-auto"
                />
              </div>
              <div className=" max-w-[200px] my-auto w-1/2">
                <a
                  href="tel:07710172363"
                  className="text-3xl sm:text-4xl tracking-tight font-bold text-theme3 justify-end flex"
                >
                  07710172363
                </a>

                <p className="-mt-1.5 text-sm text-end sm:text-sm italic font-extralight">
                  Open Hours: 24/7
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto w-full bg-slate-50 ">
              <div
                className={`flex-col sm:flex-row items-center font-semibold text-lg gap-x-2 sm:gap-x-6 ${
                  menuOpen ? "flex  py-6 w-full" : "hidden"
                }`}
              >
                <div
                  onClick={scrollToHome}
                  className="cursor-pointer flex w-full active:bg-slate-300 py-1"
                >
                  <p className="text-center w-full">Home</p>
                </div>
                <div
                  onClick={scrollToPlans}
                  className="cursor-pointer flex w-full active:bg-slate-300  py-1"
                >
                  <p className="text-center w-full">Plans</p>
                </div>
                <div
                  onClick={scrollToAboutUs}
                  className="cursor-pointer flex w-full active:bg-slate-300  py-1"
                >
                  <p className="text-center w-full">About Us</p>
                </div>
                <div
                  onClick={scrollToPartners}
                  className="cursor-pointer flex w-full active:bg-slate-300  py-1"
                >
                  <p className="text-center w-full">Partners</p>
                </div>
                <div
                  onClick={scrollToContact}
                  className="cursor-pointer flex w-full active:bg-slate-300  py-1"
                >
                  <p className="text-center w-full">Contact</p>
                </div>
                <div
                  onClick={scrollToTestimonials}
                  className="cursor-pointer flex w-full active:bg-slate-300  py-1"
                >
                  <p className="text-center w-full">Testimonials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="w-full text-lg bg-gray-900 text-white py-2"
        >
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
    </div>
  );
}
