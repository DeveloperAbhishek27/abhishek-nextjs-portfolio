"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certificate from "@/components/sections/Certificate";
import Contact from "@/components/sections/Contact";
import ScrollTop from "@/components/layout/ScrollTop";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1, // speed, adjust as you like
      class: "is-reveal",
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <ScrollTop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificate />
      <Contact />
    </div>
  );
}
