import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidSessionToken, portfolioGate } from "./lib/portfolioGate";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(portfolioGate.cookieName)?.value;
  const authed = await isValidSessionToken(token);

  if (pathname === "/unlock") {
    if (authed) {
      const home = request.nextUrl.clone();
      home.pathname = "/";
      home.search = "";
      return NextResponse.redirect(home);
    }
    return NextResponse.next();
  }

  if (authed) {
    return NextResponse.next();
  }

  const unlock = request.nextUrl.clone();
  unlock.pathname = "/unlock";
  unlock.search = "";
  if (pathname !== "/") {
    unlock.searchParams.set("from", pathname);
  }
  return NextResponse.redirect(unlock);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
