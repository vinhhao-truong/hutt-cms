import { Field } from "payload";

const ProductName: Field = {
  name: "productName",
  type: "text",
  required: true,
  label: {
    en: "Product Name",
    vi: "Tên Sản Phẩm",
  },
};

export default ProductName;
