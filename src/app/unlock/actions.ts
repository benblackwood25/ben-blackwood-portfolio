"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSessionToken,
  passwordsMatch,
  portfolioGate,
  safeReturnPath,
} from "../../lib/portfolioGate";

export async function unlockPortfolio(formData: FormData) {
  const from = safeReturnPath(formData.get("from"));
  const password = String(formData.get("password") ?? "");

  if (!(await passwordsMatch(password))) {
    const params = new URLSearchParams({ error: "1" });
    if (from !== "/") params.set("from", from);
    redirect(`/unlock?${params.toString()}`);
  }

  const jar = await cookies();
  jar.set(portfolioGate.cookieName, await createSessionToken(), {
    ...portfolioGate.cookieOptions,
  });
  redirect(from);
}
