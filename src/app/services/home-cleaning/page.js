"use client";

import React from "react";
import { useState } from "react";
import SubHeaderBar from "../../../../components/subHeaderBar";
import ServicesIntro from "../../../../components/services/servicesIntro";
import ServiceKeyPoints from "../../../../components/services/serviceKeyPoints";
import ServiceReady from "../../../../components/services/serviceReady";

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
        description={"Why Choose Professional Office Cleaning Services?"}
        image={"/images/sub_banner_1.png"}
      />
      <ServicesIntro
        title={"Elevate Your Home with Professional Home Cleaning Services."}
        body1={
          "In today's busy world, maintaining a clean home can be challenging. Let us transform your space into a pristine sanctuary. Invest in professional home cleaning for a stress-free, healthier, and more enjoyable living space. Reclaim your time and experience the difference! Contact us today."
        }
        button={"Get in Touch"}
        // body2={"Let us transform your space into a clean and tidy sanctuary."}
        image1="/images/services/shower-soap-wiper.png"
        alt1={"Image 1 alt"}
        image2="/images/services/duster-mirror.png"
        alt2={"Image 1 alt"}
      />
      <ServiceKeyPoints
        title={"Key Advantages of Hiring a Cleaner for Your Home:"}
        image1={"/images/services/sink-sponge-glove.png"}
        alt1={"Home Cleaning Shower"}
        keyTitle1={"Time-Saving Convenience"}
        keyBody1={
          "Free up your time for what matters most. No more weekend cleaning sessions."
        }
        keyTitle2={"Expertise and Experience"}
        keyBody2={
          " Skilled cleaners deliver superior results quickly. Industry-best practices ensure effectiveness."
        }
        keyTitle3={"Customized Cleaning Plans"}
        keyBody3={
          "Customized plans to fit your needs perfectly. From routine maintenance to deep cleaning, we've got you covered."
        }
        keyTitle4={"Consistent Quality and Reliability"}
        keyBody4={
          "Consistently clean and hygienic home. Every detail receives thorough attention."
        }
        keyTitle5={"Health and Well-being"}
        keyBody5={
          "Eliminate dust, allergens, and germs for a healthier environment. Reduce the risk of respiratory problems and allergies."
        }
        keyTitle6={"Stress Reduction"}
        keyBody6={
          " Bid farewell to cleaning stress. Enjoy peace of mind with expert care."
        }
      />
      <ServiceReady
        body1={
          "Invest in professional home cleaning for a stress-free, healthier, and more enjoyable living space. "
        }
        question={"Ready to get started?"}
        button={"Get in Touch"}
      />
    </div>
  );
}
