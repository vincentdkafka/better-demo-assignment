import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


const Timeline = ({ title = "Company Timeline", className = "" }) => {
  // my data
  const items = [
    {
      id: 1,
      year: "2018",
      content: "Company founded in a small garage, with a vision to make tech accessible to everyone.",
    },
    {
      id: 2,
      year: "2019",
      content: "Secured seed funding and launched our first product, gaining 10k users in 3 months.",
    },
    {
      id: 3,
      year: "2020",
      content: "Expanded globally, opened offices in two new countries, and doubled our team size.",
    },
    {
      id: 4,
      year: "2021",
      content: "Introduced AI-driven features, positioning us as an innovator in the market.",
    },
    {
      id: 5,
      year: "2022",
      content: "Crossed 1 million active users and launched enterprise solutions for large clients.",
    },
    {
      id: 6,
      year: "2023",
      content: "Recognized as a top startup in industry awards, built strong community support.",
    },
    {
      id: 7,
      year: "2024",
      content: "Reached profitability and expanded product line into hardware and IoT devices.",
      hasButton: true,
      ctaLabel: "Learn More",
      isToday: true,
    },
  ];

  return (
    <div className={`w-full py-16 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {title && (
          <h2 className="text-center text-gray-800 text-2xl font-semibold mb-16">
            {title}
          </h2>
        )}
        <div className="relative">
          {/* Vertical line in the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

          {/* Timeline Items */}
          {items.map((item, index) => (
            <div key={item.id} className="relative mb-16 last:mb-0">
              {/* Year marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`px-6 py-2 rounded-full text-white font-medium text-sm ${
                    item.isToday ? "bg-green-700" : "bg-green-600"
                  } shadow-lg z-10 relative`}
                >
                  {item.year}
                </div>
              </div>

              {/* Content card */}
              <div
                className={`w-full max-w-md mx-auto mt-8 ${
                  index % 2 === 0
                    ? "md:mr-auto md:ml-0 md:pr-8"
                    : "md:ml-auto md:mr-0 md:pl-8"
                } md:w-1/2`}
              >
                <Card className="bg-white shadow-lg border border-gray-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.content}
                    </p>
                    {item.hasButton && (
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">
                        {item.ctaLabel || "Get started"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
