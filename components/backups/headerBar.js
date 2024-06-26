"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

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
              <Link href="/" className="flex my-auto h-[70px] cursor-pointer">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className="h-9 my-auto"
                />
              </Link>
            </div>
            <div className="">
              <div className="flex items-center h-[85px] justify-center">
                <div className="flex items-center font-semibold text-md gap-x-2 md:gap-x-6">
                  <Link
                    href="/"
                    onClick={scrollToHome}
                    className="cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    onClick={scrollToPlans}
                    className="cursor-pointer"
                  >
                    Plans
                  </Link>
                  <Link
                    href="/"
                    onClick={scrollToAboutUs}
                    className="cursor-pointer"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    onClick={scrollToPartners}
                    className="cursor-pointer"
                  >
                    Partners
                  </Link>
                  <Link
                    href="/"
                    onClick={scrollToContact}
                    className="cursor-pointer"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/"
                    onClick={scrollToTestimonials}
                    className="cursor-pointer"
                  >
                    Testimonials
                  </Link>
                  <Link href="/faq">FAQ&apos;s</Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-col justify-center my-auto w-full z-20">
                <a
                  href="tel:07710172363"
                  className="flex gap-x-1 items-center text-end text-3xl tracking-tight font-bold text-theme3 w-full h-full"
                >
                  <div>
                    <p>07710172363</p>
                    <p className="-mt-1.5 text-sm text-end text-black font-light italic ">
                      Open Hours: 24/7&nbsp;&nbsp;
                    </p>
                  </div>
                  <img
                    src="/icons/phone-circle-blue.svg"
                    className="h-12 w-12 scale-x-[-1]"
                    alt="Contact Us Phone"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Width */}
      <div className="hidden sm:block lg:hidden">
        <div id="home" className="w-full bg-white">
          <div className="flex-col bg-white pt-4 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
            <div className="flex justify-between mb-3 px-6 lg:px-0">
              <Link href="/" className="flex my-auto w-1/2 cursor-pointer">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className=" h-9 my-auto"
                />
              </Link>
              <div className="flex">
                <div className="flex-col justify-center my-auto w-full z-20">
                  <a
                    href="tel:07710172363"
                    className="flex gap-x-1 items-center  text-end text-3xl tracking-tight font-bold text-theme3 w-full h-full"
                  >
                    <div>
                      <p>07710172363</p>
                      <p className="-mt-1.5 text-sm text-end text-black font-light italic ">
                        Open Hours: 24/7&nbsp;&nbsp;
                      </p>
                    </div>
                    <img
                      src="/icons/phone-circle-blue.svg"
                      className="h-12 w-12 scale-x-[-1]"
                      alt="Contact Us Phone"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto w-full bg-slate-50">
              <div
                className="flex-col sm:flex-row items-center font-semibold text-md gap-x-2 sm:gap-x-6 ${
                  flex gap-y-2 py-4"
              >
                <Link
                  href="/"
                  onClick={scrollToHome}
                  className="cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  onClick={scrollToPlans}
                  className="cursor-pointer"
                >
                  Plans
                </Link>
                <Link
                  href="/"
                  onClick={scrollToAboutUs}
                  className="cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  onClick={scrollToPartners}
                  className="cursor-pointer"
                >
                  Partners
                </Link>
                <Link
                  href="/"
                  onClick={scrollToContact}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  onClick={scrollToTestimonials}
                  className="cursor-pointer"
                >
                  Testimonials
                </Link>
                <Link href="/faq">FAQ&apos;s</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Narrow Width */}
      <div className="sm:hidden">
        <div id="home" className="w-full bg-white">
          <div className="flex-col bg-white pt-4 xl:px-0 max-w-6xl mx-auto flex justify-between w-full text-black text-center">
            <div className="flex justify-between mb-3 px-2 lg:px-0">
              <Link href="/" className="flex my-auto">
                <img
                  alt="MBCleans Logo"
                  src="/logo/mbcleans-logo.svg"
                  className="w-full max-w-[160px] my-auto"
                />
              </Link>
              <div className="flex">
                <div className="flex-col justify-center my-auto w-full z-20">
                  <a
                    href="tel:07710172363"
                    className="flex gap-x-1 items-center  text-end text-[26px] leading-7 tracking-tight font-bold text-theme3 w-full h-full"
                  >
                    <div>
                      <p>07710172363</p>
                      <p className="-mt-1.5 text-sm text-end text-black font-light italic ">
                        Open Hours: 24/7&nbsp;&nbsp;
                      </p>
                    </div>
                    <img
                      src="/icons/phone-circle-blue.svg"
                      className="h-10 w-10 scale-x-[-1]"
                      alt="Contact Us Phone"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mx-auto w-full bg-slate-50 ">
              <div
                className={`flex-col sm:flex-row items-center font-semibold text-lg gap-x-2 sm:gap-x-6 ${
                  menuOpen ? "flex  py-6 w-full" : "hidden"
                }`}
              >
                <Link
                  href="/"
                  onClick={scrollToHome}
                  className="cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  onClick={scrollToPlans}
                  className="cursor-pointer"
                >
                  Plans
                </Link>
                <Link
                  href="/"
                  onClick={scrollToAboutUs}
                  className="cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  onClick={scrollToPartners}
                  className="cursor-pointer"
                >
                  Partners
                </Link>
                <Link
                  href="/"
                  onClick={scrollToContact}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  onClick={scrollToTestimonials}
                  className="cursor-pointer"
                >
                  Testimonials
                </Link>
                <Link href="/faq">FAQ&apos;s</Link>
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

// <div
//   id="mega-menu-full-dropdown"
//   class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y"
// >
//   <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900  sm:grid-cols-2 md:px-6">
//     <ul>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Online Stores</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Segmentation</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Marketing CRM</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//     </ul>
//     <ul>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Online Stores</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Segmentation</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="block p-3 rounded-lg hover:bg-gray-100 ">
//           <div class="font-semibold">Marketing CRM</div>
//           <span class="text-sm text-gray-500 ">
//             Connect with third-party tools that you're already using.
//           </span>
//         </a>
//       </li>
//     </ul>
//   </div>
// </div>;
