"use client";

import React from "react";
import LeftSection from "../LeftSection";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";

const Usage: React.FC<{ usage?: RenderedProductDetailType["usage"] }> = ({
  usage,
}) => {
  return (
    <LeftSection title="Công Dụng Phù Hợp">
      <p className="whitespace-pre-line">{usage}</p>
    </LeftSection>
  );
};

export default Usage;
