"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Users, BookOpen } from "lucide-react";

interface Tutor {
  id: string;
  name: string;
  position: string;
  nationality: string;
  image: string;
  specialties: string[];
  rating: number;
  studentsCount: number;
  experience: string;
  shortBio: string;
}

const tutors: Tutor[] = [
  {
    id: "rasheed-adeoti",
    name: "Rasheed Adeoti",
    position: "Senior Mathematics & Physics Tutor",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700000/tutor1_sample.jpg",
    specialties: ["Mathematics", "Physics", "11+ Preparation"],
    rating: 4.9,
    studentsCount: 150,
    experience: "5+ years",
    shortBio: "Passionate educator specializing in making complex mathematical concepts accessible and engaging for students of all levels."
  },
  {
    id: "adebayo-johnson",
    name: "Adebayo Johnson",
    position: "English Language & Literature Specialist",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700001/tutor2_sample.jpg",
    specialties: ["English Language", "Literature", "Creative Writing"],
    rating: 4.8,
    studentsCount: 120,
    experience: "4+ years",
    shortBio: "Dedicated to helping students develop strong communication skills and a love for literature through interactive learning."
  },
  {
    id: "fatima-ibrahim",
    name: "Fatima Ibrahim",
    position: "Science & Technology Educator",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700002/tutor3_sample.jpg",
    specialties: ["Chemistry", "Biology", "Environmental Science"],
    rating: 4.9,
    studentsCount: 95,
    experience: "6+ years",
    shortBio: "Experienced science educator passionate about inspiring the next generation of scientists and innovators."
  },
  {
    id: "samuel-okafor",
    name: "Samuel Okafor",
    position: "Coding & Web Development Instructor",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700003/tutor4_sample.jpg",
    specialties: ["Python", "Web Development", "Scratch Programming"],
    rating: 4.8,
    studentsCount: 200,
    experience: "7+ years",
    shortBio: "Tech enthusiast dedicated to teaching coding skills and preparing students for the digital future."
  },
  {
    id: "aisha-mohammed",
    name: "Aisha Mohammed",
    position: "AI & Machine Learning Specialist",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700004/tutor5_sample.jpg",
    specialties: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    rating: 4.9,
    studentsCount: 80,
    experience: "5+ years",
    shortBio: "AI researcher and educator passionate about making cutting-edge technology accessible to young learners."
  },
  {
    id: "david-williams",
    name: "David Williams",
    position: "Creative Design & Graphics Tutor",
    nationality: "Nigerian",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700005/tutor6_sample.jpg",
    specialties: ["Graphic Design", "UI/UX Design", "Digital Art"],
    rating: 4.7,
    studentsCount: 110,
    experience: "4+ years",
    shortBio: "Creative professional helping students develop design thinking and visual communication skills."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function OurTutorsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#477EFA] to-[#FE2296] pt-32 pb-16 px-6 md:px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Meet Our Expert Tutors
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-urbanist"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate educators from Nigeria, dedicated to empowering students worldwide with personalized learning experiences
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 px-6 md:px-28 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Expert Tutors", icon: Users },
            { number: "1000+", label: "Students Taught", icon: BookOpen },
            { number: "4.8", label: "Average Rating", icon: Star },
            { number: "15+", label: "Subjects Covered", icon: MapPin },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <stat.icon className="w-8 h-8 text-[#477EFA]" />
              </div>
              <h3 className="text-3xl font-bold text-[#111111] font-montserrat">{stat.number}</h3>
              <p className="text-gray-600 font-urbanist">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tutors Grid */}
      <motion.section
        className="py-16 px-6 md:px-28"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 font-montserrat">
              Our Teaching Excellence Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-urbanist">
              Each tutor brings unique expertise and passion to create engaging, personalized learning experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <motion.div
                key={tutor.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{tutor.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#477EFA]" />
                    <span className="text-sm text-gray-600 font-urbanist">{tutor.nationality}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-2 font-montserrat">
                    {tutor.name}
                  </h3>
                  
                  <p className="text-[#FE2296] font-semibold mb-3 font-urbanist">
                    {tutor.position}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-urbanist">
                    {tutor.shortBio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-[#477EFA]/10 text-[#477EFA] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                    {tutor.specialties.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{tutor.specialties.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{tutor.studentsCount}+ students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{tutor.experience}</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/our-tutors/${tutor.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-[#477EFA] to-[#FE2296] text-white py-3 rounded-xl font-semibold font-montserrat hover:shadow-lg transition-all duration-300"
                    >
                      View Profile
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-[#477EFA] to-[#FE2296] py-16 px-6 md:px-28"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-urbanist">
            Connect with our expert tutors and begin your personalized learning journey today
          </p>
          <Link href="https://wa.me/2347079650962" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#477EFA] px-8 py-4 rounded-full font-bold text-lg font-montserrat hover:shadow-lg transition-all duration-300"
            >
              Book a Session Now
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}