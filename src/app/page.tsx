import Image from "next/image";
import Link from "next/link";
import EmailChip from "../components/EmailChip";
import SiteHeader, { SiteFooter } from "../components/SiteHeader";
import {
  BUTTON,
  CHIP,
  FOCUS_RING,
  PAGE_WIDTH_HOME,
  SURFACE,
  SURFACE_INNER,
} from "../components/siteChrome";
import { TYPE } from "../components/type";

const SECTION_GAP = "mt-12 md:mt-16";
const HEADING_GAP = "mt-4 md:mt-6";
const CARD_GAP = "gap-6";
const IMAGE_TO_TEXT = "mt-6";
const IMAGE_FRAME = "relative overflow-hidden rounded-2xl";
const HSBC_GLOW =
  "radial-gradient(ellipse at 50% 55%, rgba(219,0,17,0.14) 0%, rgba(219,0,17,0.05) 35%, transparent 70%)";

const WORK_SHOT_SIZES_FEATURED =
  "(min-width: 1120px) 1040px, 100vw";
const WORK_SHOT_SIZES_GRID =
  "(min-width: 1120px) 504px, (min-width: 768px) 50vw, 100vw";

function WorkShot({
  fit,
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  glow,
  pad,
}: {
  fit: "cover" | "contain";
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  glow?: boolean;
  pad?: boolean;
}) {
  return (
    <div
      className={`${IMAGE_FRAME} ${pad ? "p-[3%]" : ""}`}
      style={{ aspectRatio: "16 / 10" }}
    >
      {glow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: HSBC_GLOW }}
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={95}
        sizes={sizes}
        priority={priority}
        className={`h-full w-full ${fit === "cover" ? "object-cover" : "relative object-contain"}`}
      />
    </div>
  );
}

