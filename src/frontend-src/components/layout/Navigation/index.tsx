"use client";

import React, { useMemo, useState } from "react";
import PageContainer from "../PageContainer";
import Link from "next/link";
import Modal from "../../common/Modal";
import FadeIn from "../../animated/FadeIn";
import { Icon } from "@iconify/react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useVelocity,
} from "framer-motion";
import color, { colorRgba } from "@/frontend-src/libs/constants/color";
import HuttLogo from "@/assets/images/logo";

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
  const [currentScreenHeight, setCurrentScreenHeight] = useState<number>(0);
  const [currentVelocity, setCurrentVelocity] = useState<number>(1);

  const isLogoOnTop = false;
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const isOnTopBanner = useMemo(() => {
    if (typeof window !== "undefined") {
      const SCREEN_HEIGHT = window.innerHeight;
      return SCREEN_HEIGHT * 0.65 - currentScreenHeight >= 0;
    }
    return true;
  }, [currentScreenHeight]);

  const isDown = useMemo(() => {
    return currentVelocity > 0;
  }, [currentVelocity]);

  useMotionValueEvent(scrollY, "change", (val) => {
    if (!isLogoOnTop) {
      setCurrentScreenHeight(val);
    }
  });

  useMotionValueEvent(velocity, "change", (val) => {
    if (val !== 0) {
      setCurrentVelocity(val);
    }
  });

  return (
    <>
      <motion.header
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
        animate={
          isDown && !isOnTopBanner
            ? { y: -65 }
            : {
                y: 0,
                backgroundColor: isOnTopBanner
                  ? "rgba(255, 255, 255, 0)"
                  : "rgba(255, 255, 255, 1)",
              }
        }
        transition={{ duration: 0.2 }}
        className="w-full fixed top-0 z-[5] text-sm h-[65px]"
      >
        <motion.div
          // initial={{ backgroundColor: colorRgba("system-green-1", 0) }}
          whileHover={{
            // backgroundColor: colorRgba("system-green-1", 0.1),
            color: "#000000",
          }}
          className="w-full h-full"
        >
          <div className="relative flex items-center justify-between w-full h-full p-6 font-medium">
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
            <Link
              href={`/`}
              className="absolute -translate-x-1/2 -translate-y-2/3 top-1/2 left-1/2"
            >
              <div className="w-[55px] h-[50px]">
                <HuttLogo />
              </div>
            </Link>
            {/* RIGHT NAV */}
            <nav className="flex items-center list-none gap-x-6">
              <li className="flex items-center gap-1">
                <Icon icon="material-symbols:search-rounded" className="" />
                <p className="">TÌM KIẾM</p>
              </li>
              <li className="flex items-center gap-1">
                <Icon icon="uil:cart" className="-translate-y-[1px]" />
                <p className="">GIỎ HÀNG [1]</p>
              </li>
            </nav>
          </div>
        </motion.div>
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
