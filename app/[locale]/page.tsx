import Image from "next/image";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import CalendlyClient from "../components/CalendlyClient";

const rich = {
  em: (chunks: React.ReactNode) => <em>{chunks}</em>,
  br: () => <br />,
};

const aiRich = {
  ...rich,
  moss: (chunks: React.ReactNode) => <span className="italic text-moss-ink">{chunks}</span>,
};

export default function Home() {
  const tHero = useTranslations("hero");
  const tLogos = useTranslations("logos");
  const tProblem = useTranslations("problem");
  const tAi = useTranslations("ai");
  const tF1 = useTranslations("features.f1");
  const tF2 = useTranslations("features.f2");
  const tF3 = useTranslations("features.f3");
  const tF4 = useTranslations("features.f4");
  const tProcess = useTranslations("process");
  const tArticle = useTranslations("article");
  const tWho = useTranslations("who");
  const tPricing = useTranslations("pricing");
  const tFaq = useTranslations("faq");
  const tFinal = useTranslations("final");
  const tBook = useTranslations("book");

  return (
    <>
      {/* HERO */}
      <section className="bg-card pt-24 pb-20 sm:pt-32 sm:pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] text-ink">
            {tHero.rich("headline", rich)}
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed">
            {tHero("sub")}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href="#book" className="btn-primary">{tHero("cta_primary")}</a>
            <a href="#loesning" className="btn-secondary">{tHero("cta_secondary")}</a>
          </div>
          <p className="mt-8 text-sm text-faint">{tHero("trust")}</p>

          <div className="product-dark mt-16 aspect-[16/9] w-full max-w-4xl mx-auto p-6 pt-10">
            <div className="product-dark-chrome"><span /><span /><span /></div>
            <div className="w-full h-full rounded-lg overflow-hidden bg-card shadow-2xl">
              <Image src="/medlemsstyring.png" alt="CLUBCORE medlemsoversigt og dashboard" width={1513} height={989} className="w-full h-full object-cover object-left-top" />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="bg-card pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-center mb-10">{tLogos("eyebrow")}</p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            <Image src="/businessvejle.png" alt="BusinessVejle" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/holstebro.png" alt="Erhvervsforum Holstebro" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/hjoerring.png" alt="Erhverv Hjørring" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/varde.png" alt="ProVarde" width={100} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">{tProblem("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px] text-ink">
            {tProblem.rich("headline", rich)}
          </h2>
          <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">{tProblem("sub")}</p>
        </div>
        <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-5">
          {(["p1", "p2", "p3", "p4"] as const).map((key) => (
            <div key={key} className="bg-card border border-line rounded-2xl p-7">
              <h3 className="text-lg font-semibold text-ink">{tProblem(`${key}.title`)}</h3>
              <p className="mt-2.5 text-ink-2 leading-relaxed">{tProblem(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI CONTEXT */}
      <section id="ai" className="bg-card py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow moss mb-6">{tAi("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px] text-ink">
            {tAi.rich("headline", aiRich)}
          </h2>
          <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">{tAi("sub")}</p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-row flex-wrap md:flex-col justify-center items-center md:items-end gap-3">
            {(["d1", "d2", "d3", "d4"] as const).map((key) => (
              <span key={key} className="text-sm font-semibold border rounded-lg px-4 py-2.5 bg-card" style={{ borderColor: "color-mix(in oklab, var(--clay) 45%, var(--line-2))" }}>
                {tAi(key)}
              </span>
            ))}
          </div>
          <div className="flex flex-row md:flex-col items-center justify-center gap-3">
            <span className="text-2xl text-clay">→</span>
            <div className="rounded-full bg-ink text-card w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center text-center gap-1 shadow-2xl">
              <b className="font-mono text-sm tracking-wide">CLUBCORE</b>
              <span className="text-[0.65rem] text-card/60 max-w-24 leading-tight">{tAi("hub_sub")}</span>
            </div>
            <span className="text-2xl text-moss">→</span>
          </div>
          <div className="flex flex-row flex-wrap md:flex-col justify-center items-center md:items-start gap-3">
            <span className="text-sm font-semibold border rounded-lg px-4 py-2.5 bg-card" style={{ borderColor: "color-mix(in oklab, var(--moss) 45%, var(--line-2))" }}>ChatGPT</span>
            <span className="text-sm font-semibold border rounded-lg px-4 py-2.5 bg-card" style={{ borderColor: "color-mix(in oklab, var(--moss) 45%, var(--line-2))" }}>Claude</span>
            <span className="text-sm font-semibold border rounded-lg px-4 py-2.5 bg-card" style={{ borderColor: "color-mix(in oklab, var(--moss) 45%, var(--line-2))" }}>Copilot</span>
            <span className="text-sm font-semibold border rounded-lg px-4 py-2.5 bg-card" style={{ borderColor: "color-mix(in oklab, var(--moss) 45%, var(--line-2))" }}>{tAi("own_tool")}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-20 grid sm:grid-cols-3 gap-10">
          {(["pt1", "pt2", "pt3"] as const).map((key) => (
            <div key={key}>
              <h4 className="font-semibold text-ink">{tAi(`${key}.title`)}</h4>
              <p className="mt-2 text-ink-2 text-sm leading-relaxed">{tAi(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="loesning">
        {/* 1 — Medlemsstyring */}
        <div className="bg-paper-2 py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-6">{tF1("eyebrow")}</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tF1.rich("headline", rich)}</h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">{tF1("desc")}</p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF1("b1")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF1("b2")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF1("b3")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF1("b4")}</li>
              </ul>
            </div>
            <div className="product-dark aspect-[4/3] w-full p-6 pt-10">
              <div className="product-dark-chrome"><span /><span /><span /></div>
              <div className="w-full h-full rounded-lg overflow-hidden bg-card shadow-2xl">
                <Image src="/medlemsstyring.png" alt="CLUBCORE medlemsoversigt og dashboard" width={1513} height={989} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

        {/* 2 — Begivenheder */}
        <div className="bg-card py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="product-dark aspect-[4/3] w-full p-6 pt-10 order-last md:order-first">
              <div className="product-dark-chrome"><span /><span /><span /></div>
              <div className="w-full h-full rounded-lg overflow-hidden bg-card shadow-2xl">
                <Image src="/event.png" alt="CLUBCORE begivenhed med tilmelding" width={1515} height={1045} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
            <div>
              <p className="eyebrow mb-6">{tF2("eyebrow")}</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tF2.rich("headline", rich)}</h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">{tF2("desc")}</p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF2("b1")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF2("b2")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF2("b3")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF2("b4")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 — Netværksgrupper */}
        <div className="bg-paper-2 py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-6">{tF3("eyebrow")}</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tF3.rich("headline", rich)}</h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">{tF3("desc")}</p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF3("b1")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF3("b2")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF3("b3")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF3("b4")}</li>
              </ul>
            </div>
            <div className="product-dark aspect-[4/3] w-full p-6 pt-10">
              <div className="product-dark-chrome"><span /><span /><span /></div>
              <div className="w-full h-full rounded-lg overflow-hidden bg-card shadow-2xl">
                <Image src="/netvaerksgruppe.png" alt="CLUBCORE netværksgruppe med opslag og kommunikation" width={1511} height={919} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 — Rapportering */}
        <div className="bg-card py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="product-dark aspect-[4/3] w-full p-6 pt-10 order-last md:order-first">
              <div className="product-dark-chrome"><span /><span /><span /></div>
              <div className="w-full h-full rounded-lg overflow-hidden bg-card shadow-2xl">
                <Image src="/rapport.png" alt="CLUBCORE medlemsrapport med vækstgraf" width={1523} height={934} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
            <div>
              <p className="eyebrow mb-6">{tF4("eyebrow")}</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tF4.rich("headline", rich)}</h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">{tF4("desc")}</p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF4("b1")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF4("b2")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF4("b3")}</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> {tF4("b4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">{tProcess("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px] text-ink">{tProcess.rich("headline", rich)}</h2>
        </div>
        <div className="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(["s1", "s2", "s3", "s4"] as const).map((key) => (
            <div key={key} className="pt-6 border-t-2 border-clay">
              <p className="eyebrow">{tProcess(`${key}.tag`)}</p>
              <h4 className="mt-2.5 text-lg font-semibold text-ink">{tProcess(`${key}.title`)}</h4>
              <p className="mt-2 text-ink-2 text-sm leading-relaxed">{tProcess(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERSPEKTIV / ARTIKEL */}
      <section className="bg-clay-soft py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">{tArticle("eyebrow")}</p>
          <h2 className="display text-3xl sm:text-4xl md:text-[44px] text-ink">{tArticle.rich("headline", rich)}</h2>
          <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">{tArticle("sub")}</p>
          <div className="mt-8">
            <a href="https://clubcore.dk/ai-i-erhvervsfremme" className="btn-primary">{tArticle("cta")}</a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow moss mb-6">{tWho("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px] text-ink">{tWho.rich("headline", rich)}</h2>
          <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">{tWho("sub")}</p>
        </div>
        <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-5">
          {(["c1", "c2", "c3", "c4"] as const).map((key) => (
            <div key={key} className="bg-card border border-line rounded-2xl p-7">
              {key === "c1" && <p className="eyebrow moss mb-3 text-[0.65rem]">{tWho("c1.tag")}</p>}
              <h3 className="text-lg font-semibold text-ink">{tWho(`${key}.title`)}</h3>
              <p className="mt-2.5 text-ink-2 leading-relaxed">{tWho(`${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="priser" className="bg-card py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">{tPricing("eyebrow")}</p>
            <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tPricing.rich("headline", rich)}</h2>
            <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">{tPricing("sub")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { range: "1 – 149", price: "9.948" },
              { range: "150 – 299", price: "19.188" },
              { range: "300 – 499", price: "35.988" },
              { range: "500 – 999", price: "51.588" },
            ].map((tier) => (
              <div key={tier.range} className="bg-paper-2 border border-line rounded-2xl p-8 flex flex-col">
                <p className="eyebrow">{tPricing("label")}</p>
                <p className="mt-2 text-2xl font-medium tracking-tight">{tier.range}</p>
                <div className="mt-6 pb-6 border-b border-dashed border-line">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light tracking-tight">{tier.price}</span>
                    <span className="text-faint text-sm">{tPricing("unit")}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-ink-2 flex-1">
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> {tPricing("f1")}</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> {tPricing("f2")}</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> {tPricing("f3")}</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> {tPricing("f4")}</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> {tPricing("f5")}</li>
                </ul>
                <a href="#book" className="btn-primary-sm mt-8 w-full">{tHero("cta_primary")}</a>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-ink-2">
            {tPricing("enterprise")}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">{tFaq("eyebrow")}</p>
            <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tFaq("headline")}</h2>
          </div>
          <div className="border-t border-line">
            {(["1", "2", "3", "4", "5"] as const).map((n) => (
              <details key={n} className="faq-item border-b border-line group">
                <summary className="flex items-center justify-between py-6 text-lg font-medium">
                  {tFaq(`q${n}`)}
                </summary>
                <p className="pb-6 text-ink-2 leading-relaxed">{tFaq(`a${n}`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-card py-24 sm:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">{tFinal("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tFinal.rich("headline", rich)}</h2>
          <p className="mt-6 text-lg text-ink-2">{tFinal("sub")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#book" className="btn-primary">{tHero("cta_primary")}</a>
            <a href="mailto:thomas@digitise.dk" className="btn-secondary">{tFinal("contact")}</a>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="book" className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">{tBook("eyebrow")}</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px]">{tBook.rich("headline", rich)}</h2>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl mx-auto">{tBook("sub")}</p>
          <div className="mt-12">
            <CalendlyClient />
          </div>
        </div>
      </section>
    </>
  );
}
