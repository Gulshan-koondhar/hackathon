import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";

import AboutHero from "@/components/AboutHero";
import AboutFeature from "@/components/AboutFeature";
const page = () => {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <Header />
      <Hero image={banner} heading="About US" path="about-us" />

      {/* Second Section: Content and Buttons */}
      <AboutHero />

      {/* Third Section: Why Choose Us */}
      <AboutFeature />
    </div>
  );
};

export default page;
