import React from "react";

import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as nextHeaders } from "next/headers";
import { redirect } from "next/navigation";
import DownloadButton from "@/frontend-src/components/pages/product-bulk-update/DownloadButton";
import UploadProducts from "@/frontend-src/components/pages/product-bulk-update/UploadProducts";

const ProductBulkUpdatePage = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const headers = await nextHeaders();
  const auth = await payload.auth({ headers });

  if (!auth.user) {
    redirect("/admin");
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-4/5 grid grid-cols-2">
        <DownloadButton />
        <UploadProducts />
      </div>
    </div>
  );
};

export default ProductBulkUpdatePage;
