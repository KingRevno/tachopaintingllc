import type { Metadata } from "next";
import { Check, Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Tacho Painting LLC — Wilson, NC",
  description:
    "Request a free on-site painting estimate from Tacho Painting LLC. We serve Wilson, Wake, Durham, and 8 other NC counties. Licensed, insured, no-pressure quotes.",
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Fill out the form",
    desc: "Tell us about your project and budget so we can prepare properly.",
  },
  {
    num: "02",
    title: "We reach out within 1 business day",
    desc: "Jose or Kimberly will contact you via your preferred method to confirm.",
  },
  {
    num: "03",
    title: "Free on-site estimate",
    desc: "We visit your property, assess the scope, and provide a detailed written quote.",
  },
];

const TRUST_BADGES = [
  "Licensed & Insured",
  "10+ Years Experience",
  "Serving 11 NC Counties",
  "48hr Cancellation Policy",
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-denim px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Get Your Free Estimate
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            No pressure. No hard quotes over the phone. Just a straightforward
            conversation about your project.
          </p>
        </div>
      </section>

      {/* Two-column content */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* ── LEFT — Trust sidebar ──────────────────────────────── */}
          <aside className="lg:w-[38%] lg:shrink-0">
            {/* Process steps */}
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-denim">
              What to Expect
            </p>
            <ol className="space-y-7">
              {PROCESS_STEPS.map((s) => (
                <li key={s.num} className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-denim/10 text-sm font-extrabold text-denim">
                    {s.num}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1a2e]/55">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <hr className="my-8 border-gainsboro" />

            {/* Contact info */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-[#1a1a2e]/70">
                <Phone size={16} className="shrink-0 text-denim" />
                <a
                  href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-denim"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#1a1a2e]/70">
                <Phone size={16} className="shrink-0 text-denim" />
                <span>Text: (252) 315-8694</span>
              </li>
              <li className="flex items-center gap-3 text-[#1a1a2e]/70">
                <Mail size={16} className="shrink-0 text-denim" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-denim"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a2e]/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-denim" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-3 text-[#1a1a2e]/70">
                <Clock size={16} className="mt-0.5 shrink-0 text-denim" />
                <div className="space-y-0.5">
                  <p>{BUSINESS.hours.weekdays}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>

            <hr className="my-8 border-gainsboro" />

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 rounded-full border border-gainsboro bg-white px-3 py-1.5 text-xs font-medium text-[#1a1a2e]/70"
                >
                  <Check size={11} className="text-denim" strokeWidth={3} />
                  {badge}
                </span>
              ))}
            </div>
          </aside>

          {/* ── RIGHT — Quote form ────────────────────────────────── */}
          <div className="flex-1 rounded-2xl border border-gainsboro bg-white p-8 shadow-sm md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
