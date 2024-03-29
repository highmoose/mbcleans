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
        title={"Office Cleaning Services"}
        description={"Hiring a professional office cleaner makes sense!"}
        image={"/images/sub_banner_1.png"}
      />
      <ServicesIntro
        title={
          "Experience a Refreshing Office Environment with Professional Cleaning Services."
        }
        body1={
          "In the fast-paced world of business, maintaining a clean and organized office environment is essential for productivity and professionalism. Our professional cleaning services are here to ensure your workspace is not just clean, but refreshed, revitalized, and ready to inspire success."
        }
        button={"Get in Touch"}
        // body2={"Let us transform your space into a clean and tidy sanctuary."}
        image1="/images/services/shower-soap-wiper.png"
        alt1={"Image 1 alt"}
        image2="/images/services/duster-mirror.png"
        alt2={"Image 1 alt"}
      />
      <ServiceKeyPoints
        title={"Key Advantages of Hiring an Office Cleaner for Your Business:"}
        image1={"/images/services/sink-sponge-glove.png"}
        alt1={"Home Cleaning Shower"}
        keyTitle1={"Boost Productivity"}
        keyBody1={
          "Create an environment conducive to focused work. Eliminate clutter and distractions for enhanced efficiency."
        }
        keyTitle2={"Impress Clients and Visitors"}
        keyBody2={
          "Make a positive first impression with a clean and welcoming office. Showcase your commitment to excellence and attention to detail."
        }
        keyTitle3={"Promote Health and Safety"}
        keyBody3={
          "Reduce the spread of germs and illnesses among your team. Maintain a safe, tidy & hygienic workplace for employee well-being."
        }
        keyTitle4={"Customized Cleaning Solutions"}
        keyBody4={
          "Tailor-made cleaning plans to suit your office's unique needs. From desks and conference rooms to communal areas, we've got you covered."
        }
        keyTitle5={"Reliable and Consistent Service"}
        keyBody5={
          "Count on our team to deliver reliable and consistent cleaning services. We pay meticulous attention to detail to ensure every corner of your office is spotless."
        }
        keyTitle6={"Time and Cost Efficiency"}
        keyBody6={
          "Save valuable time and resources by outsourcing your office cleaning needs to professionals. Eliminate the hassle of managing in-house cleaning staff and focus on your core business activities."
        }
      />
      <ServiceReady
        body1={
          "Experience a refreshed and revitalized workspace that fosters productivity, impresses clients, and supports a healthier work environment."
        }
        question={"Ready to get started?"}
        button={"Get in Touch"}
      />
    </div>
  );
}
