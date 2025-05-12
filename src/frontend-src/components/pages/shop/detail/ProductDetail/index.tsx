"use client";

import { Product } from "@/payload-types";
import React from "react";
import Image from "next/image";

const ProductDetail: React.FC<{ data: Product }> = ({ data }) => {
  console.log(data);

  const price = data?.prices?.grossPrice
    ? new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(data?.prices?.grossPrice)
    : "LIÊN HỆ";

  return (
    <div className="relative grid grid-cols-3">
      {/* LEFT */}
      <div className="relative col-span-2">
        <div className="relative aspect-square w-full">
          <Image
            src={`https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg`}
            alt="home-hero-banner"
            fill
            sizes="auto"
            className="relative object-cover "
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="col-span-1 relative h-full border-l border-l-gray-300">
        <div className="sticky top-0 pt-[100px] pb-12 px-8">
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

          <p className="font-light text-justify">{data.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
