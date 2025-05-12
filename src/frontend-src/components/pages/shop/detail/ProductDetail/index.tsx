"use client";

import { Product } from "@/payload-types";
import React from "react";
import Image from "next/image";
import Right from "./Right";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";

const ProductDetail: React.FC<{ data: RenderedProductDetailType }> = ({
  data,
}) => {
  console.log(data);

  return (
    <div className="relative grid grid-cols-3">
      {/* LEFT */}
      <div className="relative col-span-2">
        <div className="relative aspect-square max-h-[70vh]">
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
        <Right data={data} />
      </div>
    </div>
  );
};

export default ProductDetail;
