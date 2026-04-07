import Link from "next/link";
import { PaintRoller, ChevronDown, Check } from "lucide-react";

const TRUST_ITEMS = [
  "Licensed & Insured",
  "10+ Years Experience",
  "Wilson County & Beyond",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col md:flex-row">
      {/* ── LEFT HALF — Text content ─────────────────────────────── */}
      <div className="flex flex-1 items-center justify-center bg-white px-8 py-20 md:px-14 lg:px-20 order-2 md:order-1">
        <div className="hero-fade-up w-full max-w-xl">
          {/* Eyebrow badge */}
          <span className="mb-6 inline-block rounded-full bg-denim px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Serving North Carolina
          </span>

          {/* Headline with left accent bar */}
          <div className="border-l-4 border-denim pl-5">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#1a1a2e] md:text-5xl">
              Elite Painting.
              <br />
              <span className="text-denim">Done Right</span>
              <br />
              the First Time.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#1a1a2e]/60 md:text-lg">
            From full-home interiors to cabinet refinishing and specialty
            coatings — Tacho Painting delivers flawless finishes backed by
            10+ years of experience.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg bg-denim px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-85"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="flex items-center justify-center rounded-lg border-2 border-denim bg-white px-6 py-3.5 text-sm font-semibold text-denim transition-colors duration-200 hover:bg-denim/5"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust bar */}
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-[#1a1a2e]/70">
                <Check size={14} className="shrink-0 text-denim" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── RIGHT HALF — Image placeholder ──────────────────────── */}
      <div className="relative h-64 w-full overflow-hidden bg-gainsboro md:h-auto md:w-1/2 order-1 md:order-2">
        {/* TODO: Replace with actual client photo once received */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8">
          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-denim/30 bg-white/60 px-10 py-12 text-center">
            <PaintRoller size={40} className="text-denim" strokeWidth={1.5} />
            <p className="text-sm font-medium text-[#1a1a2e]/50">
              Your project photos go here
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-denim opacity-60">
        <ChevronDown size={28} strokeWidth={1.5} />
      </div>
    </section>
  );
}
