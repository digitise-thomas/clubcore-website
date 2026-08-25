import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Excludes /ai-i-erhvervsfremme: it's a standalone Danish-only route outside
  // the [locale] tree, and next-intl would otherwise rewrite it into a
  // non-existent /da/ai-i-erhvervsfremme path even under "as-needed".
  matcher: ["/((?!api|_next|_vercel|ai-i-erhvervsfremme|.*\\..*).*)"],
};
