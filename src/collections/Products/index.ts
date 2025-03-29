import { v4 } from "uuid";
import { CollectionConfig, Field } from "payload";
import Variations from "./Variations";
import Specifications from "./Specifications";
import getCostsGroup from "./Common/Costs";
import getPriceGroup from "./Common/Prices";
import ID from "./Common/ID";
import ProductName from "./Common/ProductName";
import ProductCode from "./Common/ProductCode";
import Brand from "./Common/Brand";
import Category from "./Common/Category";
import EnableVariations from "./Common/EnableVariations";
import IsActive from "./Common/IsActive";
import ShortDescription from "./Common/ShortDescription";
import Description from "./Common/Description";
import exportXlsx from "@/custom-api-endpoint-handlers/product/export-xlsx";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "productName",
    group: {
      en: "Product Management",
      vi: "Quản Lý Sản Phẩm",
    },
  },
  labels: {
    singular: {
      en: "Product",
      vi: "Sản Phẩm",
    },
    plural: {
      en: "Products",
      vi: "Tất Cả Sản Phẩm",
    },
  },
  fields: [
    ID,
    {
      type: "row",
      fields: [ProductName, ProductCode],
    },
    {
      type: "row",
      fields: [Brand, Category],
    },
    ShortDescription,
    Description,
    Specifications,
    EnableVariations,
    IsActive,
    getCostsGroup(),
    getPriceGroup(),
    Variations,
  ],
  hooks: {
    afterRead: [
      ({ doc, req }) => {
        if (!req.user) {
          delete doc.costs;
        }
        return doc;
      },
    ],
  },
  access: {
    read: ({ req: { user, payload, context, data, query } }) => {
      return true;
    },
  },
  endpoints: [
    {
      path: "/export-xlsx",
      method: "get",
      handler: exportXlsx,
    },
  ],
};

export default Products;
