import { BUTTON, FOCUS_RING, SURFACE } from "../../components/siteChrome";
import { SPACE, TYPE } from "../../components/type";
import { unlockPortfolio } from "./actions";

export const metadata = {
  title: "Ben Blackwood",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const params = await searchParams;
  const from = params.from && params.from.startsWith("/") ? params.from : "/";
  const hasError = params.error === "1";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-4 py-10 sm:px-6">
        <section className={`${SURFACE} mx-auto w-full max-w-md p-6 sm:p-10`}>
          <h1 className={TYPE.display}>
            Ben Blackwood’s Portfolio
          </h1>
          <p className={`${SPACE.title} ${TYPE.body}`}>
            Enter the password to view my portfolio.
          </p>
          <form action={unlockPortfolio} className="mt-8 space-y-4">
            <input type="hidden" name="from" value={from} />
            <label className="block">
              <span className={TYPE.small}>Password</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className={`${SPACE.tight} w-full rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-4 py-3 text-base leading-[1.6] text-ink ${FOCUS_RING}`}
              />
            </label>
            {hasError ? (
              <p className={TYPE.small} role="alert">
                Incorrect password. Please try again.
              </p>
            ) : null}
            <button type="submit" className={`${BUTTON} ${FOCUS_RING} w-full sm:w-full`}>
              Continue
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
