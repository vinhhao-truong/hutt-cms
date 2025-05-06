"use client";

import { Product } from "@/payload-types";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import * as XLSX from "xlsx";

const createProdPayload = async (prod: Product) => {
  try {
    const res = await fetch("/api/products", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};

const UploadProducts = () => {
  const [uploadedFile, setUploadedFile] = useState<any[]>();

  const onUpload: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          const binaryString = e.target?.result;
          const workbook = XLSX.read(binaryString, { type: "binary" });

          // Assuming the first sheet is the one you want
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];

          // Parse data from the sheet
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setUploadedFile(jsonData);
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!!uploadedFile) {
      const now = moment().toISOString();

      const uniqueProdsMap = new Map<string, Product>();

      for (const prod of uploadedFile) {
        const thisVariant: Product["variations"] = [
          {
            variationName: prod.variationName,
            id: prod.variationId,
            pricesVariation: {
              grossPriceVariation: prod.grossPriceVariation
                ? prod.grossPriceVariation
                : null,
              netPriceVariation: prod.netPriceVariation
                ? prod.netPriceVariation
                : null,
            },
            costsVariation: {
              productCostVariation: prod.productCostVariation
                ? prod.productCostVariation
                : null,
              packageCostVariation: prod.packageCostVariation
                ? prod.packageCostVariation
                : null,
            },
          },
        ];
        if (uniqueProdsMap.has(prod.productId)) {
          const thisProd = uniqueProdsMap.get(prod.productId);
          if (!!thisProd?.variations && thisProd.variations.length > 0) {
            uniqueProdsMap.set(prod.productId, {
              ...thisProd,
              variations: [...thisProd.variations, ...thisVariant],
            });
          }
        } else {
          const hasVariation = thisVariant[0]?.id;
          const prices: Product["prices"] = {
            grossPrice: hasVariation ? null : prod.grossPrice,
            netPrice: hasVariation ? null : prod.netPrice,
          };

          const costs: Product["costs"] = {
            packageCost: hasVariation ? null : prod.packageCost,
            productCost: hasVariation ? null : prod.productCost,
          };

          uniqueProdsMap.set(prod.productId, {
            id: prod.productId,
            createdAt: prod.createdAt,
            updatedAt: now,
            shortDescription: prod.shortDescription,
            productName: prod.productName,
            productCode: prod.productCode,
            prices,
            costs,
            enableVariations: !!hasVariation,
            variations: hasVariation ? [...thisVariant] : undefined,
          });
        }
      }

      const finalObject: Product[] = [...uniqueProdsMap.values()];

      console.log(finalObject);
      console.log(JSON.stringify(finalObject));
      try {
        await Promise.all(finalObject.map((p) => createProdPayload(p)));
        console.log("uploaded");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="file" accept=".xlsx, .xls" onChange={onUpload} />
      <button>upload</button>
    </form>
  );
};

export default UploadProducts;
