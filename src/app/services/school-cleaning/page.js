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
        title={"School Cleaning Services"}
        description={
          "Are you looking for professional school cleaning services?"
        }
        image={"/images/sub_banner_1.png"}
      />
      <ServicesIntro
        title={
          "Ensure a Healthy Learning Environment with Professional School Cleaning"
        }
        body1={
          "Maintaining a clean and hygienic learning environment is essential for the health, safety, and well-being of students, teachers, and staff. Our professional school cleaning services are dedicated to creating a clean, sanitized, and inviting space where students can thrive academically and socially."
        }
        button={"Get in Touch"}
        // body2={"Let us transform your space into a clean and tidy sanctuary."}
        image1="/images/services/shower-soap-wiper.png"
        alt1={"Image 1 alt"}
        image2="/images/services/duster-mirror.png"
        alt2={"Image 1 alt"}
      />
      <ServiceKeyPoints
        title={"Key Reasons for Hiring Professional School Cleaners:"}
        image1={"/images/services/sink-sponge-glove.png"}
        alt1={"Home Cleaning Shower"}
        keyTitle1={"Promote Health and Safety"}
        keyBody1={
          "Minimize the spread of germs and illnesses through thorough cleaning and disinfecting. Create a safe environment that supports learning and reduces absenteeism."
        }
        keyTitle2={"Enhance Learning Experience"}
        keyBody2={
          "Provide students with a clean and organized environment that fosters concentration and academic success. Ensure classrooms are conducive to effective teaching and learning."
        }
        keyTitle3={"Compliance with Health Regulations"}
        keyBody3={
          "Stay compliant with health and safety guidelines for educational facilities. Demonstrate commitment to student and staff well-being."
        }
        keyTitle4={"Specialized Cleaning for Schools"}
        keyBody4={
          "Benefit from our expertise in cleaning educational spaces. Our trained cleaners use specialized techniques and equipment."
        }
        keyTitle5={"Customized Cleaning Plans"}
        keyBody5={
          "Tailor cleaning schedules and services to fit your school's specific needs and budget. Whether daily cleaning or special event cleanup, we've got you covered."
        }
        keyTitle6={"Preservation of School Assets"}
        keyBody6={
          "Protect school property from damage caused by vandalism and neglect. Extend the lifespan of furniture and equipment through regular cleaning."
        }
      />
      <ServiceReady
        body1={
          "Investing in professional school cleaning services is investing in the health, safety, and academic success of students and staff. Ensure a clean and inviting learning environment."
        }
        question={"Ready to get started?"}
        button={"Get in Touch"}
      />
    </div>
  );
}
