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
import scrollToTop from "@/frontend-src/libs/utils/ui/scrollToTop";

const navData = [
  {
    title: "SHOP",
    href: "/shop",
  },
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
        initial={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
        animate={isDown && !isOnTopBanner ? { y: -65 } : { y: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full fixed top-0 z-[5] md:text-sm md:h-[65px] shadow"
      >
        {/* DESKTOP NAV */}
        <div className="relative hidden md:flex items-center justify-between w-full h-full p-6 font-medium">
          {/* LEFT NAV */}
          <nav className="flex items-center list-none gap-x-6">
            {navData.map((n, idx) => {
              return (
                <li className="" key={`nav-desktop-${idx}`}>
                  <Link href={n.href}>{n.title}</Link>
                </li>
              );
            })}
          </nav>
          <Link
            href={`/`}
            className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            scroll={false}
            onClick={() => scrollToTop()}
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
        {/* MOBILE NAV */}
        <div className="h-full w-full md:hidden">
          <PageContainer className="block w-full h-full relative py-1">
            <nav className="flex items-center justify-between gap-6 list-none text-xs">
              {navData.map((n, idx) => {
                return (
                  <li className="" key={`nav-mobile-${idx}`}>
                    <Link className="block" href={n.href}>
                      {n.title}
                    </Link>
                  </li>
                );
              })}
            </nav>
            <div className="relative flex items-center justify-between w-full h-full">
              <Link
                href={`/`}
                className="relative"
                scroll={false}
                onClick={() => scrollToTop()}
              >
                <HuttLogo width="2.8em" height="2.8em" />
                {/* </div> */}
              </Link>
              <nav className="flex items-end list-none gap-x-6 text-lg h-full flex-none">
                <li className="flex items-center gap-0.5">
                  <Icon icon="material-symbols:search-rounded" className="" />
                  <p className="text-sm">TÌM KIẾM</p>
                </li>
                <li className="flex items-center gap-0.5">
                  <Icon icon="uil:cart" className="-translate-y-[1px]" />
                  <p className="text-sm hidden sm:block">GIỎ HÀNG</p>
                  <span className="text-sm">[2]</span>
                </li>
              </nav>
            </div>
          </PageContainer>
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
