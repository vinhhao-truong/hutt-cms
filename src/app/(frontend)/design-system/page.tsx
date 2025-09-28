import { getPayload } from "payload";
import React from "react";
import { headers as nextHeaders } from "next/headers";
import { redirect } from "next/navigation";
import config from "@/payload.config";

const DesignSystemPage = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const headers = await nextHeaders();
  const auth = await payload.auth({ headers });

  // back if not logged in
  if (!auth.user) {
    redirect("/");
  }

  return (
    <div className="py-[100px]">
      <div className="px-4" id="id">
        <h2 className="">Section</h2>
        <ul className="">
          <li className="">
            <h3 className=""></h3>
            <div className=""></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesignSystemPage;
