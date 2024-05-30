import React from "react";
import SecHero from "../ui/SecHero";
import SecFeatures from "../ui/SecFeatures";
import SecHeader from "../ui/SecHeader";
import SecTestimonials from "../ui/SecTestimonials";
import DarkModeToggle from "../ui/DarkModeToggle";

const Landing = () => {
  return (
    <div className=" bg-white dark:bg-blackLanding-03 transition-colors duration-300">
      <DarkModeToggle fromLanding={true} />

      <SecHeader />
      <SecHero />
      <SecFeatures />
      <SecTestimonials />
    </div>
  );
};

export default Landing;
