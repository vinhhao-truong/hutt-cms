import { CollectionConfig, Field } from 'payload'
import Variations from './Variations'
import Specifications from './Specifications'
import getCostsGroup from './Common/Costs'
import getPriceGroup from './Common/Prices'

const ProductName: Field = {
  name: 'productName',
  type: 'text',
  required: true,
  label: {
    en: 'Product Name',
    vi: 'Tên Sản Phẩm',
  },
}

const ProductCode: Field = {
  name: 'productCode',
  type: 'text',
  label: {
    en: 'Product Code',
    vi: 'Mã Sản Phẩm',
  },
}

const Brand: Field = {
  name: 'brand',
  type: 'relationship',
  relationTo: 'brands',
  label: {
    en: 'Brand',
    vi: 'Thương Hiệu',
  },
}

const Category: Field = {
  name: 'category',
  type: 'relationship',
  relationTo: 'categories',
  label: {
    en: 'Category',
    vi: 'Danh Mục',
  },
}

const EnableVariations: Field = {
  name: 'enableVariations',
  type: 'checkbox',
  defaultValue: false,
  label: {
    en: 'Variations?',
    vi: 'Kích Hoạt Biến Thể?',
  },
}

const Description: Field = {
  name: 'description',
  type: 'richText',
  required: true,
  label: {
    en: 'Description',
    vi: 'Mô Tả',
  },
}

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'productName',
    group: {
      en: 'Product Management',
      vi: 'Quản Lý Sản Phẩm',
    },
  },
  labels: {
    singular: {
      en: 'Product',
      vi: 'Sản Phẩm',
    },
    plural: {
      en: 'Products',
      vi: 'Danh Sách Sản Phẩm',
    },
  },
  fields: [
    {
      type: 'row',
      fields: [ProductName, ProductCode],
    },
    {
      type: 'row',
      fields: [Brand, Category],
    },
    Description,
    Specifications,
    EnableVariations,
    getCostsGroup(),
    getPriceGroup(),
    Variations,
  ],
  hooks: {
    afterRead: [
      ({ doc, req }) => {
        if (req.user) {
          return doc
        }
        return 'No'
      },
    ],
  },
  access: {
    read: ({ req: { user, data, payload } }) => {
      return true
    },
  },
}

export default Products
