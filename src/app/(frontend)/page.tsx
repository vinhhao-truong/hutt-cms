import { getPayload } from "payload";
import React from "react";
import config from "@/payload.config";
import HomeHeroBanner from "@/frontend-src/components/pages/home/HeroBanner";
import { HomePage as HomePageTypes, Product } from "@/payload-types";
import FeaturedCategories from "@/frontend-src/components/pages/home/FeaturedCategories";
import Introduction from "@/frontend-src/components/pages/home/Introduction";
import AllCategories from "@/frontend-src/components/pages/home/AllCategories";
import ShopAllBanner from "@/frontend-src/components/pages/home/ShopAllBanner";

export interface HomePageDataTypes
  extends Omit<HomePageTypes, "featuredCategories"> {
  featuredCategories?: {
    // categories?: (number | Category)[] | null;
    categories?: {
      [key: string]: { slug?: string; products?: Product[] };
    };
  };
  allCategories?: {
    // categories?: (number | Category)[] | null;
    categories?: {
      [key: string]: Product[];
    };
  };
}

const HomePage = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const homePageData = await payload.findGlobal({
    slug: "homePage",
  });

  return (
    <div className="flex flex-col gap-10">
      <HomeHeroBanner data={homePageData.shopAllBanner} />
      <Introduction data={homePageData["introduction"]} />
      <FeaturedCategories
        data={(homePageData as HomePageDataTypes).featuredCategories}
      />
      <ShopAllBanner data={homePageData.shopAllBanner} />
      <AllCategories data={(homePageData as HomePageDataTypes).allCategories} />
    </div>
  );
};

export default HomePage;
