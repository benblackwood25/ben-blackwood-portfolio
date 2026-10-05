import Link from "next/link";
import { FOCUS_RING, SURFACE } from "./siteChrome";

type Props = {
  variant?: "home" | "inner";
};

const links = (variant: "home" | "inner") => ({
  home: variant === "home" ? "#top" : "/",
  work: variant === "home" ? "#work" : "/#work",
  contact: variant === "home" ? "#contact" : "/#contact",
});

export default function SiteHeader({ variant = "inner" }: Props) {
  const href = links(variant);

  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className={`${SURFACE} px-4 py-3`}>
          <div className="flex items-center justify-between gap-3">
            <Link
              href={href.home}
              className={`rounded-md text-sm font-medium tracking-tight text-foreground/90 hover:text-foreground ${FOCUS_RING}`}
            >
              ben blackwood.
            </Link>
            <nav className="flex items-center gap-1 text-sm text-foreground/70 sm:gap-2">
              <Link
                href={href.home}
                className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
              >
                home
              </Link>
              <Link
                href={href.work}
                className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
              >
                work
              </Link>
              <Link
                href={href.contact}
                className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
              >
                contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ variant = "inner" }: Props) {
  const href = links(variant);

  return (
    <footer className="mt-6 pb-10">
      <div className={`${SURFACE} px-4 py-3`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={href.home}
            className={`rounded-md text-sm font-medium tracking-tight text-foreground/90 hover:text-foreground ${FOCUS_RING}`}
          >
            ben blackwood.
          </Link>
          <nav className="flex items-center gap-1 text-sm text-foreground/70 sm:gap-2">
            <Link
              href={href.home}
              className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
            >
              home
            </Link>
            <Link
              href={href.work}
              className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
            >
              work
            </Link>
            <Link
              href={href.contact}
              className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
