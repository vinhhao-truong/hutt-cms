"use client";

import useResponsive from "@/frontend-hooks/useResponsive";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

const imgs = [
  `https://images.pexels.com/photos/1566308/pexels-photo-1566308.jpeg`,
  `https://acmecups.nz/cdn/shop/files/TFJshort_pdp_3x_1f69db83-56d5-432b-964c-e9c3bd4b16fa.jpg?v=1743994870`,
  `https://acmecups.nz/cdn/shop/files/Tajimi-Tumbler-7_PDP_Lifestyle_-_Resized_2x_043e3aa6-231a-479f-9af1-0ff8e27bb16f.jpg?v=1744856159`,
];

const ImageGallery = () => {
  const [currentImg, setCurrentImg] = useState<number>(0);

  const responsive = useResponsive();
  const bigScreen = ["2xl"].includes(responsive);
  const desktop = ["lg", "xl"].includes(responsive);

  return (
    <Slider
      // dots={true}
      // infinite={true}
      infinite={false}
      centerMode
      centerPadding={bigScreen ? "400px" : desktop ? "200px" : "50px"}
      slidesToShow={1}
      slidesToScroll={1}
      speed={700}
      className="center relative w-full pb-4"
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
                : { opacity: 0.9, scale: 0.92, borderRadius: 6 }
            }
            animate={
              isCurrent
                ? { opacity: 1, scale: 1, borderRadius: 0 }
                : { opacity: 0.9, scale: 0.92, borderRadius: 6 }
            }
            whileHover={isCurrent ? {} : { opacity: 0.95 }}
            className={`cursor-pointer relative aspect-square w-1/3 overflow-hidden mt-[100px]`}
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
  );
};

export default ImageGallery;
