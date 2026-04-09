import Link from "next/link";
import {
  ShieldCheck,
  ClipboardList,
  Clock,
  Sparkles,
  ThumbsUp,
  MapPin,
} from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description:
      "Every job is backed by proper licensing and full liability coverage — protecting your home and your peace of mind.",
  },
  {
    icon: ClipboardList,
    title: "Meticulous Prep Work",
    description:
      "We sand, caulk, prime, and protect before a single drop of paint touches your walls. Prep is where quality is made or lost.",
  },
  {
    icon: Sparkles,
    title: "Premium Products Only",
    description:
      "We use professional-grade paints and coatings — the kind that last years, not months. No shortcuts, no cheap substitutes.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We respect your schedule. Projects are completed within the agreed timeline, and the site is left cleaner than we found it.",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Quotes",
    description:
      "No surprise charges. You get a detailed written estimate before any work begins — and that number doesn't change.",
  },
  {
    icon: MapPin,
    title: "True Local Experts",
    description:
      "Based in Wilson, NC and serving 11 surrounding counties. We know the climate, the homes, and the community we work in.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="border-t border-gainsboro bg-cream py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-5 inline-block rounded-full bg-denim px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Why Tacho Painting
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a2e] md:text-4xl">
            The Standard We Hold Ourselves To
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1a1a2e]/60">
            There are a lot of painters out there. Here's what separates a
            Tacho Painting project from the rest.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-gainsboro bg-white p-7"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-denim/10">
                <Icon size={20} className="text-denim" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a2e]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#1a1a2e]/60">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-base font-medium text-[#1a1a2e]/60">
            Ready to see the difference for yourself?
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-denim px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-85"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
