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
    <div className="relative grid grid-cols-3 border-b border-b-gray-400">
      {/* LEFT */}
      <div className="relative col-span-2">
        <Left data={data} />
      </div>
      {/* RIGHT */}
      <div className="col-span-1 relative h-full border-l border-l-gray-400">
        <Right data={data} />
        <div className="absolute bottom-28 left-0 w-60 h-24 grayscale opacity-10 rotate-90">
          <HuttLogo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
