import Link from "next/link";

import { serviceArticles } from "@/app/data/services";

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

export function SiteHeader() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-bold tracking-[0.3em] text-primary sm:text-xl" href="/">
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
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary" href="/#emergency">
            Acil
          </Link>
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary" href="/#about">
            Hakkımızda
          </Link>
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary" href="/#faq">
            Rehber
          </Link>
          <Link className="text-sm font-medium text-on-surface-variant hover:text-primary" href="/#contact">
            İletişim
          </Link>
        </div>
        <Link
          className="hidden rounded-lg bg-primary px-5 py-3 text-label-caps text-on-primary shadow-lg shadow-primary/10 hover:bg-primary-container sm:inline-flex"
          href="/#contact"
        >
          Randevu Al
        </Link>
      </div>
    </nav>
  );
}