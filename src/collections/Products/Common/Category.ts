import { Field } from "payload";

const Category: Field = {
  name: "category",
  type: "relationship",
  relationTo: "subcategories",
  label: {
    en: "Category",
    vi: "Danh Mục",
  },
  hasMany: true,
};

export default Category;
