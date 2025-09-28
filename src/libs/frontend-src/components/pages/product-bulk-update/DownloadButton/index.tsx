"use client";

import { useState } from "react";
import moment from "moment";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";

const DownloadButton = () => {
  const [isGetting, setIsGetting] = useState<boolean>(false);

  return (
    <button
      onClick={async (e) => {
        e.preventDefault();
        setIsGetting(true);
        try {
          const response = await axios.get("/api/products/export-xlsx", {
            responseType: "blob", // Important: Treat response as a file
          });

          const url = window.URL.createObjectURL(new Blob([response.data]));
          const a = document.createElement("a");
          a.href = url;
          a.download = `products_hutt_${moment().format(`DDMMYY_HHmmss`)}.xlsx`; // Ensure filename matches backend response
          document.body.appendChild(a);
          a.click();
          a.remove();

          window.URL.revokeObjectURL(url); // Clean up
        } catch (error) {
          console.error("Download failed", error);
        } finally {
          setIsGetting(false);
        }
      }}
      className="bg-system-blue-6 text-white h-[50px] w-[180px] mx-auto rounded-sm flex justify-center items-center"
    >
      {isGetting ? <Icon icon={`codex:loader`} /> : "Get Product List"}
    </button>
  );
};

export default DownloadButton;
