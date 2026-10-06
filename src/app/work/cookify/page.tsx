import ProjectMeta from "../../../components/ProjectMeta";
import SiteHeader, { SiteFooter } from "../../../components/SiteHeader";
import ZoomableImage from "../../../components/ZoomableImage";
import {
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../../../components/siteChrome";
import { ACCENT, SPACE, TYPE } from "../../../components/type";

export default function CookifyCaseStudyPage() {
  const tags = ["Mobile app", "Consumer", "Food & recipes"] as const;

  const figmaUrl =
    "https://www.figma.com/proto/YVfoi5RxXM19ejMNsuQfMZ/Cookify---Food-Recipe-App?type=design&node-id=115-22471&t=5VglrS5yZtppPo91-1&scaling=scale-down&page-id=4%3A19761&starting-point-node-id=115%3A22471&mode=design";

  const insights = [
    {
      title: "Limited time",
      body: "Users needed to decide quickly, not browse endlessly.",
    },
    {
      title: "Recipe overload",
      body: "Too many options made discovery harder rather than easier.",
    },
    {
      title: "Quick decisions",
      body: "Relevant recipe information had to be visible at a glance.",
    },
  ] as const;

  const decisions = [
    {
      n: "01",
      title: "Recipe discovery",
      body: "Make browsing faster and easier by prioritising relevant recipe information.",
    },
    {
      n: "02",
      title: "Recipe instructions",
      body: "Combine imagery and text to improve comprehension during cooking.",
    },
    {
      n: "03",
      title: "MVP prioritisation",
      body: "Focus the first release on the highest value user needs while keeping the product architecture scalable.",
    },
  ] as const;

  const mvpFocus = [
    "Sign up and login for personalisation",
    "Cuisine variety",
    "Nutritional information",
    "Health and difficulty cues",
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top" className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={SPACE.blocks}>
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <p className={`${TYPE.label}`}>Selected work</p>
          <h1 className={`mt-3 ${TYPE.display}`}>
            Cookify
          </h1>
          <p className={`mt-3 ${TYPE.small}`}>
            Two month MVP · Shipped to an early stage startup
          </p>
          <p className={`mt-4 max-w-[65ch] font-normal text-lg leading-[1.6] ${ACCENT.text}`}>
            Mobile product design, UX research and usability testing
          </p>

          <ProjectMeta
            role="UX/UI Designer (freelance)"
            company="Cookify"
            product="iOS recipe app for millennial cooks"
            scope="UX research · Interaction design · Prototyping · Usability testing"
            tags={tags}
            prototypeHref={figmaUrl}
          />
        </section>

        <section className={`${SURFACE} overflow-hidden`}>
          <div style={{ aspectRatio: "1222 / 625" }}>
            <ZoomableImage
              src="/cookify/artifacts/hero.png"
              alt="Cookify app on a phone"
              width={1222}
              height={625}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
              quality={95}
              priority
            />
          </div>
          <p className={`px-6 pb-6 sm:px-10 sm:pb-10 ${SPACE.tight} ${TYPE.small}`}>
            Cookify iOS recipe app, designed as a two month MVP
          </p>
        </section>

        <section className={SPACE.blocks}>
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Context</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              An early stage startup with a two month MVP
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I designed an iOS recipe app for an early stage start up targeting
              millennial cooks. The client needed a clearer picture of user
              needs, then a product experience that could ship as an MVP within
              two months.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I aligned with the client and developer from the first workshop so
              expectations, technical constraints and the product roadmap were
              shared before design began.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Research</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              What research revealed
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Research showed users balancing limited time, recipe overload and
              the need to make quick decisions. Those insights shaped browsing,
              recipe discovery and the instruction experience.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {insights.map((item) => (
                <div key={item.title} className={`${SURFACE_INNER} p-5`}>
                  <p className={`${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/cookify/artifacts/persona-sarah-miller.png"
                alt="Sarah Miller user persona"
                width={1200}
                height={936}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Persona used to keep discovery and instruction design anchored to a time poor cook
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Design decisions
            </h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Prioritising the first release
            </p>
            <div className="mt-6 grid gap-3">
              {decisions.map((item) => (
                <div key={item.title} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                  <p className={ACCENT.mark}>
                    {item.n}
                  </p>
                  <p className={`mt-2 ${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className={`mt-6 ${TYPE.label}`}>
              First release focus
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {mvpFocus.map((item) => (
                <li
                  key={item}
                  className={`${SURFACE_INNER} px-4 py-3 ${TYPE.h3}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mt-6 ${TYPE.body}`}>
              I used wireframes to align the client, developer and users on
              structure before moving into high fidelity screens.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/cookify/artifacts/wireframes.png"
                alt="Cookify wireframes"
                width={1602}
                height={551}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Wireframes used to agree structure before high fidelity UI
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/cookify/artifacts/instructions.png"
                alt="Recipe instruction layout combining imagery and text"
                width={504}
                height={1450}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Instruction layout combining imagery and text to support cooking in the moment
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Testing and iteration
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.label}`}>
                  Finding
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  Users wanted more practical visual guidance within recipe
                  instructions and stronger visual context around ingredients.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.label}`}>
                  Design response
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  I added visual imagery to instructions and ingredients, then
                  refined the experience before delivery.
                </p>
              </div>
            </div>
            <p className={`mt-6 ${TYPE.body}`}>
              After that change, users understood recipes more easily and found
              browsing faster.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/cookify/artifacts/prototypes.png"
                alt="Cookify prototype screens"
                width={1280}
                height={601}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Prototype screens used in usability testing
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Design system
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I built a reusable design system to keep features consistent
              across the app and streamline developer handoff, so future
              features would be faster to design and build.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Constraints
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Two month MVP
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  I focused design effort on the features that mattered most to
                  the first release.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Limited user access
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  I prioritised research questions carefully and aligned early
                  with the client and developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={`${SURFACE} p-6 sm:p-10`}>
          <p className={TYPE.h3}>
            Want to learn more?
          </p>
          <a
            href="mailto:benblackwood25@gmail.com"
            className={`mt-4 inline-flex rounded-md text-sm font-medium ${ACCENT.text} underline-offset-4 hover:underline ${FOCUS_RING}`}
          >
            benblackwood25@gmail.com
          </a>
        </div>
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
