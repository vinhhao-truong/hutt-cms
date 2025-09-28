"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import PageContainer from "@/libs/frontend-src/components/layout/PageContainer";
import React from "react";

const Introduction: React.FC<{
  data: HomePageDataTypes["introduction"];
}> = ({ data }) => {
  return (
    <PageContainer className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-10 mt-6 sm:mt-12 sm:my-12 px-12 lg:px-28">
      <h2 className="text-xl sm:text-3xl font-medium">{data?.shortIntro}</h2>
      <p className="text-xs sm:text-sm whitespace-pre-line">
        {data?.ourMission}
      </p>
    </PageContainer>
  );
};

export default Introduction;
