import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const ProductDesc = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button className="px-3 py-2 bg-[#FF9F0D] text-white">
          Description
        </button>
        <button>Review(4)</button>
      </div>
      <div className="flex flex-col gap-3">
        <p
          className={`text-[16px] text-[#828282] font-normal ${inter.className}`}
        >
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <p
          className={`text-[16px] text-[#828282] font-normal ${inter.className}`}
        >
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-normal font-helvetica text-[#4F4F4F]">
          Key Benefits
        </h1>
        <ul>
          <li
            className={`text-[14px] ${inter.className} font-normal text-[#4F4F4F] list-disc ml-3`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li
            className={`text-[14px] ${inter.className} font-normal text-[#4F4F4F] list-disc ml-3`}
          >
            Maecenas ullamcorper est et massa mattis condimentum.
          </li>
          <li
            className={`text-[14px] ${inter.className} font-normal text-[#4F4F4F] list-disc ml-3`}
          >
            Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
          </li>
          <li
            className={`text-[14px] ${inter.className} font-normal text-[#4F4F4F] list-disc ml-3`}
          >
            Etiam nec massa et lectus faucibus ornare congue in nunc.
          </li>
          <li
            className={`text-[14px] ${inter.className} font-normal text-[#4F4F4F] list-disc ml-3`}
          >
            Mauris eget diam magna, in blandit turpis.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDesc;
