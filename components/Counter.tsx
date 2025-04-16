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
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {statsData.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          className="flex items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gray-100 p-4 rounded-md"
          >
            {item.icon}
          </motion.div>
          <div>
            <div className="font-bold text-[#000000] text-base">
              <CountUp end={item.number} duration={2} suffix={item.suffix} />
            </div>
            <div className="text-[#FF3366] text-sm font-medium">
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
