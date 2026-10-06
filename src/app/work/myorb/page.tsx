import ProjectMeta from "../../../components/ProjectMeta";
import SiteHeader, { SiteFooter } from "../../../components/SiteHeader";
import ZoomableImage from "../../../components/ZoomableImage";
import {
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../../../components/siteChrome";
import { ACCENT, SPACE, TYPE } from "../../../components/type";

export default function MyOrbCaseStudyPage() {
  const tags = ["Healthcare", "Cloud software", "B2B"] as const;

  const figmaUrl =
    "https://www.figma.com/proto/eEwxT9CUNEXRYIhLPmpI9C/ER-US-and-ECHO-and-CT-and-MRI?node-id=39161-222310&scaling=min-zoom&page-id=39161%3A155108&starting-point-node-id=39161%3A222310&show-proto-sidebar=1";

  const paperProblems = [
    "Inefficiency",
    "Duplicate work",
    "Requests that could not be traced",
    "Requests that went undelivered",
  ] as const;

  const discoverySteps = [
    "Discovery workshops",
    "GP and doctor interviews",
    "Task flows and journey maps",
  ] as const;

  const solutionMoves = [
    {
      title: "Dashboard and navigation",
      body: "A side menu and wide main display so GPs could work with maximum screen width.",
    },
    {
      title: "Stepper",
      body: "Progress stayed visible through the requesting journey.",
    },
    {
      title: "Tooltips",
      body: "Tooltips gave control during the process, without extra screens.",
    },
    {
      title: "Design system and accessibility",
      body: "A scalable design system shared across 5 products, with WCAG accessibility built into components from the start.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top" className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={SPACE.blocks}>
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <p className={`${TYPE.label}`}>More work</p>
          <h1 className={`mt-3 ${TYPE.display}`}>
            myOrb
          </h1>
          <p className={`mt-4 max-w-[65ch] font-normal text-lg leading-[1.6] ${ACCENT.text}`}>
            Public cloud healthcare software
          </p>

          <ProjectMeta
            role="UX/UI Designer"
            company="myOrb"
            product="Electronic requesting for NHS hospitals"
            scope="Product discovery · User journeys · Interaction design · Usability testing"
            tags={tags}
            prototypeHref={figmaUrl}
          />
        </section>

        <section className={`${SURFACE} overflow-hidden`}>
          <div style={{ aspectRatio: "600 / 400" }}>
            <ZoomableImage
              src="/portfolio/work-myorb.png"
              alt="myOrb product screenshot on a laptop"
              width={600}
              height={400}
              className="h-auto w-full object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
              quality={95}
              priority
            />
          </div>
        </section>

        <section className={SPACE.blocks}>
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Context</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Digitalising NHS requesting
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              myOrb is a public cloud healthcare company founded in London in
              2012. It provides a private system with analytics, informatics,
              demand and workforce planning, with a mission to digitalise NHS
              processes and improve the speed and accuracy of patient visits.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I worked as a UX Designer on the electronic requesting system,
              replacing paper based processes so GPs and doctors could create,
              track and manage patient requests.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The work replaced a paper based process across the full request
              lifecycle: creating, tracking and managing patient requests.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Role</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Contributing inside a collaborative product and design process
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I worked within a collaborative product team alongside NHS
              clients, GPs, doctors and Engineering, contributing across
              discovery, interaction design and delivery.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I built a scalable design system adopted across 5 products,
              unifying the brand and speeding up design and delivery, and
              designed responsive web and mobile interfaces that met WCAG
              accessibility standards.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Discovery</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Understanding the clinical workflow
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I facilitated discovery workshops with the team to understand NHS
              pain points, set realistic expectations around budgets, timeframes
              and feature prioritisation, and agree objectives for the next
              steps.
            </p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-3">
              {discoverySteps.map((item, index) => (
                <li key={item} className={`${SURFACE_INNER} px-4 py-4`}>
                  <p className={ACCENT.mark}>
                    0{index + 1}
                  </p>
                  <p className={`mt-2 ${TYPE.h3}`}>
                    {item}
                  </p>
                </li>
              ))}
            </ol>
            <p className={`mt-6 ${TYPE.body}`}>
              After working through requirements with NHS clients, we
              interviewed GPs and doctors about how they currently created
              patient requests. Task flows and journey maps then showed where
              the process broke down from start to finish.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/myorb/artifacts/01.png"
                alt="myOrb discovery artifact"
                width={1577}
                height={158}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Discovery material from workshops with the product team
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/myorb/artifacts/03.png"
                alt="myOrb research synthesis"
                width={1567}
                height={501}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Research synthesis used to locate breakdowns in the requesting journey
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Problem</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Paper processes slowed care
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              GPs and doctors were using paper based processes for patient
              requests. Patients absorbed the impact.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {paperProblems.map((item) => (
                <li
                  key={item}
                  className={`${SURFACE_INNER} px-4 py-3 ${TYPE.h3}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mt-8 ${TYPE.label}`}>
              Product problem
            </p>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              GPs and doctors needed an electronic requesting system that
              allowed them to create, track and manage patient requests with
              hospitals, so visits could move with more speed and accuracy.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/myorb/artifacts/02.png"
                alt="myOrb problem statement artifact"
                width={1024}
                height={624}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Problem framing for electronic requesting
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Solution</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              A requesting journey that fits clinical work
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              We designed the electronic requesting journey step by step,
              checking early ideas with GPs and doctors so the workflow would
              fit everyday clinical work.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutionMoves.map((item) => (
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
                src="/myorb/artifacts/04.png"
                alt="myOrb electronic requesting interface"
                width={794}
                height={527}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Electronic requesting interface with dashboard layout, stepper and guidance in context
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Testing and iteration
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.label}`}>
                  Validation
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  We tested the workflow with GPs and doctors while it was still
                  in wireframes, to check that requesting was feasible before
                  high fidelity design.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.label}`}>
                  Live MVP
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  The live product lets a GP create, track and manage a request.
                  Ongoing feedback is still required to confirm that request
                  forms include the clinical information needed.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Constraints
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Limited access to clinicians
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  GPs and doctors have little spare time, which made workshops
                  hard to schedule. I treated each session as high value,
                  arriving prepared so we left with the information and next
                  steps needed to shape design decisions.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Feature prioritisation
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  Clinicians often raised wider issues in the medical field. We
                  had to stay focused on what the team could realistically
                  deliver within the timeframe.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Outcome</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Live in London hospitals
            </p>
            <div className={`${SURFACE_INNER} mt-6 p-6 sm:p-8`}>
              <p className={`${TYPE.label}`}>
                Product status
              </p>
              <p className={`${SPACE.title} ${TYPE.lead}`}>
                Live at Kingston hospital
              </p>
              <p className={`mt-2 ${TYPE.h3}`}>
                Ultrasound and cardiology modalities
              </p>
            </div>
            <p className={`mt-6 ${TYPE.body}`}>
              The electronic requesting system was brought live in London
              hospitals, covering modalities including ultrasound and
              cardiology, with thorough testing and positive client feedback.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Early business intelligence tracking and analytics showed
              improvement against the paper based process, with further
              iteration still ahead.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <ZoomableImage
                src="/myorb/artifacts/05.png"
                alt="myOrb live product screens"
                width={1319}
                height={791}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Live product screens for electronic requesting
            </p>
            <p className={`mt-8 ${TYPE.h3}`}>
              Next steps
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Further validation for clinical information required",
                "Using clinical support decision to guide GPs on creating requests",
                "Allow saving a request as a draft",
                "Expand the product to other hospitals",
              ].map((item) => (
                <li
                  key={item}
                  className={`${SURFACE_INNER} px-4 py-3 ${TYPE.h3}`}
                >
                  {item}
                </li>
              ))}
            </ul>
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
