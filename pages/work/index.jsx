import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/work/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import fetch from 'node-fetch';
import ServicesSlider from '../../components/sections/services/ServicesSlider';
import GeneralTestimonial from '../../components/general/GeneralTestimonial';

export default function Work({ portfolio, services }) {
  console.log(portfolio);
  return (
    <Layout>
      <Seo title='Our Work' />
      <main className='work'>
        <WorkSection portfolio={portfolio} />
        <GeneralTestimonial />
        <ServicesSlider services={services} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const portfolioRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate[mainImage][populate]=*&populate[filters][populate]=*'
  );
  const portfolioData = await portfolioRes.json();

  const servicesRes = await fetch(
    'https://aztec.yeomedia.dev/api/services?populate[image][populate]=*'
  );
  const servicesData = await servicesRes.json();

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

  const portfolioMapped = shuffled.map((item) => {
    if (item.attributes.filters !== null) {
      const sec = item.attributes.filters.sectors.split(',');
      const ser = item.attributes.filters.services.split(',');

      const arr = [...sec, ...ser];

      item.attributes.filters = arr;
    } else {
      item.attributes.filters = [];
    }

    return item;
  });

  return {
    props: {
      portfolio: portfolioMapped,
      services: servicesData.data,
    },
  };
}
