import { Mail, Phone, Linkedin, Instagram, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#063943] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-start gap-4">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
          <div className="flex gap-4 text-orange-500">
            <X className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
          <div className="flex items-center gap-2 text-sm mb-2 text-orange-500">
            <Phone className="w-5 h-5" />
            <span className="text-white">+234 707 965 0962</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-orange-500">
            <Mail className="w-5 h-5" />
            <span className="text-white">nurturenovalearning@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm">
        © 2025 Copyright | Nurture Nova Learning. All rights reserved
      </div>
    </footer>
  );
}
