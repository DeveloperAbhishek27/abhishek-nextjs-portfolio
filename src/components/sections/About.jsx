"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { styles } from "@/styles/Styles";
import { services } from "@/constants/Index";

const ServiceCard = ({ title, icon, hover }) => {
  return (
    <motion.div variants={scaleIn} viewport={{ once: true, amount: 0.9 }}>
      <Tilt>
        <div className="w-full bg-gradient-to-l from-premium/75 to-premium/30 p-0.5 rounded-4xl shadow-lg">
          <div className="bg-cardbg rounded-4xl py-6 px-8 min-h-64 flex flex-col justify-center items-center gap-5 relative group overflow-hidden">
            {/* Image Icon */}
            <img src={icon} alt={title} className="w-24 h-24 object-contain" />

            <h3 className="text-white text-center text-lg font-semibold">
              {title}
            </h3>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-[18px] text-gray-200 p-6 rounded-4xl opacity-0 group-hover:opacity-100 transition duration-300 bg-black/90 backdrop-blur-sm">
              {hover}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className=" container mx-auto py-12 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} text-gray-300`}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-gray-300 leading-relaxed max-w-3xl"
        >
          I specialize in crafting high-performance and visually engaging web
          applications using modern frontend technologies such as React.js,
          Next.js, Tailwind CSS, and JavaScript. I enjoy transforming ideas and
          designs into responsive, interactive, and user-friendly digital
          experiences. With a strong focus on UI/UX principles and hands-on
          experience in frontend development, I continuously explore new tools
          and techniques to improve usability, performance, and overall user
          engagement.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4  gap-8"
      >
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default About;
