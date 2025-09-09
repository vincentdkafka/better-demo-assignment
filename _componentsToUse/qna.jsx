import { Button } from "@/components/ui/button";
import React from "react";

const Qna = () => {
  return (
    <div className="w-full bg-white md:px-10 xl:p-[120px]">
      <div className="flex items-center justify-between gap-5">
        <h2 className="text-5xl font-semibold">
          Got questions? <br />
          We've got answers
        </h2>

        <div className="flex gap-7">
          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-7 py-5 text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Our Products
          </Button>

          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-7 py-5 text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Calculator
          </Button>

          <Button
            className="bg-white text-black border border-gray-300 rounded-full px-7 py-5 text-lg
      hover:border-[#004733] hover:text-[#004733] hover:bg-white
      transition-all duration-300 hover:shadow-[0_0_0_2px_#004733]"
          >
            Guides and FAQ
          </Button>
        </div>
      </div>

<div className="flex mt-10  justify-center flex-wrap gap-5">
  {/* Card 1 */}
  <div className="w-[361px] h-[406px] bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Card 1</h1>
      <span className="text-2xl">➔</span>
    </div>
    <img
      src="/your-image1.jpg"
      alt="Card 1"
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>

  {/* Card 2 */}
  <div className="w-[770px] h-[406px] bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Card 2</h1>
      <span className="text-2xl">➔</span>
    </div>
    <img
      src="/your-image2.jpg"
      alt="Card 2"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>

   {/* Card 2 */}
  <div className="w-[770px] h-[406px] bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Card 2</h1>
      <span className="text-2xl">➔</span>
    </div>
    <img
      src="/your-image2.jpg"
      alt="Card 2"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>

  {/* Card 3 */}
  <div className="w-[361px] h-[406px] bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col justify-between">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Card 3</h1>
      <span className="text-2xl">➔</span>
    </div>
    <img
      src="/your-image3.jpg"
      alt="Card 3"
      className="w-full h-48 object-cover rounded-lg"
    />
  </div>

</div>

    </div>
  );
};

export default Qna;
