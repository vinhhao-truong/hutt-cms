"use client";

import React from "react";
import Link from "next/link";
import HuttLogo from "@/assets/images/logo";
import scrollToTop from "@/libs/utils/ui/scrollToTop";
import { Footer } from "@/payload-types";
import { FooterRenderedUrl } from ".";
import { usePathname } from "next/navigation";

const FooterClient: React.FC<{
  footerData: Footer;
  signature: string;
  rightSide: {
    title: string;
    links: FooterRenderedUrl[];
  }[];
  hideLayoutPathnames?: string[];
}> = ({ footerData, signature, rightSide, hideLayoutPathnames = [] }) => {
  const pathname = usePathname();
  const isHidden = hideLayoutPathnames.includes(pathname);

  return isHidden ? (
    <></>
  ) : (
    <footer className="lg:grid lg:grid-cols-10 border-y border-gray-400">
      {/* LEFT */}
      <div className="flex flex-col items-center justify-between col-span-4 py-6 lg:border-r border-r-gray-400">
        <Link
          href={"/"}
          className="w-[100px] h-[50px]"
          onClick={scrollToTop}
          scroll={false}
        >
          <HuttLogo />
        </Link>
        <ul className="flex flex-col items-center gap-2 lg:gap-4 text-sm font-medium my-4 lg:my-0">
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
        <p className="hidden lg:block text-sm text-center text-gray-700">
          {signature}
        </p>
      </div>
      {/* RIGHT */}
      <div className="col-span-6 px-6 lg:my-6">
        <div className="grid grid-cols-2 lg:flex lg:mb-24 lg:gap-36">
          {rightSide.map((r, idx) => (
            <div className="block mx-auto lg:mx-0" key={`right-side-${idx}`}>
              <h4 className="text-center lg:text-left lg:mb-2 font-bold">
                {r.title}
              </h4>
              <ul className="flex flex-col items-center lg:block text-sm">
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
        <p className="text-sm font-medium whitespace-pre-line my-6 lg:my-0">
          {footerData.generalDescription}
        </p>
        <p className="block lg:hidden text-sm text-center text-gray-700 my-2">
          {signature}
        </p>
      </div>
    </footer>
  );
};

export default FooterClient;
