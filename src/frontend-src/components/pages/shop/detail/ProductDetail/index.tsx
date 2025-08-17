"use client";

import { Product } from "@/payload-types";
import React, { useState } from "react";
import Image from "next/image";
import Right from "./Right";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Slider from "react-slick";
import { motion } from "framer-motion";
import useResponsive from "@/frontend-hooks/useResponsive";
import Left from "./Left";
import HuttLogo from "@/assets/images/logo";

const ProductDetail: React.FC<{ data: RenderedProductDetailType }> = ({
  data,
}) => {
  return (
    <div className="relative grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border-b border-b-gray-400">
      {/* LEFT */}
      <div className="relative col-span-3 lg:col-span-2 xl:col-span-3 2xl:col-span-4">
        <Left data={data} />
      </div>
      {/* RIGHT */}
      <div className="lg:col-span-1 relative h-full border-l border-l-gray-400 hidden lg:block">
        <Right data={data} />
        <div className="lg:absolute bottom-[20%] left-[30%] w-[40%] h-24 grayscale opacity-10 -rotate-[30deg]">
          <HuttLogo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
