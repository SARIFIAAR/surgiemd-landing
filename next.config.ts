import type { NextConfig } from "next";

// GITHUB_PAGES=true is set by the deploy workflow; the site is served from
// https://<user>.github.io/surgiemd-landing/ so it needs a basePath there.
const onPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: onPages ? "/surgiemd-landing" : undefined,
  images: { unoptimized: true },
  // next/image skips basePath when unoptimized — expose it for manual prefixing
  env: { NEXT_PUBLIC_BASE_PATH: onPages ? "/surgiemd-landing" : "" },
};

export default nextConfig;
