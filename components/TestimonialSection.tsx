"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: `I got feedback from Pauls Science teacher. He got a reward as well...`,
    name: "Mrs Soares",
    role: "Parent",
  },
  {
    text: `I have stumbled on several Online/Virtual platforms...`,
    name: "Mrs Ottun",
    role: "Parent",
  },
  {
    text: `I wanted to let you know that Omolade was moved from set 5...`,
    name: "Miss Tade",
    role: "Parent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function TestimonialSection() {
  return (
    <section className="bg-[#477EFA] py-12 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl text-[#FFFFFF] font-montserrat font-bold mb-4">
          What Our Clients Are Saying
        </h2>
       
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function TestimonialCard({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="bg-white text-[#9CA3AF] font-urbanist rounded-xl p-6 shadow-md flex flex-col justify-between items-center h-full">
      <p className="mb-4">{text}</p>
      <div className="w-full text-left">
        <p className="text-[#FE2296] font-montserrat font-bold">{name}</p>
        <p className="text-[#9CA3AF] font-urbanist">{role}</p>
      </div>
    </div>
  );
}
