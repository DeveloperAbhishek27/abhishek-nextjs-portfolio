"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/Styles";
import { fadeUp, staggerContainer } from "@/lib/animations";

const Experience = () => {
  return (
    <section
      data-scroll-section
      className="container mx-auto px-6 sm:px-12 mt-12"
    >
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12"
      >
        <motion.h2 variants={fadeUp} className={styles.sectionHeadText}>
          Professional Experience
        </motion.h2>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={fadeUp}
        className="grid md:grid-cols-[1fr_300px] gap-6 border border-white/20 rounded-4xl bg-cardbg overflow-hidden"
      >
        {/* Text */}
        <div className="p-8">
          <p className="text-white font-black text-[48px] leading-none">"</p>

          <p className="text-white tracking-wide text-[17px] mt-3">
            I worked as a Frontend Developer at EC Sales Private Limited, an
            Australia-based company, from May 2025 to January 2026. I designed
            and developed responsive user interfaces using React.js and Tailwind
            CSS, and handled REST API integrations to manage dynamic data across
            multiple projects. I collaborated with backend developers to ensure
            smooth functionality and performance and received an official
            Experience Letter for my contributions.
          </p>

          <div className="mt-6">
            <p className="text-white font-semibold">Abhishek Pandey</p>
            <p className="text-sm text-gray-400">
              Frontend Developer ·
              <span className="text-yellow-400"> EC Sales Private Limited</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="p-8  flex justify-center items-center bg-black-200">
          <img
            src="/img/EcSales.png"
            alt="EC Sales Experience Letter"
            className="w-full h-[200px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
