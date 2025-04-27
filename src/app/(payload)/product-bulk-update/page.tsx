import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as nextHeaders } from "next/headers";

const ProductBulkUpdatePage = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const headers = await nextHeaders();
  const auth = await payload.auth({ headers });

  console.log("auth", auth.user);

  return <div>ProductBulkUpdate</div>;
};

export default ProductBulkUpdatePage;
