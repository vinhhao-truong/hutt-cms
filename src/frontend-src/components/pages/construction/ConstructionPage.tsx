"use client";

import HuttLogo from "@/assets/images/logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const ConstructionPage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-6">
      <div className="w-[150px]">
        <HuttLogo />
      </div>
      <div className="w-4/5">
        <h2 className="text-center text-xl lg:text-3xl font-medium">
          Hiện tại web chúng mình còn đang trong quá trình{" "}
          <span className="text-yellow-600">xây dựng</span>, mong bạn quay lại
          lần sau nhé!
        </h2>
      </div>
      <div className="p-4 min-[430px]:p-7 border-2 border-system-blue-4 rounded-md shadow-md">
        <p className="text-center text-lg min-[430px]:text-xl mb-2">
          Nhận Báo Giá <span className="underline font-medium">Phải Chăng</span>{" "}
          Hơn
        </p>
        <div className="flex flex-col gap-4 text-lg min-[430px]:text-xl lg:text-3xl font-medium">
          <Link
            href={`https://zalo.me/0796368029`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center text-system-green-6 hover:brightness-110"
          >
            <div className="flex items-center gap-1">
              <Icon
                icon={`simple-icons:zalo`}
                className="text-3xl lg:text-6xl"
              />
              <span>/</span>
              <Icon icon={`solar:phone-bold`} className="text-xl lg:text-2xl" />
            </div>
            <p>: 0796 368 029 (Tiến Trần)</p>
            <sup>
              <Icon icon={`ri:share-box-fill`} className="text-base" />
            </sup>
          </Link>
          <Link
            href={`https://www.facebook.com/hutt.glassware`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center text-[#106aff] hover:brightness-90"
          >
            <Icon
              icon={`ic:baseline-facebook`}
              className="text-3xl lg:text-4xl"
            />
            <p>: facebook.com/hutt.glassware</p>
            <sup>
              <Icon icon={`ri:share-box-fill`} className="text-base" />
            </sup>
          </Link>
        </div>
      </div>
      <p>hoặc</p>
      <div className="">
        <p className="text-center text-xl mb-4">Qua Các Sàn TMĐT</p>
        <div className="grid grid-cols-3 gap-8 font-medium">
          <Link
            rel="noreferrer"
            target="_blank"
            href={`https://shopee.vn/hutt.glassware`}
            className="flex flex-col gap-2 items-center text-[#f8492f]"
          >
            <Icon
              icon={`simple-icons:shopee`}
              className="text-5xl lg:text-7xl"
            />
            <p className="">SHOPEE</p>
          </Link>
          <Link
            rel="noreferrer"
            target="_blank"
            href={`https://www.lazada.vn/shop/hutt-glassware`}
            className="flex flex-col gap-2 items-center text-[#0f146d]"
          >
            <Icon icon={`arcticons:lazada`} className="text-5xl lg:text-7xl" />
            <p className="">LAZADA</p>
          </Link>
          <Link
            rel="noreferrer"
            target="_blank"
            href={`https://shopee.vn/hutt.glassware`}
            className="flex flex-col gap-2 items-center"
          >
            <Icon
              icon={`ic:baseline-tiktok`}
              className="text-5xl lg:text-7xl"
            />
            <p className="">TIKTOK SHOP</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;
