"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
    setVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 cursor-pointer transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <svg
        className="w-12 h-12 transform rotate-[-90deg]"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ffff"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ed7905"
          strokeWidth="10"
          strokeDasharray="282.6"
          strokeDashoffset={282.6 - (282.6 * scroll) / 100}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <FaArrowUp className="text-premium text-lg" />
      </div>
    </div>
  );
};

export default ScrollTop;
