"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUsers size={32} className="text-[#FF3366]" />,
    number: 55,
    suffix: "+",
    label: "Students",
  },
  {
    icon: <FaChalkboardTeacher size={32} className="text-[#FF3366]" />,
    number: 20,
    suffix: "+",
    label: "Tutors",
  },
  {
    icon: <FaGlobe size={32} className="text-[#FF3366]" />,
    number: 5,
    suffix: "+",
    label: "Countries",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function StatsSection() {
  return (
    <motion.div
      className="bg-[#FFFFFF] flex justify-center flex-wrap px-6 lg:px-28 items-center gap-10 md:gap-20 py-10"
      variants={containerVariants}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {statsData.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 p-4 rounded-md"
          >
            {item.icon}
          </motion.div>
          <div>
            <div className="font-bold font-montserrat text-[#111111] text-base">
              <CountUp end={item.number} duration={2} suffix={item.suffix} />
            </div>
            <div className="text-[#FE2296] text-sm font-montserrat font-semibold">
              {item.label}
            </div>
          </div>
          {index !== statsData.length - 1 && (
            <div className="hidden md:block h-10 border-r border-gray-300 mx-6"></div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
