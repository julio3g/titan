import Head from 'next/head';
import styles from './styles.module.scss';
import { Title } from '../../components/Title';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  thumbnail: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
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
          {posts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/posts/${post.slug}`}>
              <a key={post.slug}>
                {/* <div>
                  <Image
                    src={post.thumbnail}
                    alt={post.slug}
                    layout="fill"
                    objectFit="cover"
                  />
                </div> */}
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
          {/* <Link href={`/posts/test-test-tes`}>
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
          </Link> */}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    },
  );

  // buscando e formatando os posts (e melhor doque fazer todas as vezes)
  const posts = response.results.map((post) => {
    console.log(post);
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      thumbnail: post.data.thumbnail,
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
