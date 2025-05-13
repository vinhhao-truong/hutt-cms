"use client";

import { Product } from "@/payload-types";
import React, { useState } from "react";
import Image from "next/image";
import Right from "./Right";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Slider from "react-slick";
import { motion } from "framer-motion";
import useResponsive from "@/frontend-hooks/useResponsive";

const imgs = [
  `https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg`,
  `https://acmecups.nz/cdn/shop/files/TFJshort_pdp_3x_1f69db83-56d5-432b-964c-e9c3bd4b16fa.jpg?v=1743994870`,
  `https://acmecups.nz/cdn/shop/files/Tajimi-Tumbler-7_PDP_Lifestyle_-_Resized_2x_043e3aa6-231a-479f-9af1-0ff8e27bb16f.jpg?v=1744856159`,
];

const ProductDetail: React.FC<{ data: RenderedProductDetailType }> = ({
  data,
}) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const responsive = useResponsive();
  const bigScreen = ["2xl"].includes(responsive);
  const desktop = ["lg", "xl"].includes(responsive);

  return (
    <div className="relative grid grid-cols-3">
      {/* LEFT */}
      <div className="relative col-span-2 pt-[100px]">
        <Slider
          // dots={true}
          // infinite={true}
          infinite={false}
          centerMode
          centerPadding={bigScreen ? "400px" : desktop ? "200px" : "50px"}
          slidesToShow={1}
          slidesToScroll={1}
          speed={700}
          className="center relative w-full"
          initialSlide={0}
          beforeChange={(current, next) => {
            setCurrentImg(next);
          }}
          focusOnSelect
        >
          {imgs.map((img, idx) => {
            const isCurrent = currentImg === idx;

            return (
              <motion.div
                initial={
                  isCurrent
                    ? { opacity: 1, scale: 1, borderRadius: 0 }
                    : { opacity: 0.4, scale: 0.95, borderRadius: 6 }
                }
                animate={
                  isCurrent
                    ? { opacity: 1, scale: 1, borderRadius: 0 }
                    : { opacity: 0.4, scale: 0.95, borderRadius: 6 }
                }
                whileHover={isCurrent ? {} : { opacity: 0.7 }}
                className={`cursor-pointer relative aspect-square w-1/3 overflow-hidden`}
                key={`img-${idx}-${img}`}
              >
                <Image
                  src={img}
                  alt="home-hero-banner"
                  fill
                  sizes="auto"
                  className="relative object-cover"
                />
              </motion.div>
            );
          })}
        </Slider>
        <ul className=""></ul>
      </div>
      {/* RIGHT */}
      <div className="col-span-1 relative h-full border-l border-l-gray-300">
        <Right data={data} />
      </div>
    </div>
  );
};

export default ProductDetail;
