"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { styles } from "@/styles/Styles";

const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = (id, title) => {
    setActive(title);
    setToggle(false);

    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Close menu when clicking outside (pro feel)
  useEffect(() => {
    const closeMenu = () => setToggle(false);
    window.addEventListener("scroll", closeMenu);
    return () => window.removeEventListener("scroll", closeMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
  ${scrolled ? "bg-black backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center  rounded-full px-8 py-4 mt-1">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 text-white font-bold text-lg"
        >
          <Image
            src="/img/logo2.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          Abhishek <span className="text-premium">| React</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id, link.title)}
              className={`${styles.navLink} cursor-pointer transition ${
                active === link.title
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.title}
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute right-4 mt-2 bg-black/95 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 ${
          toggle
            ? "max-h-96 opacity-100 p-6"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id, link.title)}
              className={`cursor-pointer ${
                active === link.title
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
