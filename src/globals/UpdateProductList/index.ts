import { GlobalConfig } from "payload";

const UpdateProductList: GlobalConfig = {
  slug: "updateProductList",
  label: {
    en: "Update Product List",
    vi: "Sản Phẩm",
  },
  admin: {
    group: {
      en: "Multiple Edits",
      vi: "Chỉnh Sửa Hàng Loạt",
    },
  },
  fields: [
    // {
    //   name: "getProductList",
    //   type: "text",
    //   admin: {
    //     components: { Field: "/custom-fields/DownloadProductsBtn" },
    //   },
    //   virtual: true,
    // },
    // {
    //   name: "multipleAdds",
    //   label: {
    //     vi: "Thêm Hàng Loạt",
    //   },
    //   type: "upload",
    //   relationTo: "spreadsheets",
    //   hooks: {
    //     afterChange: [
    //       ({ value, operation }) => {
    //         return value;
    //       },
    //     ],
    //   },
    // },
    {
      name: "productBulkUpdate",
      type: "text",
      admin: {
        components: { Field: "/custom-fields/LinkToProductBulkUpdate" },
      },
      virtual: true,
    },
  ],
};

export default UpdateProductList;
