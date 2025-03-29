import { Field } from "payload";
import { v4 } from "uuid";

const ID: Field = {
  name: "id",
  // required: true,
  type: "text",
  // defaultValue: v4(),
  admin: {
    disabled: true,
    disableListColumn: true,
    readOnly: true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!!data?.id) {
          return data.id;
        }

        return v4();
      },
    ],
  },
};

export default ID;
