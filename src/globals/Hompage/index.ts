import { GlobalConfig } from "payload";
import Introduction from "./Introduction";
import FeaturedCategories from "./FeaturedCategories";
import ShopAllBanner from "./ShopAllBanner";
import addAllCategories from "./hooks/addAllCategories";

const HomePage: GlobalConfig = {
  slug: "homePage",
  admin: {
    group: {
      en: "Storefront Management",
      vi: "Quản Lý Website Shop",
    },
  },
  label: {
    en: "Homepage",
    vi: "Trang Chủ",
  },
  fields: [Introduction, FeaturedCategories, ShopAllBanner],
  hooks: {
    afterRead: [addAllCategories],
  },
  access: {
    read: () => {
      return true;
    },
  },
};

export default HomePage;
