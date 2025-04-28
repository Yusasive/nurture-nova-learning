import React from "react";
import BgImage from "@/public/images/our-tutors.png";
import { motion } from "framer-motion";
import Image from "next/image";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const HeroSection2: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="w-full overflow-hidden shadow-md"
      >
        <Image
          src={BgImage}
          alt="Online Tutors"
          className="object-cover rounded-[30px] w-full h-full p-4"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection2;
