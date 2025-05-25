import { BasePayload, PaginatedDocs } from "payload";
import { Subcategory } from "@/payload-types";

const getProductListFromCategories = async (
  categories: PaginatedDocs<{
    id: number;
    categoryName?: string | null | undefined;
    slug?: string | null | undefined;
    subcategoryList?: (number | Subcategory)[] | null | undefined;
  }>,
  payload: BasePayload,
  includesOther: boolean = false
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
        if (!!prods) {
          result[categories.docs[i]?.categoryName ?? ""].push(...prods);
          allIds.push(...prods);
        }
      }
    }
  }

  const uniqueIds: string[] = Array.from(new Set(allIds));

  const orWhereClause = [...uniqueIds.map((i) => ({ id: { equals: i } }))];

  if (includesOther) {
    // @ts-ignore
    orWhereClause.push({ category: { equals: null } });
  }

  const [products] = await Promise.all([
    payload.find({
      collection: "products",
      where: {
        or: orWhereClause,
      },
      select: {
        id: true,
        productName: true,
        productCode: true,
        specifications: true,
        shortDescription: true,
        prices: true,
      },
      limit: 1000,
    }),
  ]);

  const prodsObj = {};
  for (let i = 0; i < products.docs.length; i++) {
    // @ts-ignore
    prodsObj[products?.docs[i]?.id ?? ""] = products?.docs[i];
  }

  for (let i = 0; i < Object.keys(result).length; i++) {
    const val = result[Object.keys(result)[i]];
    const prods = val
      ?.map((p: string) => {
        // @ts-ignore
        const prod = prodsObj?.[p];
        // @ts-ignore
        delete prodsObj?.[p];
        return prod;
      })
      // @ts-ignore
      ?.filter((p) => !!p);
    result[Object.keys(result)[i]] = {
      slug: categories.docs[i]?.slug,
      products: prods,
    };
  }

  if (includesOther) {
    result["Khác"] = {
      slug: "khac",
      products: [...Object.values(prodsObj)],
    };
  }

  return result;
};

export default getProductListFromCategories;
