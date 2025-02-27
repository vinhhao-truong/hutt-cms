import { CollectionConfig } from 'payload'

const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'brandName',
    group: {
      en: 'Product Management',
      vi: 'Quản Lý Sản Phẩm',
    },
  },
  labels: {
    singular: {
      en: 'Brand',
      vi: 'Thương Hiệu',
    },
    plural: {
      en: 'Brands',
      vi: 'Tất Cả Thương Hiệu',
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'brandName',
          type: 'text',
          unique: true,
          required: true,
          label: {
            vi: 'Tên Thương Hiệu',
            en: 'Brand Name',
          },
        },
        {
          name: 'brandCode',
          type: 'text',
          unique: true,
          label: {
            vi: 'Mã Thương Hiệu',
            en: 'Brand Code',
          },
        },
      ],
    },
    {
      name: 'productList',
      type: 'join',
      collection: 'products',
      on: 'brand',
      label: {
        en: 'Product List',
        vi: 'Danh Sách Sản Phẩm',
      },
    },
  ],
}

export default Brands
