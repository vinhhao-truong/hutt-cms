// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { vi } from "@payloadcms/translations/languages/vi";
import { en } from "@payloadcms/translations/languages/en";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from "@payloadcms/storage-s3";
import Categories from "./collections/Categories";
import { Users } from "./collections/Users";
import Images from "./media-collections/Images";
import Products from "./collections/Products";
import Brands from "./collections/Brands";
import Subcategories from "./collections/Subcategories";
import HomePage from "./globals/Hompage";
import Footer from "./globals/Footer";
import Videos from "./media-collections/Videos";
import Spreadsheets from "./media-collections/Spreadsheets";
import UpdateProductList from "./globals/UpdateProductList";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  i18n: { supportedLanguages: { vi, en } },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // collections: [Users, Media, Brands, Categories, Subcategories],
  globals: [Footer, HomePage, UpdateProductList],
  collections: [
    Users,
    Images,
    Videos,
    Spreadsheets,
    Products,
    Brands,
    Categories,
    Subcategories,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || "5432"),
      user: process.env.POSTGRES_USER || "",
      password: process.env.POSTGRES_PASSWORD || "",
      database: process.env.POSTGRES_DATABASE || "postgres",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        images: true,
        videos: true,
        spreadsheets: true,
      },
      bucket: process.env.S3_BUCKET || "bucket",
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "supersecret",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "supersecret",
        },
        region: process.env.S3_REGION,
        // ... Other S3 configuration
        endpoint: process.env.S3_ENDPOINT || "supersecret",
        forcePathStyle: true,
      },
    }),
  ],
});
