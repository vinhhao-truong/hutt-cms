import React from "react";
import ProductCarousel from "@/libs/frontend-src/components/common/ProductCarousel";
import { v4 } from "uuid";

const ShopPage = () => {
  return (
    <div className="">
      {/* HERO BANNER */}
      <div className="w-full">
        <div className="md:h-[65px] bg-white w-full"></div>
        <div className="bg-slate-500 w-full h-[480px]"></div>
      </div>
      {/* LIST */}
      <div className="flex flex-col gap-y-12 py-12"></div>
    </div>
  );
};

export default ShopPage;
