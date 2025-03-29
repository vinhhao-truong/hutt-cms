import { Field } from "payload";

const IsActive: Field = {
  name: "isActive",
  type: "checkbox",
  defaultValue: true,
  label: {
    en: "Is Active?",
    vi: "Đang Hoạt Động?",
  },
};

export default IsActive;
