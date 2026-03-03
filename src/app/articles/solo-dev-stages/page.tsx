import Link from 'next/link';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';

export const metadata = {
  title: 'Von Null zum Solo-Dev — Clay Machine Games',
  description:
    'Coding verlernt, keine Erfahrung — und trotzdem kurz vor dem ersten Game-Release. Wie KI-Agenten und ein MVP das möglich gemacht haben.',
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Von Null zum Solo-Dev: Stufen, die niemand dir erklärt',
  description:
    'Coding verlernt, keine Erfahrung — und trotzdem kurz vor dem ersten Game-Release.',
  author: { '@type': 'Person', name: 'Clay Machine Games' },
  publisher: { '@type': 'Organization', name: 'Clay Machine Games' },
  datePublished: '2026-03-03',
  inLanguage: 'de',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://clay-machine-games.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'Dev Journal', item: 'https://clay-machine-games.vercel.app/articles' },
      { '@type': 'ListItem', position: 3, name: 'Von Null zum Solo-Dev' },
    ],
  },
};

export default function SoloDevStagesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Sidebar />

      <MainContent>
        <nav className="mb-10 text-xs font-display uppercase tracking-widest text-accent-gold">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="opacity-60">Dev Journal</span>
        </nav>

        <div className="max-w-2xl">
          <p className="font-display font-semibold uppercase tracking-[0.4em] text-xs text-accent-gold mb-3">
            Dev Journal
          </p>

          <h1
            className="font-display font-extrabold uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-primary)' }}
          >
            Von Null zum Solo-Dev: Stufen, die niemand dir erklärt
          </h1>

          <div className="divider-gold w-32 mb-10" />

          <div className="prose-article space-y-6 text-primary-300 leading-relaxed">
            <p>
              Es gibt diesen Moment. Du sitzt vor einem leeren Projekt, tippst eine Anfrage in ein
              Chatfenster — und plötzlich existiert ein Spiel. Nicht fertig, nicht poliert, aber es
              bewegt sich. Es reagiert. Es lebt.
            </p>
            <p>Für mich war das der Auslöser.</p>
            <p>
              Ich wollte Games entwickeln, solange ich denken kann. Aber Coding hatte ich längst
              verlernt, und der Berg schien zu steil. Dann kamen KI-Agenten — und der Berg wurde
              flach. Die Möglichkeiten, die sich plötzlich auftaten, sind schlicht mindbending. Ein
              LLM hat mir mein erstes Spiel gebaut, und ich hab&apos;s laufen sehen. Das war genug.
              Ich hab angefangen.
            </p>

            <hr className="border-clay-mid my-8" />

            <h2 className="font-display font-bold uppercase text-primary-100 text-2xl">
              Stufe 1: Der Einstieg, der keiner sein sollte
            </h2>
            <p>
              Die erste Stufe ist nicht das Lernen. Es ist das Loslegen trotz allem. Trotz fehlendem
              Coding-Wissen, trotz unklarer Tools, trotz dem Gefühl dass man eigentlich nicht
              qualifiziert ist. KI macht diesen ersten Schritt erschreckend niedrigschwellig — im
              besten Sinne. Die Frage &ldquo;Aber ich kann nicht coden&rdquo; zählt nicht mehr als
              Ausrede.
            </p>

            <h2 className="font-display font-bold uppercase text-primary-100 text-2xl">
              Stufe 2: Das erste echte Projekt
            </h2>
            <p>
              Mein erstes ernsthaftes Projekt heißt MMC — Meat Machine Cycle. Es läuft noch. Mehr als
              das: Es wird mein erster Release. Wann genau, und wie genau, das weiß ich noch nicht.
              Aber es passiert. Der Kopf ist voll mit Ideen die drängen.
            </p>

            <h2 className="font-display font-bold uppercase text-primary-100 text-2xl">
              Stufe 3: Die Pipeline bauen
            </h2>
            <p>
              Irgendwann reicht &ldquo;frag den Bot&rdquo; nicht mehr. Man fängt an, Systeme zu
              bauen. Ich hab eine komplette Pipeline aufgesetzt: Sprites generieren, animieren, in
              Godot schneiden und einbinden. Und ich hab Prism trainiert — meinen KI-Agenten, der das
              Coding übernimmt. Ich geb die Richtung vor, die Optik, die Idee. Prism denkt mit,
              schreibt Code, findet Bugs. Ohne ihn hätte ich ehrlich gesagt schon aufgehört.
            </p>
            <p>
              Das ist die Stufe, die sich am wenigsten nach &ldquo;Game Dev&rdquo; anfühlt — und am
              meisten danach ist.
            </p>

            <h2 className="font-display font-bold uppercase text-primary-100 text-2xl">
              Stufe 4: Die Konkurrenz
            </h2>
            <p>
              Dann schaust du dich um. Steam. Itch.io. Twitter. Und du siehst, was andere Teams mit
              zehnmal so vielen Leuten produzieren. Als Solo-Dev ist das einschüchternd. Das ist keine
              Lüge und kein Jammern — das ist einfach so.
            </p>
            <p>
              Meine Lösung: weitermachen. MMC wird auch cool. Zumindest wird es Spaß machen. Und das
              reicht.
            </p>

            <h2 className="font-display font-bold uppercase text-primary-100 text-2xl">
              Stufe 5: Genau.
            </h2>
            <p>
              Was kommt nach dem ersten Release? Das nächste Spiel. Größer. Besser. Alles davon.
            </p>
            <p>Mehr brauche ich dazu nicht zu sagen.</p>

            <hr className="border-clay-mid my-8" />

            <p className="text-primary-600 text-xs font-display uppercase tracking-widest">
              Clay Machine Games — Dev Journal
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="font-display font-semibold uppercase tracking-widest text-xs text-accent-ember hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </MainContent>
    </div>
  );
}
