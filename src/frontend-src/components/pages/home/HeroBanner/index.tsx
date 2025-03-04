"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import Image from "next/image";
import React from "react";

const HomeHeroBanner: React.FC<{
  data: HomePageDataTypes["shopAllBanner"];
}> = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <div className="absolute w-full h-full">
        <Image
          src={`https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg`}
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
