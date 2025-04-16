"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-container bg-black/35 pt-28"
    >
      <div className="mx-6 lg:mx-28 py-40">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-[#FFFFFF] text-center md:py-10 space-y-3 items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl font-bold md:text-[40px]"
          >
            Quality tutoring through 1-on-1 Online Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-xl"
          >
            Get one of our skilled and highly qualified tutors.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="bg-[#FC8402] text-[#FFFFFF} hover:bg-transparent border-[#FC8402] text-base font-bold px-5 py-2 rounded-full"
          >
            {" "}
            Sign Up
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
