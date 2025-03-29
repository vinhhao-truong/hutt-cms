"use client";

import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
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
      style={{
        width: "200px",
        height: "30px",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isGetting ? <Icon icon={`codex:loader`} /> : "Get Product List"}
    </button>
  );
};

export default DownloadButton;
