"use client";

import { Product } from "@/payload-types";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import { v4 } from "uuid";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import color from "@/frontend-src/libs/constants/color";
import Link from "next/link";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <motion.button
      className="absolute bottom-[calc(100%+24px)] rounded-sm w-10 h-[26px] right-[208px] border-[1.5px] flex items-center justify-center"
      onClick={onClick}
      initial={{
        backgroundColor: "#FFFFFF",
        color: color["system-blue-3"],
        borderColor: color["system-blue-3"],
      }}
      whileHover={{
        backgroundColor: color["system-blue-7"],
        color: "#FFFFFF",
        borderColor: color["system-blue-7"],
      }}
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
  const { className, style, onClick } = props;
  return (
    <motion.button
      className="absolute bottom-[calc(100%+24px)] rounded-sm w-10 h-[26px] right-[252px] border-[1.5px] flex items-center justify-center"
      onClick={onClick}
      initial={{
        backgroundColor: "#FFFFFF",
        color: color["system-blue-3"],
        borderColor: color["system-blue-3"],
      }}
      whileHover={{
        backgroundColor: color["system-blue-7"],
        color: "#FFFFFF",
        borderColor: color["system-blue-7"],
      }}
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
  if (length >= 4) {
    return (
      <Slider
        className={`relative w-full`}
        slidesToShow={4}
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

  return <div className="relative grid w-full grid-cols-4">{children}</div>;
};

const ProductCarousel: React.FC<{ data: Product[] }> = ({ data }) => {
  if (data.length === 0) {
    return <></>;
  }

  const MotionLink = motion.create(Link);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const hIdxMemo = useMemo(() => {
    return hoveredIdx;
  }, [hoveredIdx]);

  return (
    <RenderedCarousel length={data.length}>
      {data.map((p, idx) => {
        const key = `featured-${p.id}-${idx}`;
        const isHovered = hIdxMemo === idx;
        const isLeft =
          hIdxMemo && hIdxMemo > 0
            ? hIdxMemo - 1 === idx
            : hIdxMemo && hIdxMemo === 0 && idx === data.length - 1
              ? true
              : false;

        return (
          <MotionLink
            href={`/product/${p.id}`}
            animate={
              isHovered
                ? {
                    borderColor: color["system-blue-7"],
                    borderRightColor: color["system-blue-7"],
                  }
                : {
                    borderColor: color["system-blue-3"],
                    borderRightColor: isLeft
                      ? color["system-blue-7"]
                      : color["system-blue-3"],
                  }
            }
            className={`border-l-0 border-r border-y border-r-system-blue-3 border-y-system-blue-3 aspect-[29/30] p-7 relative z-0`}
            key={key}
            onMouseEnter={(e) => {
              setTimeout(() => {
                setHoveredIdx(idx);
              }, 10);
            }}
            onMouseLeave={(e) => {
              setTimeout(() => {
                setHoveredIdx(null);
              }, 10);
            }}
          >
            {/* LEFT LINE */}
            {/* HEAD */}
            <div className="mb-4 tracking-tight">
              <h3 className="mb-2 text-xl font-semibold uppercase">
                {p.productName}
              </h3>
              <p className="text-xs">Lorem, ipsum dolor.</p>
              <p className="text-xs">150ml</p>
            </div>
            {/* THUMBNAIL */}
            <Image
              src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m250pw14sy3fc4.webp"
              alt={key}
              width={600}
              height={600}
            />
            {/* ADD TO CART BUTTON */}
            <motion.button
              className="flex justify-between items-center p-1.5 my-4 text-[10px] font-medium border w-full relative z-[1]"
              initial={{
                backgroundColor: "#FFFFFF",
                color: color["system-blue-3"],
                borderColor: color["system-blue-3"],
              }}
              animate={
                isHovered
                  ? {
                      backgroundColor: color["system-blue-7"],
                      color: "#FFFFFF",
                      borderColor: color["system-blue-7"],
                    }
                  : {}
              }
              whileHover={{
                backgroundColor: color["system-blue-8"],
                color: "#FFFFFF",
                borderColor: color["system-blue-8"],
              }}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <p className="">+ THÊM VÀO GIỎ HÀNG</p>
              <p className="">
                20.000<sup>đ</sup>
              </p>
            </motion.button>
          </MotionLink>
        );
      })}
    </RenderedCarousel>
  );
};

export default ProductCarousel;
