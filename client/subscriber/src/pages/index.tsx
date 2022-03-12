import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import useMedia from '../hooks/useMedia';
import styles from '../styles/pages/home.module.scss';
import { getPrismicClient } from '../services/prismic';
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
  thumbnail: {
    url: string;
  };
};
interface PostsProps {
  posts: Post[];
}
export default function Home({ posts }: PostsProps) {
  const mobile = useMedia('(max-width: 768px)');
  return (
    <>
      <Head>
        <title>
          Museu Regional de Esportes · A Memória Viva do Esporte Amador de
          Fraiburgo e Região.
        </title>
        <meta
          name="title"
          content="Museu Regional de Esportes · A Memória Viva do Esporte Amador de
          Fraiburgo e Região."
        />
      </Head>
      <main>
        <section className={`${styles.banner} container`}>
          <div>
            <h1>A Memória Viva do Esporte Amador de Fraiburgo e Região</h1>
            <button
              className={styles.button}
              onClick={() => {
                mobile
                  ? window.scroll({
                      top: 1020,
                      behavior: 'smooth',
                    })
                  : window.scroll({
                      top: 800,
                      behavior: 'smooth',
                    });
              }}
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
        <section className={`${styles.post} container`}>
          <h2>Últimas notícias</h2>
          <div className={styles.posts}>
            {posts.map((post) => (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.container} key={post.slug}>
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <time>{post.createdAt}</time>
                    <strong>{post.title}</strong>
                    <div>
                      <Image
                        src={post.thumbnail.url}
                        alt={post.slug}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p>{post.excerpt}</p>
                  </a>
                </Link>
              </div>
            ))}
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
                src="/shared/supporters/image-1.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-2.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-3.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-4.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-5.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-6.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-7.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
            <li>
              <Image
                src="/shared/supporters/image-8.jpg"
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: [
        'publication.title',
        'publication.thumbnail',
        'publication.content',
      ],
      pageSize: 3,
      orderings: '[document.last_publication_date desc]',
    },
  );
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      thumbnail: { url: post.data.thumbnail.url },
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      createdAt: new Date(post.first_publication_date!).toLocaleString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        },
      ),
    };
  });
  return { props: { posts } };
};
