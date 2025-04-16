"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-container bg-black/35 pt-28"
    >
      <div className="mx-6 lg:mx-28 py-40">
        <motion.div
          variants={itemVariants}
          className="text-[#FFFFFF] text-center md:py-10 space-y-3 items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold md:text-[40px]"
          >
            Quality tutoring through 1-on-1 Online Classes
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-xl">
            Get one of our skilled and highly qualified tutors.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/register">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FFFFFF",
                  color: "#FF3366",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#FF3366] text-[#FFFFFF] hover:bg-white hover:text-[#FF3366] border border-[#FF3366] text-base font-bold px-5 py-2 rounded-full transition duration-300"
              >
                Sign Up
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
