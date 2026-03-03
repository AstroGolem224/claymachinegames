import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Clay Machine Games',
  description: 'Unveiling Ancient Tech and Earthly Art.',
  openGraph: {
    title: 'Clay Machine Games',
    description: 'Unveiling Ancient Tech and Earthly Art.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${barlowCondensed.variable} ${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
