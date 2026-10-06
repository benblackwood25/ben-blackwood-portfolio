"use client";

import { useEffect, useId, useRef, useState } from "react";
import { SPACE, TYPE } from "./type";

type Props = {
  email: string;
  buttonClassName: string;
  label?: string;
};

export default function EmailChip({ email, buttonClassName, label }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const copyBtnRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key !== "Tab") return;
      const first = copyBtnRef.current;
      const last = closeBtnRef.current;
      if (!first || !last) return;

      // Simple focus trap between the two buttons.
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1400);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Fallback for environments without clipboard permissions.
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={buttonClassName}
        onClick={() => setOpen(true)}
      >
        {label ?? "Email"}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close modal"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative w-full max-w-md rounded-3xl border border-foreground/10 bg-background/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8"
          >
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] text-ink-secondary hover:border-emerald-300/40 hover:text-emerald-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 sm:right-5 sm:top-5"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div className="pr-10">
              <div>
                <h2
                  id={titleId}
                  className={TYPE.h1}
                >
                  Email
                </h2>
                <p className={`${SPACE.tight} ${TYPE.body}`}>
                  {email}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                ref={copyBtnRef}
                type="button"
                onClick={handleCopy}
                className="rounded-full border border-foreground/10 bg-foreground/[0.02] px-4 py-2 text-sm font-medium text-ink-secondary hover:border-emerald-300/40 hover:text-emerald-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

