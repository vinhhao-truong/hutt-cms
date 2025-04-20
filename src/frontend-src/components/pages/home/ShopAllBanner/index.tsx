"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import color from "@/frontend-src/libs/constants/color";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopAllBanner: React.FC<{
  data: HomePageDataTypes["shopAllBanner"];
}> = ({ data }) => {
  return (
    <Link href={`/shop/new`} className="relative w-full h-[80vh] mt-6">
      <Image
        className="object-cover"
        alt="shop-all-banner"
        fill
        sizes="auto"
        src="https://acmecups.nz/cdn/shop/files/bottom_bottom.jpg?v=1721799333&width=1600"
      />
      <div className="absolute bottom-[10%] right-[5%] p-6 bg-white w-[450px] max-w-[calc(100vw-10%)] text-xs sm:text-sm rounded-sm">
        <p className="mb-4">{data?.caption}</p>
        <motion.button
          initial={{ backgroundColor: color["system-blue-6"] }}
          whileHover={{ backgroundColor: color["system-green-6"] }}
          className="py-2 px-4 text-white text-xs flex gap-1 items-center justify-center"
        >
          <p className="">SẢN PHẨM MỚI</p>
          <Icon icon={`solar:arrow-right-broken`} className="text-lg" />
        </motion.button>
      </div>
    </Link>
  );
};

export default ShopAllBanner;
