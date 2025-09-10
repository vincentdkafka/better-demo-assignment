import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

const BackedBy = () => {
  const companies = [
    {
      id: 1,
      name: "Company A",
      logo: "/logos/company-1.png",
    },
    {
      id: 2,
      name: "Company B",
      logo: "/logos/company-2.png",
    },
    {
      id: 3,
      name: "Company C",
      logo: "/logos/company-3.png",
    },
    {
      id: 4,
      name: "Company D",
      logo: "/logos/company-4.png",
    },
  ];

  return (
    <div className="w-full py-16 bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-gray-600 text-lg font-medium mb-8">
          Backed by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <TooltipProvider>
            {companies.map((company) => (
              <Tooltip key={company.id}>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80} 
                      height={32} 
                      className="object-contain opacity-80 mx-10"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>{company.name}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BackedBy;
