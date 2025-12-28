// This file exists for Cloudflare Pages compatibility
// @cloudflare/next-on-pages looks for middleware.ts but Next.js 16 uses proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const runtime = "edge";

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
