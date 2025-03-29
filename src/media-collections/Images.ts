import type { CollectionConfig } from "payload";

const Images: CollectionConfig = {
  slug: "images",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
  },
  admin: {
    group: {
      en: "Files",
      vi: "Kho Chứa Files",
    },
  },
  labels: {
    plural: {
      en: "Images",
      vi: "Kho Hình Ảnh",
    },
    singular: {
      en: "Image",
      vi: "Hình Ảnh",
    },
  },
};

export default Images;
