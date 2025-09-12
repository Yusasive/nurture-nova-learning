"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  MapPin, 
  Star, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Award, 
  Calendar,
  ArrowLeft,
  MessageCircle,
  Globe,
  User
} from "lucide-react";

interface TutorDetail {
  id: string;
  name: string;
  position: string;
  nationality: string;
  gender: string;
  image: string;
  specialties: string[];
  rating: number;
  studentsCount: number;
  experience: string;
  bio: string;
  academicBackground: {
    degree: string;
    institution: string;
    year: string;
    additionalCertifications: string[];
  };
  interests: string[];
  teachingPhilosophy: string;
  achievements: string[];
  languages: string[];
  availability: string;
  sessionTypes: string[];
}

const tutorsData: { [key: string]: TutorDetail } = {
  "rasheed-adeoti": {
    id: "rasheed-adeoti",
    name: "Rasheed Adeoti",
    position: "Senior Mathematics & Physics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700000/tutor1_sample.jpg",
    specialties: ["Mathematics", "Physics", "11+ Preparation", "GCSE Preparation"],
    rating: 4.9,
    studentsCount: 150,
    experience: "5+ years",
    bio: "Rasheed is a passionate mathematics and physics educator with over 5 years of experience in online tutoring. He has helped hundreds of students achieve their academic goals through personalized learning approaches. His expertise spans from foundational mathematics to advanced physics concepts, making him an ideal tutor for students preparing for 11+ and GCSE examinations.",
    academicBackground: {
      degree: "Bachelor of Science in Mathematics",
      institution: "University of Lagos, Nigeria",
      year: "2018",
      additionalCertifications: [
        "Certified Online Tutor (COT)",
        "Advanced Mathematics Teaching Certificate",
        "Physics Education Specialist"
      ]
    },
    interests: [
      "Mathematical Problem Solving",
      "Physics Experiments",
      "Educational Technology",
      "Chess",
      "Reading Scientific Journals",
      "Mentoring Young Minds"
    ],
    teachingPhilosophy: "I believe that every student has the potential to excel in mathematics and physics. My approach focuses on breaking down complex concepts into digestible parts, using real-world examples to make learning engaging and memorable.",
    achievements: [
      "Successfully helped 95% of students improve their grades by at least one level",
      "Developed innovative teaching methods for online mathematics education",
      "Recognized as 'Outstanding Tutor of the Year' 2023",
      "Published research on effective online STEM education"
    ],
    languages: ["English", "Yoruba", "Hausa"],
    availability: "Monday to Friday: 3:00 PM - 9:00 PM (WAT), Saturday: 10:00 AM - 6:00 PM (WAT)",
    sessionTypes: ["One-on-One Tutoring", "Exam Preparation", "Homework Help", "Concept Reinforcement"]
  },
  "adebayo-johnson": {
    id: "adebayo-johnson",
    name: "Adebayo Johnson",
    position: "English Language & Literature Specialist",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700001/tutor2_sample.jpg",
    specialties: ["English Language", "Literature", "Creative Writing", "Essay Writing"],
    rating: 4.8,
    studentsCount: 120,
    experience: "4+ years",
    bio: "Adebayo is a dedicated English language and literature specialist who brings creativity and passion to every lesson. With a strong background in linguistics and creative writing, he helps students develop excellent communication skills, critical thinking abilities, and a deep appreciation for literature.",
    academicBackground: {
      degree: "Bachelor of Arts in English Language and Literature",
      institution: "University of Ibadan, Nigeria",
      year: "2019",
      additionalCertifications: [
        "TESOL Certification",
        "Creative Writing Workshop Certificate",
        "Advanced Grammar and Composition"
      ]
    },
    interests: [
      "Creative Writing",
      "Poetry",
      "African Literature",
      "Storytelling",
      "Language Learning",
      "Cultural Studies"
    ],
    teachingPhilosophy: "Language is the gateway to understanding and expressing our thoughts and emotions. I strive to create an environment where students feel confident to explore, express, and excel in their English language journey.",
    achievements: [
      "Helped students achieve top grades in GCSE English Literature",
      "Mentored young writers in national writing competitions",
      "Developed comprehensive curriculum for creative writing",
      "Featured speaker at education conferences"
    ],
    languages: ["English", "Yoruba", "French"],
    availability: "Tuesday to Saturday: 2:00 PM - 8:00 PM (WAT), Sunday: 1:00 PM - 5:00 PM (WAT)",
    sessionTypes: ["Literature Analysis", "Essay Writing", "Grammar Improvement", "Creative Writing"]
  },
  "fatima-ibrahim": {
    id: "fatima-ibrahim",
    name: "Fatima Ibrahim",
    position: "Science & Technology Educator",
    nationality: "Nigerian",
    gender: "Female",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700002/tutor3_sample.jpg",
    specialties: ["Chemistry", "Biology", "Environmental Science", "Laboratory Techniques"],
    rating: 4.9,
    studentsCount: 95,
    experience: "6+ years",
    bio: "Fatima is an experienced science educator with a passion for inspiring the next generation of scientists and innovators. Her expertise in chemistry and biology, combined with her enthusiasm for environmental science, makes her an exceptional tutor for students interested in STEM fields.",
    academicBackground: {
      degree: "Bachelor of Science in Chemistry",
      institution: "Ahmadu Bello University, Nigeria",
      year: "2017",
      additionalCertifications: [
        "Environmental Science Certificate",
        "Laboratory Safety Specialist",
        "STEM Education Methodology"
      ]
    },
    interests: [
      "Environmental Conservation",
      "Laboratory Research",
      "Science Communication",
      "Sustainable Technology",
      "Nature Photography",
      "Science Outreach Programs"
    ],
    teachingPhilosophy: "Science is all around us, and my goal is to help students see the wonder and relevance of scientific concepts in their daily lives. I believe in hands-on learning and making science accessible to everyone.",
    achievements: [
      "Led environmental awareness campaigns in schools",
      "Developed virtual laboratory experiments for online learning",
      "Mentored students in science fair competitions",
      "Published articles on science education"
    ],
    languages: ["English", "Hausa", "Arabic"],
    availability: "Monday to Friday: 4:00 PM - 10:00 PM (WAT), Saturday: 9:00 AM - 3:00 PM (WAT)",
    sessionTypes: ["Concept Explanation", "Lab Simulation", "Exam Preparation", "Research Guidance"]
  },
  "samuel-okafor": {
    id: "samuel-okafor",
    name: "Samuel Okafor",
    position: "Coding & Web Development Instructor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700003/tutor4_sample.jpg",
    specialties: ["Python", "Web Development", "Scratch Programming", "JavaScript"],
    rating: 4.8,
    studentsCount: 200,
    experience: "7+ years",
    bio: "Samuel is a tech enthusiast and experienced coding instructor who is passionate about preparing students for the digital future. With extensive experience in software development and education, he makes programming accessible and fun for learners of all ages.",
    academicBackground: {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nigeria, Nsukka",
      year: "2016",
      additionalCertifications: [
        "Full Stack Web Development",
        "Python Programming Specialist",
        "Youth Coding Instructor Certificate"
      ]
    },
    interests: [
      "Software Development",
      "Game Development",
      "Artificial Intelligence",
      "Open Source Projects",
      "Tech Innovation",
      "Digital Literacy"
    ],
    teachingPhilosophy: "Coding is a superpower in today's digital world. I believe in teaching not just syntax, but problem-solving skills and computational thinking that will serve students throughout their lives.",
    achievements: [
      "Trained over 500 students in programming",
      "Developed coding curriculum for beginners",
      "Led coding bootcamps and workshops",
      "Contributed to open-source educational projects"
    ],
    languages: ["English", "Igbo", "Python", "JavaScript"],
    availability: "Monday to Saturday: 5:00 PM - 11:00 PM (WAT), Sunday: 2:00 PM - 8:00 PM (WAT)",
    sessionTypes: ["Coding Fundamentals", "Project Development", "Debugging Help", "Career Guidance"]
  },
  "aisha-mohammed": {
    id: "aisha-mohammed",
    name: "Aisha Mohammed",
    position: "AI & Machine Learning Specialist",
    nationality: "Nigerian",
    gender: "Female",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700004/tutor5_sample.jpg",
    specialties: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python"],
    rating: 4.9,
    studentsCount: 80,
    experience: "5+ years",
    bio: "Aisha is an AI researcher and educator who is passionate about making cutting-edge technology accessible to young learners. Her expertise in machine learning and data science, combined with her teaching skills, helps students understand and apply AI concepts effectively.",
    academicBackground: {
      degree: "Master of Science in Artificial Intelligence",
      institution: "University of Lagos, Nigeria",
      year: "2020",
      additionalCertifications: [
        "Machine Learning Engineer Certificate",
        "Data Science Specialization",
        "AI Ethics and Responsible AI"
      ]
    },
    interests: [
      "Machine Learning Research",
      "Data Visualization",
      "AI Ethics",
      "Educational Technology",
      "Women in Tech",
      "Innovation in Education"
    ],
    teachingPhilosophy: "AI and machine learning are transforming our world. I aim to demystify these technologies and empower students to become creators, not just consumers, of AI solutions.",
    achievements: [
      "Published research papers on AI in education",
      "Developed AI curriculum for high school students",
      "Mentored students in AI competitions",
      "Speaker at international AI conferences"
    ],
    languages: ["English", "Hausa", "French"],
    availability: "Tuesday to Friday: 6:00 PM - 10:00 PM (WAT), Saturday to Sunday: 10:00 AM - 4:00 PM (WAT)",
    sessionTypes: ["AI Fundamentals", "Machine Learning Projects", "Data Analysis", "Research Mentoring"]
  },
  "david-williams": {
    id: "david-williams",
    name: "David Williams",
    position: "Creative Design & Graphics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700005/tutor6_sample.jpg",
    specialties: ["Graphic Design", "UI/UX Design", "Digital Art", "Adobe Creative Suite"],
    rating: 4.7,
    studentsCount: 110,
    experience: "4+ years",
    bio: "David is a creative professional and design educator who helps students develop design thinking and visual communication skills. With a strong background in graphic design and user experience, he guides students in creating impactful visual solutions.",
    academicBackground: {
      degree: "Bachelor of Fine Arts in Graphic Design",
      institution: "Yaba College of Technology, Nigeria",
      year: "2019",
      additionalCertifications: [
        "Adobe Certified Expert",
        "UI/UX Design Specialization",
        "Digital Marketing Design"
      ]
    },
    interests: [
      "Visual Storytelling",
      "Brand Identity Design",
      "Digital Illustration",
      "Photography",
      "Art History",
      "Design Trends"
    ],
    teachingPhilosophy: "Design is about solving problems creatively. I help students develop both technical skills and creative thinking to communicate effectively through visual media.",
    achievements: [
      "Designed award-winning brand identities",
      "Mentored students in design competitions",
      "Developed comprehensive design curriculum",
      "Featured in design publications"
    ],
    languages: ["English", "Yoruba"],
    availability: "Monday to Friday: 3:00 PM - 9:00 PM (WAT), Saturday: 11:00 AM - 5:00 PM (WAT)",
    sessionTypes: ["Design Fundamentals", "Portfolio Development", "Software Training", "Creative Projects"]
  }
};

