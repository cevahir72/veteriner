import Link from "next/link";

function FooterIcon({ label }: { label: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-white text-sm font-semibold text-primary transition hover:border-primary hover:text-primary-container">
      {label}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-white/70 bg-[linear-gradient(180deg,rgba(251,249,248,0.4)_0%,rgba(244,223,203,0.08)_100%)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold tracking-[0.25em] text-primary">VETE MEDICAL</div>
          <p className="mt-6 max-w-xs text-sm leading-7 text-on-surface-variant">
            Luks ve medikal mukemmeliyetin bulusma noktasi. Dostlariniz icin en iyisi.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" aria-label="Anasayfa">
              <FooterIcon label="V" />
            </Link>
            <Link href="/#faq" aria-label="Rehber">
              <FooterIcon label="R" />
            </Link>
            <Link href="/#contact" aria-label="Iletisim">
              <FooterIcon label="I" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] text-primary">ILETISIM</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-on-surface-variant">
            <p>1200 Medical Plaza Blvd, Modern District</p>
            <p>7 Gun / 24 Saat Acik</p>
            <p>care@vetemedical.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] text-primary">KURUMSAL</h3>
          <div className="mt-6 space-y-4 text-sm text-on-surface-variant">
            <Link className="block hover:text-primary" href="/#faq">
              Privacy Policy
            </Link>
            <Link className="block hover:text-primary" href="/#faq">
              Terms of Service
            </Link>
            <Link className="block hover:text-primary" href="/#about">
              Careers
            </Link>
            <Link className="block hover:text-primary" href="/#emergency">
              Emergency Protocol
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.18em] text-primary">BULTEN</h3>
          <p className="mt-6 text-sm leading-7 text-on-surface-variant">
            Saglik ipuclari ve guncellemeler icin abone olun.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-xl border border-outline-variant bg-white shadow-sm">
            <input
              className="min-w-0 flex-1 px-4 py-3 text-sm outline-none placeholder:text-on-surface-variant/70"
              placeholder="E-posta"
              type="email"
            />
            <button className="bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-container" type="submit">
              Gonder
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-white/70 pt-8 text-center text-sm text-on-surface-variant">
        © 2024 VETE MEDICAL Boutique Veterinary Care. All rights reserved.
      </div>
    </footer>
  );
}