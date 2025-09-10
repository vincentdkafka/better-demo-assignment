"use client";

import { usePathname } from "next/navigation";
import Header from "@/_componentsToUse/header";
import Footer from "@/_componentsToUse/footer";
import Navbar from "@/_componentsToUse/Navbar";
import FooterSecond from "@/_componentsToUse/FooterSecond";

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


