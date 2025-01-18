import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import banner from "../../../public/unsplash_4ycv3Ky1ZZU.png";

import ChefPageCard from "@/components/ChefPageCard";
import { client } from "@/sanity/lib/client";
interface IChef {
  name: string;
  imageUrl: string;
  position: string;
  specialty: string;
  experience: number;
}
const page = async () => {
  const query = `*[_type == "chef"]{
  name,available, 
    "imageUrl": image.asset->url,
      position, experience, specialty
}`;

  const data = await client.fetch(query);
  return (
    <>
      <Header />
      <Hero image={banner} heading="Our Chefs" path="Chef" />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 px-5 py-6">
        {data.map((chef: IChef, key: number) => (
          <div key={key}>
            <ChefPageCard
              img={chef.imageUrl}
              name={chef.name}
              position={chef.position}
              specialty={chef.specialty}
              experience={chef.experience}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
