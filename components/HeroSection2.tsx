export default function HeroSection2() {
  return (
    <section className="bg-[#083B4C] py-16 my-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="/images/study-girl.jpg"
            alt="Child learning"
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1 text-white text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Every Child Deserves The Opportunity To Learn.
          </h1>
          <p className="text-[#CBD5E1] text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            We understand your needs, your experience with us is customized to
            better help us work with you towards achieving your personal goals.
          </p>
          <button className="bg-[#FC8402] text-[#FFFFFF} hover:bg-transparent border-[#FC8402] text-base font-bold px-5 py-2 rounded-full">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
