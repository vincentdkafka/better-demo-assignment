import React from "react";
import { CheckCircle, Gift, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-better-green" />,
      text: "Custom mortgage rates",
    },
    {
      icon: <Gift className="w-5 h-5 text-better-green" />,
      text: "Exclusive offers",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-better-green" />,
      text: "A personalized dashboard",
    },
  ];

  return (
    <div className="flex justify-center py-12 px-6">
      
      <div className="bg-green-200 bg-opacity-30 rounded-lg p-8 w-fit">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 font-medium">
            After a few questions, you'll unlock:
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 mr-4">
                {benefit.icon}
              </div>
              <Badge
                variant="secondary"
                className="bg-white text-gray-700 border border-gray-200"
              >
                {benefit.text}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
