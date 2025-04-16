import Image from "next/image";
import operateImage from "@/public/images/operatepic-CwSv2PmN.png"; 

const HowWeOperate = () => {
  return (
    <section className="bg-[#F3F7FB] py-16 rounded-3xl shadow-lg px-8 md:px-20 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/2">
        <h2 className="text-orange-500 font-semibold text-lg mb-4">
          How We Operate
        </h2>
        <p className="text-gray-800 mb-4">
          Our trained tutors are based in Africa and our Students are based in
          different countries, hence our services are provided remotely.
        </p>
        <p className="text-gray-800 mb-4">
          We use online teaching and learning. The minimum requirements for
          students to be admitted is to have access to a computer, webcam, good
          internet, and the desire to achieve in a non-traditional classroom.
          Learners say that the online environment makes it easier to
          incorporate education into their hectic schedules.
        </p>
        <p className="text-gray-800">
          For many of today&apos;s students, the opportunity to access a course
          from any computer with internet connectivity, 24 hours a day, seven
          days a week, is a huge plus.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={operateImage}
          alt="Online teaching illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HowWeOperate;
