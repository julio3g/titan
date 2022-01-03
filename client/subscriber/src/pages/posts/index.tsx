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
  thumbnail: {
    url: string;
  };
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
                <img src={post.thumbnail.url} alt="alt" />
                <div>
                  <Image
                    src={post.thumbnail.url}
                    alt={post.slug}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
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
      fetch: [
        'publication.title',
        'publication.thumbnail',
        'publication.content',
      ],
      pageSize: 100,
    },
  );
  // buscando e formatando os posts (é melhor do que fazer todas as vezes)
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      thumbnail: {
        url: post.data.thumbnail.url,
      },
      excerpt:
        post.data.content.find((content: any) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'short',
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
