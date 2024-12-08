import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";
import ProductDetail from "@/components/ProductDetail";

const page = () => {
  return (
    <main>
      <Header />
      <Hero image={banner} heading="Shop Details" path="Shop Details" />
      <ProductDetail />
      <Footer />
    </main>
  );
};

export default page;
