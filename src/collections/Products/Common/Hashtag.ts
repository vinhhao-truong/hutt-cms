import { Field } from "payload";

const Hashtag: Field = {
  name: "hashtag",
  type: "relationship",
  relationTo: "hashtags",
  hasMany: true,
};

export default Hashtag;
