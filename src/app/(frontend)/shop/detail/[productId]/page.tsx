import React from "react";
import config from "@/payload.config";
import { getPayload } from "payload";
import { redirect } from "next/navigation";
import ProductDetail from "@/libs/frontend-src/components/pages/shop/detail/ProductDetail";
import { Product } from "@/payload-types";
import RelatedProducts from "@/libs/frontend-src/components/pages/shop/detail/RelatedProducts";

export const dynamic = "force-dynamic";

// export interface RenderedProductDetailType extends Omit<Product, "hashtag"> {
export interface RenderedProductDetailType extends Product {
  // hashtag?: string[];
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) => {
  const productId = (await params).productId;

  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const productData = await payload.findByID({
    collection: "products",
    id: productId,
  });

  if (!productData) {
    redirect("/");
  }

  return (
    <div className="">
      <ProductDetail data={productData as RenderedProductDetailType} />
      <RelatedProducts
        data={[productData, productData, productData, productData, productData]}
      />
    </div>
  );
};

export default ProductDetailPage;
