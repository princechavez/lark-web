import { type Metadata } from "next";
import { Nav } from "../_components/nav";
import { Footer } from "../_components/footer";
import { Icon } from "../_components/icon";

export const metadata: Metadata = {
  title: "Contact Us | Lark Advertising",
  description:
    "Ready to elevate your brand? Get in touch with Lark Advertising in Manila, Philippines.",
};

const EMAIL = "connect@larkadvertising.ph";
const MAILTO = `mailto:${EMAIL}?subject=Let's%20soar%20together`;

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden pt-20">
        {/* Hero */}
        <section className="relative flex min-h-[614px] items-center overflow-hidden bg-surface-container-lowest">
          <div className="bg-noise pointer-events-none absolute inset-0"></div>
          <div className="relative z-10 mx-auto grid max-w-container-max items-center gap-16 px-gutter md:grid-cols-2">
            <div>
              <div className="mb-6 inline-block bg-primary-container/10 px-4 py-2">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Connect With Us
                </span>
              </div>
              <h1 className="mb-6 font-display-lg text-display-lg-mobile uppercase md:text-display-lg">
                LET&rsquo;S <span className="text-primary">SOAR</span> TOGETHER
              </h1>
              <p className="max-w-lg font-body-lg text-body-lg text-on-surface-variant">
                We&rsquo;re more than excited to conquer the skies with you.
                Ready to elevate your brand to new heights?
              </p>
            </div>
            <div className="group relative">
              <div className="absolute -right-12 -top-12 h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl"></div>
              <img
                className="relative aspect-square w-full border border-outline-variant/20 object-cover shadow-xl grayscale transition-all duration-700 hover:grayscale-0"
                alt="A bright, modern office space in Manila with floor-to-ceiling windows."
                src="/lark/contact-hero.png"
              />
              <div className="absolute -bottom-8 -left-8 hidden bg-on-background p-8 text-surface-bright md:block">
                <p className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Our HQ
                </p>
                <p className="font-headline-md text-headline-md leading-none">
                  MANILA, PH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento grid: Get in touch + info cards */}
        <section className="mx-auto max-w-container-max px-gutter py-section-gap">
          <div className="grid grid-cols-1 gap-unit lg:grid-cols-12">
            {/* Get in touch card (mailto in place of a form) */}
            <div className="flex flex-col justify-between border border-outline-variant/30 bg-surface-container-low p-8 md:p-12 lg:col-span-7">
              <div>
                <h2 className="mb-8 font-headline-lg text-headline-lg uppercase">
                  Start Your Flight
                </h2>
                <p className="mb-10 max-w-lg font-body-lg text-body-lg text-on-surface-variant">
                  Tell us about your goals and we&rsquo;ll map the flight path.
                  Drop us a line and a member of our crew will be in touch within
                  one business day.
                </p>
                <a
                  href={MAILTO}
                  className="group inline-flex items-center gap-4 bg-surface-container-lowest px-2 py-2 pr-6"
                >
                  <span className="flex h-14 w-14 items-center justify-center bg-primary text-on-primary transition-transform group-hover:scale-105">
                    <Icon name="mail" filled />
                  </span>
                  <span className="text-left">
                    <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                      Email Us
                    </span>
                    <span className="block font-headline-md text-headline-md text-on-surface">
                      {EMAIL}
                    </span>
                  </span>
                </a>
              </div>
              <a
                href={MAILTO}
                className="group mt-12 flex w-full items-center justify-center gap-3 bg-primary py-5 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition-all hover:bg-on-background"
              >
                SEND US A MESSAGE
                <Icon
                  name="trending_flat"
                  className="transition-transform group-hover:translate-x-2"
                />
              </a>
            </div>

            {/* Info column */}
            <div className="grid grid-rows-2 gap-unit lg:col-span-5">
              {/* Location */}
              <div className="group relative flex flex-col justify-between overflow-hidden bg-on-background p-8 text-surface-bright md:p-12">
                <div className="absolute -right-12 -top-12 scale-150 opacity-5 transition-transform duration-1000 group-hover:scale-125">
                  <Icon name="flight_takeoff" filled className="text-[200px]" />
                </div>
                <div>
                  <Icon
                    name="location_on"
                    filled
                    className="mb-6 text-primary"
                  />
                  <h3 className="mb-4 font-headline-md text-headline-md">
                    The Hangar
                  </h3>
                  <p className="font-body-md text-body-md leading-relaxed text-surface-variant/70">
                    Makati Avenue
                    <br />
                    Metro Manila
                    <br />
                    Philippines
                  </p>
                </div>
                <a
                  className="mt-8 flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary hover:underline"
                  href="https://maps.google.com/?q=Makati+Avenue+Metro+Manila"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Map
                  <Icon name="open_in_new" className="text-sm" />
                </a>
              </div>

              {/* Direct lines */}
              <div className="flex flex-col justify-between bg-primary-container p-8 text-on-primary-container md:p-12">
                <div>
                  <Icon name="headset_mic" className="mb-6" />
                  <h3 className="mb-4 font-headline-md text-headline-md">
                    Direct Lines
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 hover:opacity-80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center border border-on-primary-container/20">
                        <Icon name="mail" className="text-sm" />
                      </span>
                      <span className="font-body-md font-bold">{EMAIL}</span>
                    </a>
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center border border-on-primary-container/20">
                        <Icon name="schedule" className="text-sm" />
                      </span>
                      <span className="font-body-md font-bold">
                        Mon&ndash;Fri, 9AM&ndash;6PM PHT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden bg-surface-container px-gutter py-24">
          <div className="relative z-10 mx-auto max-w-container-max text-center">
            <h2 className="mb-8 font-display-lg text-headline-lg uppercase">
              AERODYNAMIC PRECISION
              <br />
              FOR YOUR BRAND
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Join the ranks of high-growth enterprises that have leveraged our
              digital-first mindset to scale their impact across the APAC region.
            </p>
            <a
              href={MAILTO}
              className="inline-block bg-primary px-12 py-5 font-label-sm text-label-sm uppercase tracking-widest text-on-primary shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-primary/40"
            >
              SCHEDULE A STRATEGY FLIGHT
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
