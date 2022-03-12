import { useRouter } from 'next/router';
import { ButtonMenu } from '../ButtonMenu';
import { useEffect, useState } from 'react';
import useMedia from '../../hooks/useMedia';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
export function Nav() {
  const mobile = useMedia('(max-width: 768px)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => setMobileMenu(false), [pathname]);
  return (
    <>
      {mobile && (
        <ButtonMenu onClick={() => setMobileMenu(!mobileMenu)} mobileMenu />
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
      </nav>
    </>
  );
}
