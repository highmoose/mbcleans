"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function HeaderBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); //
    }
  };

  function Menu() {
    return (
      <nav className="sm:flex text-center sm:text-start items-center font-semibold text-black leading-9 sm:leading-none text-xl sm:text-lg sm:text-md gap-x-4 xl:gap-x-6">
        <MenuItem href="/" onClick={() => scrollToSection("home")}>
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleServices();
            toggleMenu();
          }}
        >
          <p
            className={`flex justify-center ${
              showServices ? "text-theme3" : "text-black"
            }`}
          >
            Services
          </p>
        </MenuItem>
        {/* <MenuItem href="/" onClick={() => scrollToSection("aboutUs")}>
          About Us
        </MenuItem> */}
        <MenuItem href="/" onClick={() => scrollToSection("partners")}>
          Partners
        </MenuItem>
        <MenuItem href="/" onClick={() => scrollToSection("contact")}>
          Contact
        </MenuItem>
        <MenuItem href="/" onClick={() => scrollToSection("testimonials")}>
          Testimonials
        </MenuItem>
        <MenuItem href="/faq">FAQ&apos;s</MenuItem>
      </nav>
    );
  }

  function ServicesDropDown() {
    return (
      <div class="border-gray-200 shadow-xl bg-gray-50  border-y max-w-5xl rounded-b-md px-4 py-5">
        <div class="grid mx-auto text-gray-900  sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a
                href="/services/home-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100  "
              >
                <div class="font-semibold">Home Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Bringing cleanliness and comfort to your doorstep.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/services/office-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100 "
              >
                <div class="font-semibold">Office Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Boosting productivity with spotless workspaces.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/services/warehouse-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100 "
              >
                <div class="font-semibold">Warehouse Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Optimizing warehouse hygiene for smooth operations
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="/services/school-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100 "
              >
                <div class="font-semibold">School Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Promoting a clean and safe learning environment.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/services/retail-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100 "
              >
                <div class="font-semibold">Retail Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Keeping stores sparkling for seamless shopping.
                </span>
              </a>
            </li>
            <li>
              <a
                href="/services/medical-facility-cleaning"
                class="block p-3 rounded-lg hover:bg-gray-100 "
              >
                <div class="font-semibold">Medical Facility Cleaning</div>
                <span class="text-sm text-gray-500 ">
                  Ensuring pristine hygiene in healthcare settings.
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => setShowServices(false)}
          className="flex justify-center px-5 pt-4 cursor-pointer "
        >
          <p className="text-center text-theme2">Close ✖</p>
        </div>
      </div>
    );
  }

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  function Logo() {
    return (
      <Link href="/" className="flex my-auto h-[70px] cursor-pointer">
        <img
          alt="MBCleans Logo"
          src="/logo/mbcleans-logo.svg"
          className="h-8 sm:h-9 my-auto"
        />
      </Link>
    );
  }

  function Contact() {
    return (
      <div className="flex">
        <div className="flex-col justify-center my-auto w-full z-20">
          <a
            href="tel:07710172363"
            className="flex gap-x-1 items-center text-end tracking-tight font-bold text-theme3 w-full h-full"
          >
            <div>
              <p className="text-[26px]  sm:text-3xl">07710172363</p>
              <p className="-mt-1.5 text-sm text-end text-black font-medium italic ">
                Open Hours: 24/7&nbsp;&nbsp;
              </p>
            </div>
            <img
              src="/icons/phone-circle-blue.svg"
              className="h-10 sm:h-12 scale-x-[-1]"
              alt="Contact Us Phone"
            />
          </a>
        </div>
      </div>
    );
  }

  function ToggleMenu() {
    return (
      <div className="sm:hidden">
        <button className="text-lg text-white flex focus:outline-non">
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Wide Menu */}
      <div className="hidden lg:block ">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Logo />
          <div className="hidden lg:block z-40">
            <Menu />
          </div>
          <Contact />
        </div>
        <div className="absolute z-10 bg-slate-50 left-1/2 -translate-x-1/2 rounded-b-md">
          {showServices ? <ServicesDropDown /> : null}
        </div>
      </div>

      {/* Middle Menu */}
      <div className="hidden sm:block lg:hidden">
        <div className="flex justify-between px-6">
          <Logo />
          <Contact />
        </div>
        <div className="flex justify-center bg-slate-50 py-4">
          <Menu />
        </div>
        <div className="absolute z-10 bg-slate-50 left-1/2 w-2/3 -translate-x-1/2 rounded-b-md">
          {showServices ? <ServicesDropDown /> : null}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" sm:hidden">
        <div className="flex justify-between px-2">
          <Logo />
          <Contact />
        </div>

        <div
          className={`bg-slate-50 py-3 sm:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Menu />
        </div>
        <div
          onClick={toggleMenu}
          className="cursor-pointer flex justify-center bg-slate-900 py-2"
        >
          <ToggleMenu />
        </div>
        <div className="absolute z-10 bg-slate-50 left-1/2 w-full -translate-x-1/2 rounded-b-md">
          {showServices ? <ServicesDropDown /> : null}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ children, onClick, href }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      {href ? <Link href={href}>{children}</Link> : <span>{children}</span>}
    </div>
  );
}
