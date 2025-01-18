import { similarProduct } from "@/constants/share";
import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

import Card2 from "./Card2";

const SimilarProducts = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-helvetica">Similar Products</h1>
        <div className="flex gap-2">
          <MoveLeft className="bg-[#FAF7F2] h-8 w-8 p-2 rounded-full" />
          <MoveRight className="text-white bg-[#FF9F0D] h-8 w-8 p-2 rounded-full" />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 my-3">
        {similarProduct.map((food, i) => (
          <Card2
            key={i}
            name={food.name}
            image={food.image}
            aprice={food.aprice}
            dprice={food.dprice}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
