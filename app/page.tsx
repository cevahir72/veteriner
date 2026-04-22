import Image from "next/image";
import Link from "next/link";

import { getHomeServices } from "@/app/data/services";

type Service = {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof iconPaths;
};

type Question = {
  question: string;
  answer: string;
  open?: boolean;
};

const services: Service[] = [
  {
    slug: "ic-hastaliklari",
    title: "İç Hastalıkları",
    description: getHomeServices()[0]?.summary ?? "",
    icon: "stethoscope",
  },
  {
    slug: "cerrahi-operasyonlar",
    title: "Cerrahi Operasyonlar",
    description: getHomeServices()[1]?.summary ?? "",
    icon: "medical",
  },
  {
    slug: "asilama",
    title: "Aşılama",
    description: getHomeServices()[2]?.summary ?? "",
    icon: "shield",
  },
  {
    slug: "agiz-ve-dis",
    title: "Ağız ve Diş",
    description: getHomeServices()[3]?.summary ?? "",
    icon: "sparkle",
  },
  {
    slug: "dogum-ve-jinekoloji",
    title: "Doğum ve Jinekoloji",
    description: getHomeServices()[4]?.summary ?? "",
    icon: "heart",
  },
  {
    slug: "muhabbet-kuslari",
    title: "Muhabbet Kuşları",
    description: getHomeServices()[5]?.summary ?? "",
    icon: "paw",
  },
];

const faqs: Question[] = [
  {
    question: "Ilk muayene icin ne getirmeliyim?",
    answer:
      "Mumkunse petinizin eski asi karnesini, kullandigi ilaclarin listesini ve varsa onceki tahlil sonuclarini getirmeniz teshis surecini hizlandirir.",
    open: true,
  },
  {
    question: "Acil durumlarda randevu gerekli mi?",
    answer:
      "Hayir. Acil durumlar icin randevu gerekmemektedir. 7/24 hizmet veren acil unitemiz her an mudahaleye hazirdir; yine de gelmeden once telefonla bilgi vermeniz hazirlik yapmamiza yardimci olur.",
  },
  {
    question: "Check-up programlariniz neleri kapsiyor?",
    answer:
      "Kapsamli fiziksel muayene, tam kan sayimi, biyokimyasal analizler, dijital rontgen ve ultrasonografi gibi temel kontrolleri yasa ve ture gore ozellestiriyoruz.",
  },
];

