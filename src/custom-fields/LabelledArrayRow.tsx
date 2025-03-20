"use client";

import { useRowLabel } from "@payloadcms/ui";

const LabelledArrayRow = () => {
  const { data, rowNumber } = useRowLabel();

  // const customLabel = `${data.subcategoryName || 'Slide'} ${String(rowNumber).padStart(2, '0')} `
  // @ts-ignore
  const customLabel = `${data[Object.keys(data)[1]] || `Item ${String(rowNumber).padStart(2, "0")}`}`;

  return <div>{customLabel}</div>;
};

export default LabelledArrayRow;
