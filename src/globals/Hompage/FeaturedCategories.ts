import getProductListFromCategories from "@/frontend-src/libs/utils/get/getProductListFromCategories";
import { Field } from "payload";

const EditorFeaturedCategories: Field = {
  name: "editorFeaturedCategories",
  type: "group",
  label: { en: "Featured Categories", vi: "Danh Mục Nổi Bật" },
  fields: [
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      maxRows: 3,
      label: {
        en: "Categories",
        vi: "Danh Mục",
      },
      // hooks: {
      //   afterRead: [
      //     async ({ value, req: { payload } }) => {
      //       const categories = await payload.find({
      //         collection: "categories",
      //         where: {
      //           or: value.map((c: number) => ({ id: { equals: c } })),
      //         },
      //         select: {
      //           categoryName: true,
      //           slug: true,
      //           subcategoryList: true,
      //         },
      //       });

      //       return await getProductListFromCategories(categories, payload);
      //     },
      //   ],
      // },
    },
  ],
  // admin: {
  //   hidden: true,
  // },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        return true;
      }
      return false;
    },
  },
};

export default EditorFeaturedCategories;
