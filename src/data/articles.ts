import type { ArticleCardProps } from '@/components/cards/ArticleCard';

export const featuredArticles: ArticleCardProps[] = [
  {
    title: 'Von Null zum Solo-Dev: Stufen, die niemand dir erklärt',
    excerpt:
      'Coding verlernt, keine Erfahrung — und trotzdem kurz vor dem ersten Game-Release. Wie KI-Agenten und ein MVP das möglich gemacht haben.',
    category: 'Dev Journal',
    imageSrc: '/images/article-01.png',
    href: '/articles/solo-dev-stages',
  },
  {
    title: 'The Art of the Claw: Mechanism Deep Dive',
    excerpt:
      'From pneumatic actuators to torque-calibrated grippers — we dissect what separates a winning machine from a decorative one.',
    category: 'Engineering',
    imageSrc: '/images/article-01.png',
    href: '/articles/art-of-the-claw',
  },
  {
    title: 'Ancient Golem Figurines: Origins Uncovered',
    excerpt:
      'The clay warriors predate the machine age by millennia. A deep look at the mythology behind our mascot and the art that inspired it.',
    category: 'Lore & Art',
    imageSrc: 'https://picsum.photos/seed/fantasy-golem-lore/800/450',
    href: '/articles/golem-origins',
  },
  {
    title: 'Strategy Guide: Maximum Win Rate',
    excerpt:
      'Position, timing, claw tension — a data-driven breakdown of the variables that lead to consistent prize grabs.',
    category: 'Strategy',
    imageSrc: 'https://picsum.photos/seed/game-strategy-guide/800/450',
    href: '/articles/strategy-guide',
  },
  {
    title: "Collector's Corner: Rarest Prizes of 2025",
    excerpt:
      'Limited-run collectibles, blind-box rarities, and the machines that hold them. Our curators rank this year\'s top finds.',
    category: 'Collecting',
    imageSrc: 'https://picsum.photos/seed/arcade-collector-haul/800/450',
    href: '/articles/collectors-corner-2025',
  },
  {
    title: 'Machine Mods: Community Builds',
    excerpt:
      'DIY arcade engineers share their wildest custom claw builds — forged steel arms, rune-etched cabinets, and clay-cast prizes.',
    category: 'Community',
    imageSrc: 'https://picsum.photos/seed/arcade-modding-build/800/450',
    href: '/articles/community-builds',
  },
  {
    title: 'The Steel Side: Robotics Meets Arcade',
    excerpt:
      "Industrial robotic arms share more with claw machines than you'd think. We explore the surprisingly narrow gap between factory floor and fun.",
    category: 'Technology',
    imageSrc: 'https://picsum.photos/seed/cyber-robotics-arcade/800/450',
    href: '/articles/robotics-meets-arcade',
  },
];
