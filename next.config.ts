import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/app/i18n/request.ts");

const nextConfig: NextConfig = {
  trailingSlash: true,
  // output: "export", // Keystatic needs server routes
};

export default withNextIntl(nextConfig);
