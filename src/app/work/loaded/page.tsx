import ProjectMeta from "../../../components/ProjectMeta";
import SiteHeader, { SiteFooter } from "../../../components/SiteHeader";
import ZoomableImage from "../../../components/ZoomableImage";
import {
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../../../components/siteChrome";
import { ACCENT, SPACE, TYPE } from "../../../components/type";

function Step({ n, title }: { n: string; title: string }) {
  return (
    <li className="grid min-h-[6.5rem] grid-cols-1 content-start gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.025] px-4 py-5">
      <p className={`col-span-full ${ACCENT.mark}`}>
        {n}
      </p>
      <p className={`col-span-full ${TYPE.h3}`}>
        {title}
      </p>
    </li>
  );
}

function Finding({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <li className="border-t border-foreground/10 pt-4">
      <p className={ACCENT.mark}>{n}</p>
      <p className={`mt-3 ${TYPE.h3}`}>{title}</p>
      <p className={`mt-2 ${TYPE.body}`}>
        {body}
      </p>
    </li>
  );
}

function Tools({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8">
      <p className={`${TYPE.label}`}>Tools</p>
      <ul className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 ${TYPE.small}`}>
        {items.map((name, index) => (
          <li key={name} className="flex items-center gap-3">
            {index > 0 ? (
              <span className="text-foreground/30" aria-hidden>
                ·
              </span>
            ) : null}
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceShot({
  kind,
  title,
  src,
  alt,
  width,
  height,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  kind: "current" | "redesigned";
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
}) {
  const label =
    kind === "current" ? "CURRENT EXPERIENCE" : "REDESIGNED EXPERIENCE";

  return (
    <figure className="flex h-full min-h-0 flex-col scroll-mt-24">
      <p className={TYPE.label}>{label}</p>
      <p className={`mt-2 ${TYPE.h3}`}>{title}</p>
      <div
        className="relative mt-3 w-full overflow-hidden rounded-2xl border border-foreground/10"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <ZoomableImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full"
          sizes={sizes}
          quality={95}
        />
      </div>
    </figure>
  );
}

export default function LoadedCaseStudyPage() {
  const tags = ["Marketplace", "eCommerce", "Multilingual", "AI-assisted"] as const;

  const ownership = [
    {
      title: "Design decisions",
      body: "I head up all design decisions and own design direction end to end.",
    },
    {
      title: "Standards and process",
      body: "I set the design process and standards used across the company, from discovery through to handoff.",
    },
    {
      title: "Product and business strategy",
      body: "I influence the product roadmap and business strategy, using behavioural data to prioritise where design creates the most value.",
    },
    {
      title: "Design system",
      body: "I rebuilt Loaded's design system from scratch in Claude Design, migrating it from Figma and our Magento components, and I govern it so every new design stays consistent across web and mobile.",
    },
  ] as const;

  const gaInputs = [
    "Conversion",
    "Purchases",
    "Engagement",
    "Abandonment",
    "Sessions",
  ] as const;

  const clarityInputs = [
    "Click behaviour",
    "Interaction patterns",
    "Friction",
    "Drop off behaviour",
  ] as const;

  const frictionFindings = [
    {
      title: "Progress",
      body: "There was no clear indication of checkout length or where customers were in the journey.",
    },
    {
      title: "Account decision",
      body: "The journey did not make it clear whether login or registration was mandatory.",
    },
    {
      title: "Billing and form length",
      body: "Customers were unsure about billing country and what information was required, and the form created unnecessary effort before purchase.",
    },
    {
      title: "Order visibility",
      body: "Adding three or more products could push the order total below the fold.",
    },
    {
      title: "Cart control",
      body: "There was no obvious way to edit the cart during checkout.",
    },
    {
      title: "Trust and security",
      body: "Norton and captcha messaging was generic and didn’t resonate with a gaming audience at the most important stage of the funnel.",
    },
  ] as const;

  const designResponse = [
    {
      title: "Clearer checkout structure",
      body: "A three-step stepper (Account, Pay, Play) shows customers where they are and how long checkout will take.",
    },
    {
      title: "Simpler account decision",
      body: "Guest checkout is a clear option alongside login and register, and customers make one upfront choice before moving on.",
    },
    {
      title: "Reduced form friction",
      body: "Redundant card fields are removed, so customers only provide the information that’s actually needed.",
    },
    {
      title: "Stronger order visibility",
      body: "The order summary scrolls independently, keeping the total visible however many products are in the cart.",
    },
    {
      title: "Clearer payment control",
      body: "An “Edit cart” action sits in the order summary, so customers can change their order without leaving checkout.",
    },
    {
      title: "Trusted signals at purchase",
      body: "Replaced with trust signals our audience recognises, such as instant delivery and Trustpilot rating, shown consistently from the homepage and product pages through to the final step of checkout. This treats trust as part of the whole customer journey, not just the checkout page.",
    },
  ] as const;

  const aiDiscovery = [
    "Kick off",
    "Transcription",
    "AI synthesis",
    "Requirements",
    "Design brief",
  ] as const;

  const comparables = [
    "Instant Gaming",
    "Kinguin",
    "GTA",
    "Steam",
  ] as const;

  const collaboration = [
    "Design exploration",
    "Product and SME review",
    "Iteration",
    "Senior management",
    "Approved direction",
    "Implementation",
  ] as const;

  const successMeasures = [
    {
      n: "01",
      title: "Conversion and abandonment",
      body: "Checkout conversion rate and checkout abandonment rate as the primary measures of success.",
    },
    {
      n: "02",
      title: "User engagement",
      body: "Session duration, engagement time and interaction behaviour across the checkout journey.",
    },
    {
      n: "03",
      title: "Behaviour and friction",
      body: "Microsoft Clarity data including clicks, interactions, drop off points and behavioural signals across desktop, tablet and mobile.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top" className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={SPACE.blocks}>
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <h1 className={`${TYPE.display}`}>
            Loaded
          </h1>
          <p className={`mt-4 max-w-[65ch] font-normal text-lg leading-[1.6] ${ACCENT.text}`}>
            Redesigning checkout to reduce friction and improve conversion
          </p>

          <ProjectMeta
            role="Senior Product Designer"
            company="OMX Digital"
            product="Gaming eCommerce marketplace"
            scope="Product strategy · Design standards and process · UX research · Analytics · Product design · Design systems · Stakeholder leadership"
            tags={tags}
          />
        </section>

        <section className={`${SURFACE} overflow-hidden`}>
          <div style={{ aspectRatio: "3580 / 2574" }}>
            <ZoomableImage
              src="/portfolio/loaded_checkout_mockup_hd.png"
              alt="Loaded checkout with Account, Pay and Play and order summary"
              width={3580}
              height={2574}
              className="h-full w-full object-contain"
              sizes="(min-width: 1280px) 1120px, 100vw"
              quality={95}
              priority
            />
          </div>
          <p className={`px-6 pb-6 sm:px-10 sm:pb-10 ${SPACE.tight} ${TYPE.small}`}>
            Redesigned checkout: a clear three-step journey, with the order total always in view.
          </p>
        </section>

        <article className={SPACE.blocks}>
          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Context</h2>
            <p className={`mt-4 ${TYPE.body}`}>
              Loaded is a global gaming eCommerce marketplace selling digital
              game products across multiple markets and languages.
            </p>
            <p className={`mt-4 ${TYPE.lead}`}>
              At OMX Digital, I'm the sole designer on Loaded. I head up all
              design decisions, set the design process and standards across the
              company, and influence the product roadmap and business strategy
              alongside Product, Engineering, commercial teams and senior
              management.
            </p>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Role and ownership
            </h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              As the sole designer, standards, process and design quality all sit with me.
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {ownership.map((item) => (
                <div key={item.title}>
                  <p className={`${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Using AI to accelerate discovery
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              After kickoff with Product, meeting recordings were transcribed
              and synthesised so I could spend more time on product thinking
              and less on manual documentation.
            </p>
            <ol className="mt-6 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {aiDiscovery.map((step, index) => (
                <Step
                  key={step}
                  n={String(index + 1).padStart(2, "0")}
                  title={step}
                />
              ))}
            </ol>
            <Tools
              items={["Microsoft Teams", "Fireflies.ai", "Claude", "Jira", "Confluence"]}
            />
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Discovery</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Identifying the opportunity
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Checkout was a commercial lever. I analysed existing behaviour in
              Google Analytics and Microsoft Clarity to see where people
              engaged, dropped off and hit friction on the path to purchase.
            </p>

            <p className={`mt-10 ${TYPE.label}`}>
              Research and data
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className={`${TYPE.h3}`}>
                  Google Analytics
                </p>
                <ul className={`mt-4 space-y-2 ${TYPE.body}`}>
                  {gaInputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={`${TYPE.h3}`}>
                  Microsoft Clarity
                </p>
                <ul className={`mt-4 space-y-2 ${TYPE.body}`}>
                  {clarityInputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={`mt-10 ${TYPE.label}`}>
              From behaviour to decision
            </p>
            <p className={`mt-6 ${TYPE.body}`}>
              Google Analytics showed engagement, conversion and abandonment
              patterns. Clarity showed how people actually moved through the
              existing checkout. I combined that with stakeholder requirements
              and business KPIs.
            </p>
            <Tools items={["Google Analytics", "Microsoft Clarity", "Hotjar"]} />

            <p className={`mt-10 ${TYPE.label}`}>
              Comparable experiences
            </p>
            <ul className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 ${TYPE.h3}`}>
              {comparables.map((name, index) => (
                <li key={name} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-foreground/30" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-4 ${TYPE.body}`}>
              Reviewed to understand established gaming and eCommerce patterns,
              then identify where Loaded could improve.
            </p>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.lead}`}>
              What the data showed
            </h2>
            <p className={`mt-3 ${TYPE.body}`}>
              Observed friction from analytics, session behaviour and product
              analysis of the existing checkout.
            </p>
            <ol className="mt-8 grid gap-8 sm:grid-cols-2">
              {frictionFindings.map((item, index) => (
                <Finding
                  key={item.title}
                  n={`0${index + 1}`}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </ol>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Problem</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Understanding the customer journey
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I mapped checkout to understand stages, decisions and friction
              before moving into design.
            </p>
          </section>

          <section>
            <p className={`${TYPE.label}`}>
              Product problem
            </p>
            <p className={`${SPACE.title} ${TYPE.display}`}>
              Create a simpler, clearer checkout experience that reduces
              friction and abandonment while improving the path to purchase
              across devices and markets.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The work had to hold customer needs against commercial objectives,
              technical constraints and a multilingual eCommerce platform.
            </p>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Design response
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I explored multiple directions around the highest friction points, considering how the experience could become clearer without adding unnecessary complexity.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The same principles were explored across desktop, tablet and mobile so the checkout felt like one consistent journey.
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2">
              {designResponse.map((item, index) => (
                <li key={item.title}>
                  <p className={ACCENT.mark}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className={`mt-3 ${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Design system
            </h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              I rebuilt Loaded's design system from scratch in Claude Design, migrating it from Figma and our Magento components, and I govern and maintain it.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Any new product design is created within that system, keeping accessibility, usability and brand consistency aligned across the product.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The system also gives us a scalable foundation to design and iterate faster across devices and journeys.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <p className={`${TYPE.h3}`}>
                  Foundations
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  Typography, colour, spacing
                </p>
              </div>
              <div>
                <p className={`${TYPE.h3}`}>
                  Components
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  Reusable components and interaction patterns
                </p>
              </div>
              <div>
                <p className={`${TYPE.h3}`}>
                  Product experience
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  Consistent, scalable, faster to iterate
                </p>
              </div>
            </div>
            <Tools items={["Claude Design"]} />
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Collaboration
            </h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              I owned design direction and brought the organisation into the decision.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Multiple directions went to Product and subject matter experts.
              Feedback shaped the work before I presented a recommendation to
              senior management.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              AI accelerated exploration and prototyping, while design judgement
              remained with me.
            </p>
            <Tools items={["Claude Design", "Gemini"]} />
            <ol className="mt-6 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {collaboration.map((step, index) => (
                <Step key={step} n={`0${index + 1}`} title={step} />
              ))}
            </ol>
            <p className={`mt-6 ${TYPE.lead}`}>
              Selected for customer experience, business goals and technical
              feasibility.
            </p>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Solution</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Before and after
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I redesigned checkout across desktop, tablet and mobile, treating
              it as one journey rather than isolated screens.
            </p>

            <p className={`mt-10 ${TYPE.label}`}>
              Desktop
            </p>
            <div className="mt-5 grid items-stretch gap-8 grid-cols-2 md:grid-cols-1">
              <ExperienceShot
                kind="current"
                title="Existing checkout"
                src="/loaded/artifacts/loaded_before_desktop.png"
                alt="Existing Loaded checkout on desktop"
                width={2880}
                height={1508}
                sizes="(min-width: 1280px) 1120px, 100vw"
              />
              <ExperienceShot
                kind="redesigned"
                title="Redesigned checkout"
                src="/loaded/artifacts/loaded_after_desktop.png"
                alt="Redesigned Loaded checkout on desktop"
                width={2880}
                height={1508}
                sizes="(min-width: 1280px) 1120px, 100vw"
              />
            </div>

            <p className={`mt-12 ${TYPE.label}`}>
              Mobile
            </p>
            <div className="mt-5 grid items-stretch gap-8 md:grid-cols-2">
              <ExperienceShot
                kind="current"
                title="Existing checkout"
                src="/loaded/artifacts/before-mobile.jpg"
                alt="Existing Loaded checkout on mobile"
                width={614}
                height={1024}
              />
              <ExperienceShot
                kind="redesigned"
                title="Redesigned checkout"
                src="/loaded/artifacts/after-mobile-checkout.png"
                alt="Redesigned Loaded checkout on mobile"
                width={614}
                height={1024}
              />
            </div>

            <p className={`mt-12 ${TYPE.label}`}>
              Responsive exploration
            </p>
            <p className={`mt-3 ${TYPE.body}`}>
              I explored multiple directions across desktop, tablet and mobile, testing how the same principles could reduce friction while keeping the checkout clear and consistent at different screen sizes.
            </p>
          </section>

          <section className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Outcome</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Designing for measurable business impact
            </p>

            <div className={`${SURFACE_INNER} mt-8 p-6 sm:p-8`}>
              <p className={`${TYPE.label}`}>
                Status
              </p>
              <p className={`${SPACE.title} ${TYPE.lead}`}>
                Approved for implementation
              </p>
              <p className={`mt-2 ${TYPE.small}`}>
                Results pending
              </p>
            </div>

            <h3 className={`mt-12 ${TYPE.lead}`}>
              Phased approach
            </h3>
            <p className={`mt-4 ${TYPE.body}`}>
              The redesign is being approached in phases so improvements can be tested incrementally.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The team can measure the effect of changes through controlled testing and build confidence around which improvements have the greatest impact before expanding the approach further.
            </p>

            <h3 className={`mt-12 ${TYPE.h1}`}>
              Success measures
            </h3>
            <p className={`mt-3 ${TYPE.body}`}>
              The next phase is focused on measuring changes incrementally against checkout conversion, abandonment and behavioural signals.
            </p>
            <ol className="mt-6 grid gap-8 sm:grid-cols-3">
              {successMeasures.map((item) => (
                <li key={item.title}>
                  <p className={ACCENT.mark}>
                    {item.n}
                  </p>
                  <p className={`mt-3 ${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className={`mt-10 ${TYPE.label}`}>
              Hypothesis
            </p>
            <p className={`mt-3 max-w-[40ch] ${TYPE.lead}`}>
              Reducing friction and simplifying the purchase journey should
              improve checkout completion and reduce abandonment.
            </p>
            <p className={`mt-8 ${TYPE.body}`}>
              At Loaded’s scale, even a few percentage points of improvement in
              checkout conversion could represent a multi million pound revenue
              opportunity.
            </p>
          </section>
        </article>

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
