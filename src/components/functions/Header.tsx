// src/components/Header.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '@/styles/Header.module.scss';

const navLinks = [
  { href: '/', label: 'Heim' },
  { href: '/vorur', label: 'Vörur' },
  { href: '/about', label: 'Um okkur' },
  { href: '/contact', label: 'Hafðu samband' },
];
/**
 * Main site header with navigation.
 *
 * The header hides when the page title scrolls under it and provides a hamburger
 * menu for smaller screens.
 */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  useEffect(() => {
    const onScroll = () => {
      const titleEl = document.getElementById('pageTitle');
      const headerEl = document.getElementById('siteHeader');
      if (!titleEl || !headerEl) {
        setHidden(false);
        return;
      }
      const headerHeight = headerEl.offsetHeight;
      const titleTop = titleEl.getBoundingClientRect().top;
      setHidden(titleTop <= headerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`${styles.header} ${hidden ? styles.headerHidden : ''}`}
      role="banner"
    >
      <div className={styles.container}>
        <div className={styles.branding}>
          <Link href="/" className={styles.logo} aria-label="Forsíða">
            <Image
              src="/Grimur_kokkur_logo.svg"
              alt="Grímur Kokkur logo"
              width={100}
              height={100}
              // `priority` already sets fetchPriority="high" and loading="eager" on the server.
              // Explicitly passing fetchPriority caused a hydration mismatch in React 19.
              // Removing it keeps the markup consistent between server and client.
              priority
            />
          </Link>
          <span className={styles.siteName}>Grímur Kokkur</span>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Loka aðalvalmynd' : 'Opna aðalvalmynd'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span className={menuOpen ? styles.barOpen : styles.bar} />
            <span className={menuOpen ? styles.barOpen : styles.bar} />
            <span className={menuOpen ? styles.barOpen : styles.bar} />
          </button>

          <nav
            id="primary-navigation"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            role="navigation"
            aria-label="Aðalvalmynd"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.tab} ${isActive ? styles.activeLink : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
