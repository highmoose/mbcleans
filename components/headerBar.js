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
      <div className="hidden lg:block">
        <div id="home" className="w-full bg-white">
          <div className="bg-white px-6 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
            <div className=" flex">
              <div className="flex my-auto h-[70px]  ">
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
            <div className=" flex pt-2 ">
              <div className=" gap-x-4 my-auto h-[70px] justify-end ">
                <a
                  href="tel:07710172363"
                  className="text-4xl tracking-tight font-bold text-theme3 flex"
                >
                  07710172363
                </a>
                <p className="-m-1.5 text-sm italic font-extralight ">
                  Open Hours: Mon-Sat (9am-5pm)
                </p>
                {/* <div className="h-14 w-14 border-2 rounded-full">
              <img
                src="/icons/envelope.svg"
                alt="envelope"
                className=" w-6 flex m-auto h-full"
              />
            </div>
            <div className="h-14 w-14 border-2 rounded-full">
              <img
                src="/icons/phone.svg"
                alt="phone"
                className=" w-6 flex m-auto h-full"
              />
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
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
                  Mon-Sat (9am-5pm)
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto w-full bg-zinc-100 ">
              <div
                className={`flex-col sm:flex-row items-center font-semibold text-2xl sm:text-lg lg:text-md gap-x-2 sm:gap-x-6 ${
                  menuOpen ? "flex gap-y-2 py-6" : "hidden"
                }`}
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
        <button
          onClick={toggleMenu}
          className="w-full text-xl bg-gray-900 text-white py-2"
        >
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
    </div>
  );
}
