"use client";

import React from "react";
import LeftSection from "../LeftSection";
import { RenderedProductDetailType } from "@/app/(frontend)/shop/detail/[productId]/page";

const Specifications: React.FC<{
  specifications?: RenderedProductDetailType["specifications"];
}> = ({ specifications }) => {
  return (
    <LeftSection title="Kích Thước">
      <ul className="grid grid-cols-2 gap-1">
        {specifications?.capacity && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Dung Tích</p>
            <p className="">{specifications?.capacity} ml</p>
          </li>
        )}
        {specifications?.thickness && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Độ Dày</p>{" "}
            <p className="">{specifications?.thickness} mm</p>
          </li>
        )}
        {specifications?.height && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Chiều Cao</p>{" "}
            <p className="">{specifications?.height} cm</p>
          </li>
        )}
        {specifications?.aboveDiameter && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Đường Kính Miệng</p>{" "}
            <p className="">{specifications?.aboveDiameter} cm</p>
          </li>
        )}
        {specifications?.belowDiameter && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Đường Kính Đáy</p>{" "}
            <p className="">{specifications?.belowDiameter} cm</p>
          </li>
        )}
        {specifications?.weight && (
          <li className="leading-tight">
            <p className="text-xs font-bold">Cân Nặng</p>{" "}
            <p className="">{specifications?.weight} g</p>
          </li>
        )}
      </ul>
    </LeftSection>
  );
};

export default Specifications;
