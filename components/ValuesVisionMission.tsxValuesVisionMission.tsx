export default function ValuesVisionMission() {
  return (
    <section className="bg-[#033642] text-white px-4 py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Our Values
          </h2>
          <p className="text-gray-100 mb-6 leading-relaxed">
            Guided by our core values, we strive to build a nurturing and
            impactful educational experience. Our commitment to respect,
            communication, and growth shapes everything we do.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Servant Leadership",
              "Communication",
              "Celebration",
              "Welfare and Support",
              "Respect",
              "Relationship",
              "Integrity",
              "Growth and Development",
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white text-black px-4 py-2 rounded-lg shadow text-sm font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              Our vision is to be the leading online tutoring company, renowned
              for our commitment to staff growth and welfare, personalized
              education, and student success across global communities.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Our mission is to provide students with a strong foundation and
              the tools to enjoy learning, to lead impactful programs that
              foster both academic success and character development, and to
              embrace individualized learning approaches that enhance
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
