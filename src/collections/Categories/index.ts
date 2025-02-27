import { CollectionConfig, Field } from 'payload'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'categoryName',
    group: {
      en: 'Product Management',
      vi: 'Quản Lý Sản Phẩm',
    },
  },
  labels: {
    plural: {
      en: 'Categories',
      vi: 'Tất Cả Danh Mục',
    },
    singular: {
      en: 'Category',
      vi: 'Danh Mục',
    },
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      unique: true,
      label: {
        en: 'Category Name',
        vi: 'Tên Danh Mục',
      },
    },
    {
      name: 'productList',
      type: 'join',
      collection: 'products',
      on: 'category',
      label: {
        en: 'Product List',
        vi: 'Danh Sách Sản Phẩm',
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
}

export default Categories
