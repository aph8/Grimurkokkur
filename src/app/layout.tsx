// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.scss';

import Header from '@/components/functions/Header';
import Footer from '@/components/functions/Footer';
import BackToTop from '@/components/functions/BackToTop';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: false,        // ← disable preload
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,        // ← disable preload
});

export const metadata: Metadata = {
  title: 'Grímur Kokkur',
  description: 'Heimasíða Gríms kokks með úrval sjávarrétta.',
  icons: {
    icon: '/Grimur_kokkur_logo.svg',
    shortcut: '/Grimur_kokkur_logo.svg',
    apple: '/Grimur_kokkur_logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is">
      <head>
        {/* Prefetch large portraits for later use without warnings */}
        <link
          rel="prefetch"
          as="image"
          href="/fiskibollur_portrait.jpg"
          media="(min-width:769px)"
        />
        <link
          rel="prefetch"
          as="image"
          href="/humarsupa_portrait.jpg"
          media="(min-width:769px)"
        />
        <link
          rel="prefetch"
          as="image"
          href="/fiskistangir_portrait.jpg"
          media="(min-width:769px)"
        />
        <link
          rel="prefetch"
          as="image"
          href="/plokkfiskur_portrait.jpg"
          media="(min-width:769px)"
        />

        {/* Preconnect for Google Maps */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://maps.google.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Sleppa í efni
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <BackToTop />
      </body>
    </html>
  );
}
