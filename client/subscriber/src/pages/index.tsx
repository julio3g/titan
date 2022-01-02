import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/pages/home.module.scss';
import ArrowLeft from '../assets/icon-arrow-left.svg';

export default function Home() {
  const events = false;
  return (
    <main>
      <Head>
        <title>
          Museu Regional de Esportes · A Memória Viva do Esporte Amador de
          Fraiburgo e Região.
        </title>
        <meta
          name="description"
          content="Blog de notícias do esporte para manter a memória viva do esporte amador de
          Fraiburgo e região."
        />
        <meta
          name="title"
          content="Museu Regional de Esportes · A Memória Viva do Esporte Amador de
          Fraiburgo e Região."
        />
      </Head>
      <section className={`${styles.banner} container`}>
        <div>
          <h1>A Memória Viva do Esporte Amador de Fraiburgo e Região</h1>
          <button
            className={styles.button}
            onClick={() =>
              window.scroll({
                top: 750,
                behavior: 'smooth',
              })
            }
          >
            <span>Confira as notícias</span>
            <Image
              src="/shared/arrow-down.svg"
              alt="Arrow down"
              width={32}
              height={32}
            />
          </button>
        </div>
        <Image
          src="/shared/image-banner.svg"
          alt="Image banner"
          width={506}
          height={483}
        />
      </section>
      <section className={`${styles.sectionPost} container`}>
        <h2>Últimas notícias</h2>
        <div className={styles.posts}>
          <div>
            <Link href={`/posts/test-test-tes`}>
              <a key={'test-test-tes'}>
                <time>22 MAR, 2021</time>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <div>
                  <Image
                    src="/shared/Picture4-1.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>
                  Especial triplo parabéns para você Thiago Serafini, Andréia
                  Maria Bernardt e equipe da Amoff Especial triplo parabéns para
                  você Thiago Serafini, Andréia Maria Bernardt e equipe da Amoff
                </p>
              </a>
            </Link>
          </div>
          <div>
            <Link href={`/posts/test-test-tes`}>
              <a key={'test-test-tes'}>
                <time>22 MAR, 2021</time>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <div>
                  <Image
                    src="/shared/Picture4-1.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>
                  Especial triplo parabéns para você Thiago Serafini, Andréia
                  Maria Bernardt e equipe da Amoff Especial triplo parabéns para
                  você Thiago Serafini, Andréia Maria Bernardt e equipe da Amoff
                  Especial triplo parabéns para você Thiago Serafini, Andréia
                  Maria Bernardt e equipe da Amoff Especial triplo parabéns para
                  você Thiago Serafini, Andréia Maria Bernardt e equipe da Amoff
                </p>
              </a>
            </Link>
          </div>
          <div>
            <Link href={`/posts/test-test-tes`}>
              <a key={'test-test-tes'}>
                <time>22 MAR, 2021</time>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>
                <div>
                  <Image
                    src="/shared/Picture4-1.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>
                  Especial triplo parabéns para você Thiago Serafini, Andréia
                  Maria Bernardt e equipe da Amoff Especial triplo parabéns para
                  você Thiago Serafini, Andréia Maria Bernardt e equipe da Amoff
                </p>
              </a>
            </Link>
          </div>
        </div>
        <Link href="/posts">
          <a className={styles.link}>
            Confira mais notícias
            <Image
              src="/shared/arrow-left.svg"
              alt="Arrow left"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </section>
      <section className={`${styles.supporters} container`}>
        <h2>Confira Nossos Apoiadores</h2>
        <ul>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
          <li>
            <Image
              src="/shared/Picture4-1.png"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </li>
        </ul>
      </section>
      {events && (
        <>
          <section className={`${styles.events} container`}>
            <h2>Confira Nossos Últimos Eventos</h2>
            <div className={styles.content}>
              <Link href="/events/test">
                <a>
                  <time>22 MAR, 2021</time>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </strong>
                  <span>
                    Continue Lendo
                    <ArrowLeft />
                  </span>
                </a>
              </Link>
              <Link href="/events/test">
                <a>
                  <time>22 MAR, 2021</time>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </strong>
                  <span>
                    Continue Lendo
                    <ArrowLeft />
                  </span>
                </a>
              </Link>
              <Link href="/events/test">
                <a>
                  <time>22 MAR, 2021</time>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </strong>
                  <span>
                    Continue Lendo
                    <ArrowLeft />
                  </span>
                </a>
              </Link>
              <Link href="/events/test">
                <a>
                  <time>22 MAR, 2021</time>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </strong>
                  <span>
                    Continue Lendo
                    <ArrowLeft />
                  </span>
                </a>
              </Link>
            </div>
          </section>
        </>
      )}
      {!events && <div className={styles.spaceNoEvents} />}
    </main>
  );
}
