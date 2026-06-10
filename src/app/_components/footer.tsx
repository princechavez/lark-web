import Link from "next/link";
import { Icon } from "./icon";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-variant/10 bg-on-background px-gutter py-section-gap">
      <div className="mx-auto flex max-w-container-max flex-col justify-between gap-12 md:flex-row md:items-start">
        <div className="max-w-xs">
          <span className="mb-4 block font-display-lg text-headline-md text-primary">
            LARK ADVERTISING
          </span>
          <p className="font-body-md text-body-md uppercase tracking-tighter text-surface-variant/70">
            Aerodynamic Precision in Digital Strategy.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-col gap-2">
            <span className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Company
            </span>
            <Link
              href="/"
              className="font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Social
            </span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Contact
            </span>
            <a
              href="mailto:connect@larkadvertising.ph"
              className="flex items-center gap-2 font-body-md text-body-md text-surface-variant/70 transition-opacity hover:text-surface-bright"
            >
              connect@larkadvertising.ph
              <Icon name="north_east" className="text-base" />
            </a>
            <p className="font-body-md text-body-md text-surface-variant/70">
              Manila, Philippines
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-container-max border-t border-surface-variant/10 pt-8 text-center md:text-left">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-surface-variant/40">
          © 2024 Lark Advertising. Aerodynamic Precision in Digital Strategy.
        </p>
      </div>
    </footer>
  );
}
