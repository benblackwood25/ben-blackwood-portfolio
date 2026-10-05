import Image from "next/image";
import SiteHeader, { SiteFooter } from "../../../components/SiteHeader";
import {
  CHIP,
  CHIP_LINK,
  FOCUS_RING,
  SURFACE,
  SURFACE_INNER,
} from "../../../components/siteChrome";

export default function HsbcCaseStudyPage() {
  const figmaUrl =
    "https://www.figma.com/proto/pL0feUwB3XAszgz0mB8OWZ/K?node-id=7-46104&node-type=frame&t=UNGVBUJvRX7UgBsw-0&scaling=min-zoom&content-scaling=fixed&page-id=7%3A37811&starting-point-node-id=7%3A46104";
  const leftChips = ["SaaS", "Fintech", "Jira"] as const;

  const impact = [
    {
      metric: "40%",
      label: "Reduction in data feed creation time",
      measured:
        "Tracked through task completion times logged during usability testing sessions.",
      how: "Reduced data feed creation time by 40 percent by simplifying the workflow into a clearer five step process and adding visual cues and tooltips.",
    },
    {
      metric: "30%",
      label: "Reduction in data ingestion errors",
      measured: "Tracked through error rate monitoring and product analytics.",
      how: "Reduced data ingestion errors by 30 percent through validation checks for mismatches and incomplete data, plus clearer error handling.",
    },
    {
      metric: "50%",
      label: "Increase in actionable internal feedback incorporated during iteration",
      measured:
        "Measured by the number of actionable feedback points addressed in each sprint.",
      how: "Increased incorporation of actionable internal feedback by 50 percent through rapid prototyping and shorter feedback cycles.",
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

  const currentStages = [
    "Create Job",
    "Orchestration",
    "Governance",
    "Preferences",
    "Schedule",
    "Approval",
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
        <section className={`${SURFACE} p-6 sm:p-10`}>
          <p className="text-sm font-medium text-foreground/65">Selected work</p>
          <h1 className="mt-3 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            HSBC
          </h1>
          <p className="mt-4 max-w-[40ch] text-xl font-medium leading-8 text-emerald-300/80 sm:text-2xl">
            Simplifying complex data workflows for enterprise teams
          </p>

          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-3 sm:text-base">
            <div>
              <dt className="text-foreground/55">Role</dt>
              <dd className="mt-1 font-medium text-foreground/90">
                Product Designer
              </dd>
            </div>
            <div>
              <dt className="text-foreground/55">Product</dt>
              <dd className="mt-1 font-medium text-foreground/90">
                B2B SaaS and data infrastructure
              </dd>
            </div>
            <div>
              <dt className="text-foreground/55">Scope</dt>
              <dd className="mt-1 font-medium text-foreground/90">
                Discovery, UX strategy, interaction design, prototyping, usability testing and delivery
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {leftChips.map((t) => (
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

        <section className={`mt-4 ${SURFACE} overflow-hidden p-0`}>
          <Image
            src="/hsbc/artifacts/01.png"
            alt="Kinisi product on a laptop"
            width={1800}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </section>

        <section className="mt-4 space-y-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Client</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I led end to end product design for Kinisi, an enterprise data
              ingestion platform used to configure, map and monitor data feeds.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The challenge was to turn a technically complex workflow into a
              clear and reliable experience while balancing user needs,
              technical constraints and stakeholder priorities.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">My role</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I owned the end to end UX direction for Kinisi, working closely
              with Product, Engineering and stakeholders across discovery,
              prioritisation, prototyping and validation.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              My responsibility was not simply to produce the interface. I was
              responsible for deciding which problems to solve, how to simplify
              the workflow and how to build alignment around those decisions.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Impact</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {impact.map((item) => (
                <div key={item.metric} className={`${SURFACE_INNER} p-5`}>
                  <p className="text-4xl font-medium tracking-tight text-emerald-300/85">
                    {item.metric}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">
                    {item.measured}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              {impact.map((item) => (
                <p key={item.how}>{item.how}</p>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Discovery</h2>
            <p className="mt-2 text-xl font-medium leading-8 text-foreground/90 sm:text-2xl">
              Understanding the system, not just the screen
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Through user interviews, workshops and competitor analysis, I
              identified the main sources of friction across the data ingestion
              workflow.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The core challenge was not a single interface problem. Users were
              moving through a chain of connected tasks involving feed creation,
              field mapping, validation and monitoring.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg">
              <Image
                src="/hsbc/artifacts/02-clean.png"
                alt="Competitor feature comparison"
                width={2048}
                height={1050}
                className="h-auto w-full scale-[1.02] -translate-y-[18px]"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item.n} className={`${SURFACE_INNER} p-5`}>
                  <p className="text-sm font-medium text-emerald-300/80">
                    {item.n}
                  </p>
                  <p className="mt-3 text-base font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Understanding the existing workflow
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Before designing the new experience, I mapped the current journey
              to understand where complexity accumulated and where users were
              most likely to lose confidence.
            </p>
            <p className="mt-6 text-sm font-medium text-foreground/80 sm:text-base">
              Current workflow
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {currentStages.map((item) => (
                <li
                  key={item}
                  className={`${SURFACE_INNER} px-4 py-3 text-sm font-medium text-foreground/85`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Feed setup moved through job creation, orchestration, governance,
              preferences, scheduling and approval. Complexity sat in the
              connections between those stages, not in any single screen.
            </p>
            <div className="mt-6">
              <Image
                src="/hsbc/artifacts/03-workflow.png"
                alt="Mapped current data ingestion workflow"
                width={1054}
                height={1280}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Defining the problem
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The research showed that the biggest opportunity was not simply
              improving individual screens. The underlying workflow needed to
              become easier to understand and more predictable.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I worked with Product, Engineering and stakeholders to prioritise
              the areas where design could create the greatest impact.
            </p>
            <p className="mt-6 text-sm font-medium text-foreground/80 sm:text-base">
              The design challenge became:
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-foreground sm:text-xl">
              How might we make a technically complex workflow feel predictable
              and manageable without hiding the complexity users actually need?
            </p>

            <p className="mt-8 text-sm font-medium text-foreground/80 sm:text-base">
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
                  className={`${SURFACE_INNER} px-4 py-3 text-sm font-medium text-foreground/85`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              The solution
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I designed a streamlined five step workflow for data feed
              creation, separating complex tasks into clearer stages and
              introducing stronger guidance through visual cues and tooltips.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The goal was not to remove complexity from the underlying system.
              It was to make that complexity easier for users to understand and
              act on.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I also prioritised execution monitoring. Users struggled to track
              transfer issues, so I focused design effort on making execution
              details easier to inspect in a canvas interface.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Key design decisions
            </h2>
            <div className="mt-6 grid gap-4">
              {decisions.map((item, index) => (
                <div key={item.title} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                  <p className="text-sm font-medium text-emerald-300/80">
                    Decision {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-medium text-foreground">
                    {item.title}
                  </p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-foreground/55">
                        Why
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-foreground/75">
                        {item.why}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-foreground/55">
                        Decision
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-foreground/75">
                        {item.decision}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Prototyping to align the team early
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I used rapid prototypes to explore different approaches to
              navigation, data display and workflow structure before committing
              to final execution.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The prototypes gave Product, Engineering and stakeholders
              something tangible to react to, allowing us to identify issues
              earlier and shorten the feedback loop.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/hsbc/artifacts/04.png"
                alt="Early dashboard concept used in rapid prototyping"
                width={1800}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Testing what worked, then iterating
            </h2>
            <div className="mt-6 grid gap-4">
              {tests.map((item) => (
                <div key={item.n} className={`${SURFACE_INNER} p-5 sm:p-6`}>
                  <p className="text-sm font-medium text-emerald-300/80">
                    {item.n} {item.title}
                  </p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-foreground/55">
                        Finding
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-foreground/75">
                        {item.finding}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-foreground/55">
                        Design response
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-foreground/75">
                        {item.response}
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Testing was conducted iteratively across prototype fidelity levels
              using moderated and unmoderated sessions. Findings were used to
              refine the experience before delivery.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Monitoring in the product
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The redesigned execution view made job status, lineage and signal
              detail easier to inspect, so users could identify issues during
              data transfer without guessing.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/hsbc/artifacts/05-results.png"
                alt="Kinisi execution details interface"
                width={1800}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Leading through constraints
            </h2>
            <div className="mt-6 grid gap-4">
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className="text-base font-medium text-foreground">
                  Complex technical requirements
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7">
                  The underlying data model could not simply be removed, so the
                  design focus was on making the complexity easier to understand
                  and operate.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className="text-base font-medium text-foreground">
                  Delivery pressure
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7">
                  A tight development timeline required prioritisation. I focused
                  design effort on the workflows with the greatest user and
                  operational impact.
                </p>
              </div>
              <div className={`${SURFACE_INNER} p-5 sm:p-6`}>
                <p className="text-base font-medium text-foreground">
                  Stakeholder alignment
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7">
                  Business priorities and user needs did not always point in the
                  same direction. I used research findings, workflow evidence
                  and design reviews to create alignment around the problem
                  rather than opinion.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              What I would take forward
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              For future iterations, I would explore further opportunities to
              automate manual mapping and continue validating the workflow with
              users as the product evolves.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Outcome</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The project turned a complex data ingestion workflow into a
              clearer, more predictable experience while reducing setup time
              and errors.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              More importantly, it demonstrated how design could create
              alignment across users, Product and Engineering while working
              within technical and delivery constraints.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <p className="text-base font-medium text-foreground/80">
              Want to learn more?
            </p>
            <a
              href="mailto:benblackwood25@gmail.com"
              className={`mt-4 inline-flex rounded-md text-sm font-medium text-emerald-300/80 underline-offset-4 hover:underline ${FOCUS_RING}`}
            >
              benblackwood25@gmail.com
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
