import Image from "next/image";
import Link from "next/link";
import EmailChip from "../components/EmailChip";
import SiteHeader, { SiteFooter } from "../components/SiteHeader";
import {
  BUTTON,
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../components/siteChrome";

export default function Home() {
  const selectedWork: Array<{
    title: string;
    subtitle: string;
    role: string;
    featured?: boolean;
    imageSrc: string;
    imageAlt: string;
    href: string;
  }> = [
    {
      title: "HSBC",
      subtitle: "Enterprise B2B SaaS, fintech and complex workflows",
      role: "Product Designer",
      featured: true,
      imageSrc: "/portfolio/work-hsbc.png",
      imageAlt: "HSBC product screenshot on a laptop",
      href: "/client-work/hsbc",
    },
    {
      title: "Cookify",
      subtitle: "Mobile product design, UX research and usability testing",
      role: "Product Designer",
      imageSrc: "/portfolio/work-cookify.png",
      imageAlt: "Cookify mobile app screen on a phone",
      href: "/client-work/cookify",
    },
  ];

  const moreWork: Array<{
    title: string;
    subtitle: string;
    role: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
  }> = [
    {
      title: "kariESPORTS",
      subtitle: "Digital communications for an esports team",
      role: "UI Lead",
      imageSrc: "/portfolio/work-kari-esports.png",
      imageAlt: "kariESPORTS website on a laptop",
      href: "/client-work/kari-esports",
    },
    {
      title: "myOrb",
      subtitle: "Public cloud healthcare software",
      role: "UX Designer",
      imageSrc: "/portfolio/work-myorb.png",
      imageAlt: "myOrb product screenshot on a laptop",
      href: "/client-work/myorb",
    },
  ];

  const featuredWork = selectedWork.find((w) => w.featured);
  const otherSelected = selectedWork.filter((w) => !w.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader variant="home" />

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
              Simplifying complex products, workflows and digital experiences.
            </p>

            <div className="mt-4">
              <p className="text-sm text-foreground/85 sm:text-base">
                📍 British, living in Dubai, UAE
              </p>
            </div>
          </div>

          <div className={`${SURFACE} flex flex-col p-6 sm:p-10`}>
            <p className="max-w-[60ch] text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8">
              Senior Product Designer with 5 years of experience across B2B
              SaaS, fintech, eCommerce and digital products. I specialise in
              simplifying complex workflows, building scalable design systems
              and partnering closely with Product and Engineering to turn
              ambiguous problems into clear, usable experiences.
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

        <section id="work" className="mt-4 scroll-mt-28">
          <div id="client-work" />
          <h2 className="text-base font-medium tracking-wide text-foreground">
            Selected work
          </h2>

          {featuredWork ? (
            <Link
              href={featuredWork.href}
              className={`${SURFACE_INNER} card-hover mt-6 block p-6 hover:border-foreground/20 hover:bg-foreground/[0.035] ${FOCUS_RING} sm:p-10`}
            >
              <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <Image
                  src={featuredWork.imageSrc}
                  alt={featuredWork.imageAlt}
                  width={1200}
                  height={800}
                  className="card-hover__img aspect-[16/10] w-full object-cover"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="mt-5">
                <p className="text-lg font-medium tracking-tight sm:text-2xl">
                  {featuredWork.title}
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  {featuredWork.subtitle}
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  {featuredWork.role}
                </p>
              </div>
            </Link>
          ) : null}

          <div
            className={`mt-4 grid gap-4 ${otherSelected.length > 1 ? "md:grid-cols-2" : ""}`}
          >
            {otherSelected.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className={`${SURFACE_INNER} card-hover p-5 hover:border-foreground/20 hover:bg-foreground/[0.035] ${FOCUS_RING} sm:p-6`}
              >
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
                  <p className="text-lg font-medium tracking-tight">{w.title}</p>
                  <p className="mt-1 text-sm text-foreground/70">{w.subtitle}</p>
                  <p className="mt-1 text-sm text-foreground/70">{w.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="more-work" className="mt-10 scroll-mt-28">
          <h2 className="text-base font-medium tracking-wide text-foreground">
            More work
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {moreWork.map((w) => (
              <Link
                key={w.title}
                href={w.href}
                className={`${SURFACE_INNER} card-hover p-5 hover:border-foreground/20 hover:bg-foreground/[0.035] ${FOCUS_RING} sm:p-6`}
              >
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
                  <p className="text-lg font-medium tracking-tight">{w.title}</p>
                  <p className="mt-1 text-sm text-foreground/70">{w.subtitle}</p>
                  <p className="mt-1 text-sm text-foreground/70">{w.role}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/client-work/kari-esports"
            className={`${SURFACE} card-hover mt-4 block p-6 hover:border-foreground/20 hover:bg-foreground/[0.035] ${FOCUS_RING} sm:p-10`}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="shrink-0">
                <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                  <Image
                    src="/portfolio/testimonial.png"
                    alt="Testimonial portrait"
                    width={128}
                    height={128}
                    className="h-24 w-24 object-cover sm:h-28 sm:w-28"
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
          </Link>
        </section>

        <SiteFooter variant="home" />
      </main>
    </div>
  );
}
