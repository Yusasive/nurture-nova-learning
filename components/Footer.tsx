"use client";

import { Mail, Phone, Linkedin, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: <X className="w-6 h-6" />, href: "#" },
  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
  { icon: <Instagram className="w-6 h-6" />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#012958] text-white px-6 py-10">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          className="flex flex-col items-start gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            src="/images/second-logo.png"
            alt="Logo"
            width={150}
            height={100}
          />
          <div className="flex gap-4 text-[#FF3366]">
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-all"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "FAQs", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link href={`/${link.toLowerCase()}`}>{link}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
          <div className="flex items-center gap-2 text-sm mb-2 text-[#FF3366]">
            <Phone className="w-5 h-5" />
            <span className="text-white">+234 707 965 0962</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#FF3366]">
            <Mail className="w-5 h-5" />
            <span className="text-white">nurturenovalearning@gmail.com</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="border-t border-gray-300 mt-10 pt-4 text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        © 2025 Copyright | Nurture Nova Learning. All rights reserved
      </motion.div>
    </footer>
  );
}
