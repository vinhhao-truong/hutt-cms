"use client";

import React from "react";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClassName?: string;
  whiteBg?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const wrapperClasses = props.wrapperClassName || "";
  const classes = props.className || "";

  const innerProps = {
    ...props,
  };

  delete innerProps.whiteBg;
  delete innerProps.wrapperClassName;

  return (
    <div className={`${props.whiteBg ? "bg-white" : ""} w-full h-full`}>
      <div
        className={`${wrapperClasses}  container block mx-auto max-w-[1440px] h-full px-4 sm:px-6 lg:px-6`}
      >
        <div {...innerProps} className={`${classes}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
