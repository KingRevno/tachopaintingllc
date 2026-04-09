import type { Metadata } from "next";
import Link from "next/link";
import {
  PaintRoller,
  ArrowRight,
  Award,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import WhyUsSection from "@/components/WhyUsSection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Tacho Painting LLC — Wilson, NC",
  description:
    "Learn about Tacho Painting LLC — a family-owned painting contractor based in Wilson, NC with 10+ years of experience serving 11 counties across North Carolina.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "10+", label: "Years in Business" },
  { value: "11", label: "Counties Served" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
];

const VALUES = [
  {
    icon: Award,
    title: "Quality Over Speed",
    description:
      "We never cut corners to finish faster. Every surface gets the time it deserves — proper prep, the right primer, the right finish.",
  },
  {
    icon: Users,
    title: "Family-Owned Accountability",
    description:
      "When you hire Tacho Painting, you're working directly with the owners. Your project gets our name on it — and we take that personally.",
  },
  {
    icon: Star,
    title: "Elite-Level Craft",
    description:
      "We train to the highest standard. From spray technique to brush cutting, we do the work the right way — not the easy way.",
  },
  {
    icon: MapPin,
    title: "Community First",
    description:
      "We live and work in this region. Our reputation is built here, and we're invested in the homes and businesses of our neighbors.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Free On-Site Estimate",
    description:
      "We visit your property, assess the full scope of the project, and give you a detailed written quote — no surprise charges, ever.",
  },
  {
    number: "02",
    title: "Thorough Prep Work",
    description:
      "Before paint touches any surface, we protect your belongings, sand, caulk, prime, and repair. The prep is where great results are built.",
  },
  {
    number: "03",
    title: "Professional Application",
    description:
      "Using premium paints and professional equipment, we apply every coat with precision — whether brush, roller, or spray.",
  },
  {
    number: "04",
    title: "Final Walkthrough & Cleanup",
    description:
      "We walk through every detail with you at completion. We don't leave until you're fully satisfied — and we leave the site spotless.",
  },
];

// ─── Image placeholder ────────────────────────────────────────────────────────

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    // TODO: Replace with actual photo once received
    <div className="flex h-full min-h-64 w-full items-center justify-center bg-gainsboro">
      <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-denim/25 bg-white/60 px-10 py-12 text-center">
        <PaintRoller size={32} className="text-denim/40" strokeWidth={1.5} />
        <p className="text-xs font-medium text-[#1a1a2e]/40">{label}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────── */}
      <section className="bg-denim px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            About Tacho Painting LLC
          </h1>
          <p className="mt-4 text-lg text-white/75">
            Family-owned. Wilson-based. Built on craftsmanship.
          </p>
        </div>
      </section>

      {/* ── Our Story ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Photo */}
          <div className="overflow-hidden rounded-2xl md:w-1/2">
            <PhotoPlaceholder label="Alan on a job site — photo coming soon" />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-denim">
              Our Story
            </span>
            <h2 className="text-2xl font-extrabold leading-tight text-[#1a1a2e] md:text-3xl">
              Built from the Ground Up,{" "}
              <span className="text-denim">One Project at a Time</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#1a1a2e]/65">
              <p>
                Tacho Painting LLC was founded by Alan Juarez-Mendoza, a
                craftsman who learned the trade from the ground up and spent
                over a decade perfecting his technique across hundreds of
                residential and commercial projects in eastern North Carolina.
              </p>
              <p>
                What started as a one-man operation driven by a simple belief —
                that every client deserves elite-level work regardless of
                project size — has grown into a trusted local company serving
                11 counties across NC.
              </p>
              <p>
                Alan runs every project personally alongside a hand-picked crew
                that shares the same standard. Kimberly manages operations,
                client communications, and scheduling to make sure every
                interaction is smooth from first call to final walkthrough.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-denim px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Work With Us
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────── */}
      <section className="border-y border-gainsboro bg-cream px-6 py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="text-4xl font-extrabold text-denim">{value}</span>
              <span className="mt-2 text-sm font-medium text-[#1a1a2e]/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Meet the Team ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-denim">
            The Team
          </span>
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] md:text-3xl">
            The People Behind Every Project
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Alan */}
          <div className="overflow-hidden rounded-2xl border border-gainsboro bg-white">
            <div className="h-72 w-full">
              {/* TODO: Replace with Alan's headshot once received */}
              <PhotoPlaceholder label="Alan Juarez-Mendoza — photo coming soon" />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-[#1a1a2e]">
                Alan Juarez-Mendoza
              </h3>
              <p className="mt-1 text-sm font-semibold text-denim">
                Owner & Lead Painter
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1a1a2e]/60">
                Alan handles every estimate personally and leads the crew on
                every project. With 10+ years of hands-on experience across
                interior, exterior, cabinet, and specialty coating work — he
                brings a craftsman's eye to every single job.
              </p>
            </div>
          </div>

          {/* Kimberly */}
          <div className="overflow-hidden rounded-2xl border border-gainsboro bg-white">
            <div className="h-72 w-full">
              {/* TODO: Replace with Kimberly's headshot once received */}
              <PhotoPlaceholder label="Kimberly — photo coming soon" />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-[#1a1a2e]">Kimberly</h3>
              <p className="mt-1 text-sm font-semibold text-denim">
                Operations & Client Experience
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1a1a2e]/60">
                Kimberly keeps everything running smoothly — from the first
                estimate inquiry to the final follow-up. She manages scheduling,
                client communications, and makes sure every project stays on
                track and every client feels taken care of.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ─────────────────────────────────────────── */}
      <section className="border-t border-gainsboro bg-cream px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-denim">
              What We Stand For
            </span>
            <h2 className="text-2xl font-extrabold text-[#1a1a2e] md:text-3xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-gainsboro bg-white p-7"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-denim/10">
                  <Icon size={22} className="text-denim" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1a1a2e]/60">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-denim">
            How We Work
          </span>
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] md:text-3xl">
            Our Process, Start to Finish
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#1a1a2e]/60">
            Every Tacho Painting project follows the same four-step process —
            built for consistency, transparency, and results that last.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gainsboro bg-white p-7"
            >
              <span className="mb-4 block text-4xl font-extrabold text-denim/15">
                {step.number}
              </span>
              <h3 className="font-bold text-[#1a1a2e]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a2e]/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service area callout ────────────────────────────────── */}
      <section className="border-t border-gainsboro bg-cream px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-denim">
            Where We Serve
          </p>
          <h2 className="text-xl font-extrabold text-[#1a1a2e] md:text-2xl">
            Proudly Serving 11 Counties Across North Carolina
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {BUSINESS.serviceArea.map((county) => (
              <span
                key={county}
                className="rounded-full border border-gainsboro bg-white px-4 py-1.5 text-sm font-medium text-[#1a1a2e]/70"
              >
                {county}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ─────────────────────────────────────────────── */}
      <WhyUsSection />

      {/* ── Bottom CTA ─────────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Let's talk about your project.
          </h2>
          <p className="mt-4 text-base text-white/60">
            No pressure, no commitment. Just a free on-site estimate from a
            team that cares about doing it right.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-denim px-8 py-4 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Get Your Free Estimate
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <div className="mt-6 flex flex-col items-center gap-1 text-sm text-white/40">
            <span>{BUSINESS.phone}</span>
            <span>{BUSINESS.hours.weekdays}</span>
          </div>
        </div>
      </section>
    </>
  );
}
