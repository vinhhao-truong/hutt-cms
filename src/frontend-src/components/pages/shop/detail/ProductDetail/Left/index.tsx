"use client";

import React from "react";
import ImageGallery from "./ImageGallery";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Specifications from "./Specifications";
import Usage from "./Usage";
import Brand from "./Brand";
import Country from "./Country";
import { formatVNCurrency } from "@/libs/utils/format/formatNumberToString";

const Left: React.FC<{ data: RenderedProductDetailType }> = ({ data }) => {
  const leftSection = [
    <Specifications key={`left-specs`} specifications={data?.specifications} />,
    <Brand key={`left-brand`} brand={data?.brand} />,
    <Country key={`left-country`} brand={data?.brand} />,
    <Usage key={`left-usage`} usage={data?.usage} />,
  ];

  const price = data?.prices?.grossPrice
    ? formatVNCurrency(data?.prices?.grossPrice)
    : "LIÊN HỆ";

  return (
    <>
      <ImageGallery />
      <div className="lg:hidden px-6 md:px-12 py-5">
        <h1 className="text-3xl font-semibold uppercase mb-2">
          {data?.productName}
        </h1>
        <h2 className="text-gray-400 italic mb-6">
          sl / gói: <b>{data?.specifications?.qtyPerPack || "N/A"} cái</b>
        </h2>
        <div className=" flex items-center gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-gray-500">Giá bán lẻ</p>
            <h3 className="text-2xl text-white bg-system-green-6 p-3 text-center rounded">
              {price}
            </h3>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-gray-500">Giá bán sỉ</p>
            <h3 className="text-2xl text-white bg-system-blue-6 p-3 text-center rounded">
              LIÊN HỆ
            </h3>
          </div>
        </div>
      </div>
      <ul className="pb-12">
        {leftSection.map((section, idx) => {
          return (
            <li
              className="border-t border-t-gray-400"
              key={`left-section-${idx}`}
            >
              {section}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Left;
