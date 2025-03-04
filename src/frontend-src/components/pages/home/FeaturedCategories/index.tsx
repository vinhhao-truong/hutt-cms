"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import Link from "next/link";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import { motion } from "framer-motion";
import color from "@/frontend-src/libs/constants/color";

const FeaturedCategories: React.FC<{
  data: HomePageDataTypes["featuredCategories"];
}> = ({ data }) => {
  const MotionLink = motion.create(Link);

  return (
    <ul className="flex flex-col gap-12">
      {data?.categories &&
        Object.keys(data.categories).map((category, idx) => {
          const key = `featured-products-${idx}`;
          const cateData = data.categories && data.categories[category];

          if (!cateData) {
            return <li className="" key={key}></li>;
          }

          const prods = cateData.products;
          const slug = cateData.slug;

          return (
            <li className="" key={key}>
              <div className="flex items-end justify-between px-6 mb-6">
                <h2 className="text-5xl font-semibold tracking-tight uppercase">
                  {category}
                </h2>
                <MotionLink
                  href={`/brand/${slug}`}
                  className="h-[26px] w-[180px] flex items-center justify-center text-xs border-[1.5px] rounded-sm"
                  initial={{
                    backgroundColor: color["system-blue-1"],
                    color: color["system-blue-4"],
                    borderColor: color["system-blue-4"],
                  }}
                  whileHover={{
                    backgroundColor: color["system-blue-7"],
                    color: "#FFFFFF",
                    borderColor: color["system-blue-7"],
                  }}
                >
                  SHOP THƯƠNG HIỆU NÀY
                </MotionLink>
              </div>
              {/* <Link href={`/${slug}`}>test</Link> */}
              <ProductCarousel data={prods ?? []} />
            </li>
          );
        })}
    </ul>
  );
};

export default FeaturedCategories;
