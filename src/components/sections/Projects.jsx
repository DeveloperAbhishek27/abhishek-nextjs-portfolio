"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink } from "react-icons/fi";
import { fadeUp, fadeIn, cardVariant } from "@/lib/animations";
import { styles } from "@/styles/Styles";
import { projects } from "@/constants/Index";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  github_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        scale={1.01}
        transitionSpeed={400}
        className="group bg-cardbg rounded-4xl overflow-hidden 
        grid grid-cols-1 md:grid-cols-[400px_1fr] 
        shadow 
        border border-white/20 p-1"
      >
        {/* Image */}
        <div className="relative w-full h-48 md:h-full rounded-4xl  ">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover w-full h-full p-3 rounded-4xl"
          />

          <div className="  rounded-4xl   z-20  absolute right-2  flex gap-2 justify-end items-start px-2 py-1  top-3  ">
            {/* GitHub Button */}
            {github_link && (
              <div
                onClick={() => window.open(github_link, "_blank")}
                className="bg-black/70  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
              >
                <Image
                  src="/img/github.png"
                  alt="github"
                  width={20}
                  height={20}
                />
              </div>
            )}

            {/* Live Link Button */}
            {live_link && (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className="bg-black/30 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-black/40 transition"
              >
                <FiExternalLink className="text-white text-[20px]" />
              </button>
            )}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex justify-end items-start rounded-4xl"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-white font-semibold text-[20px] md:text-[22px] mb-3">
            {name}
          </h3>

          <p className="text-gray-300 text-[14px] md:text-[15px] leading-[24px]">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] md:text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      data-scroll-section
      id="projects"
      className={`${styles.padding}  container mx-auto px-6 sm:px-12`}
    >
      {/* Heading */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className={`text-blue-200 ${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} mb-6`}>Projects</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-400 max-w-2xl leading-[28px]"
      >
        Real-world projects showcasing React.js development, authentication
        systems, API integrations, performance optimization, and modern UI
        design.
      </motion.p>

      {/* Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10 mt-14">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard key={index} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
