import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Get a Quote", href: "/contact" },
];

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="block h-7 w-1 rounded-full bg-denim" aria-hidden="true" />
              <span className="text-xl font-bold tracking-tight">
                Tacho <span className="text-denim">Painting LLC</span>
              </span>
            </div>
            <p className="text-sm font-medium text-white/80 italic">
              "{BUSINESS.tagline}"
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              Serving Wilson County and surrounding NC counties with elite
              craftsmanship and long-term value.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Contact & Hours
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  📞 {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  ✉️ {BUSINESS.email}
                </a>
              </li>
              <li className="text-white/60">📍 {BUSINESS.address}</li>
            </ul>

            <div className="mt-1 flex flex-col gap-1 text-xs text-white/50">
              <span>{BUSINESS.hours.weekdays}</span>
              <span>{BUSINESS.hours.saturday}</span>
              <span>{BUSINESS.hours.sunday}</span>
            </div>

            {/* Social icons */}
            <div className="mt-2 flex items-center gap-4">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 transition-colors duration-200 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 transition-colors duration-200 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-white/50 transition-colors duration-200 hover:text-white"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/40 sm:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Tacho Painting LLC. All rights reserved.</span>
          <Link
            href="/privacy"
            className="transition-colors duration-200 hover:text-white/70"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
