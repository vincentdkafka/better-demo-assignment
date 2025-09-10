import { Button } from "@/components/ui/button";
import React from "react";

const Qna = () => {
  const topics = [
    {
      id: 1,
      title: "How AI Mortgage Lending is Transforming the Home Loan Process",
      image: "/your-image1.jpg",
      blurb:
        "AI streamlines application reviews, reduces manual errors, and speeds up approvals for a smoother borrower experience.",
    },
    {
      id: 2,
      title: "Smarter Pre‑Approvals with AI",
      image: "/your-image2.jpg",
      blurb:
        "Instant income and document insights help lenders assess risk in minutes, not days.",
    },
    {
      id: 3,
      title: "Personalized Rates Powered by Data",
      image: "/your-image3.jpg",
      blurb:
        "Machine learning models analyze thousands of factors to surface competitive, personalized rate options.",
    },
    {
      id: 4,
      title: "From Application to Close—Faster",
      image: "/your-image2.jpg",
      blurb:
        "Automations remove bottlenecks across underwriting, verification, and closing to reduce time-to-close.",
    },
  ];
  return (
    <div className="w-full bg-white px-4 md:px-10 xl:px-[120px] py-10 xl:py-[120px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Got questions? <br />
          We've got answers
        </h2>

        <div className="flex flex-wrap gap-3 md:gap-5">
          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-5 py-4 text-base md:px-7 md:py-5 md:text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Our Products
          </Button>

          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-5 py-4 text-base md:px-7 md:py-5 md:text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Calculator
          </Button>

          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-5 py-4 text-base md:px-7 md:py-5 md:text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Guides and FAQ
          </Button>
        </div>
      </div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
  {topics.map((item, idx) => (
    <div
      key={item.id}
      className={`w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col gap-4 ${
        idx === 1 || idx === 2 ? "sm:col-span-2 xl:col-span-1" : ""
      }`}
    >
      <div className="flex justify-between items-start gap-3">
        <h3 className="text-lg md:text-xl font-bold leading-snug">
          {item.title}
        </h3>
        <span className="text-2xl">➔</span>
      </div>

      <div className="w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 md:h-56 object-cover rounded-lg bg-gray-100"
        />
      </div>

      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {item.blurb}
      </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Qna;
