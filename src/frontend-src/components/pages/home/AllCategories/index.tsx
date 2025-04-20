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
import useResponsive from "@/frontend-hooks/useResponsive";

const AllCategories: React.FC<{
  data: HomePageDataTypes["allCategories"];
}> = ({ data }) => {
  const allCategories = Object.keys(data?.categories ?? {});
  const [selected, setSelected] = useState<string>(allCategories?.[0]);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const responsive = useResponsive();
  const isSmallerScreen = ["xs", "sm"].includes(responsive);

  if (!data || !data?.categories) {
    return <></>;
  }

  const MotionLink = motion.create(Link);

  return (
    <div className="relative grid grid-cols-12 sm:grid-cols-9 lg:grid-cols-8">
      {/* LEFT MENU */}
      <ul className="sticky top-16 h-fit flex flex-col col-span-3 sm:col-span-3 gap-1 pt-24 pb-40">
        {allCategories.map((c, idx) => {
          const isSelected = selected === c;
          const count = data.categories?.[c]?.products?.length;

          return (
            <motion.li
              className={`cursor-pointer flex items-center gap-0.5 sm:gap-2 ml-1 sm:ml-4 lg:ml-16`}
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
                className="hidden sm:block overflow-hidden"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  isSelected
                    ? { width: 32, opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
              >
                <Icon icon="mdi:pan-right" className="text-4xl" />
              </motion.div>
              <p className="text-lg sm:text-3xl lg:text-5xl">
                <span className="font-semibold">{c.toUpperCase()}</span>{" "}
                {isSelected && (
                  <sup className="text-xs sm:text-sm lg:text-base font-medium">
                    [{count}]
                  </sup>
                )}
              </p>
            </motion.li>
          );
        })}
      </ul>
      {/* RIGHT LIST */}
      {data?.categories?.[selected]?.products?.length &&
      data?.categories?.[selected]?.products?.length > 0 ? (
        <div className="relative col-span-9 sm:col-span-6 lg:col-span-5 px-2 sm:px-8 lg:px-16 pt-24 pb-40 border-l border-l-gray-400">
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
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-0.5 flex-wrap w-full">
            {data.categories?.[selected]?.products?.map((p, idx) => {
              const key = `${p.id}-${p.productName}-${idx}`;
              const isHovered = p.id === hoveredItemId;

              return (
                <li className="aspect-[2/3] relative lg:w-[200px]" key={key}>
                  <FadeIn>
                    <MotionLink
                      className="relative block w-full h-full px-2 py-4 bg-white border rounded-sm"
                      href={`/shop/detail/${p.id}`}
                      onMouseEnter={() => setHoveredItemId(p.id)}
                      onMouseLeave={() => setHoveredItemId(null)}
                      initial={{
                        color: tailwindData.colors.gray[500],
                        borderColor: tailwindData.colors.gray[200],
                      }}
                      animate={
                        isHovered && !isSmallerScreen
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
                          isHovered && !isSmallerScreen
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 6 }
                        }
                        initial={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.25 }}
                        className="relative hidden md:flex items-center justify-between mt-1 text-sm font-medium"
                      >
                        <p className="">xem thêm</p>
                        <h3 className="">
                          20.000<sup>đ</sup>
                        </h3>
                      </motion.div>
                      <h3 className="text-sm mt-1 font-medium md:hidden">
                        20.000<sup>đ</sup>
                      </h3>
                    </MotionLink>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="relative flex items-center justify-center col-span-9 sm:col-span-6 lg:col-span-5 border-l border-l-gray-400">
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
