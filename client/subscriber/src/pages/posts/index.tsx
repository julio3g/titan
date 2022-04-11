import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import styles from './styles.module.scss';
import { Title } from '../../components/Title';
import { getPrismicClient } from '../../services/prismic';
import { useState } from 'react';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: {
    url: string;
  };
  createdAt: string;
};
interface PostsProps {
  posts: Post[];
}
export default function Posts({ posts }: PostsProps) {
  // const [src, setSrc] = useState('https://i.imgur.com/gf3TZMr.jpeg');
  return (
    <>
      <Head>
        <title>Notícias · Museu Regional de Esportes</title>
        <meta name="title" content="Notícias · Museu Regional de Esportes" />
      </Head>
      <main className="container content">
        <Title title="Notícias" description="confira as últimas notícias" />
        <article className={styles.posts}>
          {posts.map((post) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <div>
                  <Image
                    src={post.thumbnail.url}
                    alt={post.slug}
                    layout="fill"
                    objectFit="cover"
                    // onError={() => setSrc('/assets/image-error.png')}
                    // onError={src='/shared/supporters/image-1.jpg'}
                  />
                </div>
                <time>{post.createdAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </article>
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
  // revalidate: 60 * 60 (one hour), // In seconds
  return { props: { posts }, revalidate: 60 * 60 };
};
