import { Field } from "payload";
import { hasVariations } from "../Variations";

const getCostField = (
  name: string,
  en: string,
  vi: string,
  isVariation: boolean = false
): Field => {
  const costName = `${name}${isVariation ? "Variation" : ""}`;
  return {
    name: costName,
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

const getCostsGroup = (isVariation?: boolean): Field => {
  const ProdCost = getCostField(
    "productCost",
    "Product Cost",
    "Vốn Sản Phẩm",
    isVariation
  );
  const PackageCost = getCostField(
    "packageCost",
    "Package Cost",
    "Vốn Bao Bì",
    isVariation
  );
  return {
    name: `costs${isVariation ? "Variation" : ""}`,
    type: "group",
    fields: [ProdCost, PackageCost],
    label: {
      en: "Costs",
      vi: "Giá Vốn",
    },
    admin: {
      condition: hasVariations(!isVariation),
    },
  };
};

export default getCostsGroup;
