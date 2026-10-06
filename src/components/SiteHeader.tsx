import Link from "next/link";
import {
  FOCUS_RING,
  PAGE_WIDTH_HOME,
  PAGE_WIDTH_INNER,
  SURFACE,
} from "./siteChrome";
import { TYPE } from "./type";

type Props = {
  variant?: "home" | "inner";
  className?: string;
};

const links = (variant: "home" | "inner") => ({
  home: variant === "home" ? "#top" : "/",
  work: variant === "home" ? "#work" : "/#work",
  contact: variant === "home" ? "#contact" : "/#contact",
});

export default function SiteHeader({ variant = "inner" }: Props) {
  const href = links(variant);
  const width = variant === "home" ? PAGE_WIDTH_HOME : PAGE_WIDTH_INNER;

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-xl">
      <div className={`${width} py-4`}>
        <div className={`${SURFACE} px-4 py-3`}>
          <div className="flex items-center justify-between gap-3">
            <Link
              href={href.home}
              className={`rounded-md ${TYPE.h3} hover:text-ink ${FOCUS_RING}`}
            >
              ben blackwood.
            </Link>
            <nav className={`flex items-center gap-1 ${TYPE.small} sm:gap-2`}>
              <Link
                href={href.home}
                className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
              >
                home
              </Link>
              <Link
                href={href.work}
                className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
              >
                work
              </Link>
              <Link
                href={href.contact}
                className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
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

export function SiteFooter({ variant = "inner", className }: Props) {
  const href = links(variant);

  return (
    <footer className={className ?? "mt-20 pb-10 sm:mt-32"}>
      <div className={`${SURFACE} px-4 py-3`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={href.home}
            className={`rounded-md ${TYPE.h3} hover:text-ink ${FOCUS_RING}`}
          >
            ben blackwood.
          </Link>
          <nav className={`flex items-center gap-1 ${TYPE.small} sm:gap-2`}>
            <Link
              href={href.home}
              className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
            >
              home
            </Link>
            <Link
              href={href.work}
              className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
            >
              work
            </Link>
            <Link
              href={href.contact}
              className={`rounded-md px-2 py-2 hover:text-ink ${FOCUS_RING}`}
            >
              contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
