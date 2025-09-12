export interface TutorDetail {
  id: string;
  name: string;
  position: string;
  nationality: string;
  gender: string;
  image: string;
  specialties: string[];
  rating: number;
  studentsCount: number;
  totalExperience: string;
  nurtureNovaStartDate: string; // Format: "YYYY-MM-DD"
  isActive: boolean;
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

export const tutorsData: TutorDetail[] = [
  {
    id: "rasheed-adeoti",
    name: "Rasheed Adeoti",
    position: "Senior Mathematics & Physics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700000/tutor1_sample.jpg",
    specialties: ["Mathematics", "Physics", "11+ Preparation", "GCSE Preparation"],
    rating: 4.9,
    studentsCount: 150,
    totalExperience: "5+ years",
    nurtureNovaStartDate: "2022-03-15",
    isActive: true,
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
  {
    id: "adebayo-johnson",
    name: "Adebayo Johnson",
    position: "English Language & Literature Specialist",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700001/tutor2_sample.jpg",
    specialties: ["English Language", "Literature", "Creative Writing", "Essay Writing"],
    rating: 4.8,
    studentsCount: 120,
    totalExperience: "4+ years",
    nurtureNovaStartDate: "2022-08-20",
    isActive: true,
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
  {
    id: "fatima-ibrahim",
    name: "Fatima Ibrahim",
    position: "Science & Technology Educator",
    nationality: "Nigerian",
    gender: "Female",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700002/tutor3_sample.jpg",
    specialties: ["Chemistry", "Biology", "Environmental Science", "Laboratory Techniques"],
    rating: 4.9,
    studentsCount: 95,
    totalExperience: "6+ years",
    nurtureNovaStartDate: "2021-11-10",
    isActive: true,
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
  {
    id: "samuel-okafor",
    name: "Samuel Okafor",
    position: "Coding & Web Development Instructor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700003/tutor4_sample.jpg",
    specialties: ["Python", "Web Development", "Scratch Programming", "JavaScript"],
    rating: 4.8,
    studentsCount: 200,
    totalExperience: "7+ years",
    nurtureNovaStartDate: "2021-06-01",
    isActive: true,
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
  {
    id: "aisha-mohammed",
    name: "Aisha Mohammed",
    position: "AI & Machine Learning Specialist",
    nationality: "Nigerian",
    gender: "Female",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700004/tutor5_sample.jpg",
    specialties: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python"],
    rating: 4.9,
    studentsCount: 80,
    totalExperience: "5+ years",
    nurtureNovaStartDate: "2023-01-15",
    isActive: true,
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
  {
    id: "david-williams",
    name: "David Williams",
    position: "Creative Design & Graphics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700005/tutor6_sample.jpg",
    specialties: ["Graphic Design", "UI/UX Design", "Digital Art", "Adobe Creative Suite"],
    rating: 4.7,
    studentsCount: 110,
    totalExperience: "4+ years",
    nurtureNovaStartDate: "2022-09-12",
    isActive: true,
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
  },
  {
    id: "blessing-adeyemi",
    name: "Blessing Adeyemi",
    position: "Mathematics & Statistics Specialist",
    nationality: "Nigerian",
    gender: "Female",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700006/tutor7_sample.jpg",
    specialties: ["Mathematics", "Statistics", "Data Analysis", "Calculus"],
    rating: 4.8,
    studentsCount: 85,
    totalExperience: "3+ years",
    nurtureNovaStartDate: "2023-05-20",
    isActive: true,
    bio: "Blessing is a dedicated mathematics and statistics educator who excels at making complex mathematical concepts accessible to students. Her analytical approach and patient teaching style help students build confidence in mathematics and statistical analysis.",
    academicBackground: {
      degree: "Bachelor of Science in Statistics",
      institution: "University of Ilorin, Nigeria",
      year: "2020",
      additionalCertifications: [
        "Advanced Statistics Certificate",
        "Data Analysis with R",
        "Mathematical Modeling"
      ]
    },
    interests: [
      "Statistical Modeling",
      "Data Visualization",
      "Mathematical Research",
      "Educational Games",
      "Problem Solving",
      "Academic Mentoring"
    ],
    teachingPhilosophy: "Mathematics is the language of logic and reasoning. I believe in building strong foundations and helping students see the beauty and practical applications of mathematical concepts.",
    achievements: [
      "Improved student pass rates by 90% in statistics",
      "Developed interactive math learning materials",
      "Mentored students in mathematics competitions",
      "Created statistical analysis tutorials"
    ],
    languages: ["English", "Yoruba"],
    availability: "Monday to Friday: 2:00 PM - 8:00 PM (WAT), Saturday: 10:00 AM - 4:00 PM (WAT)",
    sessionTypes: ["Mathematical Concepts", "Statistical Analysis", "Exam Preparation", "Problem Solving"]
  },
  {
    id: "chinedu-okoro",
    name: "Chinedu Okoro",
    position: "Former Teacher - Inactive",
    nationality: "Nigerian",
    gender: "Male",
    image: "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700007/tutor8_sample.jpg",
    specialties: ["Physics", "Mathematics"],
    rating: 4.6,
    studentsCount: 45,
    totalExperience: "2+ years",
    nurtureNovaStartDate: "2023-02-10",
    isActive: false, // This tutor is no longer active
    bio: "Chinedu was a physics and mathematics tutor who contributed to our team for over a year before pursuing other opportunities.",
    academicBackground: {
      degree: "Bachelor of Science in Physics",
      institution: "University of Port Harcourt, Nigeria",
      year: "2021",
      additionalCertifications: [
        "Physics Education Certificate"
      ]
    },
    interests: [
      "Theoretical Physics",
      "Mathematics"
    ],
    teachingPhilosophy: "Physics explains the world around us through mathematical principles.",
    achievements: [
      "Helped students understand complex physics concepts"
    ],
    languages: ["English", "Igbo"],
    availability: "Not Available",
    sessionTypes: ["Physics Concepts", "Mathematical Problem Solving"]
  }
];

// Utility function to calculate experience with NurtureNova
export function calculateNurtureNovaExperience(startDate: string, isActive: boolean): string {
  if (!isActive) {
    return "Former Team Member";
  }

  const start = new Date(startDate);
  const now = new Date();
  
  const diffTime = Math.abs(now.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  
  if (years > 0) {
    if (months > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
    }
    return `${years} year${years > 1 ? 's' : ''}`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''}`;
  } else {
    return "Less than 1 month";
  }
}

// Get only active tutors
export function getActiveTutors(): TutorDetail[] {
  return tutorsData.filter(tutor => tutor.isActive);
}

// Get tutor by ID
export function getTutorById(id: string): TutorDetail | undefined {
  return tutorsData.find(tutor => tutor.id === id);
}

// Get tutors by specialty
export function getTutorsBySpecialty(specialty: string): TutorDetail[] {
  return tutorsData.filter(tutor => 
    tutor.isActive && tutor.specialties.some(s => 
      s.toLowerCase().includes(specialty.toLowerCase())
    )
  );
}