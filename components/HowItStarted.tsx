import Image from "next/image";

export default function HowItStarted() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
          <p className="text-orange-500 font-medium mb-3">How It Started</p>
          <h2 className="text-3xl md:text-4xl text-[#000000] font-extrabold leading-snug mb-4">
            Our dream is to teach children <br />
            to be <span className="text-orange-500">creative</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Nurture Nova Learning was founded in response to the challenges
            brought about by the pandemic. With social distancing making
            traditional education difficult, we saw an opportunity to bridge the
            education gap and ensure that learning continued, no matter the
            circumstances...
          </p>
          <p className="text-gray-700 mb-4">
            We offer personalized tutoring sessions in Mathematics, English, and
            Sciences to students from KS2 up to GCSE level... We also provide
            bespoke language learning for beginners and intermediate learners in
            Yoruba and French.
          </p>
          <p className="font-semibold text-gray-900">
            Our goal is simple: to make learning as easy and seamless as
            possible, offering support tailored to each student’s unique needs.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/team.jpg"
              alt="The Nurture Nova Team"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white rounded-2xl shadow-xl p-6">
            <div className="bg-[#f6fafd] rounded-lg p-4 text-center">
              <h3 className="text-2xl text-[#000000] font-bold">45+</h3>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div className="bg-[#f6fafd] rounded-lg p-4 text-center">
              <h3 className="text-2xl text-[#000000] font-bold">30+</h3>
              <p className="text-sm text-gray-600">Tutors</p>
            </div>
            <div className="bg-[#f6fafd] rounded-lg p-4 text-center col-span-2">
              <h3 className="text-2xl text-[#000000] font-bold">5+</h3>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
