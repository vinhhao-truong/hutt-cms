"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import Link from "next/link";
import React from "react";
import ProductCarousel from "./ProductCarousel";
import { motion } from "framer-motion";
import color, { colorRgba } from "@/frontend-src/libs/constants/color";
import FadeIn from "@/frontend-src/components/animated/FadeIn";
import { v4 } from "uuid";

const FeaturedCategories: React.FC<{
  data: HomePageDataTypes["featuredCategories"];
}> = ({ data }) => {
  const MotionLink = motion.create(Link);

  return (
    <ul className="flex flex-col gap-24 my-12">
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
              <FadeIn>
                <div className="relative flex items-end justify-between mx-6 my-6">
                  <div className="absolute w-12 h-1 bg-black left-6 -bottom-3"></div>
                  <div className="flex items-center">
                    <h2 className="mr-4 text-5xl font-semibold tracking-tight uppercase">
                      {category}{" "}
                      <sup className="text-base -translate-y-24">
                        [{prods?.length}]
                      </sup>
                    </h2>
                    {/* <div className="w-[90px] -translate-y-[6px]">
                      <HuttLogo />
                    </div> */}
                  </div>

                  <MotionLink
                    href={`/category/${slug}`}
                    className="h-[26px] w-[100px] flex items-center justify-center text-xs border-[1.5px] rounded-sm"
                    initial={{
                      backgroundColor: colorRgba("system-blue-1", 0.4),
                      color: color["system-blue-3"],
                      borderColor: color["system-blue-3"],
                    }}
                    whileHover={{
                      backgroundColor: colorRgba("system-blue-7", 1),
                      color: "#FFFFFF",
                      borderColor: color["system-blue-7"],
                    }}
                  >
                    XEM TẤT CẢ
                  </MotionLink>
                </div>
                {/* <Link href={`/${slug}`}>test</Link> */}
                <ProductCarousel data={prods ?? []} key={v4()} />
              </FadeIn>
            </li>
          );
        })}
    </ul>
  );
};

export default FeaturedCategories;
