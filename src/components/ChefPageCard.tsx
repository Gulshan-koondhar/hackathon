import { Inter } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const ChefPageCard = ({
  img,
  name,
}: {
  img: string | StaticImageData;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={img} alt={name} width={200} height={100} />
      <div className="flex flex-col items-center">
        <h1 className="font-bold font-helvetica text-xl">{name}</h1>
        <p className={`${inter.className} font-normal text-[16px]`}>Chef</p>
      </div>
    </div>
  );
};

export default ChefPageCard;
