import React from "react";
import { getPayload } from "payload";
import config from "@/payload.config";
import { headers as nextHeaders } from "next/headers";
import { redirect } from "next/navigation";

const ProductBulkUpdatePage = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const headers = await nextHeaders();
  const auth = await payload.auth({ headers });

  if (!auth.user) {
    redirect("/admin");
  }

  return <form className="h-screen">ProductBulkUpdate</form>;
};

export default ProductBulkUpdatePage;
