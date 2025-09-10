import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Stats = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="border-gray-200">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">$100B</h2>
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">400K</h2>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-gray-600 text-center text-lg">
              home loans funded entirely online. Customers who chose a Better Mortgage
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;