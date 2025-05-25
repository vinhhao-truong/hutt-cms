"use client";

import React, { useEffect, useMemo } from "react";
import { useField, NumberField } from "@payloadcms/ui";
import { NumberFieldClientComponent } from "payload";
import { formatVNCurrency } from "@/libs/utils/format/formatNumberToString";

const CustomVNDField: NumberFieldClientComponent = ({
  path,
  field,
  ...props
}) => {
  const { value, setValue } = useField({ path });

  const vnd = useMemo(() => {
    const result = String(value);

    return formatVNCurrency(parseFloat(result));
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "4px",
      }}
    >
      <div
        style={{
          width: "70%",
          marginRight: "40px",
        }}
      >
        <NumberField {...props} field={field} path={path} />
      </div>
      <p style={{ marginTop: "10px" }}>= {vnd}</p>
    </div>
  );
};

export default CustomVNDField;
