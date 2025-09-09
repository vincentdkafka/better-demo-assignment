"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0);
      },
      { root: null, threshold: [0, 0.01, 0.1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full h-[88px] flex items-center transition-colors duration-300 ${
      isHeroVisible ? "bg-[#004733]" : "bg-white"
    }`}>
      <div className="flex justify-between items-center w-full px-14">
        {/* Left section */}
        <nav>
          <ul className={`flex items-center gap-[68px] list-none m-0 p-0 ${
            isHeroVisible ? "text-white" : "text-black"
          }`}>
            <Link href='/'><li className="text-2xl cursor-pointer font-bold">Better</li></Link>
            <Link href="/">
              <li className="text-lg cursor-pointer">Home</li>
            </Link>
            <Link href="/start">
              <li className="text-lg cursor-pointer">Start</li>
            </Link>
            <Link href="/mortage">
              <li className="text-lg cursor-pointer">Mortgage</li>
            </Link>
            <Link href="/about">
              <li className="text-lg cursor-pointer">About</li>
            </Link>
          </ul>
        </nav>

        {/* Right section */}
        
        <div className={`flex items-center gap-8 ${
          isHeroVisible ? "text-white" : "text-black"
        }`}>
          <span className={`w-10 h-10 flex items-center justify-center rounded-full border ${
            isHeroVisible ? "border-white" : "border-black"
          }`}>
            <Phone className="w-5 h-5" />
          </span>

          <Button
            className={`rounded-3xl px-5 py-6 transition-colors duration-300 text-lg border ${
              isHeroVisible
                ? "bg-[#004733] text-white border-[#004733] hover:bg-white hover:text-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white"
            }`}
          >
            Sign
          </Button>

          <Button
            className={`text-lg rounded-3xl px-5 py-6 transition-colors duration-300 ${
              isHeroVisible
                ? "bg-[#1ee07f] text-black hover:bg-[#004733] hover:text-white"
                : "bg-black text-white hover:bg-[#004733]"
            }`}
          >
            Continue
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
