"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import faqIllustration from "@/public/images/faqimg.png";

const faqs = [
  "What subjects and grade levels do you offer tutoring for?",
  "What technology platform and tools do you use to teach?",
  "What is the duration and frequency of tutoring sessions?",
  "How do I monitor my child’s progress?",
  "What should I expect from a session?",
  "How many students are in a class?",
  "What materials/curriculum are used to teach?",
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="pb-16 pt-32 px-6 md:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#FF3366] mb-12"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={faqIllustration}
            alt="FAQ Illustration"
            className="w-full max-w-md"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2 space-y-4 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqs.map((question, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-800">
                  {question}
                </p>
                <span className="text-[#FF3366] text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-700 mt-2"
                  >
                    {/* Replace with actual answer */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
