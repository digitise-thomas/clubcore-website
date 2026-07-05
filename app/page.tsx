import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import CalendlyClient from "./components/CalendlyClient";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-card pt-24 pb-20 sm:pt-32 sm:pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] text-ink">
            Relationsdrevne fællesskaber,<br />bygget for B2B.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed">
            Én platform — der <em>samler</em>, <em>engagerer</em> og <em>skaber indsigt</em>.
            Mindre administration. Mere engagement.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link href="#book" className="btn-primary">
              Book en demo
            </Link>
            <Link href="#features" className="btn-secondary">
              Se funktioner →
            </Link>
          </div>
          <p className="mt-8 text-sm text-faint">
            GDPR-kompatibel · EU-hosting · Fleksibel kontrakt
          </p>
        </div>
      </section>

      {/* LOGOS */}
      <section className="bg-card pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-center mb-10">Du er i godt selskab</p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            <Image src="/businessvejle.png" alt="BusinessVejle" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/holstebro.png" alt="Erhvervsforum Holstebro" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/hjoerring.png" alt="Erhverv Hjørring" width={160} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
            <Image src="/varde.png" alt="ProVarde" width={100} height={50} className="grayscale opacity-50 hover:opacity-90 transition" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        {/* 1 — Medlemsstyring */}
        <div className="bg-paper-2 py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-6">Medlemsstyring</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
                Medlemskaber,<br />der kører <em>sig selv</em>.
              </h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">
                Stamdata, kategorier, aktiviteter og betalinger — samlet ét sted og altid opdateret.
              </p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Ubegrænsede kontakter og medlemskaber</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Registrer aktiviteter og engagement</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Integration til e-conomic</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Åbent API</li>
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
              <p className="eyebrow mb-6">Begivenheder</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
                Fra invitation<br />til <em>check-in</em>.
              </h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">
                Tilmeldinger, ventelister og navneskilte — håndteret automatisk, så arrangørerne kan være til stede.
              </p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Egen tilmeldingsside med venteliste</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Tilmeld som gæst og kalenderinvitation</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Download deltagerliste og navneskilte</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Send e-mails og SMS direkte fra platformen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 — Netværksgrupper */}
        <div className="bg-paper-2 py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-6">Netværksgrupper</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
                Fællesskaber,<br />der <em>finder hinanden</em>.
              </h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">
                Egne gruppesider, opslagstavler og telefonbog — værktøjerne der holder samtalen i gang mellem møderne.
              </p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Gruppesider med egne begivenheder</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Opslagstavle og filarkiv</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Telefonbog og medlemsprofiler</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Målrettet kommunikation pr. gruppe</li>
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
              <p className="eyebrow mb-6">Rapportering &amp; indsigt</p>
              <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
                Data, der<br /><em>taler tilbage</em>.
              </h2>
              <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-md">
                Vækst, engagement og udmeldelsesårsager — klar til bestyrelsen og klar til handling.
              </p>
              <ul className="mt-8 space-y-3 text-ink">
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Medlemsvækst og kategorier</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Engagement og medlemmer i risiko</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> Udmeldelsesårsager</li>
                <li className="flex items-start gap-3"><Check size={18} className="mt-1 flex-shrink-0" /> MCP — forbind til f.eks. Claude</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERSPEKTIV / ARTIKEL */}
      <section className="bg-clay-soft py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Holdning · AI i erhvervsfremme</p>
          <h2 className="display text-3xl sm:text-4xl md:text-[44px] text-ink">
            Når viden bliver gratis,<br />bliver <em>relationen</em> alt.
          </h2>
          <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">
            Derfor fodrer CLUBCORE jeres AI-værktøjer med netværkets egen viden — i stedet for at bygge endnu en chatbot. Læs hvorfor.
          </p>
          <div className="mt-8">
            <Link href="/ai-i-erhvervsfremme" className="btn-primary">Læs artiklen →</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-paper-2 py-24 sm:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">Priser</p>
            <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
              Transparent prissætning.<br />Ingen <em>skjulte gebyrer</em>.
            </h2>
            <p className="mt-6 text-lg text-ink-2 max-w-xl mx-auto">
              Vælg den pakke, der passer til jeres netværk. Opstart: 4.995 kr.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { range: "1 – 149", price: "9.948" },
              { range: "150 – 299", price: "19.188" },
              { range: "300 – 499", price: "35.988" },
              { range: "500 – 999", price: "51.588" },
            ].map((tier) => (
              <div key={tier.range} className="bg-card border border-line rounded-2xl p-8 flex flex-col">
                <p className="eyebrow">Medlemmer</p>
                <p className="mt-2 text-2xl font-medium tracking-tight">{tier.range}</p>
                <div className="mt-6 pb-6 border-b border-dashed border-line">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light tracking-tight">{tier.price}</span>
                    <span className="text-faint text-sm">kr. / år</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-ink-2 flex-1">
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> Medlemsadministration</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> Eventtilmelding</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> Netværksgrupper</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> Rapportering</li>
                  <li className="flex items-start gap-2"><Check size={16} className="mt-0.5 flex-shrink-0" /> Support via e-mail</li>
                </ul>
                <Link href="#book" className="btn-primary-sm mt-8 w-full">Book demo</Link>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-ink-2">
            Mere end 1.000 medlemmer? <a href="mailto:thomas@digitise.dk" className="underline decoration-line underline-offset-4 hover:decoration-clay hover:text-clay-ink transition">Kontakt os</a> for et tilbud.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card py-24 sm:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">FAQ</p>
            <h2 className="display text-4xl sm:text-5xl md:text-[52px]">Spørgsmål.</h2>
          </div>
          <div className="border-t border-line">
            {[
              { q: "Hvor hurtigt kan vi komme i gang?", a: "Typisk 3–7 dage inkl. dataimport og opsætning." },
              { q: "Er vi bundet i en lang kontrakt?", a: "Nej, kontrakten fornyes årligt — med fuld fleksibilitet." },
              { q: "Er løsningen GDPR-kompatibel?", a: "Ja — alt data hostes sikkert inden for EU." },
              { q: "Kan vi importere eksisterende medlemsdata?", a: "Ja, vi hjælper med import fra regneark, e-conomic og andre systemer." },
            ].map((item) => (
              <details key={item.q} className="faq-item border-b border-line group">
                <summary className="flex items-center justify-between py-6 text-lg font-medium">
                  {item.q}
                </summary>
                <p className="pb-6 text-ink-2 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-paper-2 py-24 sm:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Klar?</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
            Løft jeres <em>netværk</em>.<br />Book en demo.
          </h2>
          <p className="mt-6 text-lg text-ink-2">
            Gratis og uforpligtende. Se præcis, hvordan platformen passer til jeres dagligdag.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="#book" className="btn-primary">Book demo</Link>
            <a href="mailto:thomas@digitise.dk" className="btn-secondary">Kontakt os →</a>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section id="book" className="bg-card py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-6">Book en tid</p>
          <h2 className="display text-4xl sm:text-5xl md:text-[52px]">
            Se platformen<br />i <em>aktion</em>.
          </h2>
          <p className="mt-6 text-lg text-ink-2 max-w-2xl mx-auto">
            En rundvisning der fokuserer på jeres behov — og en uforpligtende snak om mulighederne.
          </p>
          <div className="mt-12">
            <CalendlyClient />
          </div>
        </div>
      </section>
    </>
  );
}
