"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MdCalendarToday, MdArrowDownward } from "react-icons/md";

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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-container bg-black/35 pt-28"
    >
      <div className="mx-6 lg:mx-28 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={itemVariants}
            className="text-white text-center lg:text-left space-y-4"
          >
            <h1 className="text-3xl md:text-[40px] font-montserrat font-bold">
              Personalised Online Tutoring in Tech and Academics for Ages 6–18
            </h1>
            <p className="font-urbanist text-base md:text-xl max-w-2xl mx-auto lg:mx-0">
              Helping students excel in Maths, English, Science, Coding, AI, and more — wherever they are.
            </p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2"
            >
              <Link href="https://wa.me/2347079650962" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#FE2296" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 bg-[#FE2296] text-white border border-[#FE2296] text-base font-bold px-5 py-2 rounded-full transition duration-300"
                >
                  <MdCalendarToday className="text-lg" />
                  Book a Session
                </motion.button>
              </Link>

              <Link href="#courses" scroll>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#FE2296" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 bg-transparent text-white border border-white text-base font-bold px-5 py-2 rounded-full transition duration-300"
                >
                  <MdArrowDownward className="text-lg" />
                  Explore Courses
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg">
              <Image
                src="/window.svg"
                alt="Learning illustration"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
