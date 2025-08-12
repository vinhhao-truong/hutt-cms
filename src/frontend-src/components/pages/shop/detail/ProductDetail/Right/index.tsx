"use client";

import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import { formatVNCurrency } from "@/libs/utils/format/formatNumberToString";
import checkColorDakLight from "@/libs/utils/get/checkColorDarkLight";
import getHexFromString from "@/libs/utils/get/getHexFromString";
import { Product } from "@/payload-types";
import Link from "next/link";
import React from "react";

const Right: React.FC<{ data: RenderedProductDetailType }> = ({ data }) => {
  const price = data?.prices?.grossPrice
    ? formatVNCurrency(data?.prices?.grossPrice)
    : "LIÊN HỆ";

  return (
    <div className="sticky top-0 pt-[100px] pb-[68px] px-12 2xl:px-16 z-[1] bg-gradient-to-b from-white via-white to-transparent">
      <h1 className="text-4xl font-bold text-right uppercase mb-6">
        {data.productName}
      </h1>
      <div className="flex justify-between items-end mb-4 px-2 border-x-[8px] border-system-green-6">
        <p className="text-sm text-gray-500">Giá bán lẻ:</p>
        <h3 className="text-2xl font-light text-system-green-6">{price}</h3>
      </div>
      <div className="flex justify-between items-end mb-8 px-2 border-x-[8px] border-system-blue-5">
        <p className="text-sm text-gray-500">Giá bán sỉ:</p>
        <h3 className="text-2xl font-light text-system-blue-5">LIÊN HỆ</h3>
      </div>

      {/* <p className="font-medium text-lg mb-6">{data.shortDescription}</p> */}
      <ul className="flex items-center gap-1">
        {data?.hashtag?.map((hashtag) => {
          if (typeof hashtag === "number") {
            return <li className="" key={`hashtag-${hashtag}`}></li>;
          }
          const h = hashtag.hashtag;
          const hex = getHexFromString(h);

          return (
            <li
              style={{
                backgroundColor: hex,
                color:
                  checkColorDakLight(hex) === "dark" ? "#FFFFFF" : "#000000",
              }}
              className={`text-xs py-1 px-2 rounded-md`}
              key={`hashtag-${h}`}
            >
              <Link href={`shop/hashtag/${h}`}>#{h}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Right;
