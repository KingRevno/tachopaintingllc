import { Star, ExternalLink } from "lucide-react";

// ─── TODO: Replace placeholder reviews with real ones as they come in.
// Update GOOGLE_REVIEW_URL with the actual Google Business Profile review link.
// To get the link: Google Maps → search "Tacho Painting LLC" → Share → Copy link
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=PLACE_ID_HERE";

const REVIEWS = [
  {
    id: 1,
    name: "Tony M.",
    location: "Wilson, NC",
    rating: 5,
    date: "April 2026",
    text: "Alan and his team did an incredible job on my home. The prep work alone was more thorough than any painter I've hired before — every surface was sanded, caulked, and primed before a single drop of paint went on. The result speaks for itself. Will absolutely call Tacho Painting again.",
    source: "Google",
  },
  // TODO: Add more reviews as they come in from Google Business Profile
  // {
  //   id: 2,
  //   name: "",
  //   location: "",
  //   rating: 5,
  //   date: "",
  //   text: "",
  //   source: "Google",
  // },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-amber-400 text-amber-400" : "text-gainsboro"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const avgRating = REVIEWS.length
    ? (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)
    : "5.0";

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="mb-3 inline-block rounded-full bg-denim/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-denim">
              What Clients Say
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a2e] md:text-4xl">
              Trusted Across North Carolina
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#1a1a2e]/55">
              Real reviews from real homeowners. Every project gets the same
              standard — no shortcuts, no surprises.
            </p>
          </div>

          {/* Google rating badge */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 flex-col items-center gap-1.5 rounded-2xl border border-gainsboro bg-white px-8 py-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
            aria-label="See our Google reviews"
          >
            {/* Google "G" wordmark colour dots */}
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-sm font-medium text-[#1a1a2e]/40">Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-[#1a1a2e]">{avgRating}</span>
              <StarRating count={5} />
            </div>
            <span className="text-xs text-[#1a1a2e]/40">
              {REVIEWS.length} {REVIEWS.length === 1 ? "review" : "reviews"} · Growing
            </span>
          </a>
        </div>

        {/* Review cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-gainsboro bg-[#f9f9f9] p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <StarRating count={review.rating} />
                  <span className="text-xs text-[#1a1a2e]/35">{review.source}</span>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#374151]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-gainsboro pt-4">
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{review.name}</p>
                  <p className="text-xs text-[#1a1a2e]/45">{review.location}</p>
                </div>
                <span className="text-xs text-[#1a1a2e]/35">{review.date}</span>
              </div>
            </article>
          ))}

          {/* CTA card — leave a review */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-denim/25 bg-denim/[0.03] p-8 text-center">
            <div className="mb-3 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" strokeWidth={1.5} />
              ))}
            </div>
            <p className="mb-1 text-sm font-semibold text-[#1a1a2e]">
              Happy with our work?
            </p>
            <p className="mb-5 text-xs leading-relaxed text-[#1a1a2e]/50">
              A quick Google review helps other homeowners find us — and means the world to our team.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-denim px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Leave a Review
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl bg-denim px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              Ready to see results like these at your home?
            </p>
            <p className="mt-1 text-sm text-white/65">
              Free on-site estimates. No pressure. Just honest craftsmanship.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-denim transition-opacity duration-200 hover:opacity-85"
          >
            Get a Free Quote →
          </a>
        </div>

      </div>
    </section>
  );
}
