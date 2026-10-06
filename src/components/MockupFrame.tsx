import ZoomableImage from "./ZoomableImage";
import { SURFACE } from "./siteChrome";
import { SPACE, TYPE } from "./type";

const HSBC_GLOW =
  "radial-gradient(ellipse at 50% 55%, rgba(219,0,17,0.14) 0%, rgba(219,0,17,0.05) 35%, transparent 70%)";

export default function MockupFrame({
  src,
  alt,
  width,
  height,
  sizes = "(min-width: 1280px) 1200px, 100vw",
  priority,
  glow = "hsbc",
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  glow?: "hsbc";
  caption?: string;
}) {
  return (
    <div className={`${SURFACE} overflow-hidden`}>
      <div
        className="relative"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {glow === "hsbc" ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: HSBC_GLOW }}
          />
        ) : null}
        <ZoomableImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={95}
          sizes={sizes}
          priority={priority}
          className="relative h-auto w-full object-contain"
        />
      </div>
      {caption ? (
        <p className={`px-6 pb-6 sm:px-10 sm:pb-10 ${SPACE.tight} ${TYPE.small}`}>
          {caption}
        </p>
      ) : null}
    </div>
  );
}
