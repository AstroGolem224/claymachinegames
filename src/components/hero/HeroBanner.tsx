'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 'clamp(220px, 38vw, 560px)' }}>
      {/* Background image */}
      <Image
        src="/clawmachinegames/public/hero-banner.png"
        alt="Clay Machine Games — forge meets factory"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — reinforces brand atmosphere */}
      <div
        className="absolute inset-0 bg-grad-hero opacity-55 pointer-events-none"
        aria-hidden
      />

      {/* Ember glow (left / warm side) */}
      <div
        className="absolute inset-0 bg-grad-ember-glow pointer-events-none"
        aria-hidden
      />

      {/* Cyan glow (right / cool side) */}
      <div
        className="absolute inset-0 bg-grad-cyan-glow pointer-events-none"
        aria-hidden
      />

      {/* Bottom fade into page background */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, var(--bg-base) 0%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* Brand copy */}
      <div
        className={`relative z-10 flex flex-col items-center justify-end h-full pb-8 px-4 transition-opacity duration-700 ${mounted ? 'animate-hero-entrance' : 'opacity-0'}`}
        style={{ minHeight: 'inherit' }}
      >
        {/* Main logo text */}
        <h1
          className="font-display font-extrabold uppercase text-white text-center leading-none select-none"
          style={{
            fontSize: 'clamp(2.5rem, 9vw, 8rem)',
            letterSpacing: '0.04em',
            textShadow: '0 2px 32px rgba(0,0,0,0.7)',
          }}
        >
          Clay Machine
        </h1>

        {/* GAMES sub-label */}
        <p
          className="font-display font-bold uppercase text-accent-gold text-center tracking-[0.5em] mt-1 select-none"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.8rem)' }}
        >
          Games
        </p>

        {/* Decorative gold rule */}
        <div className="divider-gold w-64 sm:w-96 my-3" />

        {/* Tagline */}
        <p
          className="font-display uppercase text-accent-ember tracking-[0.25em] text-center select-none"
          style={{ fontSize: 'clamp(0.6rem, 1.2vw, 0.85rem)' }}
        >
          Loading… Unveiling Ancient Tech and Earthly Art.
        </p>
      </div>
    </section>
  );
}
