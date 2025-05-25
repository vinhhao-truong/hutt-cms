import { PayloadHandler, PayloadRequest } from "payload";
import { ProductXlsx } from "@/libs/interfaces/ProductXlsx";
import { utils as xlsxUtils, write as xlsxWrite } from "xlsx";
import moment from "moment";

export default async function exportXlsx(
  req: PayloadRequest
): Promise<Response> {
  try {
    const productsRes = await req.payload.find({
      collection: "products",
      select: {
        productName: true,
        productCode: true,
        shortDescription: true,
        costs: true,
        prices: true,
        variations: true,
        createdAt: true,
      },
      user: req.user,
      limit: 2000,
    });

    const products = productsRes.docs;

    const finalData: ProductXlsx[] = [];

    for (const {
      id,
      productName,
      productCode,
      shortDescription,
      costs,
      prices,
      variations,
      createdAt,
    } of products) {
      const data: ProductXlsx = {
        productId: id,
        productName,
        productCode,
        shortDescription,
        createdAt,
      };

      if (variations && variations?.length > 0) {
        for (const {
          id: vId,
          variationName,
          pricesVariation,
          costsVariation,
        } of variations) {
          const newVar = { ...data };

          newVar.variationId = vId;
          newVar.variationName = variationName;
          // newVar.netPriceVariation = pricesVariation?.netPriceVariation;
          newVar.grossPriceVariation = pricesVariation?.grossPriceVariation;
          newVar.packageCostVariation = costsVariation?.packageCostVariation;
          newVar.productCostVariation = costsVariation?.productCostVariation;
          finalData.push(newVar);
        }
        continue;
      }
      data.grossPrice = prices?.grossPrice;
      // data.netPrice = prices?.netPrice;
      data.packageCost = costs?.packageCost;
      data.productCost = costs?.productCost;
      finalData.push(data);
    }

    const worksheet = xlsxUtils.json_to_sheet(finalData);

    const workbook = xlsxUtils.book_new();
    xlsxUtils.book_append_sheet(workbook, worksheet, "Products");

    const excelBuffer = xlsxWrite(workbook, {
      bookType: "xlsx",
      type: "buffer",
    });

    return new Response(excelBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="products.xlsx"`,
      },
    });
    // return Response.json({ products, after: finalData });
  } catch (error) {
    return Response.json({
      error,
    });
  }
}
