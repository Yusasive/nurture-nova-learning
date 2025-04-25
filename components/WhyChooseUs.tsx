import React from "react";
import Image from "next/image";
import BannerPng from "@/public/images/choose.png";

import { motion } from "framer-motion";

interface FadeUpProps {
  delay: number;
}

const FadeUp = ({ delay }: FadeUpProps) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const WhyChooseUs: React.FC = () => {
  return (
    <section>
      <div className="mx-6 lg:mx-28 py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={BannerPng}
              alt="Learning Platform"
              className="w-[400px] md:max-w-[450px] object-cover drop-shadow"
              width={400}
              height={500}
            />
          </motion.div>
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-[#111111] md:text-4xl font-montserrat font-bold !leading-snug"
            >
              Why Choose Us
            </motion.h1>

            <div className="flex flex-col gap-6">
              <motion.div
                variants={FadeUp({ delay: 0.2 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <p className="text-lg font-semibold text-[#477EFA] font-montserrat">
                  ● 1-on-1 or group sessions on Zoom
                </p>
              </motion.div>
              <motion.div
                variants={FadeUp({ delay: 0.4 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <p className="text-lg font-semibold text-[#477EFA] font-montserrat">
                  ● Detailed progress reports
                </p>
              </motion.div>
              <motion.div
                variants={FadeUp({ delay: 0.6 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <p className="text-lg font-semibold text-[#477EFA] font-montserrat">
                  ● Monthly assessments
                </p>
              </motion.div>
              <motion.div
                variants={FadeUp({ delay: 0.6 })}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <p className="text-lg font-semibold text-[#477EFA] font-montserrat">
                  ● Tutors paid per hour — students matched with the best fit
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
