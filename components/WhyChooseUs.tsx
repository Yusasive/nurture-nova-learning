import Image from "next/image";

const features = [
  {
    title: "Experienced Tutors",
    description:
      "Our team consists of highly qualified tutors with years of experience in helping students succeed academically.",
    icon: "/icons/tutor.png",
  },
  {
    title: "One-on-One Classes",
    description:
      "We offer personalized, one-on-one tutoring sessions that cater to your child’s unique learning needs.",
    icon: "/icons/oneonone.png",
  },
  {
    title: "Flexible Learning",
    description:
      "Our schedules are designed to fit into your busy life, allowing your child to learn at their own pace.",
    icon: "/icons/clock.png",
  },
  {
    title: "Great Value",
    description:
      "We deliver exceptional tutoring services at a price that reflects the quality and care your child deserves.",
    icon: "/icons/value.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 md:px-28 py-20 md:space-x-10 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl text-[#000000] font-bold">
            This is Why We are <span className="text-[#FC8402]">different</span>{" "}
            from Others
          </h2>
          <p className="text-[#9CA3AF] text-sm mt-4">
            At Nurture Nova Learning, we stand out because of our commitment to
            quality, personalized learning, and results-driven education. Our
            team of experienced tutors is dedicated to helping your child
            succeed through flexible, one-on-one classes designed around their
            unique needs.
          </p>
          <p className="text-[#9CA3AF] text-sm mt-4">
            Whether you’re seeking a tutor for primary school or advanced
            subjects, we ensure that every student receives top-tier instruction
            with excellent value for your investment.
          </p>

          <div className="mt-8">
            <Image
              src="/images/parent-tutoring.jpg"
              alt="Parent helping child"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl px-6 py-12 flex flex-col items-start hover:shadow-lg transition"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-lg text-[#000000] font-bold">{feature.title}</h3>
              <p className="text-[#9CA3AF] text-xs mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
