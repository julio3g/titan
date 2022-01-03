import Head from 'next/head';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { GetServerSideProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

import styles from './post.module.scss';
import Image from 'next/image';

interface ImagesSupporters {
  content: string;
}

interface Post {
  slug: string;
  title: string;
  content: string;
  updatedAt: string;
}

interface PostProps {
  post: Post;
  imagesSupporters: ImagesSupporters;
}

export default function Post({ post, imagesSupporters }: PostProps) {
  console.log(imagesSupporters.content);
  return (
    <>
      <Head>
        <title>{post.title} · Museu Regional de Esportes</title>
        <meta
          name="title"
          content={`${post.title} · Museu Regional de Esportes`}
        />
      </Head>
      <main className="container content">
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className={styles.supporters}>
              <div>
                <Image
                  src="/shared/supporters/image-1.jpeg"
                  alt="text"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* <div
              dangerouslySetInnerHTML={{ __html: imagesSupporters.content }}
            /> */}
          </div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug }: any = params;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID('publication', String(slug), {});
  const getImagesSupporters = await prismic.query(
    [Prismic.predicates.at('document.type', 'images-supporters')],
    {
      fetch: ['images-supporters.content'],
      pageSize: 100,
    },
  );

  const imagesSupporters = getImagesSupporters.results.map((image) => {
    return {
      content: RichText.asHtml(image.data.content),
    };
  });
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };
  return {
    props: {
      post,
      imagesSupporters,
    },
  };
};
