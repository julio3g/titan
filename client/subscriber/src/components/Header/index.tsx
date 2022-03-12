import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Nav } from '../Nav';
import Logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        {/* {mobile && (
          <button
            type="button"
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div />
          </button>
        )}
        {mobileMenu && (
          <div
            className={styles.outsideClick}
            onClick={() => setMobileMenu(false)}
          />
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <ul>
            <li>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/posts">
                <a>Notícias</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={styles.active} href="/supporters">
                <a>Apoiadores</a>
              </ActiveLink>
            </li>
          </ul>
        </nav> */}
        <div className={styles.navContent}>
          <Nav />
        </div>
      </nav>
    </header>
  );
}
