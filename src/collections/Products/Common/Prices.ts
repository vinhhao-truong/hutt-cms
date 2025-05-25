import { Field } from "payload";

const getPriceField = (
  name: string,
  en: string,
  vi: string,
  required: boolean = true,
  isVariation: boolean = false,
  readOnly: boolean = false
  // other?: Field
): Field => {
  // const otherFields = other ? other : {};

  return {
    // ...otherFields,
    name: `${name}${isVariation ? "Variation" : ""}`,
    type: "number",
    admin: {
      // components: { Field: "/custom-fields/CustomVNDField" },
      readOnly,
    },
    label: {
      en,
      vi,
    },
  };
};

const getPriceGroup = (isVariation?: boolean): Field => {
  return {
    name: `prices${isVariation ? "Variation" : ""}`,
    type: "group",
    fields: [
      {
        name: `grossPrice${isVariation ? "Variation" : ""}`,
        type: "number",
        admin: {
          // components: { Field: "/custom-fields/CustomVNDField" },
        },
        label: {
          en: "Gross Price",
          vi: "Giá Bán Gốc",
        },
      },
    ],
    label: {
      en: "Prices",
      vi: "Giá Bán",
    },
    // admin: {
    //   condition: hasVariations(!isVariation),
    // },
  };
};

export default getPriceGroup;
