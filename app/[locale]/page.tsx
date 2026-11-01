import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Bot,
  CalendarDays,
  Check,
  Database,
  Home,
  Plug,
  ShieldCheck,
  Sparkles,
  Table2,
  Ticket,
  UserRound,
  Users,
} from "lucide-react";
import CalendlyClient from "../components/CalendlyClient";
import ContextDiagram from "../components/ContextDiagram";

// Headlines are two-tone: the first thought in ink, the second (<em>) in ink-muted.
const rich = {
  em: (chunks: React.ReactNode) => <em>{chunks}</em>,
  br: () => <br />,
};

type T = ReturnType<typeof useTranslations>;

function SectionHead({ t, className = "" }: { t: T; className?: string }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <p className="eyebrow mb-5">{t("eyebrow")}</p>
      <h2 className="display text-4xl sm:text-5xl md:text-[56px]">{t.rich("headline", rich)}</h2>
      {t.has("sub") && <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{t("sub")}</p>}
    </div>
  );
}

function Shot({ src, alt, width, height, priority = false }: { src: string; alt: string; width: number; height: number; priority?: boolean }) {
  return (
    <div className="shot">
      <div className="aspect-[16/10]">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className="h-full w-full object-cover object-left-top" />
      </div>
    </div>
  );
}

