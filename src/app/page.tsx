import Link from "next/link";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import { Reveal } from "./_components/reveal";
import { Icon } from "./_components/icon";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative mx-auto flex min-h-[819px] max-w-container-max flex-col justify-center px-gutter">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="z-10">
              <h1 className="mb-4 font-display-lg text-display-lg-mobile leading-tight text-primary md:text-display-lg">
                LET&rsquo;S <br />
                <span className="text-on-background">SOAR</span> <br />
                TOGETHER
              </h1>
              <p className="max-w-md font-body-lg text-body-lg italic text-on-surface-variant opacity-80">
                We&rsquo;re more than excited to conquer the skies with you! From
                the heart of the Philippines, we bring aerodynamic precision to
                digital strategy.
              </p>
              <div className="mt-10 flex gap-4">
                <div className="h-px w-12 self-center bg-primary"></div>
                <span className="font-label-sm text-label-sm uppercase text-primary">
                  EST. 2024 / MANILA
                </span>
              </div>
            </div>
            <div className="bird-float relative">
              <div className="absolute -inset-10 rounded-full bg-primary/5 blur-3xl"></div>
              <img
                alt="A tropical bird in full flight, wings spread wide against a clean light background."
                className="mask-image h-auto w-full object-contain opacity-90 mix-blend-multiply"
                src="/lark/about-hero.png"
              />
            </div>
          </div>
        </section>

        {/* Our Story / Philosophy */}
        <section className="bg-surface-container-low py-section-gap">
          <div className="mx-auto grid max-w-container-max items-center gap-12 px-gutter md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <span className="mb-4 block font-label-sm text-label-sm uppercase text-primary">
                THE GENESIS
              </span>
              <h2 className="mb-8 font-headline-lg text-headline-lg text-on-background">
                CRAFTING DIGITAL <br />
                ASCENSION
              </h2>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                Lark Advertising emerged from a singular vision: that digital
                marketing shouldn&rsquo;t just exist&mdash;it should soar. Based
                in the Philippines, we blend localized cultural insight with
                global strategic standards.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our journey began as a boutique collective of creatives and
                engineers. Today, we are a full-service agency redefined by
                aerodynamic precision in every line of code and every pixel of
                creative.
              </p>
            </Reveal>
            <Reveal delay={200} className="grid grid-cols-2 gap-4 md:col-span-7">
              <div className="relative flex h-96 items-end overflow-hidden bg-primary-container p-6">
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
                  alt="A bright, modern Manila office space."
                  src="/lark/about-creative-hub.png"
                />
                <span className="relative z-10 font-display-lg text-headline-md text-on-primary-container">
                  CREATIVE HUB
                </span>
              </div>
              <div className="relative mt-12 flex h-96 items-start overflow-hidden bg-on-background p-6">
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
                  alt="A team collaborating in a high-tech conference room."
                  src="/lark/about-strategic-core.png"
                />
                <span className="relative z-10 font-display-lg text-headline-md text-primary">
                  STRATEGIC CORE
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expertise Bento Grid */}
        <section className="mx-auto max-w-container-max px-gutter py-section-gap">
          <Reveal className="mb-20 text-center">
            <span className="mb-2 block font-label-sm text-label-sm uppercase text-primary">
              WHAT WE DO
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              OUR EXPERTISE
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal className="border-l-4 border-primary bg-surface-container-high p-12 md:col-span-2">
              <Icon name="dynamic_feed" className="mb-6 text-5xl text-primary" />
              <h3 className="mb-4 font-headline-md text-headline-md">
                DIGITAL ADVERTISING
              </h3>
              <p className="mb-6 max-w-xl font-body-md text-body-md text-on-surface-variant">
                Data-driven performance marketing that scales. From programmatic
                buying to social activation, we ensure your brand captures the
                right winds at the right time.
              </p>
              <div className="flex flex-wrap gap-2">
                {["SEM", "SOCIAL ADS", "DATA ANALYTICS"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-4 py-1 font-label-sm text-label-sm text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={100}
              className="flex flex-col justify-between bg-on-background p-12 text-surface-bright"
            >
              <div>
                <Icon name="celebration" className="mb-6 text-5xl text-primary" />
                <h3 className="mb-4 font-headline-md text-headline-md text-primary">
                  PROMOTIONAL EVENTS
                </h3>
                <p className="font-body-md text-body-md text-surface-variant opacity-80">
                  On-site activations that leave a mark. We create immersive
                  physical experiences that bridge the gap between digital buzz
                  and real-world impact.
                </p>
              </div>
              <div className="mt-8 border-t border-surface-variant/20 pt-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  LIVE ENGAGEMENT
                </span>
              </div>
            </Reveal>

            <Reveal delay={200} className="bg-surface-variant p-12">
              <Icon
                name="developer_mode_tv"
                className="mb-6 text-5xl text-on-background"
              />
              <h3 className="mb-4 font-headline-md text-headline-md">
                CUSTOM APP DEV
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                High-performance mobile and web applications built with scalable
                architecture. We don&rsquo;t just build apps; we build business
                tools that fly.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              className="relative overflow-hidden bg-primary-container p-12 text-on-primary-container md:col-span-2"
            >
              <div className="relative z-10 flex h-full flex-col justify-center">
                <h3 className="mb-2 font-display-lg text-headline-lg">
                  360&deg; ACTIVATION
                </h3>
                <p className="mb-8 max-w-lg font-body-lg text-body-lg">
                  Combining all spheres of influence into a single, cohesive
                  flight path for your brand&rsquo;s growth.
                </p>
                <Link
                  href="/portfolio"
                  className="w-fit bg-on-background px-8 py-3 font-body-md text-body-md uppercase tracking-widest text-primary transition-transform active:scale-95"
                >
                  EXPLORE CASE STUDIES
                </Link>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 translate-x-12 translate-y-12 opacity-20">
                <Icon name="rocket_launch" filled className="text-[300px]" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Lark */}
        <section className="relative overflow-hidden bg-on-background py-section-gap">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,105,112,0.1),transparent)]"></div>
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="grid items-center gap-20 md:grid-cols-2">
              <Reveal>
                <h2 className="mb-12 font-headline-lg text-headline-lg text-surface-bright">
                  WHY LARK?
                </h2>
                <div className="space-y-12">
                  {[
                    {
                      icon: "stars",
                      title: "Classy Implementation",
                      body: "We avoid the loud and the cluttered. Our executions are sophisticated, minimalist, and inherently premium.",
                    },
                    {
                      icon: "bolt",
                      title: "Aerodynamic Precision",
                      body: "Every campaign is optimized for speed and results. We cut through the noise with targeted accuracy.",
                    },
                    {
                      icon: "visibility",
                      title: "Eye-Catching Results",
                      body: "We create implementations that command attention without begging for it. High impact, low resistance.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="group flex gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-primary/40 bg-primary/20 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                        <Icon name={item.icon} />
                      </div>
                      <div>
                        <h4 className="mb-2 font-headline-md text-headline-md text-surface-bright">
                          {item.title}
                        </h4>
                        <p className="font-body-md text-body-md text-surface-variant/70">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={200} className="relative">
                <div className="relative aspect-square bg-surface-container-highest p-4">
                  <img
                    className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 hover:grayscale-0"
                    alt="A high-end digital advertising campaign on a large screen."
                    src="/lark/about-results.png"
                  />
                  <div className="absolute -bottom-8 -left-8 hidden bg-primary p-10 md:block">
                    <span className="font-display-lg text-headline-lg text-on-primary">
                      100+
                    </span>
                    <p className="mt-2 font-label-sm text-label-sm uppercase tracking-widest text-on-primary">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-container-max px-gutter py-section-gap text-center">
          <Reveal>
            <h2 className="mb-8 font-display-lg text-display-lg-mobile text-on-background md:text-display-lg">
              READY FOR <span className="text-primary">TAKEOFF?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Join the fleet of high-growth brands that trust Lark Advertising
              for their most ambitious digital and physical journeys.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <Link
                href="/contact"
                className="bg-primary px-12 py-4 font-body-md text-body-md uppercase tracking-widest text-on-primary transition-all hover:shadow-[0_0_20px_rgba(0,105,112,0.4)]"
              >
                START YOUR JOURNEY
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-primary px-12 py-4 font-body-md text-body-md uppercase tracking-widest text-primary transition-all hover:bg-primary/5"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
