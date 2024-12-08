import React from "react";

import { Great_Vibes } from "next/font/google";
const great_vibe = Great_Vibes({ weight: ["400"], subsets: ["latin"] });

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black px-4 text-white">
      <div>
        <div>
          <h1
            className={`${great_vibe.className} text-center text-[#FF9F0D] text-3xl`}
          >
            Blog Post
          </h1>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 font-helvetica">
            <span className="text-orange-500">La</span>test News & Blog
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Blog;
