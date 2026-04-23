"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { serviceArticles } from "@/app/data/services";

const primaryLinks = [
  { href: "/#emergency", label: "Acil" },
  { href: "/#about", label: "Hakkımızda" },
  { href: "/#faq", label: "Rehber" },
  { href: "/#contact", label: "İletişim" },
];

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.22 8.97a.75.75 0 0 1 1.06 0L12 13.69l4.72-4.72a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0L6.22 10.03a.75.75 0 0 1 0-1.06Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;

    body.style.overflow = isMenuOpen ? "hidden" : previousOverflow;

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-30 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="max-w-48 text-base font-bold tracking-[0.24em] text-primary sm:max-w-none sm:text-xl sm:tracking-[0.3em]" href="/" onClick={handleMenuClose}>
          VETE MEDICAL
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <Link
              className="inline-flex items-center gap-2 py-2 text-sm font-medium text-on-surface-variant hover:text-primary"
              href="/#services"
            >
              Hizmetlerimiz
              <ChevronIcon />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full w-176 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="origin-top rounded-b-[28px] rounded-t-none border border-t-0 border-white/70 bg-white/95 p-6 shadow-[0_26px_80px_rgba(26,43,60,0.16)] backdrop-blur-xl transition-transform duration-200 transform-[translateY(0px)_scaleY(0.96)] group-hover:transform-[translateY(0px)_scaleY(1)]">
                <div className="mb-4 flex items-center justify-between border-b border-surface-variant pb-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">Uzman Hizmet Başlıkları</p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      Klinik alanlarımıza göz atın ve detay sayfalarına geçin.
                    </p>
                  </div>
                  <Link className="text-label-caps text-secondary hover:text-primary" href="/#services">
                    Tümünü İncele
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {serviceArticles.map((item) => (
                    <Link
                      key={item.slug}
                      className="rounded-2xl px-4 py-3 text-sm text-on-surface-variant transition hover:bg-secondary-container hover:text-primary"
                      href={`/hizmetler/${item.slug}`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {primaryLinks.map((item) => (
            <Link key={item.href} className="text-sm font-medium text-on-surface-variant hover:text-primary" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-white text-primary shadow-sm transition hover:border-primary md:hidden"
          onClick={handleMenuToggle}
          type="button"
        >
          <MenuIcon open={isMenuOpen} />
        </button>
        <Link
          className="hidden rounded-lg bg-primary px-5 py-3 text-label-caps text-on-primary shadow-lg shadow-primary/10 hover:bg-primary-container sm:inline-flex"
          href="/#contact"
        >
          Randevu Al
        </Link>
        </div>
      </div>

      <button
        aria-hidden={!isMenuOpen}
        className={`fixed inset-x-0 bottom-0 top-19 bg-primary/22 backdrop-blur-[2px] transition duration-300 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleMenuClose}
        tabIndex={isMenuOpen ? 0 : -1}
        type="button"
      />

      <div
        aria-hidden={!isMenuOpen}
        className={`relative z-20 overflow-hidden border-t border-white/60 bg-white/95 shadow-xl transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto max-h-[calc(100vh-5rem)] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <div className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto overscroll-contain px-4 py-5 sm:px-6">
          <div className="space-y-2 rounded-3xl bg-surface-container-low p-3">
            <Link
              className="block rounded-2xl bg-primary px-4 py-3 text-center text-label-caps text-on-primary"
              href="/#contact"
              onClick={handleMenuClose}
            >
              Randevu Al
            </Link>
            <Link
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-primary transition hover:bg-white"
              href="/#services"
              onClick={handleMenuClose}
            >
              Hizmetlerimiz
            </Link>
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-on-surface-variant transition hover:bg-white hover:text-primary"
                href={item.href}
                onClick={handleMenuClose}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 rounded-3xl border border-outline-variant/60 bg-white p-4 shadow-sm">
            <p className="text-label-caps text-secondary">UZMANLIK ALANLARI</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {serviceArticles.map((item) => (
                <Link
                  key={item.slug}
                  className="rounded-2xl bg-surface-container-low px-4 py-3 text-sm text-on-surface-variant transition hover:bg-secondary-container hover:text-primary"
                  href={`/hizmetler/${item.slug}`}
                  onClick={handleMenuClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}