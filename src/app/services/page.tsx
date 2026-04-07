import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Layers,
  Sun,
  TreePine,
  Layers2,
  PaintRoller,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Tacho Painting LLC — Wilson, NC",
  description:
    "Explore Tacho Painting LLC's full range of services: interior painting, cabinet refinishing, specialty exterior coatings, deck restoration, and epoxy floors across NC.",
};

type IconName = Service["icon"];

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Home,
  Layers,
  Sun,
  TreePine,
  Layers2,
};

function ServiceIcon({ name, size = 28 }: { name: IconName; size?: number }) {
  const Icon = ICON_MAP[name] ?? Home;
  return (
    <div className="inline-flex rounded-xl bg-denim/10 p-3.5">
      <Icon size={size} className="text-denim" strokeWidth={1.75} />
    </div>
  );
}

function ImagePlaceholder() {
  return (
    // TODO: Replace with actual client photo once received
    <div className="flex h-full min-h-72 w-full items-center justify-center bg-gainsboro p-10 md:min-h-full">
      <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-denim/25 bg-white/60 px-10 py-14 text-center">
        <PaintRoller size={36} className="text-denim/50" strokeWidth={1.5} />
        <p className="text-sm font-medium text-[#1a1a2e]/40">
          Your project photos go here
        </p>
      </div>
    </div>
  );
}

function ServiceSection({
  service,
  flipped,
  isLast,
}: {
  service: Service;
  flipped: boolean;
  isLast: boolean;
}) {
  return (
    <>
      <section
        id={service.slug}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
      >
        <div
          className={`flex flex-col gap-0 overflow-hidden rounded-2xl border border-gainsboro md:flex-row ${
            flipped ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image side */}
          <div className="md:w-1/2">
            <ImagePlaceholder />
          </div>

          {/* Text side */}
          <div className="flex flex-1 flex-col justify-center bg-white p-10 md:p-14">
            <ServiceIcon name={service.icon} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-denim">
              {service.subtitle}
            </p>
            <h2 className="mt-1 text-2xl font-extrabold leading-tight text-[#1a1a2e] md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#1a1a2e]/65">
              {service.description}
            </p>

            {/* Keyword tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {service.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-gainsboro px-3 py-1 text-xs font-medium text-[#1a1a2e]/70"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-1.5 rounded-lg bg-denim px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Request a Quote for This Service
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider between sections */}
      {!isLast && (
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <hr className="border-gainsboro" />
        </div>
      )}
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-denim py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/75">
            Elite craftsmanship across every surface — inside and out.
          </p>
        </div>
      </section>

      {/* Alternating service sections */}
      {SERVICES.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          flipped={index % 2 !== 0}
          isLast={index === SERVICES.length - 1}
        />
      ))}

      {/* Bottom CTA band */}
      <section className="bg-[#1a1a2e] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
            Every project gets the same standard —
            <br className="hidden md:block" /> elite prep, premium product,
            flawless finish.
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-denim px-8 py-4 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
          >
            Schedule Your Free Estimate
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
