import { BasePayload, PaginatedDocs } from "payload";
import { Subcategory } from "@/payload-types";

const getProductListFromCategories = async (
  categories: PaginatedDocs<{
    id: number;
    categoryName?: string | null | undefined;
    slug?: string | null | undefined;
    subcategoryList?: (number | Subcategory)[] | null | undefined;
  }>,
  payload: BasePayload
) => {
  const allIds = [];
  const result: any = {};

  for (let i = 0; i < categories.docs.length; i++) {
    const sub = categories.docs[i].subcategoryList;
    result[categories.docs[i]?.categoryName ?? ""] = [];

    if (sub?.length && sub?.length > 0) {
      for (let j = 0; j < sub.length; j++) {
        // @ts-ignore
        const prods = sub[j]?.productList?.docs;
        result[categories.docs[i]?.categoryName ?? ""].push(...prods);
        allIds.push(...prods);
      }
    }
  }

  const uniqueIds: string[] = Array.from(new Set(allIds));

  const products = await payload.find({
    collection: "products",
    where: {
      or: uniqueIds.map((i) => ({ id: { equals: i } })),
    },
    select: {
      id: true,
      productName: true,
    },
  });

  const prodsObj = {};
  for (let i = 0; i < products.docs.length; i++) {
    // @ts-ignore
    prodsObj[products?.docs[i]?.id ?? ""] = products?.docs[i];
  }

  for (let i = 0; i < Object.keys(result).length; i++) {
    const val = result[Object.keys(result)[i]];
    // @ts-ignore
    const prods = val.map((p: string) => prodsObj[p]);
    result[Object.keys(result)[i]] = {
      slug: categories.docs[i]?.slug,
      products: prods,
    };
  }
  return result;
};

export default getProductListFromCategories;
