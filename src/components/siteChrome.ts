export const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
export const SURFACE_INNER =
  "rounded-2xl border border-foreground/10 bg-foreground/[0.025]";
export const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
export const CHIP =
  "rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-sm font-medium text-ink-secondary";
export const CHIP_LINK = `${CHIP} hover:border-emerald-300/40 hover:text-emerald-300/80 ${FOCUS_RING}`;
export const BUTTON =
  "inline-flex w-full items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] px-4 py-2 text-sm font-medium text-ink-secondary hover:border-emerald-300/40 hover:text-emerald-300/80 sm:w-auto";
export const PAGE_WIDTH_HOME =
  "mx-auto w-full max-w-[1120px] px-6 md:px-8";
export const PAGE_WIDTH_INNER =
  "mx-auto w-full max-w-5xl px-4 sm:px-6";
