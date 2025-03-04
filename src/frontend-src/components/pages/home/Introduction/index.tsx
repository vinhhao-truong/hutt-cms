"use client";

import { HomePageDataTypes } from "@/app/(frontend)/page";
import PageContainer from "@/frontend-src/components/layout/PageContainer";
import React from "react";

const Introduction: React.FC<{
  data: HomePageDataTypes["introduction"];
}> = ({ data }) => {
  const formattedOurMission = data?.ourMission
    ?.split("\n")
    .map((line: string, index: number) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <PageContainer className="flex justify-center gap-10 px-28">
      <h2 className="text-3xl font-medium">{data?.shortIntro}</h2>
      <p className="text-sm">{formattedOurMission}</p>
    </PageContainer>
  );
};

export default Introduction;
