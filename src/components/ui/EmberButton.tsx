'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

interface EmberButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  className?: string;
}

const sizeClasses = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function EmberButton({
  href,
  onClick,
  children,
  size = 'md',
  variant = 'solid',
  className = '',
}: EmberButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-display font-bold uppercase tracking-[0.15em]
    rounded transition-all duration-300 ease-in-out
    focus-visible:outline-2 focus-visible:outline-accent-cyan focus-visible:outline-offset-2
    select-none cursor-pointer
  `;

  const solidStyle = `
    bg-accent-ember text-white
    hover:bg-[length:200%_100%]
    hover:[background-image:linear-gradient(90deg,#d4520a,#c9972a,#d4520a)]
    hover:animate-ember-shimmer
    hover:shadow-[0_0_16px_rgba(212,82,10,0.45)]
    active:scale-[0.97]
  `;

  const outlineStyle = `
    border border-accent-ember text-accent-ember bg-transparent
    hover:bg-accent-ember hover:text-white
    hover:shadow-[0_0_16px_rgba(212,82,10,0.35)]
    active:scale-[0.97]
  `;

  const classes = `${base} ${sizeClasses[size]} ${variant === 'solid' ? solidStyle : outlineStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
