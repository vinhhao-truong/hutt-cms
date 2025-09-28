"use client";

import ProductCarousel from "@/libs/frontend-src/components/common/ProductCarousel";
import { Product } from "@/payload-types";
import React from "react";

const RelatedProducts: React.FC<{ data: Product[] }> = ({ data }) => {
  return (
    <div className="pt-12 pb-24">
      <ProductCarousel title={`SẢN PHẨM LIÊN QUAN`} data={data} />
    </div>
  );
};

export default RelatedProducts;
