"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import PageContainer from "@/frontend-src/components/layout/PageContainer";
import React from "react";

const Introduction: React.FC<{
  data: HomePageDataTypes["introduction"];
}> = ({ data }) => {
  return (
    <PageContainer className="flex justify-center gap-10 my-12 px-28">
      <h2 className="text-3xl font-medium">{data?.shortIntro}</h2>
      <p className="text-sm whitespace-pre-line">{data?.ourMission}</p>
    </PageContainer>
  );
};

export default Introduction;
