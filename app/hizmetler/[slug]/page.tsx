import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServiceArticle, serviceArticles } from "@/app/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return serviceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getServiceArticle(slug);

  if (!article) {
    return {
      title: "Hizmet Bulunamadı | VETE Medical",
    };
  }

  return {
    title: `${article.title} | VETE Medical`,
    description: article.summary,
  };
}

export default async function ServiceDetailPage(props: ServicePageProps) {
  const { slug } = await props.params;
  const article = getServiceArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-28 text-on-surface sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
      <section className="mx-auto max-w-6xl border-b border-white/70 pb-10 sm:pb-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
          <Link className="hover:text-primary" href="/">
            Anasayfa
          </Link>
          <span>/</span>
          <Link className="hover:text-primary" href="/#services">
            Hizmetlerimiz
          </Link>
          <span>/</span>
          <span className="text-primary">{article.title}</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            <p className="text-label-caps text-secondary">VETERİNER REHBERİ</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-body-lg text-on-surface-variant">
              {article.summary}
            </p>
          </div>

          <div className="rounded-3xl bg-surface-container-low p-5 sm:p-6">
            <p className="text-label-caps text-secondary">Öne Çıkanlar</p>
            <ul className="mt-5 space-y-3 text-sm text-on-surface-variant">
              {article.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <p className="text-base leading-7 text-on-surface-variant sm:text-lg sm:leading-8">{article.intro}</p>

          <div className="mt-12 space-y-8">
            {article.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl bg-surface-container-low p-5 sm:p-8">
                <h2 className="text-2xl font-medium text-primary">{section.heading}</h2>
                <p className="mt-4 text-body-md text-on-surface-variant">{section.body}</p>
              </section>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
          <p className="text-label-caps text-secondary">SORU SORUN</p>
          <p className="mt-3 text-sm leading-7 text-on-surface-variant">
            Bu hizmet hakkında ayrıntılı bilgi almak için ekibimizle iletişime geçebilirsiniz.
          </p>
          <Link
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-label-caps text-on-primary hover:bg-primary-container sm:w-auto"
            href="/#contact"
          >
            İletişime Geç
          </Link>
        </aside>
      </section>
    </main>
  );
}