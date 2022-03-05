import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import Facebook from '../../assets/facebook.svg';
import IconButtonTop from '../../assets/top.svg';
import Instagram from '../../assets/instagram.svg';
import { ActiveLink } from '../ActiveLink';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <footer className={styles.footer}>
      <div className={`${styles.content} container`}>
        <div className={styles.logo}>
          <div>
            <Image
              src="/shared/logo-footer.svg"
              alt="Logo footer"
              width={82}
              height={70}
            />
            <h1>
              Memória viva<span>.</span>
            </h1>
          </div>
          <p>
            Museu Reg. de Esportes 2021 <br />
            Todos os direitos reservados <br />
            Desenvolvido com <b> ❤</b> por
            <Link href="https://pollarcode.com">
              <a target="_blank"> Pollar Code</a>
            </Link>
          </p>
        </div>
        <nav className={styles.nav}>
          <h3>Mapa do Site</h3>
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
      </div>
      <nav className={styles.nav}>
        <div className={`container ${styles.content}`}>
          <div className={styles.social}>
            <Link href="https://www.facebook.com/">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/museuregionaldeesportes/">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </div>
          <button onClick={scrollToTop}>
            <IconButtonTop />
          </button>
        </div>
      </nav>
    </footer>
  );
}
