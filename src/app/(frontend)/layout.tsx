import React from "react";
import Navigation from "@/frontend-src/components/layout/Navigation";
import Footer from "@/frontend-src/components/layout/Footer";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConstructionPage from "@/frontend-src/components/pages/construction/ConstructionPage";

export const metadata = {
  description:
    "Chào mừng bạn đến với HúTT - điểm đến lý tưởng cho bạn tìm kiếm những sản phẩm thuỷ tinh đẹp và chất lượng cao nhưng với giá chưa bao giờ rẻ hơn. Các sản phẩm mà chúng tôi cung cấp đến từ những hãng sản xuất cực kỳ uy tín về thiết kế tinh tế lẫn độ hoàn thiện số một. Bạn có thể dường như tìm thấy mọi thứ phục vụ cho đời sống từ gian bếp, phòng ăn, hàng quán đủ thể loại như ly, cốc, bình nước, lọ hoa, dụng cụ y tế v.v. HúTT - Nâng Tầm Thuỷ Tinh.",
  title: "Hútt Glassware",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  const isProduction = process.env.NODE_ENV === "production";
  // const isProduction = true;

  // Temporary to hide the shop
  if (isProduction) {
    return (
      <html lang="en">
        <body>
          <ConstructionPage />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
