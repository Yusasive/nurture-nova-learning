import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "@/public/images/bg.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

const bgStyle: React.CSSProperties = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const HeroSection2: React.FC = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl text-[#111111] font-montserrat font-bold !leading-snug">
              50+ Students are learning from us.
            </h1>
            <p className="text-[#111111] text-base font-urbanist font-semibold">
              Ready to See Your Child Thrive?
            </p>
            <Link className="flex justify-center" href="/register">
              <button className="flex flex-row items-center bg-[#FE2296] text-white hover:bg-transparent hover:text-[#FE2296] border border-[#FE2296] text-base font-bold px-5 py-2 rounded-full">
                Subscribe Now
                <FaBell className="ml-2 group-hover:animate-bounce group-hover:text-lg duration-200" />
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection2;
