"use client";


import HowItStarted from "@/components/HowItStarted";
import ValuesVisionMission from "@/components/ValuesVisionMission.tsxValuesVisionMission";
import HowWeOperate from "@/components/HowWeOperate";

export default function About() {
  return (
    <div className="bg-[#FFFFFF]">
          <HowItStarted />
          <ValuesVisionMission />
          <HowWeOperate />
    </div>
  );
}
