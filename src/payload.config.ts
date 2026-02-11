import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// Collections
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Products } from "./collections/Products";
import { Orders } from "./collections/Orders";

// Globals
import { HeroSection } from "./globals/HeroSection";
import { Services } from "./globals/Services";
import { WhyChooseUs } from "./globals/WhyChooseUs";
import { Testimonials } from "./globals/Testimonials";
import { FAQs } from "./globals/FAQs";
import { CTASection } from "./globals/CTASection";
import { ContactInfo } from "./globals/ContactInfo";
import { Navigation } from "./globals/Navigation";
import { Footer } from "./globals/Footer";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " - CTC Admin",
    },
  },

  upload: {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50 MB
    },
  },

  collections: [Users, Media, Categories, Products, Orders],
  globals: [
    HeroSection,
    Services,
    WhyChooseUs,
    Testimonials,
    FAQs,
    CTASection,
    ContactInfo,
    Navigation,
    Footer,
    SiteSettings,
  ],
  editor: lexicalEditor(),
  secret:
    process.env.PAYLOAD_SECRET ||
    "CHANGE-THIS-SECRET-IN-PRODUCTION-MIN-32-CHARS",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./database.db",
    },
  }),
  sharp,
});
