"use client";

import { motion } from "framer-motion";
import { MdMenuBook } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { GiPuzzle } from "react-icons/gi";
import { FaPython } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdOutlineTune } from "react-icons/md";
import React from "react";

interface ServiceItem {
  id: number;
  title: string;
  link: string;
  icon: React.ReactElement;
  delay: number;
}

const ServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Maths, English, Science (Physics, Chemistry, Biology)",
    link: "#",
    icon: <TbMathSymbols />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "11+ NVR/VR",
    link: "#",
    icon: <GiPuzzle />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "GCSE Preparation",
    link: "#",
    icon: <MdMenuBook />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Coding (Scratch, Python, Web Dev)",
    link: "#",
    icon: <FaPython />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Artificial Intelligence & Machine Learning",
    link: "#",
    icon: <GiBrain />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Product Design & Digital Skills",
    link: "#",
    icon: <MdOutlineTune />,
    delay: 0.7,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function CoursesSection() {
  return (
    <section className="bg-[#477EFA] text-white py-10 px-6 md:px-28">
      <div className="text-center mb-8">
        <h3 className="text-[#111111] text-3xl font-montserrat font-semibold">
          Our Courses
        </h3>
        <p className="text-base md:text-lg text-[#FFFFFF] font-urbanist font-semibold mt-2">
          Our Tutors Provide Quality Teaching In The Following Subjects:
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {ServicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-2 py-5 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
          >
            <div className="text-4xl text-[#477EFA] mb-4">{service.icon}</div>
            <h1 className="text-base font-semibold font-montserrat text-center px-3 text-[#012958]">
              {service.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
