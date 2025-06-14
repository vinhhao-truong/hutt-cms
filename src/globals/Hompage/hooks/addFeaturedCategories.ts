import getProductListFromCategories from "@/libs/utils/get/getProductListFromCategories";
import { AfterReadHook } from "node_modules/payload/dist/globals/config/types";

const addFeaturedCategories: AfterReadHook = async ({
  doc,
  req: { payload },
}) => {
  const categories = await payload.find({
    collection: "categories",
    where: {
      or: doc?.editorFeaturedCategories?.categories?.map((c: any) => ({
        id: { equals: c?.id },
      })),
    },
    select: {
      categoryName: true,
      slug: true,
      subcategoryList: true,
    },
  });

  doc.featuredCategories = {
    categories: await getProductListFromCategories(categories, payload),
  };

  return doc;
};

export default addFeaturedCategories;
