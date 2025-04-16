import Image from "next/image";

const teamMembers = [
  { src: "/images/first.jpg", alt: "Team Member 1" },
  { src: "/images/second.jpg", alt: "Team Member 2" },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-28 bg-white flex flex-col lg:flex-row items-center justify-between">
      <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-28 h-60 md:w-36 md:h-72 rounded-[40px] overflow-hidden shadow-md"
          >
            <Image
              src={member.src}
              alt={member.alt}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="lg:ml-16 mt-10 lg:mt-0 text-center lg:text-left max-w-xl">
        <p className="text-[#FC8402] text-xl font-bold mb-2">About Us</p>
        <h2 className="text-3xl md:text-[40px] text-[#000000] font-semibold mb-4">
          Learn more about our efficient and highly qualified academy
        </h2>
        <p className="text-[#9CA3AF] text-base mb-6">
          Nurture Nova is a tutoring academy founded during the pandemic with a
          vision of bridging the gap in education, and overcoming the challenges
          posed by distance and timing.
        </p>
        <button className="bg-[#FC8402] text-[#FFFFFF} hover:bg-transparent border-[#FC8402] text-base font-bold px-5 py-2 rounded-full">
          Learn More
        </button>
      </div>
    </section>
  );
}
