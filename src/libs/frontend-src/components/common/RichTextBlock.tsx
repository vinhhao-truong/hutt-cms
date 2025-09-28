"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import React from "react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import Image from "next/image";
import Link from "next/link";

const RichTextBlock: React.FC<{ data: SerializedEditorState }> = ({ data }) => {
  return (
    <>
      <RichText
        converters={{
          // paragraph: (data) => <p className="">{children}</p>,
          // list: ({ children, format }) => {
          //   if (format === "unordered") {
          //     return <ul className="pl-6 list-disc">{children}</ul>;
          //   }

          //   return <ul className="pl-6 list-decimal">{children}</ul>;
          // },
          // heading: ({ node, converters, }) => {
          //   const level = node.tag
          //   const children = converters?.heading()

          //   switch (level) {
          //     case "h1":
          //       return <h1 className="text-5xl">{children}</h1>;
          //     case "h2":
          //       return <h2 className="text-4xl">{children}</h2>;
          //     case "h3":
          //       return <h3 className="text-3xl">{children}</h3>;
          //     case "h4":
          //       return <h4 className="text-2xl">{children}</h4>;
          //     case "h5":
          //       return <h5 className="text-xl">{children}</h5>;
          //     case "h6":
          //       return <h6 className="text-lg">{children}</h6>;
          //     default:
          //       return <p className="">{children}</p>;
          //   }
          // },
          // link: ({node}) => {
          //   const url = node.fields.url
          //   const children = node.fields.

          //   if (url?.includes("https://thispage/")) {
          //     const href = url?.slice(16);
          //     return (
          //       <Link
          //         className="font-medium text-system-brand-blue hover:brightness-[130%]"
          //         href={href}
          //       >
          //         {children}
          //       </Link>
          //     );
          //   }

          //   return (
          //     <a
          //       rel="noreferrer"
          //       target="_blank"
          //       className="font-medium text-system-brand-blue hover:brightness-[130%]"
          //       href={url}
          //     >
          //       {children}
          //     </a>
          //   );
          // },
          image: ({ node }) => {
            if (node.relationTo === "uploads") {
              const uploadDoc = node.value;
              if (typeof uploadDoc !== "object") {
                return null;
              }
              const { alt, height, url, width } = uploadDoc;
              return (
                <Image alt={alt} height={height} src={url} width={width} />
              );
            }

            return null;
          },
        }}
        data={data}
      />
    </>
  );
};

export default RichTextBlock;
