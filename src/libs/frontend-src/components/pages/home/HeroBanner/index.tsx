"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import Button from "@/libs/frontend-src/components/common/Button";
import COLOR_SCHEME from "@/libs/design-system/color-scheme";
import Image from "next/image";
import React from "react";

const HomeHeroBanner: React.FC<{
  data: HomePageDataTypes["shopAllBanner"];
}> = ({ data }) => {
  return (
    <div className="relative w-full h-screen bg-system-blue-2 px-20 flex items-center justify-end">
      {/* BG IMG */}
      <div className="absolute w-full h-full ">
        {/* <Image
          src={`https://images2.alphacoders.com/127/1272143.jpg`}
          alt="home-hero-banner"
          fill
          sizes="auto"
          className="relative object-cover"
        /> */}
      </div>
      <div className="">
        <h1
          style={{ color: COLOR_SCHEME["system-blue-3"] }}
          className="w-[700px] max-w-3/4 text-4xl font-semibold leading-relaxed"
        >
          {data?.caption}
        </h1>
        <Button>Xem Tất Cả</Button>
      </div>
    </div>
  );
};

export default HomeHeroBanner;
