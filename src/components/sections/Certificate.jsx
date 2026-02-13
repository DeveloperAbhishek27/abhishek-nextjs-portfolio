"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/Styles";
import { fadeUp, staggerContainer } from "@/lib/animations";

const Certification = () => {
  return (
    <section
      data-scroll-section
      className="container mx-auto px-6 sm:px-12 mt-20"
    >
      {/* Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-12"
      >
        <motion.h2 variants={fadeUp} className={styles.sectionHeadText}>
          Certifications
        </motion.h2>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid md:grid-cols-[1fr_300px] gap-6 border border-white/20 rounded-4xl bg-cardbg overflow-hidden"
      >
        {/* Text */}
        <div className="p-8">
          <p className="text-white font-black text-[48px] leading-none">"</p>

          <p className="text-white tracking-wide text-[17px] ">
            I completed a Full Stack Web Development course at Ducat IT Training
            School, where I learned core web technologies including HTML, CSS,
            and JavaScript. The course covered frontend development using
            React.js, along with an introduction to backend development using
            Node.js and Express.js. As part of the training, I worked on
            multiple practice-based projects and successfully completed the
            program, after which I was awarded a course completion certificate
            in PDF format.
          </p>

          <div className="mt-6">
            <p className="text-white font-semibold">Abhishek Pandey</p>
            <p className="text-sm text-gray-400">
              Frontend Development Trainee ·{" "}
              <span className="text-orange-400">Ducat IT Training School</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="p-8 flex justify-center items-center bg-black-200">
          <img
            src="/img/ducat copy.png"
            alt="Ducat Certificate"
            className="w-full h-[240px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Certification;
