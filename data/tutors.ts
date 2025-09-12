export interface TutorDetail {
  id: string;
  name: string;
  position: string;
  nationality: string;
  gender: string;
  image: string;
  specialties: string[];
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
  achievements: string[];
  languages: string[];
}


export const tutorsData: TutorDetail[] = [
  {
    id: "rasheed-adeoti",
    name: "Rasheed Adeoti",
    position: "Senior Mathematics & Physics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "/images/abdulrasheed.png",
    specialties: [
      "Mathematics",
      "Physics",
      "11+ Preparation",
      "GCSE Preparation",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "Physics Education Specialist",
      ],
    },
    interests: [
      "Mathematical Problem Solving",
      "Physics Experiments",
      "Educational Technology",
      "Chess",
      "Reading Scientific Journals",
      "Mentoring Young Minds",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Successfully helped 95% of students improve their grades by at least one level",
      "Developed innovative teaching methods for online mathematics education",
      "Recognized as 'Outstanding Tutor of the Year' 2023",
      "Published research on effective online STEM education",
    ],
    languages: ["English", "Yoruba", "Hausa"],
    // availability removed
    // sessionTypes removed
  },
  {
    id: "toyeeb-olanrewaju-ambali",
    name: "Toyeeb Olanrewaju Ambali",
    position: "English Language & Literature Specialist",
    nationality: "Nigerian",
    gender: "Male",
    image: "/images/toyyib.png",
    specialties: [
      "English Language",
      "Literature",
      "Creative Writing",
      "Essay Writing",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "Advanced Grammar and Composition",
      ],
    },
    interests: [
      "Creative Writing",
      "Poetry",
      "African Literature",
      "Storytelling",
      "Language Learning",
      "Cultural Studies",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Helped students achieve top grades in GCSE English Literature",
      "Mentored young writers in national writing competitions",
      "Developed comprehensive curriculum for creative writing",
      "Featured speaker at education conferences",
    ],
    languages: ["English", "Yoruba", "French"],
    // availability removed
    // sessionTypes removed
  },
  {
    id: "rukayat-olabisi-lawal",
    name: "Rukayat Olabisi Lawal,",
    position: "Science & Technology Educator",
    nationality: "Nigerian",
    gender: "Female",
    image: "/images/olabisi.png",
    specialties: [
      "Chemistry",
      "Biology",
      "Environmental Science",
      "Laboratory Techniques",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "STEM Education Methodology",
      ],
    },
    interests: [
      "Environmental Conservation",
      "Laboratory Research",
      "Science Communication",
      "Sustainable Technology",
      "Nature Photography",
      "Science Outreach Programs",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Led environmental awareness campaigns in schools",
      "Developed virtual laboratory experiments for online learning",
      "Mentored students in science fair competitions",
      "Published articles on science education",
    ],
    languages: ["English", "Hausa", "Arabic"],
    // availability removed
    // sessionTypes removed
  },
  {
    id: "lasisi-romoke-adunbarin",
    name: "Lasisi Romoke Adunbarin",
    position: "Coding & Web Development Instructor",
    nationality: "Nigerian",
    gender: "Male",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700003/tutor4_sample.jpg",
    specialties: [
      "Python",
      "Web Development",
      "Scratch Programming",
      "JavaScript",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "Youth Coding Instructor Certificate",
      ],
    },
    interests: [
      "Software Development",
      "Game Development",
      "Artificial Intelligence",
      "Open Source Projects",
      "Tech Innovation",
      "Digital Literacy",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Trained over 500 students in programming",
      "Developed coding curriculum for beginners",
      "Led coding bootcamps and workshops",
      "Contributed to open-source educational projects",
    ],
    languages: ["English", "Igbo", "Python", "JavaScript"],
    // availability removed
    // sessionTypes removed
  },
  {
    id: "murtala-muhammmad-munabau",
    name: "Murtala Muhammad Munabau",
    position: "AI & Machine Learning Specialist",
    nationality: "Nigerian",
    gender: "Female",
    image:
      "https://res.cloudinary.com/ddxssowqb/image/upload/v1746700004/tutor5_sample.jpg",
    specialties: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Python",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "AI Ethics and Responsible AI",
      ],
    },
    interests: [
      "Machine Learning Research",
      "Data Visualization",
      "AI Ethics",
      "Educational Technology",
      "Women in Tech",
      "Innovation in Education",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Published research papers on AI in education",
      "Developed AI curriculum for high school students",
      "Mentored students in AI competitions",
      "Speaker at international AI conferences",
    ],
    languages: ["English", "Hausa", "French"],
    // availability removed
    // sessionTypes removed
  },
  {
    id: "yusuf-abdullahi-temidayo",
    name: "Yusuf Abdullahi Temidayo",
    position: "Creative Design & Graphics Tutor",
    nationality: "Nigerian",
    gender: "Male",
    image: "/images/yusasive.png",
    specialties: [
      "Graphic Design",
      "UI/UX Design",
      "Digital Art",
      "Adobe Creative Suite",
    ],
  // rating removed
  // studentsCount removed
  // totalExperience removed
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
        "Digital Marketing Design",
      ],
    },
    interests: [
      "Visual Storytelling",
      "Brand Identity Design",
      "Digital Illustration",
      "Photography",
      "Art History",
      "Design Trends",
    ],
    // teachingPhilosophy removed
    achievements: [
      "Designed award-winning brand identities",
      "Mentored students in design competitions",
      "Developed comprehensive design curriculum",
      "Featured in design publications",
    ],
    languages: ["English", "Yoruba"],
    // availability removed
    // sessionTypes removed
  },
];

// Utility function to calculate experience with NurtureNova
export function calculateNurtureNovaExperience(
  startDate: string,
  isActive: boolean
): string {
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
      return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
    }
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else {
    return "Less than 1 month";
  }
}

// Get only active tutors
export function getActiveTutors(): TutorDetail[] {
  return tutorsData.filter((tutor) => tutor.isActive);
}

// Get tutor by ID
export function getTutorById(id: string): TutorDetail | undefined {
  return tutorsData.find((tutor) => tutor.id === id);
}

// Get tutors by specialty
export function getTutorsBySpecialty(specialty: string): TutorDetail[] {
  return tutorsData.filter(
    (tutor) =>
      tutor.isActive &&
      tutor.specialties.some((s) =>
        s.toLowerCase().includes(specialty.toLowerCase())
      )
  );
}