export default function TutorDetailPage() {
  const params = useParams();
  const tutorId = params.id as string;
  const tutor = tutorsData[tutorId];

  if (!tutor) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tutor Not Found</h1>
          <Link href="/our-tutors">
            <button className="bg-[#477EFA] text-white px-6 py-3 rounded-lg">
              Back to Tutors
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <motion.section
        className="bg-gradient-to-br from-[#477EFA] to-[#FE2296] pt-32 pb-16 px-6 md:px-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <Link href="/our-tutors">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white mb-8 hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-montserrat">Back to Tutors</span>
            </motion.button>
          </Link>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-800">{tutor.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{tutor.nationality}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{tutor.gender}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">
                  {tutor.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-6 font-urbanist">
                  {tutor.position}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{tutor.studentsCount}+</div>
                    <div className="text-sm text-white/80">Students</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <BookOpen className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{tutor.experience}</div>
                    <div className="text-sm text-white/80">Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Globe className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{tutor.languages.length}</div>
                    <div className="text-sm text-white/80">Languages</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tutor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <Link href="https://wa.me/2347079650962" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#477EFA] px-8 py-4 rounded-full font-bold text-lg font-montserrat hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book a Session
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#111111] mb-6 font-montserrat">
                About {tutor.name}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-urbanist">
                {tutor.bio}
              </p>
            </motion.div>

            {/* Teaching Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-[#477EFA]/10 to-[#FE2296]/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#111111] mb-4 font-montserrat">
                Teaching Philosophy
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-urbanist italic">
                "{tutor.teachingPhilosophy}"
              </p>
            </motion.div>

            {/* Academic Background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#111111] mb-6 font-montserrat flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#477EFA]" />
                Academic Background
              </h3>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-[#477EFA] font-montserrat">
                    {tutor.academicBackground.degree}
                  </h4>
                  <p className="text-gray-600 font-urbanist">
                    {tutor.academicBackground.institution} • {tutor.academicBackground.year}
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2 font-montserrat">
                    Additional Certifications:
                  </h5>
                  <ul className="space-y-1">
                    {tutor.academicBackground.additionalCertifications.map((cert, index) => (
                      <li key={index} className="text-gray-600 flex items-center gap-2 font-urbanist">
                        <Award className="w-4 h-4 text-[#FE2296]" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#111111] mb-6 font-montserrat flex items-center gap-2">
                <Award className="w-6 h-6 text-[#FE2296]" />
                Key Achievements
              </h3>
              <div className="grid gap-4">
                {tutor.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#477EFA] hover:shadow-lg transition-shadow"
                  >
                    <p className="text-gray-700 font-urbanist">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#111111] mb-4 font-montserrat">
                Quick Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#477EFA]" />
                  <div>
                    <p className="font-semibold text-gray-800 font-montserrat">Languages</p>
                    <p className="text-gray-600 text-sm font-urbanist">
                      {tutor.languages.join(", ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#477EFA]" />
                  <div>
                    <p className="font-semibold text-gray-800 font-montserrat">Availability</p>
                    <p className="text-gray-600 text-sm font-urbanist">
                      {tutor.availability}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#111111] mb-4 font-montserrat flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#FE2296]" />
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tutor.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-[#FE2296]/10 text-[#FE2296] px-3 py-1 rounded-full text-sm font-medium font-urbanist"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Session Types */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#111111] mb-4 font-montserrat">
                Session Types
              </h3>
              <div className="space-y-2">
                {tutor.sessionTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700 font-urbanist"
                  >
                    <BookOpen className="w-4 h-4 text-[#477EFA]" />
                    {type}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-[#477EFA] to-[#FE2296] rounded-xl p-6 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                Ready to Learn?
              </h3>
              <p className="mb-4 font-urbanist">
                Book a session with {tutor.name} today!
              </p>
              <Link href="https://wa.me/2347079650962" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[#477EFA] py-3 rounded-lg font-bold font-montserrat hover:shadow-lg transition-all duration-300"
                >
                  Contact Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}