export default function Home() {
  const selectedWork = [
    {
      title: "HSBC",
      subtitle: "Simplifying complex internal data workflows for enterprise teams",
      role: "Product Designer",
      imageSrc: "/portfolio/hsbc_openlogs_mockup_spacegrey.png",
      imageAlt: "HSBC product screenshot on a laptop",
      href: "/work/hsbc",
      width: 3903,
      height: 2906,
      fit: "contain" as const,
      glow: true,
      pad: true,
      priority: true,
    },
    {
      title: "Loaded",
      subtitle: "Redesigning checkout to reduce friction and improve conversion",
      role: "Senior Product Designer",
      imageSrc: "/portfolio/work-loaded.png",
      imageAlt: "Loaded checkout with Account, Pay and Play and order summary",
      href: "/work/loaded",
      width: 2048,
      height: 1280,
      fit: "contain" as const,
      inProgress: true,
    },
  ];

  const moreWork = [
    {
      title: "Cookify",
      subtitle: "Mobile product design, UX research and usability testing",
      role: "UX/UI Designer (freelance)",
      imageSrc: "/portfolio/work-cookify.png",
      imageAlt: "Cookify mobile app screen on a phone",
      href: "/work/cookify",
      width: 1222,
      height: 625,
      fit: "cover" as const,
    },
    {
      title: "myOrb",
      subtitle: "Public cloud healthcare software",
      role: "UX/UI Designer",
      imageSrc: "/portfolio/work-myorb.png",
      imageAlt: "myOrb product screenshot on a laptop",
      href: "/work/myorb",
      width: 600,
      height: 400,
      fit: "cover" as const,
    },
  ];

  const skills = [
    "Product Strategy",
    "Complex Workflows",
    "UX Research",
    "Usability Testing",
    "Design Systems",
    "Design Leadership",
    "Stakeholder Management",
    "AI Assisted Design",
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="home" />

      <main id="top" className={`${PAGE_WIDTH_HOME} py-6 md:py-10`}>
        <section className={`grid ${CARD_GAP} md:grid-cols-2`}>
          <div className={`${SURFACE} flex flex-col p-6 sm:p-10`}>
            <h1 className={`${TYPE.display}`}>
              Ben Blackwood
            </h1>
            <p className={`mt-6 ${TYPE.lead}`}>
              Senior Product Designer
            </p>
            <p className="mt-2 max-w-[65ch] font-normal text-base leading-[1.6] text-emerald-300/80">
              Simplifying complex products, workflows and design systems.
            </p>

            <div className="mt-4">
              <p className={TYPE.small}>
                📍 British, living in Dubai, UAE
              </p>
            </div>
          </div>

          <div className={`${SURFACE} flex flex-col p-6 sm:p-10`}>
            <p className={`${TYPE.body}`}>
              Senior Product Designer with 5 years' experience across B2B
              SaaS, fintech, eCommerce and digital products. As a sole
              designer, I own end to end product design, head up all design
              decisions and set the design process and standards across the
              company. I simplify complex workflows, build scalable design
              systems and work with Product, Engineering and commercial teams
              to shape the product roadmap and business strategy.
            </p>

            <div className="mt-auto pt-10">
              <div id="contact" className="scroll-mt-28">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://canva.link/hj12yk51wxr1wg9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BUTTON} ${FOCUS_RING}`}
                  >
                    Resume
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ben-blackwood-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BUTTON} ${FOCUS_RING}`}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://medium.com/@benblackwood25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BUTTON} ${FOCUS_RING}`}
                  >
                    Medium
                  </a>
                  <EmailChip
                    email="benblackwood25@gmail.com"
                    buttonClassName={`${BUTTON} ${FOCUS_RING}`}
                    label="Email"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${SECTION_GAP} ${SURFACE} p-6 sm:p-10`}>
          <h2 className={`${TYPE.h1}`}>
            Skills
          </h2>
          <div className={`${HEADING_GAP} flex flex-wrap gap-2`}>
            {skills.map((skill) => (
              <span key={skill} className={CHIP}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className={`${SECTION_GAP} scroll-mt-28`}>
          <div id="client-work" />
          <h2 className={`${TYPE.h1}`}>
            Selected work
          </h2>

          <div className={`${HEADING_GAP} grid ${CARD_GAP}`}>
            {selectedWork.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className={`${SURFACE_INNER} block p-6 ${FOCUS_RING} sm:p-10`}
              >
                <WorkShot
                  fit={w.fit}
                  src={w.imageSrc}
                  alt={w.imageAlt}
                  width={w.width}
                  height={w.height}
                  sizes={WORK_SHOT_SIZES_FEATURED}
                  priority={w.priority}
                  glow={w.glow}
                  pad={w.pad}
                />
                <div className={IMAGE_TO_TEXT}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={`${TYPE.h2}`}>{w.title}</p>
                    {w.inProgress ? (
                      <span className={CHIP}>In progress</span>
                    ) : null}
                  </div>
                  <p className={`mt-2 ${TYPE.small}`}>{w.subtitle}</p>
                  <p className={`mt-2 ${TYPE.small}`}>{w.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="more-work" className={`${SECTION_GAP} scroll-mt-28`}>
          <h2 className={`${TYPE.h1}`}>
            More work
          </h2>

          <div className={`${HEADING_GAP} grid ${CARD_GAP} md:grid-cols-2`}>
            {moreWork.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className={`${SURFACE_INNER} p-5 ${FOCUS_RING} sm:p-6`}
              >
                <WorkShot
                  fit={w.fit}
                  src={w.imageSrc}
                  alt={w.imageAlt}
                  width={w.width}
                  height={w.height}
                  sizes={WORK_SHOT_SIZES_GRID}
                />
                <div className={IMAGE_TO_TEXT}>
                  <p className={`${TYPE.h2}`}>{w.title}</p>
                  <p className={`mt-2 ${TYPE.small}`}>{w.subtitle}</p>
                  <p className={`mt-2 ${TYPE.small}`}>{w.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter variant="home" className="mt-12 pb-10 md:mt-16" />
      </main>
    </div>
  );
}
