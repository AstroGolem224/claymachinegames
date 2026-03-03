'use client';

import Image from 'next/image';
import { useState } from 'react';
import { EmberButton } from '@/components/ui/EmberButton';

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  /** Path relative to /public, or omit to show gradient placeholder */
  imageSrc?: string;
  imageAlt?: string;
  href: string;
}

function CardImagePlaceholder({ category }: { category: string }) {
  const isTech = ['engineering', 'technology'].includes(category.toLowerCase());
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${
        isTech ? 'bg-secondary-900' : 'bg-primary-800'
      }`}
      aria-hidden
    >
      {/* Ambient glow */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isTech ? 'bg-grad-cyan-glow' : 'bg-grad-ember-glow'
        }`}
      />
      <span
        className={`font-display font-extrabold uppercase text-5xl select-none relative z-10 ${
          isTech ? 'text-accent-cyan/25' : 'text-accent-ember/25'
        }`}
      >
        CMG
      </span>
    </div>
  );
}

export function ArticleCard({
  title,
  excerpt,
  category,
  imageSrc,
  imageAlt,
  href,
}: ArticleCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = !!imageSrc && !imgError;

  return (
    <article className="
      flex flex-col
      bg-grad-surface-card
      rounded-lg overflow-hidden
      border border-clay-mid
      hover:border-accent-ember
      transition-colors duration-300
      group
    ">
      {/* Card image / placeholder */}
      <div className="relative w-full aspect-video overflow-hidden bg-primary-800">
        {showImage ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <CardImagePlaceholder category={category} />
        )}
        {/* Warm overlay tint on hover */}
        <div
          className="absolute inset-0 bg-grad-ember-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className="font-display font-semibold uppercase tracking-[0.3em] text-xs text-accent-gold">
          {category}
        </span>

        <h3 className="
          font-display font-bold uppercase leading-tight
          text-primary-100 group-hover:text-white
          transition-colors duration-200
          text-xl
        ">
          {title}
        </h3>

        <p className="text-primary-400 text-sm leading-relaxed flex-1">
          {excerpt}
        </p>

        <div className="pt-1">
          <EmberButton href={href} size="sm" variant="outline">
            Read more →
          </EmberButton>
        </div>
      </div>
    </article>
  );
}
