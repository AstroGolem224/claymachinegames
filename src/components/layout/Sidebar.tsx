'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarOverlay } from './SidebarOverlay';

const navItems = [
  { label: 'Home',       href: '/',          icon: '⬡' },
  { label: 'Games',      href: '/games',     icon: '◈' },
  { label: 'Articles',   href: '/articles',  icon: '◉' },
  { label: 'Gallery',    href: '/gallery',   icon: '◎' },
  { label: 'Leaderboard', href: '/leaderboard', icon: '◆' },
  { label: 'About',      href: '/about',     icon: '◐' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Dim overlay on mobile when sidebar is open */}
      <SidebarOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full
          flex flex-col
          sidebar-stone
          transition-all duration-300 ease-in-out
          ${isOpen ? 'w-60' : 'w-12'}
        `}
        aria-label="Main navigation"
      >
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="
            flex items-center justify-center
            h-12 w-12 shrink-0
            text-accent-ember hover:text-accent-gold
            transition-colors duration-200
            border-b border-white/10
          "
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            /* X icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          ) : (
            /* Hamburger */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="4" x2="16" y2="4" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="14" x2="16" y2="14" />
            </svg>
          )}
        </button>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 overflow-hidden py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  group flex items-center gap-3 h-11 px-3
                  hover:bg-white/5
                  transition-colors duration-150
                  relative overflow-hidden
                  ${isActive ? 'text-white' : 'text-secondary-200 hover:text-accent-ember'}
                `}
              >
                {/* Ember left-border indicator — always visible when active */}
                <span
                  className={`
                    absolute left-0 top-2 bottom-2 w-0.5
                    bg-accent-ember rounded-r
                    transition-opacity duration-150
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                  aria-hidden
                />

                {/* Icon — always visible */}
                <span
                  className={`
                    shrink-0 w-6 text-center
                    font-display text-lg leading-none
                    ${isActive ? 'text-accent-gold animate-rune-pulse' : 'text-accent-ember group-hover:animate-rune-pulse'}
                  `}
                  aria-hidden
                >
                  {item.icon}
                </span>

                {/* Label — only visible when open */}
                <span
                  className={`
                    font-display font-semibold uppercase tracking-widest text-sm
                    whitespace-nowrap
                    transition-all duration-300
                    ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom brand mark */}
        <div
          className={`
            shrink-0 flex items-center gap-2 px-3 py-3 border-t border-white/10
            overflow-hidden
          `}
        >
          <span className="shrink-0 w-6 text-center text-accent-gold text-lg" aria-hidden>✦</span>
          <span
            className={`
              font-display font-bold uppercase tracking-widest text-xs text-primary-400
              whitespace-nowrap transition-all duration-300
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
          >
            CMG
          </span>
        </div>
      </aside>
    </>
  );
}
