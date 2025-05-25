import formatTextToSlug from "@/libs/utils/format/formatTextToSlug";
import { CollectionConfig } from "payload";
import { v4 } from "uuid";

const Brands: CollectionConfig = {
  slug: "brands",
  admin: {
    useAsTitle: "brandName",
    group: {
      en: "Product Management",
      vi: "Quản Lý Sản Phẩm",
    },
  },
  labels: {
    singular: {
      en: "Brand",
      vi: "Thương Hiệu",
    },
    plural: {
      en: "Brands",
      vi: "Tất Cả Thương Hiệu",
    },
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "brandName",
          type: "text",
          unique: true,
          required: true,
          label: {
            vi: "Tên Thương Hiệu",
            en: "Brand Name",
          },
        },
        {
          name: "brandCode",
          type: "text",
          unique: true,
          label: {
            vi: "Mã Thương Hiệu",
            en: "Brand Code",
          },
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      admin: {
        disabled: true,
        disableListColumn: true,
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!!data?.slug) {
              return data.slug;
            }

            return formatTextToSlug(data?.brandName);
          },
        ],
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      label: {
        en: "Short Description",
        vi: "Mô Tả Ngắn",
      },
    },
    {
      name: "country",
      type: "select",
      label: {
        vi: "Quốc Gia",
      },
      options: [
        {
          label: {
            en: "China",
            vi: "Trung Quốc",
          },
          value: "china",
        },
        {
          label: {
            en: "Thailand",
            vi: "Thái Lan",
          },
          value: "thailand",
        },
        {
          label: {
            en: "Vietnam",
            vi: "Việt Nam",
          },
          value: "vietnam",
        },
      ],
    },
    {
      name: "productList",
      type: "join",
      collection: "products",
      on: "brand",
      label: {
        en: "Product List",
        vi: "Danh Sách Sản Phẩm",
      },
    },
  ],
};

export default Brands;
