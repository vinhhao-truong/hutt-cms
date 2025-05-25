"use client";

import React from "react";
import ImageGallery from "./ImageGallery";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Specifications from "./Specifications";
import Usage from "./Usage";
import Brand from "./Brand";
import Country from "./Country";

const Left: React.FC<{ data: RenderedProductDetailType }> = ({ data }) => {
  const leftSection = [
    <Specifications key={`left-specs`} specifications={data?.specifications} />,
    <Brand key={`left-brand`} brand={data?.brand} />,
    <Country key={`left-country`} brand={data?.brand} />,
    <Usage key={`left-usage`} usage={data?.usage} />,
  ];

  return (
    <>
      <ImageGallery />
      <ul className="pb-12">
        {leftSection.map((section, idx) => {
          return (
            <li
              className="border-t border-t-gray-400"
              key={`left-section-${idx}`}
            >
              {section}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Left;
