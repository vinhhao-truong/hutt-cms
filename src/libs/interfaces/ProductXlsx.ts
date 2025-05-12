export interface ProductXlsx {
  productId: string;
  productName: string;
  productCode: string | null | undefined;
  shortDescription: string;
  productCost?: number | null | undefined;
  packageCost?: number | null | undefined;
  grossPrice?: number | null | undefined;
  // netPrice?: number | null | undefined;
  variationId?: string | null | undefined;
  variationName?: string | null | undefined;
  productCostVariation?: number | null | undefined;
  packageCostVariation?: number | null | undefined;
  grossPriceVariation?: number | null | undefined;
  netPriceVariation?: number | null | undefined;
  createdAt?: string;
}
