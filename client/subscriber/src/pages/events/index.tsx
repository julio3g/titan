import Head from 'next/head';
import Link from 'next/link';
import { Title } from '../../components/Title';
import ArrowLeft from '../../assets/icon-arrow-left.svg';
import styles from './styles.module.scss';

export default function Events() {
  const events = false;

  return (
    <>
      <Head>
        <title>Eventos · Museu Regional de Esportes</title>
        <meta
          name="description"
          content="Blog de notícias do esporte para manter a memória viva do esporte amador de
          Fraiburgo e região."
        />
        <meta name="title" content="Eventos · Museu Regional de Esportes" />
      </Head>
      <main>
        <div className="container content">
          {events && (
            <>
              <Title title="Eventos" description="confira os últimas eventos" />
              <div className={styles.events}>
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
            </>
          )}
          {!events && (
            <div className={styles.noEvents}>
              <h1>Nenhum evento até o momento</h1>
              <span>😞</span>
            </div>
            // 😞
          )}
        </div>
      </main>
    </>
  );
}
