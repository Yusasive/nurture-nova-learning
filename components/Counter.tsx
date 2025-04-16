"use client";

import CountUp from "react-countup";
import { FaUsers, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUsers size={32} className="text-orange-500" />,
    number: 55,
    suffix: "+",
    label: "Students",
  },
  {
    icon: <FaChalkboardTeacher size={32} className="text-orange-500" />,
    number: 20,
    suffix: "+",
    label: "Tutors",
  },
  {
    icon: <FaGlobe size={32} className="text-orange-500" />,
    number: 5,
    suffix: "+",
    label: "Countries",
  },
];

export default function StatsSection() {
  return (
    <div className="bg-[#FFFFFF] flex justify-center px-6 lg:px-28 items-center gap-10 md:gap-20 py-10">
      {statsData.map((item, index) => (
        <div key={index} className="flex items-center gap-4 ">
          <div className="bg-gray-100 p-4 rounded-md">{item.icon}</div>
          <div>
            <div className="font-bold text-[#000000] text-base">
              <CountUp end={item.number} duration={2} suffix={item.suffix} />
            </div>
            <div className="text-[#FC8402] text-sm font-medium">
              {item.label}
            </div>
          </div>
          {index !== statsData.length - 1 && (
            <div className="hidden md:block h-10 border-r border-gray-300 mx-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}
