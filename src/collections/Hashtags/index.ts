import { CollectionConfig } from "payload";
import formatTextToSlug from "@/libs/utils/format/formatTextToSlug";
const Hashtags: CollectionConfig = {
  slug: "hashtags",
  admin: {
    useAsTitle: "hashtag",
    group: {
      en: "Product Management",
      vi: "Quản Lý Sản Phẩm",
    },
  },
  fields: [
    {
      name: "hashtag",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "productList",
      type: "join",
      collection: "products",
      on: "hashtag",
      label: {
        en: "Product List",
        vi: "Danh Sách Sản Phẩm",
      },
    },
  ],
};

export default Hashtags;
