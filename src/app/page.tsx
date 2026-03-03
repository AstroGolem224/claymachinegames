import { HeroBanner } from '@/components/hero/HeroBanner';
import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { EmberButton } from '@/components/ui/EmberButton';
import { featuredArticles } from '@/data/articles';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Fixed top-right controls */}
      <div className="fixed top-3 right-4 z-50 flex items-center gap-2">
        <ThemeToggle />
      </div>

      {/* Left sidebar navigation */}
      <Sidebar />

      {/* Hero banner — spans full viewport width, no sidebar offset */}
      <div className="ml-12">
        <HeroBanner />
      </div>

      {/* Main content area */}
      <MainContent>
        {/* ── Section header ── */}
        <div className="mb-8">
          <p className="font-display font-semibold uppercase tracking-[0.4em] text-xs text-accent-gold mb-2">
            Latest from the Workshop
          </p>
          <h2 className="font-display font-extrabold uppercase text-primary-100 text-4xl sm:text-5xl leading-none">
            Featured Articles
          </h2>
          <div className="divider-gold mt-4 w-48" />
        </div>

        {/* ── Article grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.href} {...article} />
          ))}
        </div>

        {/* ── Browse all CTA ── */}
        <div className="flex justify-center mt-12 mb-4">
          <EmberButton href="/articles" size="lg">
            Browse All Articles
          </EmberButton>
        </div>

        {/* ── Dual-world section ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Warm / Clay side */}
          <div className="rounded-lg p-6 border border-clay-mid bg-primary-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-grad-ember-glow opacity-50 pointer-events-none" aria-hidden />
            <div className="relative z-10">
              <span className="font-display font-semibold uppercase tracking-[0.35em] text-xs text-accent-gold">
                Clay Side
              </span>
              <h3 className="font-display font-extrabold uppercase text-3xl text-primary-100 mt-2 mb-3 leading-tight">
                Art & Mythology
              </h3>
              <p className="text-primary-400 text-sm leading-relaxed mb-4">
                Explore the earthen origins of golem lore, hand-crafted prize aesthetics, and the ancient traditions that shape Clay Machine Games.
              </p>
              <EmberButton href="/gallery" size="sm">
                Enter Gallery
              </EmberButton>
            </div>
          </div>

          {/* Cool / Steel side */}
          <div className="rounded-lg p-6 border border-steel-mid bg-secondary-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-grad-cyan-glow opacity-50 pointer-events-none" aria-hidden />
            <div className="relative z-10">
              <span className="font-display font-semibold uppercase tracking-[0.35em] text-xs text-accent-cyan">
                Machine Side
              </span>
              <h3 className="font-display font-extrabold uppercase text-3xl text-secondary-100 mt-2 mb-3 leading-tight">
                Tech & Engineering
              </h3>
              <p className="text-secondary-400 text-sm leading-relaxed mb-4">
                Dive into the precision mechanics, servo control systems, and electronic design that power next-generation claw machines.
              </p>
              <EmberButton href="/games" size="sm" variant="outline">
                Play Now
              </EmberButton>
            </div>
          </div>
        </div>

        {/* ── Footer rule ── */}
        <div className="divider-gold mt-16 mb-6" />
        <p className="text-center text-primary-600 text-xs font-display uppercase tracking-widest">
          © {new Date().getFullYear()} Clay Machine Games — All Rights Reserved
        </p>
      </MainContent>
    </div>
  );
}
