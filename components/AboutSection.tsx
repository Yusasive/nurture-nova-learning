"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  { src: "/images/first.avif", alt: "Team Member 1" },
  { src: "/images/second-image.jpg", alt: "Team Member 2" },
];

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-28 bg-white flex flex-col lg:flex-row items-center justify-between">
      <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={imageVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-28 h-60 md:w-36 md:h-72 rounded-[40px] overflow-hidden shadow-md"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={member.src}
              alt={member.alt}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="lg:ml-16 mt-10 lg:mt-0 text-center lg:text-left max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#FE2296] text-xl font-montserrat font-bold mb-2">
          About Us
        </p>
        <h2 className="text-3xl md:text-[40px] text-[#111111] font-montserrat font-semibold mb-4">
          Empowering Minds, One Lesson at a Time
        </h2>
        <p className="text-[#78808f] text-base font-urbanist mb-6">
          At NurtureNova Learning, we go beyond traditional tutoring offering
          personalized, flexible, and tech-integrated education tailored to each
          student&apos;s unique journey. Whether you&apos;re in the UK, Canada,
          Nigeria, or beyond, our approach focuses on both academic excellence
          and future-ready skills.
        </p>
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#FE2296] text-white hover:bg-transparent hover:text-[#FE2296] border border-[#FF3366] text-base font-bold px-5 py-2 rounded-full"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
