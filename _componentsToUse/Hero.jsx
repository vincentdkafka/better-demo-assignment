import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-[#004733] w-full min-h-[700px] md:min-h-[820px] lg:min-h-[891px] flex flex-col items-center pt-[60px] px-4 relative overflow-hidden"
    >
      <h1 className="text-white font-semibold text-center text-[50px] md:text-[70px] lg:text-[100px] leading-[1.1]">
        The first <br />
        <span className="text-gradient">AI-powered</span> Mortgage
      </h1>

      <p className="text-white text-base md:text-lg lg:text-[22px] font-sans text-center mt-4 px-4">
        Our tech unlocks lower rates, higher chances of approval,
        <br /> and a lightning‑fast process from approval to closing. Over $100
        billion funded.
      </p>

      <div>
        <Button className="px-10 py-8 rounded-full mt-6 text-lg bg-[#1ee07f] text-black hover:bg-[#004733] hover:text-white">
          Start my pre-approval
        </Button>

        <div className=" text-white flex items-center mt-5 gap-2">
          <Clock className="text-white w-5 h-5" /> <span>3 min</span>
          <span>| No hard credit check</span>
        </div>
      </div>

      <div className="mt-6 text-center absolute bottom-0">
        <Image
          src="/photo.webp"
          alt="Better Mortgage"
          width={420}
          height={680}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
