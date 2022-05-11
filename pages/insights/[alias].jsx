import Seo from '../../components/layout/Seo';
import InsightsInnerSection from '../../components/sections/insights/InsightsInnerSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import fetch from 'node-fetch';

export default function InsightsInnerPage({ insight }) {
  return (
    <Layout>
      <Seo title='Insights Inner' />
      <main className='insights-inner'>
        <InsightsInnerSection insight={insight} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const insightsRes = await fetch(
    'https://aztec.yeomedia.dev/api/insights?populate=*'
  );
  const insightsData = await insightsRes.json();

  let insight = {};

  insightsData.data.forEach((item) => {
    if (item.attributes.alias === params.alias) {
      insight = item;
    }
  });

  return {
    props: {
      insight,
    },
  };
}

export async function getStaticPaths() {
  const insightsRes = await fetch(
    'https://aztec.yeomedia.dev/api/insights?populate=*'
  );
  const insightsData = await insightsRes.json();

  const aliass = insightsData.data.map((item) => item.attributes.alias);
  const paths = aliass.map((alias) => ({ params: { alias } }));

  return {
    paths,
    fallback: false,
  };
}
