import React from "react";
import { Home, DollarSign, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const options = [
    {
      icon: <Home className="w-6 h-6 text-better-green" />,
      text: "Buying a home"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-better-green" />,
      text: "Refinancing my mortgage"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-better-green" />,
      text: "Get cash from my home"
    }
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Chatbot Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-16 h-16 bg-better-green rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-better-green rounded-full"></div>
              </div>
            </div>
            {/* Speech bubble */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-better-green"></div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Hi, I'm Betsy!
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          What can I help you with?
        </p>
        <div className="max-w-sm mx-auto mb-8">
          <Separator />
        </div>

        {/* Option Cards */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {options.map((option, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-all duration-200 border-gray-200 hover:border-better-green">
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-better-green/10 rounded-lg mr-4">
                  {option.icon}
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {option.text}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;