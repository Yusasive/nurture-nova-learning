import React from "react";

const testimonials = [
  {
    text: `I got feedback from Paul’s Science teacher. He got a reward as well...`,
    name: "Mrs Soares",
    role: "Parent",
  },
  {
    text: `I have stumbled on several Online/Virtual platforms...`,
    name: "Mrs Ottun",
    role: "Parent",
  },
  {
    text: `I wanted to let you know that Omolade was moved from set 5...`,
    name: "Miss Tade",
    role: "Parent",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#0A3D48] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-[#FFFFFF] font-bold mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-xl font-light">
          What{" "}
          <span className="text-[#FC8402] font-medium">The Light Guardians</span>{" "}
          have to say about us
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="bg-white  text-[#9CA3AF] rounded-xl p-6 shadow-md  flex flex-col justify-between items-center">
      <p className="mb-4">{text}</p>
      <div>
        <p className="text-[#FC8402] font-bold text-left">{name}</p>
        <p className="text-[#9CA3AF] text-left
        ">{role}</p>
      </div>
    </div>
  );
}
