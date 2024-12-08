import Image from "next/image";
import React from "react";
import image from "@/public/unsplash_bpPTlXWTOvg.png";
import image1 from "@/public/420.png";
import chefs from "@/public/Group.png";
import foodicon from "@/public/Group (1).png";
import spoon from "@/public/Group (2).png";
import pizza from "@/public/Group (3).png";

const Details = () => {
  return (
    <div className="max-w-screen-xl mx-auto hidden xl:block">
      <div className="relative">
        <Image src={image} alt="Hero" width={1500} height={50} />
        <Image
          src={image1}
          alt=""
          width={1500}
          height={50}
          className="absolute top-0"
        />
        <div className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col md:flex-row justify-between items-center px-4  ">
            <div className="flex sm:flex-col items-center gap-2 w-[100px] sm:w-[300px]">
              <Image src={chefs} alt="Chefs" width={100} height={100} />
              <h1 className="text-3xl text-white">420</h1>
              <h2 className="text-2xl text-white text-center">
                Professionals Chefs
              </h2>
            </div>
            <div className="flex sm:flex-col items-center gap-2 w-[100px] sm:w-[300px]">
              <Image src={foodicon} alt="Chefs" width={100} height={100} />
              <h1 className="text-3xl text-white">320</h1>
              <h2 className="text-2xl text-white ">Items of Food</h2>
            </div>
            <div className="flex sm:flex-col items-center gap-2  w-[100px] sm:w-[300px]">
              <Image src={spoon} alt="Chefs" width={100} height={100} />
              <h1 className="text-3xl text-white">30+</h1>
              <h2 className="text-2xl text-white">Years of Experience</h2>
            </div>
            <div className="flex sm:flex-col items-center gap-2  w-[100px] sm:w-[300px]">
              <Image src={pizza} alt="Chefs" width={100} height={100} />
              <h1 className="text-3xl text-white">220</h1>
              <h2 className="text-2xl text-white">Happy Customers</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
