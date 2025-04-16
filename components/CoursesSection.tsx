"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const courses = [
  { name: "Mathematics", icon: "/icons/math.png" },
  { name: "English", icon: "/icons/english.png" },
  { name: "Physics", icon: "/icons/physics.png" },
  { name: "Chemistry", icon: "/icons/chemistry.png" },
  { name: "Biology", icon: "/icons/biology.png" },
  { name: "Coding", icon: "/icons/coding.png" },
  { name: "Music", icon: "/icons/music.png" },
  { name: "Languages", icon: "/icons/languages.png" },
  { name: "11+ NVR/VR", icon: "/icons/nvrvr.png" },
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
    <section className="bg-[#012958] text-white py-10 px-6 md:px-28">
      <div className="text-center mb-8">
        <h3 className="text-[#FF3366] text-xl font-bold">Our Courses</h3>
        <p className="text-base md:text-lg text-[#FFFFFF] font-semibold mt-2">
          Our Tutors Provide Quality Teaching In The Following Subjects:
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black rounded-xl py-2 px-6 flex flex-row items-center gap-6 shadow-md cursor-pointer transition-all duration-300"
          >
            <Image
              src={course.icon}
              alt={course.name}
              width={30}
              height={30}
              className=""
            />
            <h4 className="font-bold text-lg">{course.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
