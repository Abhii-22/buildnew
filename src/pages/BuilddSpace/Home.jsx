import React from "react";
import HeroSection from "@/components/BuilddSpace/HeroSection";
import { FAQ } from "@/components/BuilddSpace/FAQ";

const Home = () => {
  return (
    <div className="flex flex-col w-full md:my-19">
      <HeroSection />
      <FAQ />
    </div>
  );
};

export default Home;
