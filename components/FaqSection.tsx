"use client";
import { useState } from "react";
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
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={faqIllustration}
            alt="FAQ Illustration"
            className="w-full max-w-md"
          />
        </div>
        <div className="md:w-1/2 space-y-4 w-full">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-gray-100 px-6 py-4 rounded-lg shadow-sm cursor-pointer transition duration-200 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-800">
                  {question}
                </p>
                <span className="text-orange-500 text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2">
                  {/* Add your answer here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
