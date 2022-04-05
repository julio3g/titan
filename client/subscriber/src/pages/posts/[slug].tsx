import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { GetServerSideProps } from 'next';
import Prismic from '@prismicio/client';
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
                <li>
                  <Image
                    src="/shared/supporters/image-15.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-16.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-17.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-18.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-19.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-20.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-21.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-22.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-23.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-24.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-25.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-26.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-27.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-28.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-29.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-30.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-31.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-32.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-33.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-34.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-35.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-36.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-37.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-38.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-39.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-40.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-41.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-42.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-43.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-44.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
                <li>
                  <Image
                    src="/shared/supporters/image-45.jpg"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </li>
              </ul>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                crossOrigin="anonymous"
              ></script>
              {/* <!-- Anuncio patrocinadores (Museu Regional de Esportes) --> */}
              <ins
                className={styles.adsGoogle}
                style={{
                  display: 'block',
                  marginTop: '1rem',
                  borderRadius: '.75rem',
                }}
                data-ad-client="ca-pub-4334901886307766"
                data-ad-slot="5637732032"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4334901886307766"
                crossOrigin="anonymous"
              ></script>
              {/* <!-- Anuncio patrocinadores 2 (Museu Regional de Esportes) --> */}
              <ins
                className={styles.adsGoogle}
                style={{
                  display: 'block',
                  marginTop: '1rem',
                  borderRadius: '.75rem',
                }}
                data-ad-client="ca-pub-4334901886307766"
                data-ad-slot="6481252831"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
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
  const imagesSupporters = await prismic.query(
    [Prismic.predicates.at('document.type', 'images-supporters')],
    {
      fetch: ['publication.images'],
      orderings: '[document.last_publication_date desc]',
    },
  );
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
  const imagesSupporter = imagesSupporters.results.map((image) => {
    console.log(image.data.images);
    return {
      urlImage: { url: image.data.images },
    };
  });
  console.log(imagesSupporter);
  return { props: { post } };
};
