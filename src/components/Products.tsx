import React from "react";
import { products } from "@/constants/share";
import Card from "./Card";
import { Search } from "lucide-react";
import pagination from "../public/pagination.png";
import { Inter } from "next/font/google";
import Categories from "./Categories";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-wrap  items-center gap-3">
          {products.map((product, i) => (
            <div key={i}>
              <Card
                name={product.name}
                image={product.image}
                dprice={product.dprice}
                aprice={product.aprice}
                sell={product.sell}
              />
            </div>
          ))}
        </div>
        <div className="w-[300px] lg:w-[800px] border py-2 px-4">
          <form action="" className="flex justify-between">
            <input
              type="text"
              placeholder="Search Product"
              className={`bg-[#FF9F0D] bg-opacity-10 w-full text-[16px] font-normal ${inter.className} p-2`}
            />
            <div className="bg-[#FF9F0D] flex justify-center items-center px-2">
              <Search />
            </div>
          </form>
          <Categories />
        </div>
      </div>
      <div className="flex justify-center items-center my-8">
        <Image src={pagination} alt="" width={200} height={50} />
      </div>
    </div>
  );
};

export default Products;
