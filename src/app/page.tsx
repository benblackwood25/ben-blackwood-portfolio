import Image from "next/image";
import Link from "next/link";
import EmailChip from "../components/EmailChip";

const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
const SURFACE_INNER =
  "rounded-2xl border border-foreground/10 bg-foreground/[0.025]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
const BUTTON =
  "inline-flex w-full items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.02] px-4 py-2 text-sm font-medium text-foreground/80 hover:border-emerald-300/40 hover:text-emerald-300/80 sm:w-auto";

export default function Home() {
  const works: Array<{
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href?: string;
  }> = [
    {
      title: "hsbc",
      subtitle: "data ingestion digital product",
      description: "",
      imageSrc: "/portfolio/work-hsbc.png",
      imageAlt: "HSBC product screenshot on a laptop",
      href: "/client-work/hsbc",
    },
    {
      title: "cookify",
      subtitle: "food recipe mobile application",
      description: "",
      imageSrc: "/portfolio/work-cookify.png",
      imageAlt: "Cookify mobile app screen on a phone",
      href: "/client-work/cookify",
    },
    {
      title: "kari esports",
      subtitle: "esports gaming website creation",
      description: "",
      imageSrc: "/portfolio/work-kari-esports.png",
      imageAlt: "kari esports website on a laptop",
      href: "/client-work/kari-esports",
    },
    {
      title: "myorb",
      subtitle: "public cloud healthcare software",
      description: "",
      imageSrc: "/portfolio/work-myorb.png",
      imageAlt: "myorb product screenshot on a laptop",
      href: "/client-work/myorb",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className={`${SURFACE} px-4 py-3`}>
            <div className="flex items-center justify-between gap-3">
              <a
                href="#top"
                className={`rounded-md text-sm font-medium tracking-tight text-foreground/90 hover:text-foreground ${FOCUS_RING}`}
              >
                ben blackwood.
              </a>
              <nav className="flex items-center gap-1 text-sm text-foreground/70 sm:gap-2">
                <a
                  href="#top"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  home
                </a>
                <a
                  href="#client-work"
                  className={`rounded-md px-2 py-2 text-foreground hover:text-foreground ${FOCUS_RING}`}
                >
                  client works
                </a>
                <a
                  href="#contact"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <section className="grid gap-4 md:grid-cols-2">
          <div className={`${SURFACE} flex flex-col p-6 sm:p-10`}>
            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Ben Blackwood
            </h1>
            <p className="mt-4 text-2xl font-medium leading-8 text-foreground/85">
              Senior Product Designer
            </p>
            <p className="mt-2 text-base font-medium leading-6 text-emerald-300/80 sm:text-lg">
              Delivering memorable experiences.
            </p>

            <div className="mt-auto pt-10">
              <p className="text-sm text-foreground/85 sm:text-base">
                📍 British, living in Dubai, UAE
              </p>
            </div>
          </div>

          <div className={`${SURFACE} flex flex-col p-6 sm:p-10`}>
            <div className="space-y-6">
              <div className="max-w-[60ch] space-y-3 text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
                <p>
                  As a product designer, I uncover core problems and translate
                  them into clear, creative solutions.
                </p>
                <p>
                  I reduce friction, simplify complex systems, and craft digital
                  experiences that feel intuitive, even when the technology isn’t.
                </p>
                <p>
                  Successful design starts with clear communication, genuine
                  curiosity, and a deep understanding of users and real-world
                  context.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <div id="contact" className="scroll-mt-28">
                <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://www.canva.com/design/DAFPCnSXsec/qyi14gfiWo19swa8M68PsQ/edit"
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

        <section className="mt-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="shrink-0">
                <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                  <Image
                    src="/portfolio/testimonial.png"
                    alt="Testimonial portrait"
                    width={128}
                    height={128}
                    className="h-24 w-24 object-cover sm:h-28 sm:w-28"
                    priority
                  />
                </div>
              </div>

              <div className="min-w-0">
                <blockquote className="text-base leading-7 text-foreground/85 sm:text-lg sm:leading-8">
                  “Ben is extremely communicative and creative, meaning he has
                  gone above and beyond to ensure that the kariESPORTS’ mission
                  delivered on all the expectations I had set for the team,
                  bringing the website’s vision to life.”
                </blockquote>
                <p className="mt-5 text-sm font-medium text-foreground/75">
                  Kariann Tan
                  <br />
                  <span className="text-foreground/65">CEO @kariESPORTS</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="client-work" className="mt-4 scroll-mt-28">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-base font-medium tracking-wide text-foreground">
                Client works
              </h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {works.map((w) => {
                const Card = (
                  <>
                    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                      <Image
                        src={w.imageSrc}
                        alt={w.imageAlt}
                        width={1200}
                        height={800}
                        className="card-hover__img aspect-[16/10] w-full object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>

                    <div className="mt-5">
                      <p className="text-lg font-medium tracking-tight">
                        {w.title}
                      </p>
                      <p className="mt-1 text-sm text-foreground/70">
                        {w.subtitle}
                      </p>
                      {w.description ? (
                        <p className="mt-4 text-sm leading-6 text-foreground/70">
                          {w.description}
                        </p>
                      ) : null}
                    </div>
                  </>
                );

                const className = `${SURFACE_INNER} card-hover p-5 hover:border-foreground/20 hover:bg-foreground/[0.035] ${FOCUS_RING} sm:p-6`;

                return w.href ? (
                  <Link key={w.title} href={w.href} className={className}>
                    {Card}
                  </Link>
                ) : (
                  <div
                    key={w.title}
                    className={`${SURFACE_INNER} card-hover p-5 sm:p-6`}
                  >
                    {Card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="mt-6 pb-10">
          <div className={`${SURFACE} px-4 py-3`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#top"
                className={`rounded-md text-sm font-medium tracking-tight text-foreground/90 hover:text-foreground ${FOCUS_RING}`}
              >
                ben blackwood.
              </a>
              <nav className="flex items-center gap-1 text-sm text-foreground/70 sm:gap-2">
                <a
                  href="#top"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  home
                </a>
                <a
                  href="#client-work"
                  className={`rounded-md px-2 py-2 text-foreground hover:text-foreground ${FOCUS_RING}`}
                >
                  client works
                </a>
                <a
                  href="#contact"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  contact
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
