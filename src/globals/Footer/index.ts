import { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
  slug: "footer",
  admin: {
    group: {
      en: "Storefront Management",
      vi: "Quản Lý Website Shop",
    },
  },
  fields: [
    {
      name: "mediaUrls",
      type: "array",
      label: {
        en: "Media URLs",
        vi: "Các URL Media",
      },
      fields: [
        {
          name: "mediaLabel",
          type: "text",
          label: {
            en: "Media Label",
            vi: "Tên Media",
          },
        },
        {
          name: "mediaUrl",
          type: "text",
          label: {
            en: "Media URL",
            vi: "URL Media",
          },
        },
      ],
      admin: {
        components: {
          RowLabel: "/custom-fields/LabelledArrayRow",
        },
      },
    },
    {
      name: "infoInternalUrls",
      type: "array",
      label: {
        en: "Info URLs",
        vi: "Các URL Thông Tin Shop",
      },
      fields: [
        {
          name: "infoLabel",
          type: "text",
          label: {
            en: "Info Label",
            vi: "Tên Thông Tin",
          },
        },
        {
          name: "infoUrl",
          type: "text",
          label: {
            en: "Info URL",
            vi: "URL Thông Tin",
          },
        },
      ],
      admin: {
        components: {
          RowLabel: "/custom-fields/LabelledArrayRow",
        },
      },
    },
    {
      name: "generalDescription",
      type: "textarea",
    },
  ],
};

export default Footer;
