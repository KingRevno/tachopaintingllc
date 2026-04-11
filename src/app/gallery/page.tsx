import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work | Tacho Painting LLC — Wilson, NC",
  description:
    "Browse photos of completed interior painting, cabinet refinishing, exterior coatings, deck restoration, and epoxy floor projects by Tacho Painting LLC across North Carolina.",
};

const PHOTOS = [
  {
    id: 1,
    src: "/gallery/blue-house-full.jpg",
    alt: "Full exterior repaint of residential home in Wilson NC — blue finish by Tacho Painting LLC",
    category: "Exterior",
    label: "Full Home Exterior Repaint",
    location: "Wilson, NC",
  },
  {
    id: 2,
    src: "/gallery/blue-house-yardsign.jpg",
    alt: "Tacho Painting LLC yard sign in front of completed blue exterior repaint project",
    category: "Exterior",
    label: "Exterior Transformation",
    location: "Wilson, NC",
  },
  {
    id: 3,
    src: "/gallery/door-stain-exterior.jpg",
    alt: "Beautifully stained mahogany front door with brick surround completed by Tacho Painting LLC",
    category: "Exterior",
    label: "Front Door Staining & Finish",
    location: "North Carolina",
  },
  {
    id: 4,
    src: "/gallery/outbuilding-exterior.jpg",
    alt: "Painted outbuilding in gray and white exterior finish by Tacho Painting LLC",
    category: "Exterior",
    label: "Outbuilding Exterior Paint",
    location: "North Carolina",
  },
  {
    id: 5,
    src: "/gallery/soffit-trim-exterior.jpg",
    alt: "Fresh white soffit and exterior trim painting on brick home by Tacho Painting LLC",
    category: "Exterior",
    label: "Soffit & Trim Restoration",
    location: "North Carolina",
  },
  {
    id: 6,
    src: "/gallery/exterior-siding.jpg",
    alt: "New exterior siding paint on residential home porch area by Tacho Painting LLC",
    category: "Exterior",
    label: "Exterior Siding & Porch",
    location: "North Carolina",
  },
  {
    id: 7,
    src: "/gallery/sunroom-finished.jpg",
    alt: "Completed sun room enclosure with fresh exterior paint finish by Tacho Painting LLC",
    category: "Exterior",
    label: "Sun Room Exterior Finish",
    location: "North Carolina",
  },
  {
    id: 8,
    src: "/gallery/interior-kitchen.jpg",
    alt: "Interior kitchen repaint with white cabinets and teal accent walls by Tacho Painting LLC",
    category: "Interior",
    label: "Kitchen Interior & Cabinets",
    location: "North Carolina",
  },
  {
    id: 9,
    src: "/gallery/interior-bathroom.jpg",
    alt: "Interior bathroom hallway with white trim and cabinet painting by Tacho Painting LLC",
    category: "Interior",
    label: "Interior Trim & Bathroom",
    location: "North Carolina",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-denim px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            Our Portfolio
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            The Work Speaks for Itself
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Every project shown here was completed by our team — no stock
            photos, no borrowed imagery. Just real results for real homeowners
            across North Carolina.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-denim transition-opacity duration-200 hover:opacity-85"
          >
            Get a Free Quote →
          </Link>
        </div>
      </section>

      {/* Photo grid */}
      <section className="bg-[#f9f9f9] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl border border-gainsboro bg-white"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1a1a2e]/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{photo.label}</p>
                  <p className="mt-0.5 text-xs text-white/65">{photo.location}</p>
                </div>

                {/* Category badge */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-denim shadow-sm backdrop-blur-sm">
                  {photo.category}
                </span>
              </div>
            ))}
          </div>

          {/* Social proof pull-through */}
          <div className="mt-16 rounded-2xl border border-gainsboro bg-white p-8 text-center">
            <p className="text-sm font-medium text-[#1a1a2e]/50">
              See more of our work on social media
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gainsboro bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a2e] transition-colors duration-200 hover:border-denim/40 hover:text-denim"
              >
                Instagram
                <ExternalLink size={13} strokeWidth={2} />
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gainsboro bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a2e] transition-colors duration-200 hover:border-denim/40 hover:text-denim"
              >
                Facebook
                <ExternalLink size={13} strokeWidth={2} />
              </a>
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gainsboro bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a2e] transition-colors duration-200 hover:border-denim/40 hover:text-denim"
              >
                TikTok
                <ExternalLink size={13} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-denim px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Want results like these for your home?
          </h2>
          <p className="mt-3 text-base text-white/65">
            Every estimate is free, on-site, and no-pressure. We assess your
            project properly before any number is discussed.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-denim transition-opacity duration-200 hover:opacity-85"
          >
            Schedule My Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
