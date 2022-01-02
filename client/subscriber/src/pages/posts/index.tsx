import Head from 'next/head';
import styles from './styles.module.scss';
import { Title } from '../../components/Title';
import Link from 'next/link';
import Image from 'next/image';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Notícias · Museu Regional de Esportes</title>
        <meta
          name="description"
          content="Blog de notícias do esporte para manter a memória viva do esporte amador de
          Fraiburgo e região."
        />
        <meta name="title" content="Notícias · Museu Regional de Esportes" />
      </Head>
      <main className="container content">
        <Title title="Notícias" description="confira as últimas notícias" />
        <div className={styles.posts}>
          <Link href={`/posts/test-test-tes`}>
            <a>
              <div>
                <Image
                  src="/shared/Picture4-1.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <time>22 MAR, 2021</time>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
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
          <Link href={`/posts/test-test-tes`}>
            <a>
              <div>
                <Image
                  src="/shared/Picture4-1.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <time>22 MAR, 2021</time>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
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
          <Link href={`/posts/test-test-tes`}>
            <a>
              <div>
                <Image
                  src="/shared/Picture4-1.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <time>22 MAR, 2021</time>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
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
          <Link href={`/posts/test-test-tes`}>
            <a>
              <div>
                <Image
                  src="/shared/Picture4-1.png"
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <time>22 MAR, 2021</time>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
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
      </main>
    </>
  );
}
