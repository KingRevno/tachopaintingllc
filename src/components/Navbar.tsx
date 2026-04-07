"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group select-none"
          aria-label="Tacho Painting — Home"
        >
          {/* Paint-stroke accent bar */}
          <span
            className="block h-7 w-1 rounded-full bg-denim transition-transform duration-200 group-hover:scale-y-110"
            aria-hidden="true"
          />
          <span className="text-xl font-bold tracking-tight text-charcoal">
            Tacho{" "}
            <span className="text-denim">Painting</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-denim"
                    : "text-charcoal hover:text-denim"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-denim" />
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            href="/contact"
            className={`rounded-full bg-denim px-5 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85 ${
              pathname === "/contact" ? "opacity-85" : ""
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-md p-2 text-charcoal transition-colors hover:text-denim md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 border-t border-gainsboro" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-white px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-3 text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-denim bg-denim/5"
                    : "text-charcoal hover:text-denim hover:bg-denim/5"
                }`}
              >
                {isActive && (
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-denim align-middle" />
                )}
                {label}
              </Link>
            );
          })}
          <div className="mt-3 pt-3 border-t border-gainsboro">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-denim px-5 py-3 text-center text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