const iconPaths = {
  arrow:
    "M7.25 12a.75.75 0 0 1 .75-.75h7.19l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H8a.75.75 0 0 1-.75-.75Z",
  chevron:
    "M6.22 8.97a.75.75 0 0 1 1.06 0L12 13.69l4.72-4.72a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-1.06 0L6.22 10.03a.75.75 0 0 1 0-1.06Z",
  emergency:
    "M11.25 2.5a.75.75 0 0 1 1.5 0v8h8a.75.75 0 0 1 0 1.5h-8v8a.75.75 0 0 1-1.5 0v-8h-8a.75.75 0 0 1 0-1.5h8v-8Z",
  heart:
    "M12 20.25a.74.74 0 0 1-.46-.16C5.81 15.53 2.25 12.4 2.25 8.2 2.25 5.56 4.34 3.75 6.78 3.75c1.62 0 3.04.79 3.97 2.04.93-1.25 2.35-2.04 3.97-2.04 2.44 0 4.53 1.81 4.53 4.45 0 4.2-3.56 7.33-9.29 11.89a.74.74 0 0 1-.46.16Z",
  location:
    "M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Zm0-8.25A2.75 2.75 0 1 0 12 7.25a2.75 2.75 0 0 0 0 5.5Z",
  mail:
    "M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12A2.25 2.25 0 0 1 20.25 6.75v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Zm1.8-.16 5.96 4.47a.83.83 0 0 0 .99 0l5.96-4.47A.75.75 0 0 0 18 6H6a.75.75 0 0 0-.45.59Z",
  medical:
    "M8.25 3.75A2.25 2.25 0 0 0 6 6v1.5H4.5A2.25 2.25 0 0 0 2.25 9.75v8.25A2.25 2.25 0 0 0 4.5 20.25h15A2.25 2.25 0 0 0 21.75 18V9.75A2.25 2.25 0 0 0 19.5 7.5H18V6a2.25 2.25 0 0 0-2.25-2.25h-7.5ZM9 7.5V6a.75.75 0 0 1 .75-.75h4.5A.75.75 0 0 1 15 6v1.5H9Zm3 3a.75.75 0 0 1 .75.75V13.5H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0V15H9a.75.75 0 0 1 0-1.5h2.25v-2.25A.75.75 0 0 1 12 10.5Z",
  paw:
    "M7.27 10.27a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54Zm9.46 0a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM9.6 6.82a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54Zm4.8 0a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54Zm-2.4 4.43c-2.91 0-5.25 2.09-5.25 4.69 0 1.85 1.45 3.06 3.27 3.06.97 0 1.56-.36 1.98-.62.33-.2.47-.28.6-.28s.27.08.6.28c.42.26 1.01.62 1.98.62 1.82 0 3.27-1.21 3.27-3.06 0-2.6-2.34-4.69-5.25-4.69Z",
  schedule:
    "M12 3.75a8.25 8.25 0 1 0 8.25 8.25A8.26 8.26 0 0 0 12 3.75Zm.75 4.5a.75.75 0 0 0-1.5 0V12c0 .2.08.39.22.53l2.5 2.5a.75.75 0 0 0 1.06-1.06l-2.28-2.28V8.25Z",
  send: "M3.29 11.29a1 1 0 0 1 .39-1.66l15.5-5.5a1 1 0 0 1 1.28 1.28l-5.5 15.5a1 1 0 0 1-1.87.02l-2.14-5.35-5.35-2.14a1 1 0 0 1-.31-.2Zm3.43.15 4.68 1.87 1.88 4.68 4.21-11.86-10.77 5.31Z",
  share:
    "M15.75 8.25a2.25 2.25 0 1 0-2.12-3h-3.02a2.25 2.25 0 1 0 0 1.5h3.02a2.25 2.25 0 0 0 2.12 1.5Zm0 7.5a2.25 2.25 0 0 0-2.12 1.5h-3.02a2.25 2.25 0 1 0 0 1.5h3.02a2.25 2.25 0 1 0 2.12-3Zm-8.8-4.63a2.25 2.25 0 1 0 .6 1.37l7.01 3.5a2.3 2.3 0 0 0 .67-1.34l-7.04-3.53c.03-.16.04-.33.04-.5s-.01-.34-.04-.5l7.04-3.53a2.3 2.3 0 0 0-.67-1.34l-7.01 3.5c-.11-.5-.38-.96-.77-1.32Z",
  shield:
    "M12 2.87 5.25 5.5v5.52c0 4.11 2.77 7.94 6.75 9.11 3.98-1.17 6.75-5 6.75-9.11V5.5L12 2.87Zm.75 4.38a.75.75 0 0 0-1.5 0v3H8.25a.75.75 0 0 0 0 1.5h3v3a.75.75 0 0 0 1.5 0v-3h3a.75.75 0 0 0 0-1.5h-3v-3Z",
  sparkle:
    "M12 2.25a.75.75 0 0 1 .73.57l1.16 4.65 4.64 1.16a.75.75 0 0 1 0 1.46l-4.64 1.16-1.16 4.65a.75.75 0 0 1-1.46 0l-1.16-4.65-4.64-1.16a.75.75 0 0 1 0-1.46l4.64-1.16 1.16-4.65A.75.75 0 0 1 12 2.25Zm6 12.5a.75.75 0 0 1 .73.57l.45 1.82 1.82.45a.75.75 0 0 1 0 1.46l-1.82.45-.45 1.82a.75.75 0 0 1-1.46 0l-.45-1.82-1.82-.45a.75.75 0 0 1 0-1.46l1.82-.45.45-1.82a.75.75 0 0 1 .73-.57Z",
  stethoscope:
    "M7.5 3.75a.75.75 0 0 1 .75.75v4.25a3.75 3.75 0 1 0 7.5 0V4.5a.75.75 0 0 1 1.5 0v4.25a5.25 5.25 0 0 1-4.5 5.19V16.5a2.25 2.25 0 1 0 4.5 0v-.75a2.25 2.25 0 1 1 1.5 0v.75a3.75 3.75 0 1 1-7.5 0v-2.56a5.25 5.25 0 0 1-4.5-5.19V4.5a.75.75 0 0 1 .75-.75Z",
};

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: keyof typeof iconPaths;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex-1 bg-background text-on-surface">
      <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
        <Image
          alt="Profesyonel veterinerin saglikli bir yavru kopegi kucaginda tuttugu modern klinik goruntusu"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXrZNFubTdy9os-AdP_PJG8ZDmNfPHzIxzdZBPciTP-NU0SwmAG42SSElZX52EL7Sz39MVPv0_O2s0wEKZ-nHW2q9OxAiPPECOCtSwcWP7F7hfKB9IyGG0_CmThR8gz56moXHD6vnefDI2wwxR6OUQ2upPo5lBFDsLM7t7OPy99qUBi_k7vWSIZWMcbI9jHKasX_uJsyidL6aSU4v1XD7vc3ME4NSN8d6Fo60zfHGu5-0_B1y2sYw-awDJVOEWpIko2OZp1dYRY9YS"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,249,248,0.98)_0%,rgba(251,249,248,0.84)_35%,rgba(251,249,248,0.3)_58%,rgba(251,249,248,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(251,249,248,0.95))]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex rounded-full bg-secondary-container px-4 py-2 text-label-caps text-secondary">
              EST. 2024 • BOUTIQUE CARE
            </span>
            <h1 className="max-w-xl font-display text-5xl leading-none font-semibold tracking-[-0.04em] text-primary sm:text-6xl lg:text-7xl">
              7/24 Uzman Bakim
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-on-surface-variant">
              Modern tıbbın hassasiyeti ve butik hizmet anlayışıyla, sevimli dostlarınız için en yüksek standartlarda sağlık deneyimi sunuyoruz.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-primary-container px-8 py-4 text-label-caps text-on-primary hover:-translate-y-0.5 hover:shadow-lg"
                href="#contact"
              >
                Randevu Oluştur
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-outline bg-white/60 px-8 py-4 text-label-caps text-primary backdrop-blur hover:bg-surface-container"
                href="#services"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>

          <div className="hidden self-end lg:block">
            <div className="rounded-[28px] border border-white/70 bg-white/65 p-6 shadow-2xl backdrop-blur-md">
              <p className="text-label-caps text-secondary">Butik Klinik Deneyimi</p>
              <div className="mt-4 space-y-5 text-sm text-on-surface-variant">
                <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                  <span>Uzman ekip</span>
                  <span className="font-semibold text-primary">15+</span>
                </div>
                <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                  <span>Acil destek</span>
                  <span className="font-semibold text-primary">24/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Goruntuleme</span>
                  <span className="font-semibold text-primary">HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-30">
        <div className="mb-16 text-center lg:mb-20">
          <p className="text-label-caps text-secondary">DOGRU TANI VE TEDAVI</p>
          <h2 className="mt-4 text-headline-md text-primary sm:text-5xl">Uzmanlik Alanlarimiz</h2>
          <div className="mx-auto mt-6 h-1 w-12 bg-secondary" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-3xl border border-transparent bg-surface-container-lowest p-8 shadow-[0_20px_60px_rgba(26,43,60,0.06)] transition duration-500 hover:-translate-y-1 hover:border-secondary-container hover:shadow-[0_28px_90px_rgba(26,43,60,0.12)] lg:p-10"
            >
              <div className="mb-8 text-primary transition duration-300 group-hover:scale-110">
                <Icon name={service.icon} className="h-10 w-10" />
              </div>
              <h3 className="text-headline-sm text-primary">{service.title}</h3>
              <p className="mt-4 grow text-body-md text-on-surface-variant">
                {service.description}
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 text-label-caps text-primary"
                href={`/hizmetler/${service.slug}`}
              >
                Detaylar
                <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="emergency" className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-primary-container shadow-2xl">
          <Image
            alt="Derin mavi tonlarda soyut medikal cam doku"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            fill
            sizes="100vw"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGS5v23qfkmhGtoO9PIWeH4v1MeeEhFpeU2JsOH00jV8-0qy7z4yD26I3Bv3Hpqe0EIhECDBqh_EyJw8Bv_il2qBqrH2HyRlTH3BloOeeUotcqxYj3xIqc5P68hYiNdRvRDjXgmF_9Ft7nO6vmU6wtkbhqjAU_oW0Fv6HB4F3ivTh0a60hhl8aWnZCvvOcZFRMtP_cW-5B6EX0EikZKM671yfFFzphZHwGuCvJS4bxEPmUhcgkiKceLIItI5CTOH6ePF81PcgkqUN"
          />
          <div className="relative flex flex-col items-start justify-between gap-10 px-8 py-12 sm:px-10 lg:flex-row lg:items-center lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-3 text-secondary-container">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Icon name="emergency" className="h-5 w-5 animate-pulse" />
                </span>
                <span className="text-label-caps">ACIL DURUM SERVISI</span>
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                7/24 Nobetci Veteriner
              </h2>
              <p className="mt-5 max-w-xl text-body-lg text-on-primary-container">
                Zamanin kritik oldugu anlarda, uzman ekibimiz ve tam donanimli unitemizle her an yaninizdayiz.
              </p>
            </div>
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <a className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl" href="tel:+902120000000">
                0212 000 00 00
              </a>
              <a
                className="inline-flex rounded-lg bg-white px-8 py-4 text-label-caps text-primary-container hover:bg-secondary-container"
                href="#contact"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-30">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 rounded-4xl bg-secondary-container lg:block" />
            <div className="relative aspect-square overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                alt="Modern ve tam donanimli veteriner operasyon odasi"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBctQwLQIzeSFQ2vmm7xbp0Gn17FQicgIlk0-YhXCnGCNGJhcECnAtFCG3y1YOAGN5ob1HzZGqtE7bJBFGYSh10qQ6lYae1X2vp39JdFqfN1zz4Oz0eId3HV1YOuO1I6XsB3hEyXS8ofO7VCGE-hRWyXFkbOFSHTD6yNuSaD-z0CHleswa1xOAwXE-1t54yTtJAfzIxjjfGSjGsT8TieRPc-fr765P51Qdjt2L8OxDBjyUBnTX1HHj5DeVmELNcZ0JRWYCFYdA8dLct"
              />
            </div>
          </div>

          <div>
            <p className="text-label-caps text-secondary">GUVEN VE TEKNOLOJI</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-primary sm:text-5xl">
              Modern Tip, Butik Yaklasim
            </h2>
            <p className="mt-8 text-body-lg text-on-surface-variant">
              Her petin benzersiz oldugunu biliyoruz. Teshis sureclerimizde en guncel tibbi teknolojileri kullanirken, tedavi planlarimizi tamamen bireysel ihtiyaclara gore sekillendiriyoruz.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                ["15+", "UZMAN HEKIM"],
                ["24/7", "KESINTISIZ HIZMET"],
                ["HD", "GORUNTULEME"],
                ["ZERO", "STRES ORTAMI"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-primary">{value}</div>
                  <div className="mt-2 text-label-caps text-secondary">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-surface-container-low px-4 py-24 sm:px-6 lg:px-8 lg:py-30">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="text-headline-md text-primary sm:text-5xl">Bilgi Merkezi</h2>
            <p className="mt-4 text-body-md text-on-surface-variant">
              Petinizin sagligi hakkinda sikca sorulan sorular
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[20px] border border-transparent bg-white p-6 shadow-sm transition hover:border-secondary-container"
                open={faq.open}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-primary">
                  <span>{faq.question}</span>
                  <Icon name="chevron" className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 border-t border-surface-variant pt-4 text-body-md text-on-surface-variant">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
