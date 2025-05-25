"use client";

import React from "react";
import LeftSection from "../LeftSection";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Link from "next/link";

const Brand: React.FC<{
  brand?: RenderedProductDetailType["brand"];
}> = ({ brand }) => {
  if (typeof brand === "number") {
    return <></>;
  }

  return (
    <LeftSection title="Thương Hiệu">
      <Link
        className="underline underline-offset-2"
        href={`/shop/brand/${brand?.slug}`}
      >
        {brand?.brandName}
      </Link>
    </LeftSection>
  );
};

export default Brand;
