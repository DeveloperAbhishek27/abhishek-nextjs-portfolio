"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { styles } from "@/styles/Styles";
import { fadeUp, fadeIn, scaleIn, staggerContainer } from "@/lib/animations";
import Tilt from "react-parallax-tilt";
const Hero = () => {
  return (
    <section className="relative w-full  py-32 lg:py-16 lg:min-h-screen flex items-center justify-center ">
      <div className="grid lg:grid-cols-[1fr_400px] sm:mt-0 mt-10 gap-4 overflow-hidden">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10"
        >
          {/* Indicator */}
          <motion.div
            variants={fadeIn}
            className="hidden lg:flex flex-col items-center mt-4"
          >
            <div className="w-4 h-4 rounded-full bg-premium" />
            <div className="w-0.5 h-72 bg-gradient-to-b from-premium to-transparent" />
          </motion.div>

          {/* Text */}
          <div className="text-center lg:text-left max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className={`  font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-white via-premium/80 to-premium
            text-4xl sm:text-6xl lg:text-7xl leading-tight`}
            >
              Hi, I'm Abhishek
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`${styles.heroSubText} mt-4 text-white `}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-300 text-lg leading-relaxed max-w-2xl"
            >
              I craft fast, responsive, and modern web experiences using React,
              Next.js, and Tailwind CSS.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={scaleIn}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link
                href="#contact"
                className="px-7 py-3 rounded-full font-semibold
              bg-premium text-white
               transition-transform duration-initial"
              >
                Hire Me
              </Link>

              <a
                href="/Abhishek_resume.pdf"
                download
                className="px-7 py-3 rounded-full font-semibold
              border-2 border-premium text-premium
              hover:bg-premium hover:text-white
              transition-all duration-initial"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          transitionSpeed={1200}
          gyroscope={true}
          className="w-full max-w-lg sm:max-w-[320px] lg:max-w-xl mx-auto"
        >
          <motion.img
            src="/img/face2.png"
            alt="Abhishek"
            className="w-full  mx-auto select-none"
            initial={{ y: 300, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 3,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </Tilt>
      </div>

      <div className="absolute bottom-10 flex justify-center w-full">
        <Link href="#about">
          <div className="w-8 h-14 rounded-2xl border-2 border-premium/40 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-2 h-2 bg-premium rounded-full"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
