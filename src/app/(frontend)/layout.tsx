import React from "react";
import Navigation from "@/frontend-src/components/layout/Navigation";
import Footer from "@/frontend-src/components/layout/Footer";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConstructionPage from "@/frontend-src/components/pages/construction/ConstructionPage";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  const isProduction = process.env.NODE_ENV === "production";

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
