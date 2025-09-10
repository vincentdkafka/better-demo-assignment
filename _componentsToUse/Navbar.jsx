import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-better-green">Better</h1>
          <span className="text-lg text-gray-600 ml-1">Mortgage</span>
          <ul className="flex gap-6 px-4">
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
        </div>
        <div className="flex items-center mx-10">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-better-green">
            <Phone className="w-5 h-5" />
            <p className="text-black font-medium">Need Help ? Call 415-523-8837</p>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;