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
        title={"Warehouse Cleaning Services"}
        description={"Are you looking for reliable warehouse cleaning service?"}
        image={"/images/sub_banner_1.png"}
      />
      <ServicesIntro
        title={
          "Transform Your Warehouse and Improve Safety with Professional Cleaning Solutions."
        }
        body1={
          "A clean and well-maintained warehouse is crucial for safety, efficiency, and overall operational success. Our professional cleaning services are designed to meet the unique needs of warehouses, ensuring a clean and organized environment that maximizes productivity and minimizes risks."
        }
        button={"Get in Touch"}
        // body2={"Let us transform your space into a clean and tidy sanctuary."}
        image1="/images/services/shower-soap-wiper.png"
        alt1={"Image 1 alt"}
        image2="/images/services/duster-mirror.png"
        alt2={"Image 1 alt"}
      />
      <ServiceKeyPoints
        title={"Key Advantages of Hiring Professional Warehouse Cleaners:"}
        image1={"/images/services/sink-sponge-glove.png"}
        alt1={"Home Cleaning Shower"}
        keyTitle1={"Enhanced Safety Standards"}
        keyBody1={
          "Create a safer working environment for your staff by eliminating hazards such as spills, debris, and clutter. Reduce the risk of accidents and injuries, ultimately saving time and money on potential liabilities."
        }
        keyTitle2={"Improved Efficiency and Workflow"}
        keyBody2={
          "Optimize your warehouse layout and workflow by maintaining clean and organized storage areas. Minimize downtime and maximize productivity with easy access to inventory and equipment."
        }
        keyTitle3={"Compliance with Regulations"}
        keyBody3={
          "Stay compliant with industry regulations and standards for cleanliness and hygiene. Avoid penalties and fines associated with non-compliance by ensuring your warehouse meets all necessary requirements."
        }
        keyTitle4={"Specialized Equipment and Expertise"}
        keyBody4={
          "Benefit from our specialized equipment and techniques tailored specifically for warehouse cleaning. Our experienced cleaners have the expertise to tackle even the toughest cleaning challenges, from high ceilings to industrial machinery."
        }
        keyTitle5={"Customized Cleaning Plans"}
        keyBody5={
          "Tailor-made cleaning plans to suit the unique layout and requirements of your warehouse. Whether you need daily maintenance or periodic deep cleaning, we can create a plan that fits your schedule and budget."
        }
        keyTitle6={"Inventory and Asset Protection"}
        keyBody6={
          "Protect your valuable inventory and assets from damage caused by dirt, dust, and debris. Extend the lifespan of equipment and machinery with regular cleaning and maintenance."
        }
      />
      <ServiceReady
        body1={
          "Investing in professional warehouse cleaning services is investing in the safety, efficiency, and overall success of your operations. Transform your warehouse into a clean and organized space."
        }
        question={"Ready to get started?"}
        button={"Get in Touch"}
      />
    </div>
  );
}
