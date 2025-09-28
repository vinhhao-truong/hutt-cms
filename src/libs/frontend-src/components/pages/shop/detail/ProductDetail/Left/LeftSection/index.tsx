"use client";

import React from "react";

const LeftSection: React.FC<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="relative w-full h-full px-6 md:px-12 py-5">
      <h2 className="mb-4 font-light text-lg">{title} _</h2>
      {children}
    </div>
  );
};

export default LeftSection;
