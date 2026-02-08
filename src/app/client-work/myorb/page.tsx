import Image from "next/image";
import Link from "next/link";

const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
const CHIP =
  "rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-xs text-foreground/70";
const CHIP_LINK = `${CHIP} hover:border-emerald-300/40 hover:text-emerald-300/80 ${FOCUS_RING}`;

export default function MyOrbCaseStudyPage() {
  const topChips = ["Product Designer", "UX & UI Design", "SaaS"] as const;

  const figmaUrl =
    "https://www.figma.com/proto/eEwxT9CUNEXRYIhLPmpI9C/ER-US-and-ECHO-and-CT-and-MRI?node-id=39161-222310&scaling=min-zoom&page-id=39161%3A155108&starting-point-node-id=39161%3A222310&show-proto-sidebar=1";
  const deckUrl =
    "https://www.figma.com/proto/aKIxiT4SplGzi07upTmQVX/UX-Case-Study?node-id=204-4188&starting-point-node-id=204%3A4188";

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
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <p className="text-sm font-medium text-foreground/65">Client works</p>
          <h1 className="mt-3 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            myorb
          </h1>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {topChips.map((t) => (
                <span key={t} className={CHIP}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:justify-end">
              <a
                href={deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={CHIP_LINK}
              >
                Case study slide deck
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4 space-y-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Client.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              myOrb is a public-cloud healthcare company. Originally founded in
              London in 2012, it has been built from the ground up to be a
              totally private system, protecting its user’s information myOrb
              and includes advanced analytics, informatics, demand and workforce
              planning. Their mission is to digitalise the NHS processes to
              ultimately improve patient outcomes, by improving speed and
              accuracy of patient visits. One product I head up as a UX
              Designer, is the electronic requesting system, replacing the
              paper-based processes currently.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Discovery.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Before launching a product, it's important to understand the
              clients requirements and expectations in order to provide a
              solution to the problems being currently faced. Facilitating an
              initial discovery workshops allows me and the team to deeply
              understand the current pain points within the NHS but also to set
              expectations of realistic outcomes, taking into considerations
              constraints that may appear such as budgets, timeframes and
              feature prioritisation, with the main purpose of ideating and
              defining the project objectives, requirements, and gain alignment
              on the next steps.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              After understanding with NHS clients, we then understand how the
              users, GPs and doctors are currently working in create patient
              requests and to understand what challenges they are encountering,
              through user interviews. This allows us to understand their needs
              and ask the smart questions to uncover the current situation and
              problems being faced. From here, we can start to form task flows
              and journey mapping to discover how the user carries out their
              tasks from start to finish, highlighting the current problems in
              place.
            </p>

            <Image
              src="/myorb/artifacts/01.png"
              alt="MyOrb discovery artifact"
              width={2048}
              height={1152}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              After narrowing the scope to identify the core issues, we created
              the problem statement to work towards for the products MVP:
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              "GPs and doctors are currently using paper-based processes for
              patient requests, which is inefficient and causing duplicate,
              untraceable and sometimes undelivered requests, meaning patients
              are suffering the consequences."
            </p>

            <Image
              src="/myorb/artifacts/02.png"
              alt="MyOrb problem statement artifact"
              width={2048}
              height={1152}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Defining.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Once discovering the problems and gathering information from the
              users, to understand how they are currently operating and ideating
              solutions, we can then hone in on the specific problems within
              our limitations. Defining the problem involves synthesising all
              the research previously done, from the market, client and users
              to focus in on specific issues that we can provide a solution to.
            </p>

            <Image
              src="/myorb/artifacts/03.png"
              alt="MyOrb defining artifact"
              width={2048}
              height={1152}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Problem.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Now we have a clear problem to focus on from the users, we can
              then start idea generation in how best to solve the current
              problems the GPs and doctors are facing. In order for us to
              provide a solution to the problem, we created a solution
              statement to allow us to have a distinct solution:
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              "GPs and doctors need an electronic requesting system, that allows
              them to create, track and manage all patient requests with the
              hospitals in order to improve patient outcomes with speed and
              efficiency."
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Solution.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Once the fundamentals had been agreed, both with the users and the
              team we could then look at design execution. The user journeys and
              initial ideas to providing the solution were shared with the GPs
              and doctors in order to confirm the relevant steps would be
              feasible in their every day roles. We started designing with each
              step in mind, to go through the user journey for electronic
              requesting in meeting their goals and aims.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Once we had designed a first concept, we wanted to to do usability
              testing on the workflow with the GPs and doctors to ensure that
              the process was feasible. This was a vital step in order to prove
              the validity of the solution, whilst designed as wireframes,
              before finalising a high-fidelity design.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              With colour theory and accessibility in mind, I helped build out
              the design system to ensure consistency across all products, using
              the 'Blue' call to action buttons to help guide the user. After
              user feedback, we designed a dashboard navigation, with a side
              menu and a main display to ensure GPs can work on a screen with
              maximum width. Giving the user full control through the process
              was hugely important, introducing tool-tips and a stepper to
              ensure the status of progress is easily visible, these are just a
              few of the considerations behind the design decisions.
            </p>

            <Image
              src="/myorb/artifacts/04.png"
              alt="MyOrb solution artifact"
              width={2048}
              height={1152}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-medium text-foreground">Results.</h2>
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

            <Image
              src="/myorb/artifacts/05.png"
              alt="MyOrb results artifact"
              width={2048}
              height={1152}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />

            <p className="mt-10 text-sm font-medium text-foreground/80 sm:text-base">
              Figma Link
            </p>

            <h3 className="mt-6 text-sm font-medium text-foreground sm:text-base">
              Next steps
            </h3>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <li>Further validation for clinical information required</li>
              <li>
                Using clinical support decision to guide GPs on creating requests
              </li>
              <li>Allow saving a request as a draft</li>
              <li>Expand the product to other hospitals</li>
            </ul>

            <h2 className="mt-10 text-base font-medium text-foreground">
              Usability testing
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              In order to continually validate the medical information supplied
              in the request forms, constant feedback and validation is required
              from the GPs to ensure that all the required data is included when
              creating a request. The current version is an MVP, which allows a
              GP to create, track and manage a request so testing of further
              features will allow the product to evolve.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Challenges and constraints
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              One of the biggest challenges as a designer is having availability
              from the GPs and doctors, as they are understandably very busy and
              it can be hard to find time to run workshops. This is why I treat
              the meeting time of high value, with full preparation in order to
              leave the meeting with all information required and agreed next
              steps. Managing this time is important, valuing the time spent
              speaking to the specialists is critical to getting the best
              resources from the user base, which ultimately shape our design
              decisions.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Another challenge is to stay focused on feature prioritisation,
              whilst taking into consideration wider factors but staying on task
              with outcomes. There are unfortunately a large range of issues in
              the medical field currently, which GPs often express, however we
              need to remain concentrated on what is realistic expectations that
              the team can deliver, within a timeframe.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Client successes
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Successfully bringing live an electronic requesting system to
              London hospitals with a range of modalities, from ultrasound and
              cardiology with thorough testing and positive feedback from the
              clients. Hearing and seeing the impact being made on the GPs and
              doctors daily roles and providing them a software to provide a
              solution to their paper based problems.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              On a personal level, seeing my designs come to life from initially
              meeting with the stakeholders and client to understand their
              issues they are currently facing, to then generating ideas with
              the team to produce an efficient, usable, and streamlined
              electronic requesting product. Through vast ideation and
              collaboration, having the product live in Kingston hospital and
              seeing the enhancement in results in the form of business
              intelligence tracking and analytics proves the product has been
              successful in meeting the needs of the client and users in the
              early phases, with many more iterations to come.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}

