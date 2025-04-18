"use client";

import { Product } from "@/payload-types";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import color from "@/frontend-src/libs/constants/color";
import Link from "next/link";
import tailwindData from "@/frontend-src/libs/constants/tailwindData";
import { v4 } from "uuid";
import useResponsive from "@/frontend-hooks/useResponsive";

function NextArrow(props: any) {
  const { className, style, onClick, disabled } = props;
  return (
    <motion.button
      className={`${disabled ? `bg-gray-100 text-gray-300 border-gray-300 cursor-default` : ``} absolute bottom-[calc(100%+24px)] rounded-sm w-10 h-[26px] right-[128px] border-[1.5px] flex items-center justify-center`}
      onClick={onClick}
      initial={
        !disabled
          ? {
              backgroundColor: "#FFFFFF",
              color: color["system-blue-3"],
              borderColor: color["system-blue-3"],
            }
          : {}
      }
      whileHover={
        !disabled
          ? {
              backgroundColor: color["system-blue-7"],
              color: "#FFFFFF",
              borderColor: color["system-blue-7"],
            }
          : {}
      }
    >
      {/* <Icon
        // style={{ color: props.color }}
        icon="teenyicons:right-solid"
        className="text-xl text-white"
      /> */}
      <Icon icon="majesticons:arrow-right" className="text-lg" />
    </motion.button>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick, disabled } = props;
  return (
    <motion.button
      className={`${disabled ? `bg-gray-100 text-gray-300 border-gray-300 cursor-default` : ``} absolute bottom-[calc(100%+24px)] rounded-sm w-10 h-[26px] right-[172px] border-[1.5px] flex items-center justify-center`}
      onClick={onClick}
      initial={
        !disabled
          ? {
              backgroundColor: "#FFFFFF",
              color: color["system-blue-3"],
              borderColor: color["system-blue-3"],
            }
          : {}
      }
      whileHover={
        !disabled
          ? {
              backgroundColor: color["system-blue-7"],
              color: "#FFFFFF",
              borderColor: color["system-blue-7"],
            }
          : {}
      }
    >
      {/* <Icon
        // style={{ color: props.color }}
        icon="teenyicons:right-solid"
        className="text-xl text-white"
      /> */}
      <Icon icon="majesticons:arrow-left" className="text-lg" />
    </motion.button>
  );
}

const RenderedCarousel = ({
  children,
  length,
}: {
  children: React.ReactNode;
  length: number;
}) => {
  const responsive = useResponsive();
  const smallerThanTablet = ["xs", "2xs", "sm"].includes(responsive);

  const smallerCount = smallerThanTablet ? 2 : 4;

  if (length >= smallerCount) {
    return (
      <Slider
        className={`relative w-full`}
        slidesToShow={smallerCount}
        slidesToScroll={1}
        infinite
        // dots
        autoplay
        autoplaySpeed={5000}
        pauseOnHover
        pauseOnFocus
        pauseOnDotsHover
        // customPaging={(n) => <div key={`${v4()}-${n}`}></div>}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {children}
      </Slider>
    );
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${smallerCount}, minmax(0, 1fr))`,
      }}
      className="relative grid w-full"
    >
      <NextArrow disabled />
      <PrevArrow disabled />
      {children}
    </div>
  );
};

const ProductCarousel: React.FC<{ data: Product[] }> = ({ data }) => {
  if (data.length === 0) {
    return <></>;
  }

  const MotionLink = motion.create(Link);

  return (
    <RenderedCarousel length={data.length}>
      {data.map((p, idx) => {
        const key = `featured-${p.id}-${idx}`;
        const hasDiscount = idx % 2 === 0;

        return (
          <div className="px-0.5" key={key}>
            <MotionLink
              href={`/shop/detail/${p.id}`}
              initial={{ borderColor: tailwindData.colors.gray[300] }}
              whileHover={{ borderColor: color["system-blue-7"] }}
              className={`aspect-[29/30] p-2 sm:p-4 lg:p-6 relative z-0 group border block`}
            >
              {/* LEFT LINE */}
              {/* HEAD */}
              <div className="mb-2 tracking-tight">
                <h3 className="mb-1 text-xl font-semibold uppercase group-hover:text-system-blue-7">
                  {p.productName}
                </h3>
                <p className="text-xs group-hover:text-system-blue-7">
                  150ml / 15cm x 10cm
                </p>
              </div>
              {/* THUMBNAIL */}
              <div className="relative">
                <Image
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m250pw14sy3fc4.webp"
                  alt={key}
                  width={600}
                  height={600}
                  className="relative"
                />
                <motion.button
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                  className="absolute flex items-center justify-center bottom-4 right-4 rounded-full gap-1 group-1"
                  initial={{
                    width: 32,
                    height: 32,
                    backgroundColor: color["system-blue-7"],
                    color: "white",
                  }}
                  whileHover={{
                    width: 150,
                    backgroundColor: color["system-blue-6"],
                  }}
                >
                  <Icon icon="ion:bag-add" />
                  <p className="hidden group-1-hover:block text-[10px] font-medium truncate">
                    THÊM VÀO GIỎ HÀNG
                  </p>
                </motion.button>
              </div>
              {hasDiscount && (
                <div className="flex gap-0.5 md:gap-1 items-center md:items-end my-2">
                  <p className="text-red-500 text-lg md:text-2xl 2xl:text-4xl">
                    50.000<sup>đ</sup>
                  </p>
                  <p className="line-through text-gray-400 text-xs md:text-sm 2xl:text-base">
                    {/* {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(50000)} */}
                    20.000<sup>đ</sup>
                  </p>
                </div>
              )}
              {!hasDiscount && (
                <p className="text-system-blue-7 my-2 text-lg md:text-2xl 2xl:text-4xl">
                  20.000<sup>đ</sup>
                </p>
              )}
              <p className="text-xs group-hover:text-system-blue-7 overflow-hidden text-clip">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                iure in laboriosam vitae magni repellendus dolore? Facilis illum
                ullam repellendus possimus ab nisi eius nihil vero laborum
                incidunt, nam officiis!
              </p>
            </MotionLink>
          </div>
        );
      })}
    </RenderedCarousel>
  );
};

export default ProductCarousel;
