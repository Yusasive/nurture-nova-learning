"use client";

import { motion } from "framer-motion";
import { TbMathSymbols } from "react-icons/tb";
import {
  GiPuzzle,
  GiChemicalDrop,
  GiArtificialIntelligence,
} from "react-icons/gi";
import {
  MdOutlineScience,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaPython, FaBookOpen, FaLaptopCode } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { SiScratch } from "react-icons/si";
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
    title: "Mathematics",
    link: "#",
    icon: <TbMathSymbols />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "English",
    link: "#",
    icon: <RiEnglishInput />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Science",
    link: "#",
    icon: <MdOutlineScience />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Physics",
    link: "#",
    icon: <FaBookOpen />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Chemistry",
    link: "#",
    icon: <GiChemicalDrop />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "11+ Preparation",
    link: "#",
    icon: <GiPuzzle />,
    delay: 0.7,
  },
  {
    id: 7,
    title: "Coding (Python and Scratch)",
    link: "#",
    icon: (
      <div className="flex items-center gap-1">
        <FaPython /> <SiScratch />
      </div>
    ),
    delay: 0.8,
  },
  {
    id: 8,
    title: "Web Development",
    link: "#",
    icon: <FaLaptopCode />,
    delay: 0.9,
  },
  {
    id: 9,
    title: "Artificial Intelligence and Machine Learning",
    link: "#",
    icon: <GiArtificialIntelligence />,
    delay: 1.0,
  },
  {
    id: 10,
    title: "Product, Graphics Design",
    link: "#",
    icon: <MdOutlineDesignServices />,
    delay: 1.1,
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
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
