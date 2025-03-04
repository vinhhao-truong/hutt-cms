import { CollectionConfig, Field } from 'payload'

const Subcategories: CollectionConfig = {
  slug: 'subcategories',
  admin: {
    useAsTitle: 'subcategoryName',
    group: {
      en: 'Product Management',
      vi: 'Quản Lý Sản Phẩm',
    },
  },
  labels: {
    plural: {
      en: 'Subcategories',
      vi: 'Tất Cả Danh Mục Con',
    },
    singular: {
      en: 'subcategory',
      vi: 'Danh Mục Con',
    },
  },
  fields: [
    {
      name: 'subcategoryName',
      type: 'text',
      unique: true,
      label: {
        en: 'Subcategory Name',
        vi: 'Tên Danh Mục Con',
      },
    },
    {
      name: 'category',
      type: 'join',
      collection: 'categories',
      on: 'subcategoryList',
      label: {
        en: 'Category',
        vi: 'Danh Mục Cha',
      },
      admin: {
        disabled: true,
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

export default Subcategories
