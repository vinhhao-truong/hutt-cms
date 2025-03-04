import formatTextToSlug from "@/frontend-src/libs/utils/format/formatTextToSlug";
import { CollectionConfig, Field } from "payload";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "categoryName",
    group: {
      en: "Product Management",
      vi: "Quản Lý Sản Phẩm",
    },
  },
  labels: {
    plural: {
      en: "Categories",
      vi: "Tất Cả Danh Mục Cha",
    },
    singular: {
      en: "Category",
      vi: "Danh Mục Cha",
    },
  },
  fields: [
    {
      name: "categoryName",
      type: "text",
      unique: true,
      label: {
        en: "Category Name",
        vi: "Tên Danh Mục Cha",
      },
    },
    {
      name: "subcategoryList",
      type: "relationship",
      relationTo: "subcategories",
      hasMany: true,
      label: {
        en: "Subcategory List",
        vi: "Danh Sách Danh Mục Con",
      },
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        hidden: true,
      },
      hooks: {
        afterRead: [
          ({ data }) => {
            return formatTextToSlug(data?.categoryName);
          },
        ],
      },
    },
    // {
    //   name: 'subcategories',
    //   type: 'array',
    //   fields: [
    //     {
    //       name: 'subcategoryName',
    //       type: 'text',
    //       unique: true,
    //     },

    //   ],
    //   admin: {
    //     components: {
    //       RowLabel: '/custom-fields/LabelledArrayRow',
    //     },
    //   },
    //   defaultValue: [
    //     {
    //       subcategoryName: '~Gốc~',
    //     },
    //   ],
    // },
  ],
};

export default Categories;
