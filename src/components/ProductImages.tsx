import Image from "next/image";
import React from "react";
import image1 from "@/public/Rectangle 8883.png";
import image2 from "@/public/Rectangle 8884.png";
import image3 from "@/public/Rectangle 8885.png";
import image4 from "@/public/Rectangle 8886.png";
import image5 from "@/public/Rectangle 8887.png";

const ProductImages = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <Image
            src={image5}
            alt=""
            width={100}
            height={100}
            className="rounded-md"
          />
          <Image src={image2} alt="" width={100} height={100} />
          <Image src={image3} alt="" width={100} height={100} />
          <Image src={image4} alt="" width={100} height={100} />
        </div>
        <div>
          <Image src={image1} alt="" width={350} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
