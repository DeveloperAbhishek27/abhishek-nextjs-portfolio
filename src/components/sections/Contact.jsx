"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiBriefcase,
  FiClock,
  FiGlobe,
} from "react-icons/fi";
import { HiOutlineHand } from "react-icons/hi";
import { FaWhatsapp, FaReact } from "react-icons/fa";

import { scaleIn, staggerContainer } from "@/lib/animations";
import { styles } from "@/styles/Styles";
import { showToast } from "../alert/showToast";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Agar mobile field hai, sirf numbers allow karo
    if (name === "mobile") {
      const onlyNums = value.replace(/\D/g, ""); // non-digits hata do
      setForm((prev) => ({ ...prev, mobile: onlyNums }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleWhatsApp = useCallback(
    (e) => {
      e.preventDefault();

      // ✅ VALIDATION
      if (!form.name || !form.email || !form.mobile || !form.message) {
        showToast.warning("Please fill all fields!");
        return;
      }

      if (!validateEmail(form.email)) {
        showToast.error("Invalid email address!");
        return;
      }

      if (form.mobile.length < 10 || !/^\d+$/.test(form.mobile)) {
        showToast.error("Mobile number must be at least 10 digits!");
        return;
      }

      const phoneNumber = "917052862827";

      const message = `New Contact Request 🚀

Name: ${form.name}
Email: ${form.email}
Mobile: ${form.mobile}

Message:
${form.message}`;

      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
      )}`;
      window.open(url, "_blank");

      showToast.success("Message sent successfully!");

      setForm({ name: "", email: "", mobile: "", message: "" });
    },
    [form],
  );

  return (
    <section
      data-scroll-section
      id="contact"
      className="container mx-auto py-20 px-6 sm:px-12"
    >
      {/* HEADING */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>
          Let’s Work Together
        </p>
        <h2 className={styles.heroHeadText}>Contact Me</h2>
      </motion.div>

      {/* MAIN GRID */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT — PROFILE / HIRE INFO */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="  flex flex-col gap-6"
        >
          <div>
            <h3 className="text-white text-2xl font-bold">Abhishek Pandey</h3>
            <p className="text-violet-200 font-semibold mt-1 flex items-center gap-2">
              <FaReact className=" text-cyan-400 size-5" /> Frontend Developer
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            I build fast, modern, and responsive web applications using React,
            Next.js, Tailwind CSS, and Framer Motion. Open to freelance projects
            and full-time opportunities.
          </p>

          {/* QUICK INFO */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 bg-black/30 p-4 rounded-xl text-gray-300">
              <FiBriefcase className="text-premium" />
              Freelance Projects
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-4 rounded-xl text-gray-300">
              <FiGlobe className="text-premium" /> Remote / Full-Time
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-4 rounded-xl text-gray-300">
              <FiClock className="text-premium" />
              Fast Response
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-4 rounded-xl text-gray-300">
              <HiOutlineHand className="text-premium" /> Long-term Work
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className=" grid grid-cols-2 gap-4 lg:gap-9 lg:w-sm mt-4">
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="tel:+917052862827"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold"
            >
              <FiPhone /> Call Now
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              href="https://wa.me/7052862827"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-semibold"
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={handleWhatsApp}
            className="border-2 border-premium rounded-4xl p-8 flex flex-col gap-6"
          >
            <p className="text-gray-400 text-sm">
              Tell me about your project or job opportunity. I usually reply
              within 24 hours.
            </p>

            <div className="flex items-center gap-3 border-b border-premium">
              <FiUser className="text-premium" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent px-2 py-4 text-white outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border-b border-premium">
              <FiMail className="text-premium" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent px-2 py-4 text-white outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex items-center gap-3 border-b border-premium">
              <FiPhone className="text-premium" />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                maxLength={12}
                placeholder="Your Mobile Number"
                className="w-full bg-transparent px-2 py-4 text-white outline-none"
              />
            </div>

            <div className="flex items-start gap-3 border-b border-premium">
              <FiMessageSquare className="text-premium mt-4" />
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your project or role..."
                className="w-full bg-transparent px-2 py-4 text-white outline-none resize-none"
              />
            </div>

            <motion.button
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              type="submit"
              className="mt-4 flex cursor-pointer items-center gap-2 bg-premium  px-6 py-3 rounded text-white font-bold w-fit"
            >
              <FaWhatsapp size={26} /> Send on WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
