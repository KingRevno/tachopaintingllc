import Link from "next/link";
import {
  Home,
  Layers,
  Sun,
  TreePine,
  Layers2,
  ArrowRight,
  type LucideProps,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/constants";

type IconName = Service["icon"];

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Home,
  Layers,
  Sun,
  TreePine,
  Layers2,
};

function ServiceIcon({ name }: { name: IconName }) {
  const Icon = ICON_MAP[name] ?? Home;
  return (
    <div className="inline-flex rounded-xl bg-denim/10 p-3">
      <Icon size={24} className="text-denim" strokeWidth={1.75} />
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-gainsboro bg-white p-8 transition-all duration-200 hover:border-denim hover:shadow-lg">
      <ServiceIcon name={service.icon} />
      <p className="mt-4 text-sm font-medium text-denim">{service.subtitle}</p>
      <h3 className="mt-1 text-xl font-bold text-[#1a1a2e]">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1a1a2e]/60">
        {service.description}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-denim transition-colors duration-200 hover:opacity-75"
      >
        Learn More
        <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </article>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <span className="mb-5 inline-block rounded-full bg-denim px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Our Services
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1a2e] md:text-4xl">
            Craftsmanship Across Every Surface
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1a1a2e]/60">
            From the walls inside your home to the floor of your garage — we
            bring the same elite-level prep, product, and process to every
            project.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="text-base font-medium text-[#1a1a2e]/70">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-denim px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-opacity duration-200 hover:opacity-85"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
