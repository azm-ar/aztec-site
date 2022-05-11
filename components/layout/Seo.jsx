import Head from 'next/head';

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title ? `${title}` : 'Aztec Media'}</title>
      <meta
        name='description'
        content={description ? `${description}` : 'Aztec Media'}
      />
    </Head>
  );
}
