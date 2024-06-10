import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portofolio";

import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <div className="container py-6 flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <BackToTop />
      </main>
    </div>
  );
}
