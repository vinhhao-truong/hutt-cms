"use client";

import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import { formatVNCurrency } from "@/libs/utils/format/formatNumberToString";
import checkColorDakLight from "@/libs/utils/get/checkColorDarkLight";
import getHexFromString from "@/libs/utils/get/getHexFromString";
import { Product } from "@/payload-types";
import Link from "next/link";
import React from "react";
import HuttLogo from "@/assets/images/logo";

const Right: React.FC<{ data: RenderedProductDetailType }> = ({ data }) => {
  const price = data?.prices?.grossPrice
    ? formatVNCurrency(data?.prices?.grossPrice)
    : "LIÊN HỆ";

  return (
    <div className="sticky top-0 pt-[100px] pb-[68px] px-12 2xl:px-16 z-[1] bg-gradient-to-b from-white via-white to-transparent">
      <h1 className="text-3xl font-bold text-center uppercase mb-2">
        {data.productName}
      </h1>
      <h2 className="text-center text-lg text-gray-400 italic mb-6">
        SL / gói: <b>{data?.specifications?.qtyPerPack || "N/A"} cái</b>
      </h2>
      <div className="flex flex-col gap-1 items-center mb-4">
        <p className="text-sm text-gray-500">Giá bán lẻ</p>
        <h3 className="text-2xl 2xl:text-4xl w-full text-white bg-system-green-6 p-3 text-center rounded-full">
          {price}
        </h3>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="text-sm text-gray-500">Giá bán sỉ</p>
        <h3 className="text-2xl 2xl:text-4xl w-full text-white bg-system-blue-6 p-3 text-center rounded-full">
          LIÊN HỆ
        </h3>
      </div>

      {/* <p className="font-medium text-lg mb-6">{data.shortDescription}</p> */}
      <ul className="flex items-center gap-1 mt-16">
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
