import type { Metadata } from "next";
import Image from "next/image";
import { Hanken_Grotesk, Instrument_Serif, Geist_Mono } from "next/font/google";

// Soft Nordic typography — matches the Clubcore platform.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hanken",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Erhvervsfremme i en AI-tid: Clubcore som kontekstmotor | Clubcore",
  description:
    "En debat om kunstig intelligens omformer dansk erhvervsfremme. Læs hvorfor Clubcore understøtter den ved at levere netværkets viden til AI - frem for at bygge AI ind i platformen.",
  authors: [{ name: "Clubcore" }],
  openGraph: {
    type: "article",
    title:
      "Erhvervsfremme i en AI-tid: derfor fodrer Clubcore AI'en frem for at bygge den ind",
    description:
      "Når viden bliver gratis, bliver relationen alt. Sådan understøtter Clubcore fremtidens erhvervsfremme.",
    locale: "da_DK",
  },
};

const Loop = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12a8 8 0 1 1 2.6 5.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 13.5 4.4 18l4.2-1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const css = `
  .efr{
    --bg:oklch(0.975 0.008 85);
    --paper:oklch(0.995 0.004 85);
    --ink:oklch(0.305 0.018 265);
    --muted:oklch(0.50 0.016 265);
    --accent:oklch(0.66 0.095 48);
    --accent-ink:oklch(0.42 0.08 45);
    --accent-soft:oklch(0.66 0.095 48 / 0.10);
    --line:oklch(0.915 0.008 85);
    --measure:46rem;
    --serif:var(--font-hanken),ui-sans-serif,system-ui,sans-serif;
    --display:var(--font-instrument),Georgia,serif;
    --mono:var(--font-geist-mono),ui-monospace,Menlo,monospace;
    background:
      radial-gradient(1300px 640px at 16% -10%, oklch(0.91 0.05 55) 0%, transparent 46%),
      radial-gradient(1100px 560px at 96% -4%, oklch(0.92 0.042 150) 0%, transparent 42%),
      var(--bg);
    background-attachment:fixed;
    color:var(--ink);
    font-family:var(--serif);
    font-size:19px;
    line-height:1.7;
    min-height:100vh;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }
  .efr *{box-sizing:border-box}
  .efr .wrap{max-width:var(--measure);margin:0 auto;padding:0 1.5rem}

  /* ---- top bar ---- */
  .efr .topbar{border-bottom:1px solid var(--line)}
  .efr .topbar .wrap{display:flex;align-items:center;gap:.6rem;padding-top:1.4rem;padding-bottom:1.4rem}
  .efr .brand{display:inline-flex;align-items:center;text-decoration:none}
  .efr .brand .logo{height:26px;width:auto;display:block}

  /* ---- hero ---- */
  .efr header.hero{padding-top:4.2rem;padding-bottom:1.2rem;animation:efr-rise .7s cubic-bezier(.2,.7,.2,1) both}
  .efr .eyebrow{font-family:var(--mono);font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent-ink);margin:0 0 1.4rem}
  .efr h1{
    font-family:var(--display);
    font-weight:400;
    font-size:clamp(2.5rem,6.4vw,4.3rem);
    line-height:1.03;
    letter-spacing:-.012em;
    margin:0 0 1.4rem;
  }
  .efr .standfirst{font-size:clamp(1.18rem,2.4vw,1.4rem);line-height:1.55;color:var(--muted);margin:0 0 2.2rem;font-weight:400}
  .efr .byline{display:flex;flex-wrap:wrap;gap:.5rem 1.1rem;align-items:center;font-family:var(--mono);font-size:.8rem;color:var(--muted);padding:1.1rem 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .efr .byline strong{color:var(--ink);font-weight:500}
  .efr .byline .dot{width:3px;height:3px;border-radius:50%;background:var(--line)}

  /* ---- body ---- */
  .efr article{padding-top:2.6rem;padding-bottom:1rem}
  .efr article p{margin:0 0 1.35rem}
  .efr article h2{
    font-family:var(--display);
    font-weight:400;
    font-size:clamp(1.5rem,3.1vw,2.05rem);
    line-height:1.12;
    letter-spacing:-.008em;
    margin:3rem 0 1rem;
  }
  .efr article a{color:var(--accent-ink);text-decoration:none;border-bottom:1.5px solid var(--accent-soft);box-shadow:inset 0 -.5px 0 var(--accent);transition:background .18s ease,color .18s ease}
  .efr article a:hover{background:var(--accent-soft)}
  .efr strong{font-weight:500}
  .efr em{font-style:italic}

  /* ---- social proof inline marker ---- */
  .efr .proof{
    font-family:var(--mono);
    font-size:.86rem;
    line-height:1.5;
    letter-spacing:.01em;
    color:var(--accent-ink);
    background:var(--accent-soft);
    border-left:2.5px solid var(--accent);
    padding:.9rem 1.1rem;
    margin:2rem 0;
    border-radius:0 4px 4px 0;
  }

  /* ---- pull quote: the signature ---- */
  .efr .pull{margin:3rem 0;padding:2.2rem 0 2rem;border-top:1px solid var(--line);border-bottom:1px solid var(--line);text-align:left}
  .efr .pull .loop{width:30px;height:30px;color:var(--accent);margin-bottom:1rem;display:block}
  .efr .pull blockquote{
    margin:0;
    font-family:var(--display);
    font-weight:400;
    font-size:clamp(1.5rem,3.4vw,2.25rem);
    line-height:1.18;
    letter-spacing:-.01em;
    color:var(--ink);
  }
  .efr .pull blockquote em{color:var(--accent-ink);font-style:normal}

  /* ---- sources ---- */
  .efr .sources{margin:3.4rem 0 0;padding:1.8rem 0 0;border-top:1px solid var(--line)}
  .efr .sources h3{font-family:var(--mono);font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin:0 0 1rem;font-weight:500}
  .efr .sources ul{list-style:none;margin:0;padding:0}
  .efr .sources li{font-size:.98rem;line-height:1.5;margin:0 0 .85rem;padding-left:1.1rem;position:relative}
  .efr .sources li::before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border:1.5px solid var(--accent);border-radius:50%}
  .efr .sources a{color:var(--accent-ink);text-decoration:none;border-bottom:1px solid var(--line)}
  .efr .sources a:hover{border-color:var(--accent)}

  /* ---- CTA ---- */
  .efr .cta{background:var(--paper);border:1px solid var(--line);border-radius:8px;padding:2.2rem;margin:3.4rem 0 1rem}
  .efr .cta h3{font-family:var(--display);font-weight:400;font-size:1.5rem;line-height:1.15;margin:0 0 .6rem}
  .efr .cta p{font-size:1.02rem;color:var(--muted);margin:0 0 1.5rem;max-width:42ch}
  .efr .btn{
    display:inline-flex;align-items:center;gap:.6rem;
    font-family:var(--mono);font-size:.9rem;font-weight:500;letter-spacing:.01em;
    color:var(--paper);background:var(--accent);
    padding:.8rem 1.3rem;border-radius:6px;text-decoration:none;
    transition:background .18s ease,transform .18s ease;
  }
  .efr .btn:hover{background:var(--accent-ink);transform:translateY(-1px)}
  .efr .btn .loop{width:16px;height:16px}

  /* ---- author footer ---- */
  .efr .author{display:flex;gap:1rem;align-items:flex-start;margin:2.6rem 0 0;padding:1.8rem 0 0;border-top:1px solid var(--line)}
  .efr .author .mark{flex:none;width:44px;height:44px;border-radius:50%;background:var(--accent-soft);display:grid;place-items:center;color:var(--accent)}
  .efr .author .mark .loop{width:22px;height:22px}
  .efr .author p{margin:0;font-size:.95rem;line-height:1.55;color:var(--muted)}
  .efr .author p strong{color:var(--ink);font-weight:500}

  .efr footer.foot{border-top:1px solid var(--line);margin-top:3.4rem}
  .efr footer.foot .wrap{padding:1.6rem 1.5rem;font-family:var(--mono);font-size:.78rem;color:var(--muted);display:flex;justify-content:space-between;flex-wrap:wrap;gap:.6rem}
  .efr footer.foot a{color:var(--muted);text-decoration:none}
  .efr footer.foot a:hover{color:var(--accent-ink)}

  @keyframes efr-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  @media (prefers-reduced-motion:reduce){
    .efr header.hero{animation:none}
    .efr .btn:hover{transform:none}
    .efr *{transition:none!important}
  }
  @media (max-width:600px){
    .efr{font-size:18px}
    .efr header.hero{padding-top:3rem}
    .efr .standfirst{max-width:none}
  }
  .efr :focus-visible{outline:2.5px solid var(--accent);outline-offset:3px;border-radius:2px}
`;

