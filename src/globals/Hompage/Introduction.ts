import { Field } from "payload";

const Introduction: Field = {
  name: "introduction",
  type: "group",
  label: {
    en: "Hútt (Short) Introduction",
    vi: "Văn Giới Thiệu Hútt (Ngắn)",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "shortIntro",
          type: "textarea",
          label: {
            en: "Short Intro",
            vi: "Giới Thiệu Hútt (Ngắn)",
          },
        },
        {
          name: "ourMission",
          type: "textarea",
          label: {
            en: "Our Mission",
            vi: "Sứ Mệnh của Hútt (Ngắn)",
          },
        },
      ],
    },
  ],
};

export default Introduction;
