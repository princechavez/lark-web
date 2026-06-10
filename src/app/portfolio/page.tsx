import { type Metadata } from "next";
import Link from "next/link";
import { Nav } from "../_components/nav";
import { Footer } from "../_components/footer";
import { PortfolioGrid } from "../_components/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfolio | Lark Advertising",
  description:
    "Recent work from Lark Advertising — digital campaigns, on-site activations, and custom software built with aerodynamic precision.",
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="pt-32">
        {/* Hero */}
        <section className="relative mx-auto mb-section-gap flex h-[614px] max-w-container-max items-center overflow-hidden px-gutter">
          <div className="z-10 w-full md:w-2/3">
            <span className="mb-4 block font-label-sm text-label-sm uppercase text-primary">
              OUR WORK
            </span>
            <h1 className="mb-6 font-display-lg text-display-lg-mobile leading-none text-on-background md:text-display-lg">
              LET&rsquo;S <span className="text-primary-container">SOAR</span>
              <br />
              TOGETHER
            </h1>
            <p className="max-w-md font-body-lg text-body-lg text-secondary">
              We&rsquo;re more than excited to conquer the skies with you through
              aerodynamic precision in digital strategy.
            </p>
          </div>
          <div className="pointer-events-none absolute right-0 top-1/2 h-full w-1/2 -translate-y-1/2 opacity-20">
            <img
              className="h-full w-full scale-125 object-contain object-right"
              alt="A bird of prey in mid-flight against a pale sky."
              src="/lark/portfolio-hero.png"
            />
          </div>
        </section>

        <PortfolioGrid />

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary-container px-gutter py-section-gap text-center text-on-primary-container">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-8 font-display-lg text-headline-lg uppercase md:text-display-lg">
              READY TO TAKE FLIGHT?
            </h2>
            <p className="mb-12 font-body-lg text-body-lg opacity-90">
              Let&rsquo;s engineer your next digital breakthrough with the
              precision of an apex predator.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <Link
                href="/contact"
                className="bg-on-background px-10 py-4 font-label-sm uppercase tracking-widest text-surface-bright transition-all hover:bg-secondary"
              >
                START A PROJECT
              </Link>
              <Link
                href="/contact"
                className="border-2 border-on-background px-10 py-4 font-label-sm uppercase tracking-widest text-on-background transition-all hover:bg-on-background hover:text-surface-bright"
              >
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>
          <div className="absolute -left-1/4 -top-1/2 h-full w-full rounded-full bg-primary/20 blur-[120px]"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
