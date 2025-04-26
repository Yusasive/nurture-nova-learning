"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className=" fixed top-6 w-full  z-50"
    >
      <div className="mx-6 lg:mx-28 rounded-2xl px-8 md:py-4 bg-white/10 backdrop-blur-md pb-4 pt-1 flex border border-white/20 shadow-md justify-between items-center">
        <motion.div
          whileHover={{ rotate: 10 }}
          className="w-12 h-12 rounded-full flex items-center justify-center"
        >
          <Link href="/">
            <Image
              src="/nurture-nova.png"
              alt="Profile"
              className="rounded-full object-cover w-full"
              width={100}
              height={80}
            />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-16 text-[#111111] text-xl font-semibold">
          {["About", "FAQs", "Contact"].map((item) => (
            <motion.div key={item} className="hover:text-gray-300">
              <Link href={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#111111]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      <div className="mx-6 w-full bg-white/30">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full min-w-5/6 rounded-lg bg-black/20 bg-opacity-80 py-6 flex flex-col items-center space-y-4 text-[#111111] text-xl font-montserrat font-bold"
            >
              {["About", "FAQs", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
