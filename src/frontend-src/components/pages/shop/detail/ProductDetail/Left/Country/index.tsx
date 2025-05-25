"use client";

import React from "react";
import LeftSection from "../LeftSection";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";
import Link from "next/link";

const countryDict = {
  china: "Trung Quốc",
  thailand: "Thái Lan",
  vietnam: "Việt Nam",
};

const Country: React.FC<{
  brand?: RenderedProductDetailType["brand"];
}> = ({ brand }) => {
  if (typeof brand === "number") {
    return <></>;
  }

  return (
    <LeftSection title="Xuất Xứ">
      <p className="">{brand?.country && countryDict[brand?.country]}</p>
    </LeftSection>
  );
};

export default Country;
