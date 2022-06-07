import Seo from '../../components/layout/Seo';
import WorkSection from '../../components/sections/work/WorkSection';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import fetch from 'node-fetch';
import ServicesSlider from '../../components/sections/services/ServicesSlider';

export default function Work({ portfolio, services }) {
  return (
    <Layout>
      <Seo title='Our Work' />
      <main className='work'>
        <WorkSection portfolio={portfolio} />
        <div className='white__col__wrap'>
          <section className='general__testimonial'>
            <div>
              <div className='icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
                </svg>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora consequatur ipsum libero temporibus culpa exercitationem
                adipisci ut quia illum deserunt!
              </p>
            </div>
          </section>
        </div>
        <ServicesSlider services={services} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const portfolioRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate[mainImage][populate]=*'
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

  return {
    props: {
      portfolio: shuffled,
      services: servicesData.data,
    },
  };
}
