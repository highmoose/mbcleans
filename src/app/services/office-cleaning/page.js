"use client";

import React from "react";
import { useState } from "react";
import SubHeaderBar from "../../../../components/subHeaderBar";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(Array.from({ length: 10 }, () => false));

  const toggleFAQ = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="bg-slate-50">
      <SubHeaderBar
        title={"Home Cleaning Services"}
        description={"Why Choose Professional Home Cleaning Services?"}
        image={"/images/sub_banner_1.png"}
      />
      <div className="flex justify-between">
        <div className="text-theme2 font-bold text-2xl max-w-6xl rounded-md mx-auto px-6 lg:px-10 py-16 ">
          <p className="px-28 mb-16 text-5xl tracking-tighter leading-[40px] font-semibold text-center mx-auto">
            Maintaining a clean home can be challenging. Let us transform your
            space into a pristine sanctuary.
          </p>
          <div className="flex px-8 font-thin mb-16 w-full  gap-x-4 ">
            <div className="w-auto bg-white p-8 rounded-md">
              <p className="text-2xl mb-2 text-theme3 font-bold">
                Key Benefits of Hiring a Home Cleaner:
              </p>

              <p className="text-lg text-theme2 font-semibold  ">
                Time-Saving Convenience
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Free up your time for what matters most.
                </li>
                <li className="text-base leading-5">
                  • No more weekend cleaning sessions.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                Expertise and Experience
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Skilled cleaners deliver superior results quickly.
                </li>
                <li className="text-base leading-5">
                  • Industry-best practices ensure effectiveness.
                </li>
              </ul>

              <p className="text-lg text-theme2 font-semibold">
                Customized Cleaning Plans
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Customized plans to fit your needs perfectly.
                </li>
                <li className="text-base leading-5">
                  • From routine maintenance to deep cleaning, we&apos;ve got
                  you covered.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                Consistent Quality and Reliability
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Consistently clean and hygienic home.
                </li>
                <li className="text-base leading-5">
                  • Every detail receives thorough attention.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                Health and Well-being
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Eliminate dust, allergens, and germs for a healthier
                  environment.
                </li>
                <li className="text-base leading-5">
                  • Reduce the risk of respiratory problems and allergies.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                Stress Reduction
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Bid farewell to cleaning stress.
                </li>
                <li className="text-base leading-5">
                  • Enjoy peace of mind with expert care.
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <img
                src="/images/services/shower-soap-wiper.png"
                alt="home_cleaning"
                className="rounded-md"
              />
            </div>
          </div>
          <div className="flex px-8 mb-16 gap-x-4">
            <div className="w-auto">
              <img
                src="/images/services/bedroom-clean.png"
                alt="home_cleaning"
                className="rounded-md"
              />
            </div>
            <div className="bg-white p-8 rounded-md font-thin">
              <p className="text-2xl mb-2 text-theme3 font-bold">
                Considerations:
              </p>
              <ul className="pl-4 mb-2">
                <p className="text-lg text-theme2 font-semibold">
                  Cost vs. Value
                </p>
                <ul className="pl-4 mb-2">
                  <li className="text-base leading-5 mb-1">
                    • Consider the investment in a professionally cleaned home.
                  </li>
                </ul>
                <p className="text-lg text-theme2 font-semibold">
                  Privacy and Security
                </p>
                <ul className="pl-4 mb-2">
                  <li className="text-base leading-5 mb-1">
                    • Trustworthy professionals with thorough background checks.{" "}
                  </li>
                </ul>
                <p className="text-lg text-theme2 font-semibold">
                  Personal Preferences
                </p>
                <ul className="pl-4 mb-2">
                  <li className="text-base leading-5 mb-1">
                    • Customize cleaning to your liking.{" "}
                  </li>
                </ul>
                <p className="text-lg text-theme2 font-semibold">
                  Environmental Consciousness
                </p>
                <ul className="pl-4 mb-2">
                  <li className="text-base leading-5 mb-1">
                    • Opt for eco-friendly options.{" "}
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="">
            <p className="px-8 mb-4 leading-7 text-center max-w-3xl mx-auto">
              Invest in professional home cleaning for a stress-free, healthier,
              and more enjoyable living space. Reclaim your time and experience
              the difference! Contact us today.
            </p>
            <p className="px-10 mb-4 text-5xl tracking-tighter leading-[55px] font-semibold text-center mx-auto">
              Ready to get started?
            </p>
            <div className="flex justify-center mb-6">
              <button class="w-80 pt-6 md:pt-0 mx-auto sm:mx-0">
                <a class="bg-theme1 text-white cursor-pointer justify-center text-xl text-center rounded-lg shadow px-10 py-3 flex items-center">
                  Book a Home Clean Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
