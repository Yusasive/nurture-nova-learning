import Image from "next/image";

const courses = [
  { name: "Mathematics", icon: "/icons/math.png" },
  { name: "English", icon: "/icons/english.png" },
  { name: "Physics", icon: "/icons/physics.png" },
  { name: "Chemistry", icon: "/icons/chemistry.png" },
  { name: "Biology", icon: "/icons/biology.png" },
  { name: "Coding", icon: "/icons/coding.png" },
  { name: "Music", icon: "/icons/music.png" },
  { name: "Languages", icon: "/icons/languages.png" },
  { name: "11+ NVR/VR", icon: "/icons/nvrvr.png" },
];

export default function CoursesSection() {
  return (
    <section className="bg-[#0A3D48] text-white py-10 px-6 md:px-28">
      <div className="text-center mb-8">
        <h3 className="text-[#FC8402] text-xl font-bold">Our Courses</h3>
        <p className="text-base md:text-lg text-[#FFFFFF] font-semibold mt-2">
          Our Tutors Provide Quality Teaching In The Following Subjects:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl py-2 px-10 space-x-20 flex flex-row items-center shadow-md hover:scale-105 transition duration-300"
          >
            <Image
              src={course.icon}
              alt={course.name}
              width={30}
              height={30}
              className=""
            />
            <h4 className="flex items-center font-bold text-lg">
              {course.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
