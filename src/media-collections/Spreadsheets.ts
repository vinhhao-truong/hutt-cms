import type { CollectionConfig } from "payload";

const Spreadsheets: CollectionConfig = {
  slug: "spreadsheets",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      defaultValue: "new spreadsheet",
    },
  ],
  upload: {
    mimeTypes: [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
      "application/vnd.oasis.opendocument.spreadsheet",
    ],
  },
  admin: {
    group: {
      en: "Files",
      vi: "Kho Chứa Files",
    },
  },
  labels: {
    plural: {
      en: "Spreadsheets",
      vi: "Kho Excel",
    },
    singular: {
      en: "Spreadsheet",
      vi: "Excel",
    },
  },
};

export default Spreadsheets;
