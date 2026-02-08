import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
const CHIP =
  "rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-xs text-foreground/70";
const CHIP_LINK = `${CHIP} hover:border-emerald-300/40 hover:text-emerald-300/80 ${FOCUS_RING}`;

export default function CookifyCaseStudyPage() {
  const tags = ["User Experience", "User Interface", "iOS", "App design"] as const;

  const figmaUrl =
    "https://www.figma.com/proto/YVfoi5RxXM19ejMNsuQfMZ/Cookify---Food-Recipe-App?type=design&node-id=115-22471&t=5VglrS5yZtppPo91-1&scaling=scale-down&page-id=4%3A19761&starting-point-node-id=115%3A22471&mode=design";

  // Optional artifacts (not provided yet). Drop files in `public/cookify/artifacts/` to enable.
  const hasAffinity = fs.existsSync(
    path.join(process.cwd(), "public", "cookify", "artifacts", "affinity.png"),
  );
  const hasJourney = fs.existsSync(
    path.join(process.cwd(), "public", "cookify", "artifacts", "journey.png"),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className={`${SURFACE} px-4 py-3`}>
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className={`rounded-md text-sm font-medium tracking-tight text-foreground/90 hover:text-foreground ${FOCUS_RING}`}
              >
                ben blackwood.
              </Link>
              <nav className="flex items-center gap-1 text-sm text-foreground/70 sm:gap-2">
                <Link
                  href="/"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  home
                </Link>
                <Link
                  href="/#client-work"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  works
                </Link>
                <Link
                  href="/#contact"
                  className={`rounded-md px-2 py-2 hover:text-foreground ${FOCUS_RING}`}
                >
                  contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <section className={`${SURFACE} overflow-hidden p-0`}>
          <Image
            src="/cookify/artifacts/hero.png"
            alt="Cookify app on a phone"
            width={2048}
            height={1152}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </section>

        <section className={`mt-4 ${SURFACE} p-6 sm:p-10`}>
          <p className="text-sm font-medium text-foreground/65">Client works</p>
          <h1 className="mt-3 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            cookify
          </h1>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className={CHIP}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:justify-end">
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={CHIP_LINK}
              >
                Figma link
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 space-y-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Client.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Working with a client to provide mobile designs for his start-up
              business, which was an iOS food recipe application aimed at
              millennials. This start-up was in the early stages, wanting to
              further understand about the target users and then translate those
              requirements and insights into designs, which is where I stepped
              in.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Discovery.</h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The first step was understanding the requirements and what vision
              the client had for the brand. In order to do this we had a kick-off
              stakeholder meeting between the client, the developer and myself
              to ensure we were all on the same page about expectations and
              feasibility. This allowed us to all create a product roadmap and
              allowed me to ask smart questions to uncover the project goals, to
              generate user-centred designs within two months.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              After collecting the recordings from the user interviews, I started
              by creating a user persona of a millennial who enjoys experimenting
              with food serves a critical purpose in the design process. By
              crafting this persona, collectively we gained validation and
              valuable insights into the user (Sarah's) needs, preferences, and
              pain points when it comes to using a food-related application.
              This deeper understanding allows us to design a more user-centric
              and effective app.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/cookify/artifacts/persona-sarah-miller.png"
                alt="Sarah Miller user persona"
                width={2048}
                height={1152}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              In order to narrow the scope and categorise findings, I conducted
              affinity mapping to synthesise the pains identified. I grouped
              these problems under common themes and features in the platform.
              From here we got some key takeaways about the users expectations
              and current challenges, which we can then classify accordingly. We
              categorised the key areas so we could implement them into our
              designs later in the process.
            </p>

            {hasAffinity ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <Image
                  src="/cookify/artifacts/affinity.png"
                  alt="Affinity mapping"
                  width={2048}
                  height={1152}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>
            ) : null}
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Defining.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              By creating a user journey map, I could start narrowing the scope
              and defining the key areas of opportunity. This helped us visualize
              and understand the entire user experience from her perspective. By
              mapping out Sarah's journey, we gain a comprehensive view of her
              interactions with our food-related application, from her initial
              point of entry to her ongoing engagement. This process allows us
              to identify pain points, moments of delight, and critical
              touchpoints where we can enhance her experience. From this, we can
              clearly see where she gets frustrated and impatient when
              researching and ordering.
            </p>

            {hasJourney ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
                <Image
                  src="/cookify/artifacts/journey.png"
                  alt="User journey map"
                  width={2048}
                  height={1152}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                />
              </div>
            ) : null}
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Problem.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              “Millennials are challenged to balance time constraints, recipe
              overload, and the pursuit of health and taste in their meals,
              necessitating a food recipe mobile app to simplify and optimise
              their choices when browsing recipes.”
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Based on the above problems identified, I worked towards
              addressing these pains by coming up with potential solutions:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <li>
                Allowing users to sign up/login for personalisation and
                scalability
              </li>
              <li>
                Offering cuisine variety through eye-catching images of recipes
              </li>
              <li>Including necessary nutritional/dietary information</li>
              <li>
                Offering information regarding health and difficulty level for
                recipes
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/cookify/artifacts/instructions.png"
                alt="Step-by-step instructions layout"
                width={1200}
                height={2400}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Solution.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              “Our solution is to develop and design a food recipe app tailored
              to the preferences of millennials. This app will seamlessly blend
              convenience and culinary diversity, enabling users to effortlessly
              exchange and explore recipes while ensuring an exceptional user
              experience.”
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I rapidly created preliminary wireframes to solicit input from the
              client, developer and users regarding the general design and
              architecture of the applications flow. This allowed for defining a
              consistent visual structure and layout for the upcoming
              high-fidelity designs.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/cookify/artifacts/wireframes.png"
                alt="Cookify wireframes"
                width={2400}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Results.</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/cookify/artifacts/prototypes.png"
                alt="Cookify prototype screens"
                width={2600}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <h2 className="mt-10 text-base font-medium text-foreground">
              Usability testing
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I facilitated usability testing sessions with our core user base
              to confirm if the updated designs effectively addressed their
              needs. I crafted a script that included a scenario where users
              were tasked with browsing for their recipe of preference and then
              adding a food recipe item to their cart, which was a fundamental
              feature of the app.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Throughout the session, I closely observed their interactions with
              the prototype as they configured the flow. The usability tests
              demonstrated that the users wanted to see more practical visuals
              of the step-by-step instructions to help them create the recipe.
              Users also wanted to see a combination of text and imagery on the
              ingredients to bring it to life more as they felt it connected
              with them better.
            </p>

            <h2 className="mt-10 text-base font-medium text-foreground">
              Validating the designs
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Since implementing the visual imagery on instructions and
              ingredients, we witnessed a notable increase in the understanding
              and engagement of the specific recipes. Furthermore, I've received
              positive feedback from users regarding the streamlined browsing
              process for them searching recipes, resulting in substantial time
              savings.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Key takeaways
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Here are some key insights obtained from this project:
            </p>

            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <li>
                Engaging developer input from the outset of the project. Early
                collaboration with the developer and client helped mitigate the
                need for extensive revisions later on. Understanding technical
                constraints upfront informs your design approach.
              </li>
              <li>
                User testing remains an ongoing process even through
                development. Design continually evolves to enhance the user
                experience. It's crucial to consistently gather and heed user
                feedback.
              </li>
              <li>
                Building out a Cookify design system to ensure consistency,
                efficiency, accessibility and scalability. It will product
                development through reusable components, maintains a cohesive
                brand identity, and improving user experience by incorporating
                best practices.
              </li>
            </ol>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Challenges and constraints
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              As the client wanted to start designing straight away, one of the
              most significant challenges, under time constraints was securing
              time from users to gather insights and information to make sure it
              was user-centred design. To address this, I place great importance
              on the meeting time, ensuring thorough preparation so that I can
              leave with all the necessary information and agreed-upon next
              steps. Efficiently managing this time is crucial, as it emphasizes
              the value of conversations with specialists and helps us tap into
              the best insights from our user base, which ultimately guide our
              design decisions.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Another challenge involves maintaining focus on feature
              prioritization while considering broader factors and staying
              aligned with our objectives. We received an abundance of feedback
              within a short timeframe, particularly when implementing specific
              features. However, our priority was to deliver the Minimum Viable
              Product (MVP) within two months, with the most relevant
              functionalities first, all while ensuring scalability through the
              design system.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

