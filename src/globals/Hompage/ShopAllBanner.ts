import { Field } from "payload";

const ShopAllBanner: Field = {
  name: "shopAllBanner",
  type: "group",
  fields: [
    {
      name: "caption",
      type: "text",
    },
  ],
};

export default ShopAllBanner;
