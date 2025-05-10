import { Field } from "payload";

const getPriceField = (
  name: string,
  en: string,
  vi: string,
  required: boolean = true,
  isVariation: boolean = false
): Field => {
  return {
    name: `${name}${isVariation ? "Variation" : ""}`,
    type: "number",
    admin: {
      components: { Field: "/custom-fields/CustomVNDField" },
    },
    label: {
      en,
      vi,
    },
  };
};

const getPriceGroup = (isVariation?: boolean): Field => {
  const GrossPrice = getPriceField(
    "grossPrice",
    "Gross Price",
    "Giá Bán Gốc",
    true,
    isVariation
  );
  const NetPrice = getPriceField(
    "netPrice",
    "Net Price",
    "Giá Bán Cuối",
    false,
    isVariation
  );
  return {
    name: `prices${isVariation ? "Variation" : ""}`,
    type: "group",
    fields: [GrossPrice, NetPrice],
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
