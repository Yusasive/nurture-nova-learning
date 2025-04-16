import Link from "next/link";
import Image from "next/image";

export default function HeroSection2() {
  return (
    <section className="bg-[#012958] py-16 my-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 w-full">
          <Image
            src="/images/study-girl.jpg"
            alt="Child learning"
            width={600}
            height={400}
            className="rounded-3xl w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 text-white text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Every Child Deserves The Opportunity To Learn.
          </h1>
          <p className="text-[#CBD5E1] text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            We understand your needs, and your experience with us is customized
            to better help you work towards achieving your personal goals.
          </p>
          <Link href="/register">
            <button className="bg-[#FF3366] text-white hover:bg-transparent hover:text-[#FF3366] border border-[#FF3366] text-base font-bold px-6 py-2 rounded-full transition duration-300">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
