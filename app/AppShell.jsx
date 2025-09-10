"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/_componentsToUse/Header";
import Footer from "@/app/_componentsToUse/Footer";
import Navbar from "@/app/_componentsToUse/Navbar";
import FooterSecond from "@/app/_componentsToUse/FooterSecond";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isStartRoute = pathname?.startsWith("/start");

  if (isStartRoute) {
    return (
      <>
        <Navbar />
        {children}
        <FooterSecond />
      </>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


