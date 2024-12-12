import {
  Facebook,
  GitCompareArrows,
  Heart,
  Instagram,
  MoveLeft,
  MoveRight,
  ShoppingBag,
  Twitter,
  Youtube,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import rating from "../../public/Rating.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const SingleProductDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="bg-[#FF9F0D] p-2 rounded-md text-white">In Stock</h1>
        <div className="flex gap-2 text-[#828282]">
          <p className="flex items-center text-sm">
            <MoveLeft />
            Prev
          </p>
          <p className="flex items-center text-sm">
            Next <MoveRight />
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-helvetica text-5xl text-[#333333] font-bold">
          Yummy Chicken Chup
        </h1>
        <p className={`text-xl font-normal ${inter.className} text-[#4f4f4f]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
          vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
      </div>
      <hr className="bg-[#E0E0E0]" />
      <div>
        <p className="text-[32px] font-bold font-helvetica text-[#333333]">
          54.00$
        </p>
        <div>
          <Image src={rating} alt="" width={200} height={100} />
        </div>
        <h1 className={`text-xl font-normal my-2 ${inter.className} `}>
          Dictum/cursus/Risus
        </h1>
        <div className="flex gap-3">
          <div className="flex">
            <div className="px-3 border-black border flex justify-center items-center py-2">
              -
            </div>
            <div className="px-3 border-black border flex justify-center items-center py-2">
              1
            </div>
            <div className="px-3 border-black border flex justify-center items-center py-2">
              +
            </div>
          </div>
          <div>
            <Link
              href="/checkout"
              className="flex gap-1 bg-[#FF9F0D] px-4 py-2 text-white"
            >
              <ShoppingBag /> Add to Cart
            </Link>
          </div>
        </div>
      </div>
      <hr className="bg-[#E0E0E0]" />
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <h1
            className={`flex gap-1 ${inter.className} text-xl font-normal text-[#4F4F4F]`}
          >
            <Heart /> Add to Wishlist
          </h1>
          <h1
            className={`flex gap-1 ${inter.className} text-xl font-normal text-[#4F4F4F]`}
          >
            <GitCompareArrows /> Compare
          </h1>
        </div>
        <div>
          <h1
            className={`${inter.className} text-xl font-normal text-[#333333]`}
          >
            Category : Pizza
          </h1>
          <h1
            className={`${inter.className} text-xl font-normal text-[#333333]`}
          >
            Tag : Our Shop
          </h1>
        </div>
        <div className="flex gap-2">
          Share :
          <div className="flex gap-2">
            <Facebook />
            <Twitter />
            <Youtube />
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
