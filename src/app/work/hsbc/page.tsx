import MockupFrame from "../../../components/MockupFrame";
import ProjectMeta from "../../../components/ProjectMeta";
import SiteHeader, { SiteFooter } from "../../../components/SiteHeader";
import ZoomableImage from "../../../components/ZoomableImage";
import {
  CHIP,
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../../../components/siteChrome";
import { ACCENT, SPACE, TYPE } from "../../../components/type";

export default function HsbcCaseStudyPage() {
  const figmaUrl =
    "https://www.figma.com/proto/pL0feUwB3XAszgz0mB8OWZ/K?node-id=7-46104&node-type=frame&t=UNGVBUJvRX7UgBsw-0&scaling=min-zoom&content-scaling=fixed&page-id=7%3A37811&starting-point-node-id=7%3A46104";
  const tags = ["Fintech", "B2B SaaS", "Enterprise", "Data infrastructure"] as const;

  const productImpact = [
    {
      metric: "40% faster",
      label: "Data feed creation",
      measured:
        "Tracked through task completion times logged during usability testing sessions.",
    },
    {
      metric: "30% fewer",
      label: "Data ingestion errors",
      measured: "Tracked through error rate monitoring and product analytics.",
    },
  ] as const;

  const processImpact = [
    {
      metric: "40% shorter",
      label: "Feedback cycles",
      measured:
        "AI-assisted prototyping shortened the loop between design iteration and stakeholder feedback.",
    },
    {
      metric: "4 days sooner",
      label: "Stakeholder approval",
      measured:
        "Earlier, more tangible prototypes reduced the time needed to reach stakeholder approval.",
    },
  ] as const;

  const painPoints = [
    {
      n: "01",
      title: "Complex feed creation",
      body: "Users found defining data sources and destinations confusing and time consuming.",
    },
    {
      n: "02",
      title: "Manual field mapping",
      body: "The mapping process required extensive manual input, increasing cognitive load and the risk of errors.",
    },
    {
      n: "03",
      title: "Poor monitoring and error handling",
      body: "Users struggled to understand ingestion progress and troubleshoot issues because monitoring and error states lacked clarity.",
    },
    {
      n: "04",
      title: "Unclear progress",
      body: "Users couldn't tell where they were in the setup process or what was left to complete.",
    },
  ] as const;

  const decisions = [
    {
      title: "Simplify the workflow structure",
      why: "Users struggled to understand where they were and what they needed to do next.",
      decision:
        "Break the process into clearer stages, with stronger navigation, visual cues and progress tracking.",
    },
    {
      title: "Reduce manual mapping friction",
      why: "Manual field mapping created unnecessary effort and increased the risk of errors.",
      decision:
        "Improve the mapping experience and introduce validation checks for mismatches and incomplete data.",
    },
    {
      title: "Make errors actionable",
      why: "Generic error messages left users unsure how to resolve problems.",
      decision: "Provide clearer, more actionable error states.",
    },
  ] as const;

  const tests = [
    {
      n: "01",
      title: "Navigation",
      finding: "Users were unsure where they were within the setup process.",
      response: "Simplified navigation and added clearer progress cues.",
    },
    {
      n: "02",
      title: "Terminology",
      finding:
        "Technical terminology created confusion and contributed to mistakes.",
      response: "Simplified language and added tooltips to provide context.",
    },
    {
      n: "03",
      title: "Error handling",
      finding: "Generic errors made troubleshooting difficult.",
      response: "Introduced more detailed and actionable error states.",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top" className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <div className={SPACE.blocks}>
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <p className={`${TYPE.label}`}>Selected work</p>
          <h1 className={`mt-3 ${TYPE.display}`}>
            HSBC
          </h1>
          <p className={`mt-4 max-w-[65ch] font-normal text-lg leading-[1.6] ${ACCENT.text}`}>
            Simplifying complex internal data workflows for enterprise teams
          </p>

          <ProjectMeta
            role="Product Designer"
            company="HSBC"
            product="B2B SaaS and data infrastructure"
            scope="Discovery · UX strategy · Interaction design · Prototyping · Usability testing · Delivery"
            tags={tags}
            prototypeHref={figmaUrl}
          />
        </section>

        <section>
          <MockupFrame
            glow="hsbc"
            src="/portfolio/hsbc_openlogs_mockup_spacegrey.png"
            alt="Kinisi product on a laptop"
            width={3903}
            height={2906}
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
            caption="Kinisi, the enterprise data ingestion platform"
          />
        </section>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Context</h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I led end to end product design for Kinisi, an enterprise data
              ingestion platform used to configure, map and monitor data feeds.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The challenge was to turn a technically complex workflow into a
              clear and reliable experience while balancing user needs,
              technical constraints and stakeholder priorities.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>My role</h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I acted as lead designer within the Data team, owning UX direction
              for Kinisi end to end and working closely with Product, Engineering
              and senior stakeholders to establish product direction across
              discovery, prioritisation, prototyping and validation.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              My responsibility was not simply to produce the interface. I
              decided which problems to solve, how to simplify a complex
              internal workflow, and how to build alignment around those
              decisions.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Discovery</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Understanding the system, not just the screen
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Through user interviews, workshops and competitor analysis, I
              identified the main sources of friction across the data ingestion
              workflow.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The core challenge was not a single interface problem. Users were
              moving through a chain of connected tasks involving feed creation,
              field mapping, validation and monitoring.
            </p>

            <div
              className="mt-8 overflow-hidden rounded-lg"
              style={{ aspectRatio: "3840 / 1908" }}
            >
              <ZoomableImage
                src="/hsbc/artifacts/feature_comparison_table@2x.png"
                alt="Competitor analysis comparing AirByte, IBM DataStage, Matillion and Prophecy across seven data ingestion features"
                width={3840}
                height={1908}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1120px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Competitor analysis used to locate friction in feed creation, mapping and monitoring
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {painPoints.map((item) => (
                <div key={item.n} className={`${SURFACE_INNER} p-5`}>
                  <p className={ACCENT.mark}>
                    {item.n}
                  </p>
                  <p className={`mt-3 ${TYPE.h3}`}>
                    {item.title}
                  </p>
                  <p className={`mt-2 ${TYPE.body}`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Understanding the existing workflow
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              Before designing the new experience, I mapped the current journey
              to understand where complexity accumulated and where users were
              most likely to lose confidence.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Feed setup moved through job creation, orchestration, governance,
              preferences, scheduling and approval. Complexity sat in the
              connections between those stages, not in any single screen.
            </p>
            <div
              className="mt-6 overflow-hidden rounded-2xl"
              style={{ aspectRatio: "5064 / 5928" }}
            >
              <ZoomableImage
                src="/hsbc/artifacts/job_flow_outline@3x.png"
                alt="Mapped current data ingestion workflow"
                width={5064}
                height={5928}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1120px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Current journey mapped across job creation, orchestration, governance, preferences, scheduling and approval
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Defining the problem
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              The research showed that the biggest opportunity was not simply
              improving individual screens. The underlying workflow needed to
              become easier to understand and more predictable.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              I worked with Product, Engineering and stakeholders to prioritise
              the areas where design could create the greatest impact.
            </p>
          </div>

          <div>
            <p className={`${TYPE.label}`}>
              Design challenge
            </p>
            <p className={`${SPACE.title} ${TYPE.display}`}>
              How might we make a technically complex workflow feel predictable
              and manageable without hiding the complexity users actually need?
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <p className={`${TYPE.h3}`}>
              I presented research findings to build consensus around the
              workflows with the greatest user and operational impact:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Feed creation",
                "Field mapping",
                "Monitoring",
                "Error handling",
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

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              The solution
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              Research showed the problem wasn't any single screen. Users
              couldn't tell where they were in setup, mapping sources to targets
              was manual and error-prone, and errors only surfaced after a feed
              had already failed. The workflow map confirmed it: complexity sat
              in the hand-offs between stages, with feed setup and job setup
              tangled together.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              So I split the workflow into two clear stages, each with one job
              to do.
            </p>
            <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
              <div className={`${SURFACE_INNER} flex h-full flex-col p-5`}>
                <p className={ACCENT.mark}>Stage 1</p>
                <p className={`mt-3 ${TYPE.h3}`}>Feed creation</p>
                <p className={`mt-2 ${TYPE.small}`}>
                  <span className="whitespace-nowrap">Information → </span>
                  Configuration
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  Users build the connection between source and target on a
                  visual canvas instead of filling in long forms. Validation
                  runs as they build, so mismatches and incomplete data are
                  caught before a feed is saved, not after it fails.
                </p>
                <div className="mt-auto pt-6 sm:pt-8">
                  <p className={TYPE.label}>Solves</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    <li className={`inline-flex items-center gap-1.5 ${CHIP}`}>
                      <span className={ACCENT.mark}>01</span>
                      Feed creation
                    </li>
                    <li className={`inline-flex items-center gap-1.5 ${CHIP}`}>
                      <span className={ACCENT.mark}>02</span>
                      Field mapping
                    </li>
                  </ul>
                  <div
                    className="mt-4 overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "3756 / 3062" }}
                  >
                    <ZoomableImage
                      src="/hsbc/artifacts/hsbc_create_feed_mockup_spacegrey.png"
                      alt="Kinisi feed creation canvas connecting an Oracle source to an HDFS target"
                      width={3756}
                      height={3062}
                      className="h-auto w-full object-contain"
                      sizes="(min-width: 1280px) 560px, 100vw"
                      quality={95}
                    />
                  </div>
                  <p className={`${SPACE.tight} min-h-[3rem] ${TYPE.small}`}>
                    Feed creation with built-in validation
                  </p>
                </div>
              </div>
              <div className={`${SURFACE_INNER} flex h-full min-w-0 flex-col p-5`}>
                <p className={ACCENT.mark}>Stage 2</p>
                <p className={`mt-3 ${TYPE.h3}`}>Job setup</p>
                <p className={`mt-2 min-w-0 ${TYPE.small}`}>
                  <span className="whitespace-nowrap">Orchestration →</span>
                  {" "}
                  <span className="whitespace-nowrap">Governance →</span>
                  {" "}
                  <span className="whitespace-nowrap">Preferences →</span>
                  {" "}
                  <span className="whitespace-nowrap">Schedule →</span>
                  {" "}
                  Approval
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  Once a feed exists, users configure how and when it runs.
                  Every step sits in a persistent progress bar, so they always
                  know where they are and what's left.
                </p>
                <div className="mt-auto pt-6 sm:pt-8">
                  <p className={TYPE.label}>Solves</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    <li className={`inline-flex items-center gap-1.5 ${CHIP}`}>
                      <span className={ACCENT.mark}>03</span>
                      Monitoring and errors
                    </li>
                    <li className={`inline-flex items-center gap-1.5 ${CHIP}`}>
                      <span className={ACCENT.mark}>04</span>
                      Unclear progress
                    </li>
                  </ul>
                  <div
                    className="mt-4 overflow-hidden rounded-2xl"
                    style={{ aspectRatio: "3756 / 3062" }}
                  >
                    <ZoomableImage
                      src="/hsbc/artifacts/hsbc_job_setup_alerts_mockup_spacegrey.png"
                      alt="Kinisi job setup with a persistent progress bar and failure alerts configured in a side panel"
                      width={3756}
                      height={3062}
                      className="h-auto w-full object-contain"
                      sizes="(min-width: 1280px) 560px, 100vw"
                      quality={95}
                    />
                  </div>
                  <p className={`${SPACE.tight} min-h-[3rem] ${TYPE.small}`}>
                    Job setup, with progress tracked across each step and failure alerts configured in context
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Design system
            </h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Every screen was designed within Create, HSBC's enterprise design system. I applied its components, patterns and standards consistently across the feed and job workflows, so Kinisi stayed aligned with HSBC's wider product estate.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              Working within an established system meant focusing design effort on the workflow problems rather than reinventing UI, and gave Engineering a reliable, consistent foundation to build from.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <p className={`${TYPE.h3}`}>
                  Standards
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  HSBC's Create design system, applied consistently
                </p>
              </div>
              <div>
                <p className={`${TYPE.h3}`}>
                  Components
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  Existing patterns reused across feed and job setup
                </p>
              </div>
              <div>
                <p className={`${TYPE.h3}`}>
                  Delivery
                </p>
                <p className={`mt-3 ${TYPE.body}`}>
                  Faster handoff and consistent build
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className={`${SPACE.title} ${TYPE.display}`}>
              The complexity stayed in the system. The clarity moved into the
              interface.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Key design decisions
            </h2>
            <div className="mt-6 grid gap-4">
              {decisions.map((item, index) => (
                <div key={item.title} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                  <p className={ACCENT.mark}>
                    Decision {index + 1}
                  </p>
                  <p className={`mt-2 ${TYPE.h2}`}>
                    {item.title}
                  </p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className={`${TYPE.label}`}>
                        Why
                      </dt>
                      <dd className={`mt-2 ${TYPE.body}`}>
                        {item.why}
                      </dd>
                    </div>
                    <div>
                      <dt className={`${TYPE.label}`}>
                        Decision
                      </dt>
                      <dd className={`mt-2 ${TYPE.body}`}>
                        {item.decision}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Prototyping to align the team early
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I introduced AI-assisted prototyping to explore different
              approaches to navigation, data display and workflow structure
              before committing to final execution.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The prototypes gave Product, Engineering and stakeholders
              something tangible to react to, allowing us to identify issues
              earlier and shorten the feedback loop.
            </p>
            <div
              className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]"
              style={{ aspectRatio: "3072 / 1683" }}
            >
              <ZoomableImage
                src="/hsbc/artifacts/04-dashboard.jpg"
                alt="Kinisi dashboard prototype showing feed metrics, current and new feeds, and recent executions"
                width={3072}
                height={1683}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Rapid prototype used to align Product, Engineering and stakeholders before committing to execution
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Testing what worked, then iterating
            </h2>
            <div className="mt-6 grid gap-4">
              {tests.map((item) => (
                <div key={item.n} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                  <p className={ACCENT.mark}>
                    <span>{item.n}</span>{" "}
                    {item.title}
                  </p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className={`${TYPE.label}`}>
                        Finding
                      </dt>
                      <dd className={`mt-2 ${TYPE.body}`}>
                        {item.finding}
                      </dd>
                    </div>
                    <div>
                      <dt className={`${TYPE.label}`}>
                        Design response
                      </dt>
                      <dd className={`mt-2 ${TYPE.body}`}>
                        {item.response}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <p className={`mt-6 ${TYPE.body}`}>
              Testing was conducted iteratively across prototype fidelity levels
              using moderated and unmoderated sessions. Findings were used to
              refine the experience before delivery.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Monitoring in the product
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              I also prioritised execution monitoring. Users struggled to track
              transfer issues, so I focused design effort on making execution
              details easier to inspect in a canvas interface.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The redesigned execution view made job status, lineage and signal
              detail easier to inspect, so users could identify issues during
              data transfer without guessing.
            </p>
            <div
              className="mt-6 overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3756 / 2814" }}
            >
              <ZoomableImage
                src="/hsbc/artifacts/hsbc_data_controls_mockup_spacegrey.png"
                alt="Kinisi execution details interface"
                width={3756}
                height={2814}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1120px, 100vw"
                quality={95}
              />
            </div>
            <p className={`${SPACE.tight} ${TYPE.small}`}>
              Execution view designed so users can inspect job status, lineage and signal detail during transfer
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              Leading through constraints
            </h2>
            <div className="mt-6 grid gap-4">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Complex technical requirements
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  The underlying data model could not simply be removed, so the
                  design focus was on making the complexity easier to understand
                  and operate.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Delivery pressure
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  A tight development timeline required prioritisation. I focused
                  design effort on the workflows with the greatest user and
                  operational impact.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className={`${TYPE.h3}`}>
                  Stakeholder alignment
                </p>
                <p className={`mt-2 ${TYPE.body}`}>
                  Business priorities and user needs did not always point in the
                  same direction. I used research findings, workflow evidence
                  and design reviews to create alignment around the problem
                  rather than opinion.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Impact</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              Measured outcomes
            </p>
            <div className="mt-12 space-y-10 sm:mt-16">
              {[
                { heading: "Product impact", items: productImpact },
                { heading: "Process impact", items: processImpact },
              ].map((group) => (
                <div key={group.heading}>
                  <p className={TYPE.label}>{group.heading}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div key={item.label} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                        <p className={ACCENT.metric}>
                          {item.metric}
                        </p>
                        <p className={`mt-3 ${TYPE.h3}`}>
                          {item.label}
                        </p>
                        <p className={`${SPACE.tight} ${TYPE.small}`}>
                          {item.measured}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>
              What I would take forward
            </h2>
            <p className={`mt-4 ${TYPE.body}`}>
              For future iterations, I would explore further opportunities to
              automate manual mapping and continue validating the workflow with
              users as the product evolves.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className={`${TYPE.h1}`}>Outcome</h2>
            <p className={`${SPACE.title} ${TYPE.lead}`}>
              A clearer workflow with measured operational impact
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              The project turned a complex data ingestion workflow into a
              clearer, more predictable experience, reducing setup time and
              errors while speeding up feedback and stakeholder approval.
            </p>
            <p className={`mt-4 ${TYPE.body}`}>
              More importantly, it demonstrated how design could create
              alignment across users, Product and Engineering while working
              within technical and delivery constraints.
            </p>
          </div>

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
