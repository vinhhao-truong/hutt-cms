"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import FadeIn from "@/frontend-src/components/animated/FadeIn";
import color from "@/frontend-src/libs/constants/color";
import tailwindData from "@/frontend-src/libs/constants/tailwindData";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import HuttLogo from "@/assets/images/logo";
import { Icon } from "@iconify/react/dist/iconify.js";

const AllCategories: React.FC<{
  data: HomePageDataTypes["allCategories"];
}> = ({ data }) => {
  const allCategories = Object.keys(data?.categories ?? {});
  const [selected, setSelected] = useState<string>(allCategories?.[0]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  if (!data || !data?.categories) {
    return <></>;
  }

  const MotionLink = motion.create(Link);

  return (
    <div className="grid grid-cols-8">
      {/* LEFT MENU */}
      <ul className="flex flex-col col-span-3 gap-1 pt-24 pb-40 border-r border-r-gray-400">
        {allCategories.map((c, idx) => {
          const isSelected = selected === c;
          const count = data.categories?.[c]?.products?.length;

          return (
            <motion.li
              className={`cursor-pointer flex items-center gap-2 ml-24`}
              key={`all-categories-c-${idx}`}
              animate={{
                color: isSelected ? "#000000" : tailwindData.colors.gray[300],
              }}
              whileHover={
                isSelected ? {} : { color: tailwindData.colors.gray[400] }
              }
              onClick={() => setSelected(c)}
            >
              <motion.div
                className="overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  isSelected
                    ? { width: 32, opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
              >
                <Icon icon="mdi:pan-right" className="text-4xl" />
              </motion.div>
              <p className="text-5xl">
                <span className="font-semibold">{c.toUpperCase()}</span>{" "}
                {isSelected && (
                  <sup className="text-base font-medium">[{count}]</sup>
                )}
              </p>
            </motion.li>
          );
        })}
      </ul>
      {/* RIGHT LIST */}
      {data?.categories?.[selected]?.products?.length &&
      data?.categories?.[selected]?.products?.length > 0 ? (
        <div className="relative col-span-5 px-16 pt-24 pb-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] opacity-[0.02] z-[-1]">
            <HuttLogo colored={false} />
          </div>
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
          <ul className="flex gap-0.5 flex-wrap w-full">
            {data.categories?.[selected]?.products?.map((p, idx) => {
              const key = `${p.id}-${p.productName}-${idx}`;
              const isHovered = p.id === hoveredItemId;

              return (
                <li className="aspect-[2/3] relative w-[200px]" key={key}>
                  <FadeIn>
                    <MotionLink
                      className="relative block w-full h-full px-2 py-4 bg-white border rounded-sm"
                      href={`/shop/detail/${p.id}`}
                      onMouseEnter={() => setHoveredItemId(p.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      animate={
                        isHovered
                          ? {
                              color: color["system-blue-7"],
                              borderColor: color["system-blue-7"],
                            }
                          : {
                              color: tailwindData.colors.gray[500],
                              borderColor: tailwindData.colors.gray[200],
                            }
                      }
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
                      <motion.div
                        animate={
                          isHovered
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 6 }
                        }
                        initial={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex items-center justify-between mt-1 text-sm font-medium"
                      >
                        <p className="">xem thêm</p>
                        <h3 className="">
                          20.000<sup>đ</sup>
                        </h3>
                      </motion.div>
                    </MotionLink>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="relative flex items-center justify-center col-span-5">
          <p className="italic text-gray-600">Hiện không có sản phẩm...</p>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] opacity-[0.03] z-[-1]">
            <HuttLogo colored={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllCategories;
