import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { GetServerSideProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import styles from './post.module.scss';
import Image from 'next/image';
interface Post {
  slug: string;
  title: string;
  content: string;
  createdAt: string;
}
interface PostProps {
  post: Post;
}
export default function Post({ post }: PostProps) {
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
          <time>{post.createdAt}</time>
          <div>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className={styles.supporters}>
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
                <li>
                  <Image
                    src="/shared/supporters/image-9.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-10.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-11.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-12.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-13.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-14.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
              </ul>
            </div>
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
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    createdAt: new Date(response.first_publication_date!).toLocaleString(
      'pt-BR',
      {
        weekday: 'long',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      },
    ),
  };
  return { props: { post } };
};
