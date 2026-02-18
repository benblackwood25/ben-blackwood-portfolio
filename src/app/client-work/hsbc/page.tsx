import Image from "next/image";
import Link from "next/link";

const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
const SURFACE_INNER =
  "rounded-2xl border border-foreground/10 bg-foreground/[0.025]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
const CHIP =
  "rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-xs text-foreground/70";
const CHIP_LINK = `${CHIP} hover:border-emerald-300/40 hover:text-emerald-300/80 ${FOCUS_RING}`;

export default function HsbcCaseStudyPage() {
  const figmaUrl =
    "https://www.figma.com/proto/pL0feUwB3XAszgz0mB8OWZ/K?node-id=7-46104&node-type=frame&t=UNGVBUJvRX7UgBsw-0&scaling=min-zoom&content-scaling=fixed&page-id=7%3A37811&starting-point-node-id=7%3A46104";
  const leftChips = ["SaaS", "Fintech", "Jira"] as const;

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
            hsbc
          </h1>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
            alt="Rapid Prototyping – Early Dashboard Concept"
            width={1800}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </section>

        <section className="mt-4 space-y-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Client.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              As the lead Product Designer for HSBC’s Kinisi data ingestion tool
              I aimed to simplify the complex and manual workflows users faced
              when managing large data streams. Traditional tools were powerful
              but clunky and unintuitive slowing teams down and frustrating
              users. Kinisi was designed to fix that.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Discovery.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Through user interviews, workshops, and competitor analysis, I
              gathered deep insights into the challenges users faced with data
              ingestion tools. These revealed key pain points that hindered
              their workflow, including complex and time-consuming feed
              creation, manual error-prone mapping, and inadequate monitoring.
            </p>

            <p className="mt-10 text-sm font-medium text-foreground sm:text-base">
              Competitor Feature Comparison:
            </p>
            <div className="mt-4 mb-8 overflow-hidden rounded-lg">
              <Image
                src="/hsbc/artifacts/02-clean.png"
                alt="Competitor Feature Comparison"
                width={2048}
                height={1050}
                className="h-auto w-full scale-[1.02] -translate-y-[18px]"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              I mapped out all user insights gathered during discovery and
              narrowed them to clearly define the exact issues users faced with
              Kinisi’s data ingestion tool. A key feature of the tool is the
              ability to create custom data feeds and map them efficiently,
              ensuring seamless data flow from source to destination. Research
              showed users struggled with complex, manual workflows requiring
              multiple steps to map, configure, and ingest data.
            </p>

            <p className="mt-8 text-sm font-medium text-foreground/80 sm:text-base">
              The three main pain points identified were:
            </p>
            <div className="mt-4 space-y-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <div>
                <p className="font-medium text-foreground">
                  Complex Data Feed Creation
                </p>
                <p className="mt-2">
                  Users found defining data sources and destinations confusing
                  and time-consuming, with unclear workflows that made setting
                  up feeds difficult and inefficient.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Manual and Error-Prone Field Mapping
                </p>
                <p className="mt-2">
                  The mapping process required extensive manual input, leading
                  to frequent errors and frustration among users.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Poor Monitoring and Lack of Clear Error Handling
                </p>
                <p className="mt-2">
                  Users struggled to track data ingestion progress and
                  troubleshoot issues due to insufficient real-time monitoring
                  and vague error messages, causing downtime and delays.
                </p>
              </div>
            </div>

            <p className="mt-10 text-sm font-medium text-foreground sm:text-base">
              Mapping out the users current workflow:
            </p>
            <div className="mt-4 mb-8">
              <Image
                src="/hsbc/artifacts/03-workflow.png"
                alt="Mapping out the users current workflow"
                width={1054}
                height={1280}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Defining.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Focusing on the core problems, I worked closely with all
              stakeholders to define the key issues we were facing, such as the
              complexity of data feed creation, the difficulty of manual field
              mapping, and the lack of efficient monitoring and error handling.
              Through collaborative discussions, we identified these critical
              challenges in the data ingestion process. We then narrowed the
              scope to address these issues directly, ensuring that our solution
              would have the greatest impact. By focusing on the most pressing
              pain points, we were able to prioritize features that would
              deliver immediate value to users. This approach helped streamline
              the design process and ensured that our efforts were aligned with
              the goals of both the users and the business.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Problem.</h2>
            <p className="mt-4 text-sm font-medium text-foreground/80 sm:text-base">
              Problem Statement:
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              “Users are facing complex and time-consuming data ingestion processes,
              from creating data feeds to manually mapping fields between sources and
              destinations. These challenges are causing inefficiencies and errors,
              preventing teams from using data effectively and slowing down their
              workflows.”
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Solution.</h2>
            <p className="mt-4 text-sm font-medium text-foreground/80 sm:text-base">
              Solution Statement:
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              “To address the challenges of complex and time-consuming data ingestion
              processes, my team and I are developing a streamlined solution that
              simplifies feed creation, automates field mapping, and improves
              monitoring and error handling. As the lead designer, my role is to
              define the user experience, simplify workflows, and ensure the
              solution is intuitive and efficient—ultimately empowering teams to
              work more effectively and reduce errors.”
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              During research, I discovered users struggled to track and monitor
              execution details, making it hard to identify issues during data
              transfer. This critical pain point risked derailing the user
              experience. I prioritised it because addressing it promised the
              greatest and most immediate improvement in workflow efficiency.
            </p>

            <p className="mt-8 text-sm font-medium text-foreground/80 sm:text-base">
              To address the most pressing pain points, I led the team in
              prioritising and defining the solution:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <li>
                I presented user research findings to stakeholders to build
                consensus on focusing on feed creation, mapping, and monitoring
                improvements.
              </li>
              <li>
                I designed a streamlined, intuitive five-step workflow for data
                feed creation to reduce complexity and setup time.
              </li>
              <li>
                I implemented rapid prototyping to accelerate feedback cycles,
                iterating quickly with low-fidelity mockups and stakeholder
                input.
              </li>
              <li>
                I drove collaboration across design, product, and engineering to
                ensure alignment and deliver an efficient, user-centered
                solution.
              </li>
            </ul>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              This decision had a noticeable impact on the user experience.
              After implementing the new user experience in a canvas interface,
              users found the execution much easier to navigate, and
              identification times were drastically reduced through user
              testing. The rapid prototyping approach helped us fine-tune the
              process quickly, ensuring that we met user needs efficiently.
              This experience highlighted the importance of making data-driven
              decisions and being decisive when faced with competing priorities.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Rapid Prototyping – Early Dashboard Concept
            </h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/hsbc/artifacts/04.png"
                alt="Dashboard concept"
                width={1800}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Above is an example of a prototype that was used to quickly
              explore display data and navigation ideas with stakeholders. It
              allowed for fast iteration and validation of the overall structure
              before moving into final execution, ensuring the design aligned
              with user needs.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Results.</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
              <Image
                src="/hsbc/artifacts/05-results.png"
                alt="Execution Details"
                width={1800}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
            </div>
            <h2 className="mt-10 text-base font-medium text-foreground">
              Usability Testing
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Usability testing was conducted iteratively through moderated and
              unmoderated sessions across prototype fidelity levels. This
              approach enabled us to validate design decisions, identify
              friction points, and continuously improve user experience,
              resulting in measurable increases in task success and satisfaction.
            </p>

            <p className="mt-10 text-sm font-medium text-foreground/80 sm:text-base">
              Three main findings:
            </p>
            <div className="mt-6 space-y-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <div>
                <p className="font-medium text-foreground">
                  1. Navigation Issues:
                </p>
                <p className="mt-2">
                  Problem: Users felt lost between setup steps and unsure of
                  their progress.
                </p>
                <p className="mt-2">
                  How I Found It: Identified through usability testing, where
                  users consistently expressed confusion about where they were
                  in the process.
                </p>
                <p className="mt-2">
                  Solution: Simplified the navigation flow and added visual cues
                  to improve clarity and help users track their progress,
                  aligning with both user ease and business efficiency.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  2. Confusing Terminology:
                </p>
                <p className="mt-2">
                  Problem: Technical terms in the setup process confused users,
                  leading to errors.
                </p>
                <p className="mt-2">
                  How I Found It: Discovered during testing when users asked for
                  clarification or made mistakes due to unclear language.
                </p>
                <p className="mt-2">
                  Solution: Simplified the terminology and added tooltips to
                  provide context, making the process more intuitive and
                  reducing user errors, meeting both user and business goals.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  3. Vague Error Messages:
                </p>
                <p className="mt-2">
                  Problem: Error messages were too generic, leaving users unsure
                  about how to resolve issues.
                </p>
                <p className="mt-2">
                  How I Found It: Users reported difficulty troubleshooting
                  issues during usability testing.
                </p>
                <p className="mt-2">
                  Solution: Refined the error-handling system to provide more
                  detailed, actionable messages, helping users resolve problems
                  faster while maintaining efficient workflows for the business.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Challenges & Constraints
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Throughout the design process, the team and I faced several
              challenges, including complex data mapping, a tight development
              timeline, and misaligned stakeholder expectations, each of which
              required quick adaptation and prioritisation to maintain progress.
            </p>

            <div className="mt-6 space-y-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <div>
                <p className="font-medium text-foreground">
                  1. Complex Data Mapping:
                </p>
                <p className="mt-2">
                  When I learned it: During the wireframing phase, I realised
                  that users were struggling with the complexity of defining
                  data sources and destinations.
                </p>
                <p className="mt-2">
                  Challenge faced: Users found the manual field mapping process
                  overwhelming and error-prone, making it difficult to
                  efficiently set up data feeds.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  2. Tight Development Timeline:
                </p>
                <p className="mt-2">
                  When I learned it: As development progressed, I realised that
                  the project timeline was shorter than expected, putting
                  pressure on the team to complete the design quickly.
                </p>
                <p className="mt-2">
                  Challenge faced: The tight timeline forced us to prioritise
                  certain features over others, which reduced the time
                  available for testing and iteration.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  3. Misalignment of Stakeholder Expectations:
                </p>
                <p className="mt-2">
                  When I learned it: Midway through development, after
                  gathering feedback from stakeholders, I noticed that their
                  business goals conflicted with user-centered design
                  priorities.
                </p>
                <p className="mt-2">
                  Challenge faced: Conflicting expectations led to frequent
                  revisions and delays, which impacted the overall alignment
                  between business goals and user experience.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Key Learnings</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Leading the Kinisi project involved navigating several challenges
              and constraints, from which I learned valuable lessons that shaped
              my approach and improved the overall outcome.
            </p>

            <div className="mt-6 space-y-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <div>
                <p className="font-medium text-foreground">
                  1. Complex Data Mapping:
                </p>
                <p className="mt-2">
                  What I learned: Simplifying complex data mapping early on is
                  crucial to creating an intuitive user experience. I realised
                  that by breaking down the process into manageable steps, we
                  could reduce confusion and increase user efficiency.
                </p>
                <p className="mt-2">
                  What I would do next time: I would implement a more
                  streamlined approach, focusing on automating some of the data
                  mapping to reduce manual work. I would also introduce early
                  user testing to ensure the mapping process is as simple and
                  clear as possible.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  2. Tight Development Timeline:
                </p>
                <p className="mt-2">
                  What I learned: When faced with a tight deadline, prioritising
                  core features and focusing on the most critical user needs
                  ensures that the project remains on track. I learned that we
                  needed to balance speed with quality to meet deadlines without
                  sacrificing the overall user experience.
                </p>
                <p className="mt-2">
                  What I would do next time: I would start with a clearer
                  roadmap that includes buffer time for testing and refinement.
                  In future projects, I’d also focus on iterative, smaller
                  releases that allow for more flexibility in testing and
                  adjustments.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  3. Misalignment of Stakeholder Expectations:
                </p>
                <p className="mt-2">
                  What I learned: Early and frequent communication with
                  stakeholders is key to ensuring alignment between business
                  goals and user needs. I found that regular updates and design
                  reviews helped mitigate potential conflicts and kept the
                  project on track.
                </p>
                <p className="mt-2">
                  What I would do next time: I would involve stakeholders
                  earlier in the design process, particularly during the
                  wireframing and prototyping stages. By gaining alignment at
                  these early stages, I could minimise revisions and improve
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Outcomes & Successes
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The outcomes of the Kinisi product reflect significant
              improvements in user experience and operational efficiency,
              directly supporting HSBC’s broader business goal of enabling
              faster, more reliable data-driven decisions. Key successes
              included streamlining the data feed creation process, reducing
              data ingestion errors, and accelerating internal release cycles
              through faster iteration and feedback loops.
            </p>

            <div className="mt-6 space-y-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <div>
                <p className="font-medium text-foreground">
                  1. Improved Data Feed Creation Process:
                </p>
                <p className="mt-2">
                  Outcome: Reduced data feed creation time by 40%, tracked
                  through task completion times logged during usability testing
                  sessions.
                </p>
                <p className="mt-2">
                  How It Was Achieved: Simplified the data feed creation process
                  into an intuitive five-step workflow, adding visual cues and
                  tooltips to guide users through each step.
                </p>
                <p className="mt-2">
                  Success: This change resulted in faster setup times, greater
                  user satisfaction, and a significant reduction in
                  setup-related errors, improving overall adoption of the
                  product.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  2. Enhanced Data Accuracy:
                </p>
                <p className="mt-2">
                  Outcome: Decreased data ingestion errors by 30%, tracked
                  through error rate monitoring and product analytics.
                </p>
                <p className="mt-2">
                  How It Was Achieved: Added validation checks to alert users
                  about mismatches or incomplete data.
                </p>
                <p className="mt-2">
                  Success: This resulted in fewer data errors, smoother
                  ingestion processes, and a more accurate system for users.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground">
                  3. Successful Internal Release and Faster Iterations:
                </p>
                <p className="mt-2">
                  Outcome: Increased internal team feedback incorporation by
                  50%, measured by the number of actionable feedback points
                  addressed in each sprint.
                </p>
                <p className="mt-2">
                  How It Was Achieved: Used rapid prototyping to test features
                  internally and implemented changes in real-time.
                </p>
                <p className="mt-2">
                  Success: This led to reduced misalignments between teams, and
                  faster resolution of development challenges.
                </p>
              </div>
            </div>
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
      </main>
    </div>
  );
}

