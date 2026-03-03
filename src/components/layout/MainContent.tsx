import { type ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    /*
     * The left sidebar is fixed at 3rem (w-12) collapsed.
     * We offset the main content by ml-12 so it's never hidden under it.
     */
    <main className="ml-12 flex-1 min-h-screen relative">
      {/* Ambient glows — decorative pseudo-layer */}
      <div
        className="absolute top-0 left-0 w-1/2 h-96 bg-grad-ember-glow pointer-events-none -z-0 opacity-40"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-96 bg-grad-cyan-glow pointer-events-none -z-0 opacity-40"
        aria-hidden
      />

      <div className="relative z-10 px-4 sm:px-8 py-8 max-w-screen-xl mx-auto">
        {children}
      </div>
    </main>
  );
}
