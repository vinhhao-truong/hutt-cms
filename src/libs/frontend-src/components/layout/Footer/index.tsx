import React from "react";
import moment from "moment";
import HuttLogo from "@/assets/images/logo";
import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import scrollToTop from "@/libs/utils/ui/scrollToTop";
import FooterClient from "./FooterClient";

export interface FooterRenderedUrl {
  label: string | null | undefined;
  href: string | null | undefined;
  target: "_self" | "_blank";
}

const Footer = async ({ hideLayoutPages }: { hideLayoutPages?: string[] }) => {
  const signature = `@ Hútt Glassware ${moment().format("YYYY")}`;
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const [footerData, categories] = await Promise.all([
    payload.findGlobal({ slug: "footer" }),
    payload.find({
      collection: "categories",
      select: {
        categoryName: true,
        slug: true,
      },
    }),
  ]);

  const renderedCategories: FooterRenderedUrl[] =
    categories.docs.map((c, idx) => ({
      label: c.categoryName,
      href: `/category/${c.slug}`,
      target: "_self",
    })) ?? [];
  const renderedInfo: FooterRenderedUrl[] =
    footerData?.infoInternalUrls?.map((info, idx) => ({
      label: info.infoLabel,
      href: info.infoUrl,
      target: "_self",
    })) ?? [];

  const rightSide = [
    {
      title: "Shop",
      links: renderedCategories,
    },
    {
      title: "Thông Tin",
      links: renderedInfo,
    },
  ];

  return (
    <FooterClient
      rightSide={rightSide}
      signature={signature}
      footerData={footerData}
      hideLayoutPathnames={hideLayoutPages}
    />
  );
};

export default Footer;
