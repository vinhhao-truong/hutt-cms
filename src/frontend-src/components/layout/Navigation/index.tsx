"use client";

import React, { useMemo, useState } from "react";
import PageContainer from "../PageContainer";
import Link from "next/link";
import Modal from "../../common/Modal";
import FadeIn from "../../animated/FadeIn";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import color from "@/frontend-src/libs/constants/color";

const navData = [
  {
    title: "MEDIA",
    href: "/media",
  },
  {
    title: "VỀ CHÚNG TÔI",
    href: "/about-us",
  },
  {
    title: "LIÊN HỆ",
    href: "/contact",
  },
];

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <motion.header
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          color: color["system-blue-8"],
        }}
        className="w-full fixed top-0 z-[5]"
      >
        <div className="relative flex items-center justify-between p-6 font-medium">
          {/* LEFT NAV */}
          <nav className="flex items-center list-none gap-x-6">
            <li className="" onClick={() => setIsNavOpen(true)}>
              SHOP
            </li>
            {navData.map((n, idx) => {
              return (
                <li className="" key={`nav-${idx}`}>
                  <Link href={n.href}>{n.title}</Link>
                </li>
              );
            })}
          </nav>
          {/* LOGO */}
          <Link
            href={`/`}
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            LOGO
          </Link>
          {/* RIGHT NAV */}
          <nav className="flex items-center list-none gap-x-6">
            <li className="flex items-center gap-1">
              <Icon
                icon="material-symbols:search-rounded"
                className="text-lg -translate-y-[2px]"
              />
              <p className="">TÌM KIẾM</p>
            </li>
            <li className="flex items-center gap-1">
              <Icon icon="uil:cart" className="text-lg -translate-y-[2px]" />
              <p className="">GIỎ HÀNG [1]</p>
            </li>
          </nav>
        </div>
      </motion.header>
      <Modal isOpen={isNavOpen} setIsOpen={setIsNavOpen}>
        <div className="w-full h-full bg-white">
          <FadeIn>test</FadeIn>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;
