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
      <div className="py-6">
        <div className="text-black text-lg max-w-6xl bg-white rounded-md mx-auto px-6 lg:px-10 py-16 ">
          <p className="px-8 mb-8 leading-[22px]">
            Maintaining a clean and organized home is essential for your
            well-being and peace of mind. However, with today's busy lifestyles,
            finding the time and energy to keep up with household chores can be
            challenging. That's where professional home cleaning services come
            in. Let us take the burden off your shoulders and transform your
            living space into a pristine sanctuary.
          </p>
          <div className="flex px-8 gap-x-4">
            <p className="w-1/2">
              <p className="text-xl mb-2 text-slate-700 font-bold">
                Key Benefits of Hiring a Home Cleaner:
              </p>

              <p className="text-lg text-theme2 font-semibold  ">
                1: Time-Saving Convenience
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Free up your valuable time to focus on work, family, and
                  personal pursuits.
                </li>
                <li className="text-base leading-5">
                  • Eliminate the need to spend your weekends or evenings
                  scrubbing, dusting, and vacuuming.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                2: Expertise and Experience
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Our trained and skilled cleaners have the expertise to
                  tackle even the toughest cleaning tasks efficiently and
                  effectively.
                </li>
                <li className="text-base leading-5">
                  • Benefit from industry-best practices and specialized
                  techniques to achieve superior results.
                </li>
              </ul>

              <p className="text-lg text-theme2 font-semibold">
                3: Customized Cleaning Plans
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Tailored cleaning solutions to meet your specific needs and
                  preferences.
                </li>
                <li className="text-base leading-5">
                  • Whether you require regular maintenance cleaning, deep
                  cleaning, or specialized services, we&apos;ve got you covered.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                4: Consistent Quality and Reliability
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Enjoy a consistently clean and hygienic home with our
                  reliable cleaning professionals.
                </li>
                <li className="text-base leading-5">
                  • We adhere to strict quality standards and ensure thorough
                  attention to detail in every cleaning session.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                5: Health and Well-being
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Maintain a healthier indoor environment by eliminating dust,
                  allergens, and germs.
                </li>
                <li className="text-base leading-5">
                  • Reduce the risk of respiratory problems and allergic
                  reactions for you and your family.
                </li>
              </ul>
              <p className="text-lg text-theme2 font-semibold">
                6: Stress Reduction
              </p>
              <ul className="pl-4 mb-2">
                <li className="text-base leading-5 mb-1">
                  • Say goodbye to the stress and hassle of cleaning chores.
                </li>
                <li className="text-base leading-5">
                  • Experience the peace of mind that comes with knowing your
                  home is in expert hands.
                </li>
              </ul>
            </p>
          </div>
          <p className="px-8 mt-8 mb-2 leading-[22px]">
            Investing in professional home cleaning services offers numerous
            benefits, from saving time and reducing stress to maintaining a
            healthy living environment. Let us help you reclaim your time and
            enjoy a clean, comfortable home without the hassle and effort of DIY
            cleaning.
          </p>
          <p className="px-8 leading-[22px]">
            Contact us today to schedule your first cleaning appointment and
            experience the difference professional home cleaners can make!
          </p>
        </div>
      </div>
    </div>
  );
}
