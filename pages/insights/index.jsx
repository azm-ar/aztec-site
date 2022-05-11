import Seo from '../../components/layout/Seo';
import InsightsGrid from '../../components/sections/insights/InsightsGrid';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import InsightsFeature from '../../components/sections/insights/InsightsFeature';
import fetch from 'node-fetch';

export default function Insights({ insights }) {
  return (
    <Layout>
      <Seo title='Insights' />
      <main className='insights'>
        <div className='news__header'>
          <h1>News Page</h1>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
        <InsightsFeature insight={insights[0]} />
        <InsightsGrid insights={insights} />
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

  return {
    props: {
      insights: insightsData.data,
    },
  };
}
