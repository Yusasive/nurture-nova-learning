"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      className="bg-white pt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <motion.h2
          className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#FF3366]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="mb-8 lg:mb-16 font-light text-center text-[#000000] sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </motion.p>

        <motion.form
          action="#"
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-[#000000]"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-[#000000] text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#012958] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@flowbite.com"
              required
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <label
              htmlFor="subject"
              className="block mb-2 text-xl font-medium text-[#000000]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#012958] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Let us know how we can help you"
              required
            />
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-[#000000]"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#012958] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Leave a comment..."
            ></textarea>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#FF3366] hover:bg-[#e6295b] transition focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
