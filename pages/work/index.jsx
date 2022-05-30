import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/work/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import fetch from 'node-fetch';

export default function Work({ portfolio }) {
  return (
    <Layout>
      <Seo title='Our Work' />
      <main className='work'>
        <WorkSection portfolio={portfolio} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate[mainImage][populate]=*'
  );
  const portfolioData = await portfolioRes.json();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const shuffled = shuffle(portfolioData.data);

  return {
    props: {
      portfolio: shuffled,
    },
  };
}
