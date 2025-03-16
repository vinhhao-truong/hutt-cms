import { v4 } from "uuid";
import { CollectionConfig, Field } from "payload";
import Variations from "./Variations";
import Specifications from "./Specifications";
import getCostsGroup from "./Common/Costs";
import getPriceGroup from "./Common/Prices";

const ID: Field = {
  name: "id",
  // required: true,
  type: "text",
  // defaultValue: v4(),
  admin: {
    disabled: true,
    disableListColumn: true,
    readOnly: true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        return v4();
      },
    ],
  },
};

const ProductName: Field = {
  name: "productName",
  type: "text",
  required: true,
  label: {
    en: "Product Name",
    vi: "Tên Sản Phẩm",
  },
};

const ProductCode: Field = {
  name: "productCode",
  type: "text",
  label: {
    en: "Product Code",
    vi: "Mã Sản Phẩm",
  },
};

const Brand: Field = {
  name: "brand",
  type: "relationship",
  relationTo: "brands",
  label: {
    en: "Brand",
    vi: "Thương Hiệu",
  },
};

const Category: Field = {
  name: "category",
  type: "relationship",
  relationTo: "subcategories",
  label: {
    en: "Category",
    vi: "Danh Mục",
  },
  hasMany: true,
};

const EnableVariations: Field = {
  name: "enableVariations",
  type: "checkbox",
  defaultValue: false,
  label: {
    en: "Variations?",
    vi: "Kích Hoạt Biến Thể?",
  },
};

const IsActive: Field = {
  name: "isActive",
  type: "checkbox",
  defaultValue: true,
  label: {
    en: "Is Active?",
    vi: "Đang Hoạt Động?",
  },
};

const ShortDescription: Field = {
  name: "shortDescription",
  type: "textarea",
  required: true,
  label: {
    en: "Short Description",
    vi: "Mô Tả Ngắn",
  },
};

const Description: Field = {
  name: "description",
  type: "richText",
  required: true,
  label: {
    en: "Description",
    vi: "Mô Tả",
  },
};

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
};

export default Products;