function Feature({ t, shot, flip = false }: { t: T; shot: { src: string; width: number; height: number }; flip?: boolean }) {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-20">
      <div className={flip ? "md:order-last" : ""}>
        <p className="eyebrow mb-5">{t("eyebrow")}</p>
        <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{t("headline")}</h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">{t("desc")}</p>
        <ul className="mt-8 space-y-3">
          {(["b1", "b2", "b3", "b4"] as const).map((key) => (
            <li key={key} className="flex items-start gap-3 text-[15px] font-medium">
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-positive-tint text-positive">
                <Check size={12} strokeWidth={3} />
              </span>
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
      <Shot src={shot.src} alt={t("shot_alt")} width={shot.width} height={shot.height} />
    </div>
  );
}

function Phone({ t }: { t: T }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <div className="phone-notch" />
        <div className="flex items-center justify-between">
          <Image src="/vaerk-logo.svg" alt="" width={226} height={137} className="-ml-3 h-12 w-auto" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vaerk-ink text-[11px] font-extrabold text-white">MK</span>
        </div>

        <h3 className="mt-4 text-[26px] font-extrabold leading-8 tracking-[-0.03em]">{t("phone.title")}</h3>
        <p className="mt-1 text-[12px] font-semibold text-vaerk-gray-600">{t("phone.greeting")}</p>

        {/* Active network */}
        <div className="phone-card mt-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#1b3f8f] text-[12px] font-extrabold text-white">EV</span>
              <span className="truncate text-[14px] font-extrabold tracking-[-0.02em]">{t("phone.n1_name")}</span>
            </div>
            <span className="phone-badge flex-shrink-0"><Check size={10} strokeWidth={3} />{t("phone.active")}</span>
          </div>
          <div className="my-3 h-px bg-vaerk-gray-200" />
          <p className="phone-eyebrow">{t("phone.n1_eyebrow")}</p>
          <p className="mt-1 text-[14px] font-bold leading-[19px] tracking-[-0.01em]">{t("phone.n1_event")}</p>
          <p className="mt-1 text-[12px] font-medium text-vaerk-gray-600">{t("phone.n1_meta")}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-vaerk-gray-600">{t("phone.n1_count")}</span>
            <span className="phone-btn">{t("phone.open")}</span>
          </div>
        </div>

        {/* Second network */}
        <div className="phone-card mt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-vaerk-ink text-[12px] font-extrabold text-white">BY</span>
              <span className="truncate text-[14px] font-extrabold tracking-[-0.02em]">{t("phone.n2_name")}</span>
            </div>
          </div>
          <div className="my-3 h-px bg-vaerk-gray-200" />
          <p className="phone-eyebrow">{t("phone.n2_eyebrow")}</p>
          <div className="mt-1 flex items-start justify-between gap-2">
            <p className="text-[14px] font-bold leading-[19px] tracking-[-0.01em]">{t("phone.n2_event")}</p>
            <span className="phone-badge phone-badge-success flex-shrink-0"><Check size={10} strokeWidth={3} />{t("phone.registered")}</span>
          </div>
          <p className="mt-1 text-[12px] font-medium text-vaerk-gray-600">{t("phone.n2_meta")}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-vaerk-gray-600">{t("phone.n2_count")}</span>
            <span className="phone-btn phone-btn-secondary">{t("phone.switch")}</span>
          </div>
        </div>

        <div className="phone-tabbar">
          <span className="phone-tab phone-tab-active"><Home strokeWidth={2.2} />{t("phone.tab_home")}</span>
          <span className="phone-tab"><CalendarDays strokeWidth={1.8} />{t("phone.tab_events")}</span>
          <span className="phone-tab"><Users strokeWidth={1.8} />{t("phone.tab_groups")}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home_() {
  const tHero = useTranslations("hero");
  const tLogos = useTranslations("logos");
  const tProblem = useTranslations("problem");
  const tAi = useTranslations("ai");
  const tF1 = useTranslations("features.f1");
  const tF2 = useTranslations("features.f2");
  const tF3 = useTranslations("features.f3");
  const tF4 = useTranslations("features.f4");
  const tApp = useTranslations("app");
  const tProcess = useTranslations("process");
  const tArticle = useTranslations("article");
  const tWho = useTranslations("who");
  const tPricing = useTranslations("pricing");
  const tFaq = useTranslations("faq");
  const tFinal = useTranslations("final");
  const tBook = useTranslations("book");

  const problemIcons = { p1: Database, p2: CalendarDays, p3: Table2, p4: Bot } as const;
  const aiIcons = { pt1: Plug, pt2: ShieldCheck, pt3: Sparkles } as const;
  const appIcons = { f1: Ticket, f2: Users, f3: Bell, f4: UserRound } as const;

  return (
    <>
      {/* HERO */}
      <section className="px-5 pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6">{tHero("eyebrow")}</p>
          <h1 className="display mx-auto max-w-5xl text-[44px] sm:text-6xl md:text-7xl lg:text-[78px]">{tHero.rich("headline", rich)}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">{tHero("sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#book" className="btn btn-primary btn-lg">{tHero("cta_primary")}</a>
            <a href="#loesning" className="btn btn-glass btn-lg">{tHero("cta_secondary")} <ArrowRight /></a>
          </div>
          <p className="caption mt-6">{tHero("trust")}</p>
        </div>
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="shot">
            <div>
              <Image src="/glass/dashboard-v2.jpg" alt={tHero("shot_alt")} width={1456} height={800} priority className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="px-5 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-8 text-center">{tLogos("eyebrow")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            <Image src="/businessvejle.png" alt="BusinessVejle" width={160} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <Image src="/holstebro.png" alt="Erhvervsforum Holstebro" width={160} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <Image src="/hjoerring.png" alt="Erhverv Hjørring" width={160} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <Image src="/varde.png" alt="ProVarde" width={100} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <Image src="/toender.svg" alt="Tønder Erhvervsråd" width={100} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            <Image src="/visitvejle.png" alt="VisitVejle" width={160} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            {/* NBEN: aktiveres når kontrakten foreligger
            <Image src="/nben.png" alt="Netværk for Bæredygtig Erhvervsudvikling NordDanmark" width={200} height={50} className="h-8 w-auto opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0" />
            */}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-5 py-20 sm:py-28">
        <SectionHead t={tProblem} />
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {(["p1", "p2", "p3", "p4"] as const).map((key) => {
            const Icon = problemIcons[key];
            return (
              <div key={key} className="card p-6 sm:p-7">
                <span className="tile"><Icon size={18} /></span>
                <h3 className="heading mt-5">{tProblem(`${key}.title`)}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{tProblem(`${key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI CONTEXT */}
      <section id="ai" className="scroll-mt-28 px-5 py-20 sm:py-28">
        <SectionHead t={tAi} />

        {/* Desktop: architecture-style diagram. Mobile: the three stacked groups. */}
        <div className="mx-auto mt-14 hidden max-w-6xl lg:block">
          <ContextDiagram />
        </div>
        <div className="mx-auto mt-14 hidden max-w-4xl md:block lg:hidden">
          <ContextDiagram compact />
        </div>
        <div className="card mx-auto mt-12 max-w-5xl p-6 md:hidden">
          <div className="grid grid-cols-1 items-center gap-6">
            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5">
              {(["d1", "d2", "d3", "d4"] as const).map((key) => (
                <span key={key} className="pill-choice">{tAi(key)}</span>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <ArrowRight className="rotate-90 text-ink-faint" size={22} />
              <div className="tile tile-ink flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full text-center shadow-button">
                <b className="text-[13px] font-bold tracking-[0.12em]">CLUBCORE</b>
                <span className="max-w-24 text-[11px] leading-tight text-white/60">{tAi("hub_sub")}</span>
              </div>
              <ArrowRight className="rotate-90 text-ink-faint" size={22} />
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5">
              <span className="pill-choice pill-choice-on">ChatGPT</span>
              <span className="pill-choice pill-choice-on">Claude</span>
              <span className="pill-choice pill-choice-on">Copilot</span>
              <span className="pill-choice">{tAi("own_tool")}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {(["pt1", "pt2", "pt3"] as const).map((key) => {
            const Icon = aiIcons[key];
            return (
              <div key={key} className="flex gap-4 p-2 sm:block sm:p-4">
                <span className="tile tile-info"><Icon size={18} /></span>
                <div>
                  <h4 className="heading sm:mt-4">{tAi(`${key}.title`)}</h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{tAi(`${key}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section id="loesning" className="scroll-mt-28">
        <div className="px-5 py-20 sm:py-28"><Feature t={tF1} shot={{ src: "/glass/members.jpg", width: 1496, height: 812 }} /></div>
        <div className="px-5 py-20 sm:py-28"><Feature t={tF2} shot={{ src: "/glass/events.jpg", width: 1512, height: 809 }} flip /></div>
        <div className="px-5 py-20 sm:py-28"><Feature t={tF3} shot={{ src: "/glass/group.jpg", width: 1440, height: 817 }} /></div>
        <div className="px-5 py-20 sm:py-28"><Feature t={tF4} shot={{ src: "/glass/report.jpg", width: 1440, height: 817 }} flip /></div>
      </section>

      {/* VAERK — THE MEMBER APP */}
      <section id="app" className="scroll-mt-28 px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image src="/vaerk-logo.svg" alt="vaerk" width={226} height={137} className="-ml-2 h-12 w-auto" />
              <span className="eyebrow">{tApp("eyebrow")}</span>
            </div>
            <h2 className="display text-4xl sm:text-5xl md:text-[46px] lg:text-[52px]">{tApp.rich("headline", rich)}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">{tApp("sub")}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {(["f1", "f2", "f3", "f4"] as const).map((key) => {
                const Icon = appIcons[key];
                return (
                  <li key={key} className="flex gap-3">
                    <span className="tile tile-vaerk"><Icon size={18} /></span>
                    <div>
                      <h3 className="text-[15px] font-semibold leading-5">{tApp(`${key}.title`)}</h3>
                      <p className="caption mt-1">{tApp(`${key}.desc`)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://vaerk.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{tApp("cta")} <ArrowUpRight /></a>
              <a href="#book" className="btn btn-secondary">{tApp("cta_secondary")}</a>
            </div>
            <p className="caption mt-4 max-w-md">{tApp("note")}</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Phone t={tApp} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:py-28">
        <SectionHead t={tProcess} />
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["s1", "s2", "s3", "s4"] as const).map((key) => (
            <div key={key} className="card p-6">
              <span className="chip chip-link">{tProcess(`${key}.tag`)}</span>
              <h4 className="heading mt-5">{tProcess(`${key}.title`)}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{tProcess(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERSPEKTIV / ARTIKEL */}
      <section className="px-5 py-10 sm:py-14">
        <div className="card mx-auto max-w-4xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="eyebrow mb-5">{tArticle("eyebrow")}</p>
          <h2 className="display text-3xl sm:text-4xl md:text-[44px]">{tArticle.rich("headline", rich)}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{tArticle("sub")}</p>
          <div className="mt-8">
            <a href="https://clubcore.dk/ai-i-erhvervsfremme" className="btn btn-secondary">{tArticle("cta")} <ArrowRight /></a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 py-20 sm:py-28">
        <SectionHead t={tWho} />
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {(["c1", "c2", "c3", "c4"] as const).map((key) => (
            <div key={key} className="card p-6 sm:p-7">
              {key === "c1" && <span className="chip chip-link mb-4">{tWho("c1.tag")}</span>}
              <h3 className="heading">{tWho(`${key}.title`)}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{tWho(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="priser" className="scroll-mt-28 px-5 py-20 sm:py-28">
        <SectionHead t={tPricing} />
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { range: "1 – 149", price: "9.948" },
            { range: "150 – 299", price: "19.188" },
            { range: "300 – 499", price: "35.988" },
            { range: "500 – 999", price: "51.588" },
          ].map((tier) => (
            <div key={tier.range} className="card flex flex-col p-7">
              <p className="eyebrow">{tPricing("label")}</p>
              <p className="stat mt-2 text-[28px] leading-8">{tier.range}</p>
              <div className="mt-6 border-b border-hairline pb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="stat text-[40px] leading-10">{tier.price}</span>
                  <span className="caption">{tPricing("unit")}</span>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-[14px]">
                {(["f1", "f2", "f3", "f4", "f5"] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full bg-positive-tint text-positive">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {tPricing(key)}
                  </li>
                ))}
              </ul>
              <a href="#book" className="btn btn-secondary btn-sm mt-8 w-full">{tHero("cta_primary")}</a>
            </div>
          ))}
        </div>
        <p className="caption mt-10 text-center text-[15px]">{tPricing("enterprise")}</p>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28 px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHead t={tFaq} />
          <div className="card mt-14 divide-y divide-hairline px-2 sm:px-4">
            {(["1", "2", "3", "4", "5", "6"] as const).map((n) => (
              <details key={n} className="faq-item">
                <summary className="flex items-center justify-between gap-6 px-4 py-5 text-[16px] font-semibold">
                  {tFaq(`q${n}`)}
                </summary>
                <p className="px-4 pb-6 leading-relaxed text-ink-muted">{tFaq(`a${n}`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-5">{tFinal("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[56px]">{tFinal.rich("headline", rich)}</h2>
          <p className="mt-6 text-lg text-ink-muted">{tFinal("sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#book" className="btn btn-primary btn-lg">{tHero("cta_primary")}</a>
            <a href="mailto:thomas@digitise.dk" className="btn btn-secondary btn-lg">{tFinal("contact")} <ArrowRight /></a>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="book" className="scroll-mt-28 px-5 pb-20 pt-10 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-5">{tBook("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tBook("headline")}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">{tBook("sub")}</p>
          <div className="card mt-12 p-3 sm:p-5">
            <CalendlyClient />
          </div>
        </div>
      </section>
    </>
  );
}
