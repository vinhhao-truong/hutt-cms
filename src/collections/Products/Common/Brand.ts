import { Field } from "payload";

const Brand: Field = {
  name: "brand",
  type: "relationship",
  relationTo: "brands",
  label: {
    en: "Brand",
    vi: "Thương Hiệu",
  },
};

export default Brand;
