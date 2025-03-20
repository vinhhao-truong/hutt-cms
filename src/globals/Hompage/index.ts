import { GlobalConfig } from "payload";
import Introduction from "./Introduction";
import EditorFeaturedCategories from "./FeaturedCategories";
import ShopAllBanner from "./ShopAllBanner";
import addAllCategories from "./hooks/addAllCategories";
import addFeaturedCategories from "./hooks/addFeaturedCategories";

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
  fields: [Introduction, EditorFeaturedCategories, ShopAllBanner],
  hooks: {
    afterRead: [addAllCategories, addFeaturedCategories],
  },
  access: {
    read: () => {
      return true;
    },
  },
};

export default HomePage;
