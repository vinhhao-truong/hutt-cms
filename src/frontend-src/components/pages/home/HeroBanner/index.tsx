"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import Image from "next/image";
import React from "react";

const HomeHeroBanner: React.FC<{
  data: HomePageDataTypes["shopAllBanner"];
}> = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-full">
        <Image
          src={`https://images2.alphacoders.com/127/1272143.jpg`}
          alt="home-hero-banner"
          fill
          sizes="auto"
          className="relative object-cover"
        />
      </div>
    </div>
  );
};

export default HomeHeroBanner;
