import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Findout = () => {
  return (
    
    <div className="w-full bg-white md:px-10 xl:p-[120px]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-[300px] items-center">
        {/* Left: Video from public folder */}
        <div className="w-full flex justify-center">
          <video
            className="w-[341px] h-[616px] rounded-2xl overflow-hidden bg-black object-cover"
            src="/video1.mp4"
            controls
            muted
            playsInline
          />
        </div>

        {/* Right: Existing text content */}
        <div className="flex flex-col justify-center md:max-w-[507px]">
          <h2 className="font-semibold m-0 p-0 text-7xl whitespace-nowrap">
            Find out why <br />we're better
          </h2>

          <Button
            className="mt-4 bg-[#004733] text-white 
               rounded-full p-10 py-8
               hover:bg-[#017848] hover:text-white
               transition-colors duration-300
               text-base w-fit"
          >
            See all our stories
          </Button>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Star
                className="w-5 h-5"
                stroke="#017848" 
                fill="#017848" 
                strokeWidth={2} 
              />
              <p>
                <strong> Trustpilot</strong>
              </p>
            </div>
            <span className="text-gray-700">
              <strong>Excellent</strong>
            </span>
            <span className="text-gray-700">
              <strong>4.4 </strong>
              out of 5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findout;
