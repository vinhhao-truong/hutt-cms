"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import FadeIn from "@/frontend-src/components/animated/FadeIn";
import color from "@/frontend-src/libs/constants/color";
import tailwindData from "@/frontend-src/libs/constants/tailwindData";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const AllCategories: React.FC<{
  data: HomePageDataTypes["allCategories"];
}> = ({ data }) => {
  console.log("all", data);

  if (!data || !data?.categories) {
    return <></>;
  }

  const allCategories = Object.keys(data?.categories);
  const [selected, setSelected] = useState<string>(allCategories[0]);

  const MotionLink = motion.create(Link);

  return (
    <div className="grid grid-cols-8 border-b border-b-gray-400">
      <ul className="pt-24 pb-40 border-r border-r-gray-400 col-span-3 flex flex-col gap-1">
        {allCategories.map((c, idx) => {
          const isSelected = selected === c;
          const count = data.categories?.[c]?.products?.length;

          return (
            <motion.li
              className={`cursor-pointer pl-36 text-5xl`}
              key={`all-categories-c-${idx}`}
              animate={{
                color: isSelected
                  ? color["system-blue-7"]
                  : tailwindData.colors.gray[400],
              }}
              onClick={() => setSelected(c)}
            >
              <span className="font-semibold">{c.toUpperCase()}</span>{" "}
              {isSelected && (
                <sup className="font-medium text-base">[{count}]</sup>
              )}
            </motion.li>
          );
        })}
      </ul>
      {data?.categories?.[selected]?.products?.length &&
      data?.categories?.[selected]?.products?.length > 0 ? (
        <div className="pt-24 pb-40 col-span-5 px-16">
          <MotionLink
            initial={{
              backgroundColor: tailwindData.colors.gray[200],
              color: tailwindData.colors.gray[600],
            }}
            whileHover={{
              backgroundColor: color["system-blue-7"],
              color: "#FFFFFF",
            }}
            className="mb-4 block text-[10px] w-fit px-3 py-1.5 rounded-sm font-semibold"
            href={`/category/${data.categories?.[selected]?.slug}`}
          >
            XEM TẤT CẢ {selected?.toUpperCase()}
          </MotionLink>
          <ul className="flex gap-0.5 flex-wrap">
            {data.categories?.[selected]?.products?.map((p, idx) => {
              const key = `${p.id}-${p.productName}-${idx}`;

              return (
                <li className="aspect-[2/3] relative" key={key}>
                  <FadeIn>
                    <MotionLink
                      className="w-full h-full py-4 px-2 border relative block rounded-sm"
                      href={`/product/detail/${p.id}`}
                      initial={{ borderColor: tailwindData.colors.gray[300] }}
                      whileHover={{ borderColor: color["system-blue-6"] }}
                    >
                      <h3 className="text-lg font-semibold truncate">
                        {p.productName}
                      </h3>
                      <p className="text-[10px] mb-2">150ml / 15cm x 10cm</p>
                      <Image
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m250pw14sy3fc4.webp"
                        alt={key}
                        width={180}
                        height={180}
                        className="relative"
                      />
                      <div className="flex items-center justify-between relative mt-1 text-sm font-medium">
                        <p className="">xem thêm</p>
                        <h3 className="">
                          20.000<sup>đ</sup>
                        </h3>
                      </div>
                    </MotionLink>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex items-center justify-center col-span-5">
          <p className="italic text-gray-400">Hiện không có sản phẩm...</p>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
