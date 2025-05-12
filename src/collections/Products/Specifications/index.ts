import { Field } from "payload";

const getSpecs = (
  name: string,
  unit: string,
  vi: string,
  en?: string
): Field => {
  return {
    name,
    type: "number",
    label: {
      en: `${en ?? name[0].toUpperCase()}${name.slice(1)} (${unit})`,
      vi: `${vi} (${unit})`,
    },
  };
};

const Weight = getSpecs("weight", "g", "Khối Lượng");
const Height = getSpecs("height", "cm", "Chiều Cao");
const Capacity = getSpecs("capacity", "ml", "Dung Tích");
const AboveRadius = getSpecs(
  "aboveDiameter",
  "cm",
  "Đường Kính Miệng",
  "Upper Diameter"
);
const BelowRadius = getSpecs(
  "belowDiameter",
  "cm",
  "Đường Kính Đáy",
  "Downer Diameter"
);
const Thickness = getSpecs("thickness", "mm", "Độ Dày");

const Specifications: Field = {
  name: "specifications",
  type: "group",
  fields: [
    {
      type: "row",
      fields: [Weight, Height, Capacity],
    },
    {
      type: "row",
      fields: [AboveRadius, BelowRadius, Thickness],
    },
  ],
  label: {
    en: "Specifications",
    vi: "Thông Tin Đo Lường",
  },
};

export default Specifications;
