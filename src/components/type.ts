export const TYPE = {
  display:
    "font-semibold text-[2.25rem] leading-[1.1] tracking-tight text-ink sm:text-[3rem]",
  h1: "font-medium text-lg leading-[1.2] text-ink sm:text-xl",
  h2: "font-medium text-base leading-[1.2] text-ink sm:text-lg",
  h3: "font-medium text-sm leading-[1.2] text-ink",
  lead: "max-w-[65ch] font-normal text-lg leading-[1.6] text-ink-secondary",
  body: "max-w-[65ch] font-normal text-base leading-[1.6] text-ink-secondary",
  small: "font-medium text-sm leading-[1.5] text-ink-muted",
  label:
    "font-medium text-xs uppercase tracking-[0.16em] text-ink-muted",
} as const;

export const ACCENT = {
  text: "text-emerald-300/80",
  mark: "font-medium text-sm leading-[1.2] text-emerald-300/80",
  metric:
    "font-semibold text-[2.25rem] leading-[1.1] tracking-tight text-emerald-300/85 sm:text-[3rem]",
} as const;

export const SPACE = {
  section: "mt-20 sm:mt-32",
  blocks: "space-y-10 sm:space-y-12",
  title: "mt-6 sm:mt-8",
  para: "mt-4",
  tight: "mt-2",
} as const;
