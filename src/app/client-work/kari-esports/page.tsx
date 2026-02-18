import Image from "next/image";
import Link from "next/link";

const SURFACE =
  "rounded-3xl border border-foreground/10 bg-foreground/[0.04] backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)]";
const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40";
const CHIP =
  "rounded-full border border-foreground/10 bg-foreground/[0.02] px-3 py-1 text-xs text-foreground/70";
const CHIP_LINK = `${CHIP} hover:border-emerald-300/40 hover:text-emerald-300/80 ${FOCUS_RING}`;

export default function KariEsportsCaseStudyPage() {
  const figmaUrl =
    "https://www.figma.com/proto/47ndRaX2vRVPSrlqKCwkwG/Portfolio-P%25?node-id=102%3A3348&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A624";
  const mediumUrl = "https://medium.com/@benblackwood25";
  const leftChips = ["UX & UI Design", "UI Lead", "Jira"] as const;

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
            kari esports
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
              <a
                href={mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={CHIP_LINK}
              >
                Medium link
              </a>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <Image
            src="/kari/artifacts/01-hero.png"
            alt="kari esports website shown on a laptop"
            width={1024}
            height={676}
            className="h-auto w-full rounded-lg"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </section>

        <section className="mt-4 space-y-4">
          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Client.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Kari eSports is a competitive esports gaming company. Based out of
              USA and founded in 2022, they are on a mission to spotlight
              margalised gamers to give them the platform to showcase their
              skills and talents within the gaming industry. Through research,
              strategy, designing and prototyping, we partnered with
              kariESPORTS, to improve their digital communications and provide
              them a platform to engage their audience in attracting potential
              players to the team and also brands and sponsors to help support
              the team.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Discovery.</h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              In order to gather a deeper understanding of the brand’s vision
              and the problems they are currently facing, I facilitated a
              discovery workshop with the client and my fellow designers. This
              was the first step in our research to further recognise the
              industry, organisation and challenges at hand. Once acquired, we
              strove to gain further knowledge on the user base in surveying and
              interviewing gamers and also potential brands and sponsors. This
              meant our data was validated by the target user base in getting to
              the core of the pain points and challenges faced currently when
              searching esports websites, but also to find out what they wanted
              to see in an esports gaming website.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Whilst receiving information from the client to create a website
              interface that stands out from the market, we wanted to research
              other competitors in the esports gaming space to see how their
              websites visually reflected their brand. This allowed us to gather
              inspiration for later down the design process, to see how to
              differ the interface for kariESPORTS and to take features that
              would be appropriate from other websites.
            </p>

            <Image
              src="/kari/artifacts/02-competitors.png"
              alt="Competitor / inspiration references"
              width={1292}
              height={537}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Key takeaways
            </h2>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              <li>
                Users wanted to see player information, including their picture
                and contact info
              </li>
              <li>Users wanted to see updated scores and the team’s schedule</li>
              <li>
                Users wanted to see the description of the team’s game and
                discord channels
              </li>
              <li>
                Users didn’t want to see too many bright colours and neon
                colours
              </li>
              <li>
                Users didn’t want to see an overstimulating design and cluttered
                information
              </li>
              <li>
                Users didn’t want to see merch being thrown in your face when
                entering the site
              </li>
            </ul>

            <Image
              src="/kari/artifacts/03-key-takeaways.png"
              alt="Key takeaways visual"
              width={723}
              height={345}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Defining.</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              In order to define the problem at hand into a clear focus, we
              synthesised our research by collecting all our insights from the
              client, user research and competitor analysis to see what common
              trends appeared. This allowed us to visualise the key trends in
              what users wanted in esports gaming websites.
            </p>

            <Image
              src="/kari/artifacts/04-defining.png"
              alt="Defining insights visual"
              width={1452}
              height={424}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Problem.</h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Open and closed card sorting was carried out with the target user
              group in order to further validate how they understood and
              categorised the esports gaming information. This would allow us to
              see how they have grouped together the information, to identify
              relatable trends.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              After understanding the clients requirements and target users
              feedback surrounding esports gaming websites, we also wanted to
              deep-dive into the esports industry and the competitors out there,
              which would allow us to see what features their websites were
              currently implementing.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              It was highly important to create personas, so we could always
              refer back to who exactly we were going to be designing for,
              highlighting their goals and frustrations as a user of the
              website. As you can see, we decided to stay with the gamer theme
              to represent our two types of user.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Solution.</h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Once we analysed our results from our card sorting, we then used
              this to create the information architecture on the website. This
              allowed us to visualise how our global navigation would look on
              the interface, with lots of users from our research saying it was
              confusing to navigate on most esports websites, we wanted to make
              sure we listened to the users to create a streamlined navigation.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              To begin providing our solution, we needed to now take all our
              research and insights gathered previously, to start ideating to
              how can we best design the website with all the information we
              have now acquired.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              To do this, as UI Lead, I headed up a design workshop with Lizzie
              and Joyce in order to brain storm as many ideas as possible in
              lower fidelity to generate ideas together. From here, we were able
              to optimise the workflow and wireframes from the sketches. A key
              part of our iteration phase was testing our wireframes with the
              user group, to ensure they were validated and useful before
              designing in Figma.
            </p>

            <Image
              src="/kari/artifacts/05-workshop.png"
              alt="Workshop / wireframe iteration"
              width={663}
              height={295}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">Results.</h2>

            <h2 className="mt-10 text-base font-medium text-foreground">
              Usability testing
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              During the final stage of our design, I implemented some further
              changes to our high-fidelity prototype to further meet the needs
              of our users. Due to the restricted time on our project, it meant
              that these additions weren’t able to be user tested towards the
              end of the project, so to further validate these functions it is
              of key importance to test these with the user base to gain a
              further insight into their effectiveness.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              The main function that was changed was moving the navigation from
              a top global navigation to a hamburger menu to meet the clients’
              needs of not having a cluttered interface, to meet both the needs
              of the users and to make the website stand out from other esports
              websites. This also allowed the brand/sponsors to get a quick
              oversight of the players profiles from the landing page.
            </p>

            <Image
              src="/kari/artifacts/06-results.png"
              alt="Results visual"
              width={1934}
              height={590}
              className="mt-6 h-auto w-full rounded-lg"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Challenges and constraints
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              We encountered a few challenges along the way during this client
              work, which we had planned contingency time for, but meant
              creative thinking was required to work around the problem. For our
              initial user research, we planned to reach out to brands/sponsors
              of esports gaming teams to really get a deep understanding of
              their perspective when it comes to their esports website
              expectations. Unfortunately, however, we were only able to
              interview two brand/sponsors due to a lack of time which meant our
              data was limited.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              So as our next steps, we want to further interview brands/sponsors
              to really hone in on the pain points the users come across when
              visiting an esports website. Another challenge we came across was
              to really stay on brand with the interface design by keeping it
              minimalist, simplistic and modern, whilst not looking like a
              typical esports gaming website. At the same time, we needed the
              website to appeal to brands/sponsors for the team and players. So
              it was a balancing act to incorporate the business needs and the
              users’ needs, ensuring every decision was related to our mission
              and our brief.
            </p>
          </div>

          <div className={`${SURFACE} p-6 sm:p-10`}>
            <h2 className="text-base font-medium text-foreground">
              Client successes
            </h2>

            <p className="mt-4 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              Working collaboratively in order to successfully meet the needs
              of the client, in creating a website to attract her target
              audience whilst emphasising the unique mission statement.
              Showcasing the newly designed website to the client resulted in
              fantastic feedback, further emulating the success of the work in
              achieving its goal.
            </p>

            <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-base sm:leading-8">
              As a team of UX Designers, balancing each others’ strengths and
              weaknesses to successfully
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

