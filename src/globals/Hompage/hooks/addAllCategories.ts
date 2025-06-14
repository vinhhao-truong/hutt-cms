import getProductListFromCategories from "@/libs/utils/get/getProductListFromCategories";
import { AfterReadHook } from "node_modules/payload/dist/globals/config/types";

const addAllCategories: AfterReadHook = async ({ doc, req: { payload } }) => {
  const categories = await payload.find({
    collection: "categories",
    depth: 10,
    select: {
      categoryName: true,
      slug: true,
      subcategoryList: true,
    },
    limit: 1000,
  });

  doc.allCategories = {
    categories: await getProductListFromCategories(categories, payload, true),
  };

  return doc;
};

export default addAllCategories;
