"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/Index";
import { styles } from "@/styles/Styles";
import { cardVariant } from "@/lib/animations";

const Experience = () => {
  return (
    <section
      data-scroll-section
      className="relative mt-14 container mx-auto px-6 sm:px-12"
    >
      {/* Heading */}
      <div className=" mb-16 text-white">
        <p className={`${styles.sectionSubText} text-blue-200`}>
          what I have Skill so far
        </p>
        <h2 className={styles.heroHeadText}>Skills</h2>
      </div>

      <div className="relative w-full ">
        <div className="absolute flex  left-3  lg:left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`mb-16   flex ${
              index % 2 === 0
                ? "justify-start lg:mr-12"
                : " lg:ml-12 justify-start lg:justify-end"
            }`}
          >
            <div className="absolute -left-5 lg:left-1/2  lg:-translate-x-1/2  z-20">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                style={{ background: experience.iconBg }}
              >
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-5 w-max">
                <p
                  className={`text-sm text-gray-900  font-semibold whitespace-nowrap ${
                    index % 2 === 0
                      ? "ml-72 text-left bg-white rounded-r-4xl py-2  px-4"
                      : "mr-72 text-right bg-white rounded-l-4xl py-2  px-4"
                  }`}
                >
                  {experience.date}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-6 lg:ml-0  ml-6">
              <div
                className={`bg-cardbg mt-5  p-6 rounded shadow border border-gray-200/20  border-b-4 border-b-white
                 `}
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-white">
                      {experience.title}
                    </h3>
                    <p
                      className={`text-sm lg:hidden text-gray-300 whitespace-nowrap `}
                    >
                      {experience.date}
                    </p>

                    <p className="text-premium text-sm font-medium">
                      {experience.company_name}
                    </p>
                  </div>
                </div>

                {/* Points */}
                <ul className="list-disc ml-5 space-y-2">
                  {experience.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm tracking-wide">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
