"use client";
import Image from "next/image";
import operateImage from "@/public/images/operatepic-CwSv2PmN.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowWeOperate = () => {
  return (
    <motion.section
      className="bg-[#F3F7FB] py-16 rounded-3xl shadow-lg px-8 md:px-20 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="md:w-1/2" variants={textVariants}>
        <motion.h2
          className="text-[#FF3366] font-semibold text-lg mb-4"
          variants={textVariants}
        >
          How We Operate
        </motion.h2>
        <motion.p className="text-gray-800 mb-4" variants={textVariants}>
          Our trained tutors are based in Africa and our Students are based in
          different countries, hence our services are provided remotely.
        </motion.p>
        <motion.p className="text-gray-800 mb-4" variants={textVariants}>
          We use online teaching and learning. The minimum requirements for
          students to be admitted is to have access to a computer, webcam, good
          internet, and the desire to achieve in a non-traditional classroom...
        </motion.p>
        <motion.p className="text-gray-800" variants={textVariants}>
          For many of today&apos;s students, the opportunity to access a course
          from any computer with internet connectivity, 24/7, is a huge plus.
        </motion.p>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        variants={imageVariants}
      >
        <Image
          src={operateImage}
          alt="Online teaching illustration"
          className="w-full max-w-md"
        />
      </motion.div>
    </motion.section>
  );
};

export default HowWeOperate;
