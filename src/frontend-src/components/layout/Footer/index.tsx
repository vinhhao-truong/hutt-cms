import React from "react";
import moment from "moment";
import HuttLogo from "@/assets/images/logo";
import { getPayload } from "payload";
import config from "@/payload.config";
import Link from "next/link";
import scrollToTop from "@/frontend-src/libs/utils/ui/scrollToTop";

interface RenderedUrl {
  label: string | null | undefined;
  href: string | null | undefined;
  target: "_self" | "_blank";
}

const Footer = async () => {
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

  const renderedCategories: RenderedUrl[] =
    categories.docs.map((c, idx) => ({
      label: c.categoryName,
      href: `/category/${c.slug}`,
      target: "_self",
    })) ?? [];
  const renderedInfo: RenderedUrl[] =
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
    <footer className="grid grid-cols-10 border-t border-gray-400">
      {/* LEFT */}
      <div className="flex flex-col items-center justify-between col-span-4 py-6 border-r border-r-gray-400">
        <Link
          href={"/"}
          className="w-[100px] h-[50px]"
          onClick={scrollToTop}
          scroll={false}
        >
          <HuttLogo />
        </Link>
        <ul className="flex flex-col items-center gap-4 text-sm font-medium">
          {footerData?.mediaUrls?.map((l, idx) => {
            return (
              <li
                className="text-center transition duration-75 underline-offset-2 hover:underline"
                key={`left-media-url-${idx}`}
              >
                <Link
                  href={l.mediaUrl ?? ""}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  {l.mediaLabel}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="block text-sm text-center text-gray-700">
          @ Hútt Glassware {moment().format("YYYY")}
        </p>
      </div>
      {/* RIGHT */}
      <div className="col-span-6 px-6 my-6">
        <div className="flex mb-24 gap-36">
          {rightSide.map((r, idx) => (
            <div className="" key={`right-side-${idx}`}>
              <h4 className="mb-2 font-bold">{r.title}</h4>
              <ul className="text-sm">
                {r?.links?.map((l, lIdx) => {
                  return (
                    <li className="" key={`right-link-${idx}-${lIdx}`}>
                      <Link href={l.href ?? ""} target={l.target}>
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium whitespace-pre-line">
          {footerData.generalDescription}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