export default function AiIErhvervsfremme() {
  return (
    <div className={`efr ${hankenGrotesk.variable} ${instrumentSerif.variable} ${geistMono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="topbar">
        <div className="wrap">
          <a className="brand" href="https://clubcore.dk" aria-label="Clubcore">
            <Image src="/clubcore-logo.png" width={260} height={65} alt="CLUBCORE" className="logo" priority />
          </a>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">Holdning · AI i erhvervsfremme</p>
          <h1>Når viden bliver gratis, bliver relationen alt</h1>
          <p className="standfirst">En debat om kunstig intelligens er ved at omforme dansk erhvervsfremme. Her er, hvorfor vi har bygget Clubcore til at understøtte den - uden at bygge AI ind i platformen.</p>
          <div className="byline">
            <span><strong>Thomas Damkjær Larsen</strong></span>
            <span className="dot"></span>
            <span>Founder-perspektiv</span>
            <span className="dot"></span>
            <span>4 min. læsning</span>
          </div>
        </div>
      </header>

      <article>
        <div className="wrap">
          <p>Der foregår en stille, men afgørende debat i dansk erhvervsfremme lige nu. Den handler ikke om, <em>hvorvidt</em> kunstig intelligens kommer til at ændre branchen - det er afgjort. Den handler om <em>hvad</em> der bliver tilbage af værdi, når den ændring har fundet sted. Og svaret er mere opløftende, end mange frygter.</p>

          <h2>Debatten: når viden bliver billig, bliver relationen knaphedsfaktoren</h2>
          <p><a href="https://www.sdu.dk/da/om-sdu/institutter-centre/cbe/nyheder/ai_altinget_debat" target="_blank" rel="noopener">Forskere fra Center for Bæredygtig Erhvervsfremme ved SDU</a> satte allerede for et par år siden ord på den forskydning, vi nu står midt i. Pointen er enkel og kontraintuitiv: i takt med at kunstig intelligens gør specialiseret viden hurtig og billig at hente, falder værdien af selve den viden - mens noget andet stiger i værdi. Nemlig de tætte, lokale relationer til virksomhederne.</p>
          <p>Logikken er, at den generelle erhvervskonsulent med AI ved hånden pludselig kan trække på specialiseret viden, der før krævede en specialist på den anden side af landet. Afstanden mellem virksomhed og ekspertise skrumper. Men den viden bliver først til effekt, når et menneske, der kender virksomheden, oversætter den til den konkrete situation. Forskerne kalder det lokale erhvervskontor for <em>the human in the loop</em> - den, der sikrer, at AI-genereret viden bliver kontekstualiseret og gjort til noget, virksomheden faktisk kan handle på.</p>
          <p>Med andre ord: relationen bliver knaphedsfaktoren. Viden bliver en råvare.</p>

          <h2>Fremtidens erhvervsfremme er en AI-tid</h2>
          <p>Den forskydning er ikke længere en akademisk fodnote. Den er blevet temaet for hele branchens samtale. Konferencen <a href="https://www.conferencemanager.dk/fremtidenserhvervsfremmeidanmark2026" target="_blank" rel="noopener">Fremtidens Erhvervsfremme i Danmark</a> sætter i 2026 spot på netop &quot;Erhvervsfremme i en AI-tid&quot; - hvordan teknologien forandrer snitflader og opgaveporteføljer hos aktørerne. Og <a href="https://www.danskerhvervsfremme.dk/def/def-ed/" target="_blank" rel="noopener">Erhvervsfremmedøgnet</a> stiller spørgsmålet helt skarpt: når viden bliver næsten gratis at hente gennem chatbots og agenter, hvad gør så vores organisationer relevante? Konklusionen, branchen selv lander på, er bemærkelsesværdig: tillid, dømmekraft og den gode samtale kan vise sig at være mere værdifulde end nogensinde.</p>
          <p>Det er den virkelighed, vi har bygget Clubcore til at understøtte.</p>

          <h2>Vores position: vi fodrer AI&apos;en - vi erstatter ikke mennesket</h2>
          <p>Der findes to måder at møde denne udvikling på. Den ene er at bygge AI ind i sin platform og forsøge at levere rådgivningen selv. Den vej fører lige ind i den konkurrence, hvor sprogmodellerne er ved at gøre viden gratis - en kamp, ingen platform vinder i længden.</p>
          <p>Den anden vej - vores vej - tager debatten på ordet. Hvis specialiseret viden bliver en råvare, som enhver model kan levere, så ligger den blivende værdi i det, modellen <em>ikke</em> kan få andre steder: netværkets egne relationer, medlemsprofiler, historik og tilbud. Det er den viden, et lokalt erhvervsnetværk sidder på - og som er fuldstændig usynlig for en generisk AI.</p>
          <p>Derfor bygger vi ikke en chatbot ind i Clubcore. Vi gør Clubcore til den kontekstmotor, der leverer netværkets egen viden til de værktøjer, konsulenterne allerede bruger - ChatGPT, Claude, Copilot. Modellen leverer den generelle ekspertise. Clubcore leverer den lokale kontekst, der gør ekspertisen anvendelig for <em>denne</em> virksomhed i <em>dette</em> netværk. Og konsulenten - mennesket i loopet - træffer beslutningen og handler.</p>

          <p className="proof">Fire erhvervsforeninger har allerede valgt Clubcore som fundament for deres medlems- og netværksarbejde.</p>

          <h2>Sådan ser det ud i praksis</h2>
          <p>Konkret betyder det, at en konsulent kan spørge sit AI-værktøj om råd til en bestemt medlemsvirksomhed og få et svar, der er jordet i netværkets virkelighed: ikke et generisk råd, men &quot;tre andre medlemmer i jeres netværk arbejder med det her&quot;, &quot;dette forløb hjalp en lignende virksomhed sidste år&quot;, &quot;her er det rigtige næste skridt&quot;. Det er kontekstualisering og operationalisering sat i system - præcis den rolle, forskerne tildeler det lokale kontor.</p>
          <p>Og det er et kredsløb, ikke en envejsgade. AI&apos;en henter konteksten fra Clubcore og foreslår. Konsulenten validerer og handler. Handlingen logges - og bliver til ny kontekst, der gør netværket klogere næste gang. Dømmekraften bliver, hvor den hører hjemme: hos mennesket.</p>

          <div className="pull">
            <Loop className="loop" />
            <blockquote>AI&apos;en gør ikke mennesket overflødigt. Den gør mennesket hurtigere - <em>så længe der sidder et menneske i loopet.</em></blockquote>
          </div>

          <h2>Tillid er en del af produktet</h2>
          <p>I en branche, der lever af relationer og forvalter virksomheders data, kan man ikke tale om AI uden at tale om tillid. Derfor er gennemsigtighed indbygget fra bunden: det skal altid kunne spores, hvilken viden der blev delt, hvornår og med hvem, og følsomme persondata holdes adskilt fra det, der gøres tilgængeligt for eksterne modeller. Når debatten konkluderer, at tillid bliver mere værdifuld end nogensinde, tager vi det bogstaveligt - også i arkitekturen.</p>

          <h2>Fremtiden tilhører dem, der kender deres netværk</h2>
          <p>Den store misforståelse om AI i erhvervsfremme er, at den gør det menneskelige overflødigt. Debatten peger på det modsatte. Når viden bliver billig, bliver det, der er svært at kopiere - relationen, tilliden, den lokale viden - det mest værdifulde, en organisation har.</p>
          <p>Clubcores opgave er at gøre den viden tilgængelig, struktureret og brugbar, så erhvervsnetværk kan bruge energien på det, der virkelig betyder noget: fællesskabet, relationerne og væksten. Resten kan AI&apos;en hjælpe med.</p>

          <div className="cta">
            <h3>Vil du se, hvordan det virker?</h3>
            <p>Vi viser gerne, hvordan Clubcore samler medlemmer, events og netværksviden ét sted - og gør den tilgængelig for de AI-værktøjer, I allerede bruger.</p>
            <a className="btn" href="https://clubcore.dk" target="_blank" rel="noopener">
              Book en demo
              <svg className="loop" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="author">
            <div className="mark">
              <Loop className="loop" />
            </div>
            <p><strong>Skrevet af Thomas Damkjær Larsen - founderen bag Clubcore.</strong> Clubcore er en dansk SaaS-platform, der samler medlemshåndtering, events, netværksgrupper og rapportering for lokale erhvervsnetværk - med integrationer til e-conomic, Stripe og MCP-connector til ChatGPT, Claude og Copilot.</p>
          </div>

          <div className="sources">
            <h3>Kilder</h3>
            <ul>
              <li><a href="https://www.sdu.dk/da/om-sdu/institutter-centre/cbe/nyheder/ai_altinget_debat" target="_blank" rel="noopener">Debatindlæg, SDU Center for Bæredygtig Erhvervsfremme</a></li>
              <li><a href="https://www.conferencemanager.dk/fremtidenserhvervsfremmeidanmark2026" target="_blank" rel="noopener">Konferencen Fremtidens Erhvervsfremme i Danmark 2026</a></li>
              <li><a href="https://www.danskerhvervsfremme.dk/def/def-ed/" target="_blank" rel="noopener">Erhvervsfremmedøgnet 2026, Dansk Erhvervsfremme</a></li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="foot">
        <div className="wrap">
          <span>© Clubcore</span>
          <a href="https://clubcore.dk">clubcore.dk</a>
        </div>
      </footer>
    </div>
  );
}
