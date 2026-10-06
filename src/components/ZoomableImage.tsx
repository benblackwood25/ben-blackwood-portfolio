"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { FOCUS_RING } from "./siteChrome";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  quality?: number;
  className?: string;
  priority?: boolean;
};

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
  quality = 95,
  className,
  priority,
}: Props) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef({ distance: 0, scale: 1 });
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const trigger = triggerRef.current;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }

      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusable = root.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) setScale(1);
  }, [open]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const pts = [...pointers.current.values()];
      pinchStart.current = {
        distance: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y),
        scale,
      };
    }
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size !== 2) return;
    const pts = [...pointers.current.values()];
    const distance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    if (pinchStart.current.distance === 0) return;
    const next = Math.min(
      4,
      Math.max(1, (distance / pinchStart.current.distance) * pinchStart.current.scale),
    );
    setScale(next);
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(e.pointerId);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`block h-full w-full cursor-zoom-in ${FOCUS_RING} rounded-none`}
        aria-label={`Enlarge ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          quality={quality}
          priority={priority}
        />
      </button>

      {open
        ? createPortal(
            <div
              ref={dialogRef}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-0 sm:p-8"
            >
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-full max-w-full items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <h2 id={titleId} className="sr-only">
              {alt}
            </h2>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={100}
              sizes="100vw"
              unoptimized
              draggable={false}
              className="h-auto max-h-[100dvh] w-auto max-w-full object-contain sm:max-h-[min(100dvh,90vh)]"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                touchAction: "none",
              }}
            />
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            className={`absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 bg-black/60 text-foreground/90 hover:bg-black/80 ${FOCUS_RING}`}
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
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
