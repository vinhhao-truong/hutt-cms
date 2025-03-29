import type { CollectionConfig } from "payload";

const Videos: CollectionConfig = {
  slug: "videos",
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
    mimeTypes: ["video/*"],
  },
  admin: {
    group: {
      en: "Files",
      vi: "Kho Chứa Files",
    },
  },
  labels: {
    plural: {
      en: "Videos",
      vi: "Kho Video",
    },
    singular: {
      en: "Video",
      vi: "Video",
    },
  },
};

export default Videos;
