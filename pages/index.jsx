import ViewAllWork from '../components/sections/portfolio/ViewAllWork';
import Seo from '../components/layout/Seo';
import LargeHero from '../components/general/LargeHero';
import HomePortfolio from '../components/sections/home/HomePortfolio';
import HomeServices from '../components/sections//home/HomeServices';
import MeetTheTeam from '../components/general/MeetTheTeam';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import fetch from 'node-fetch';
gsap.registerPlugin(ScrollTrigger);

export default function Home({ team, services, portfolio }) {
  return (
    <Layout>
      <Seo
        title='Aztec Media | Home'
        description='AztecMedia, a creative design agency based in Yeovil, Somerset. Yeovil website developers providing affordable web &amp; graphic design, photography &amp; marketing.'
      />
      <main className='home'>
        <LargeHero />
        <HomeServices services={services} />
        <HomePortfolio portfolio={portfolio} />
        <ViewAllWork />
        <MeetTheTeam team={team} />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const teamRes = await fetch(
    'https://aztec.yeomedia.dev/api/teams?populate[image][populate]=*&populate[gif][populate]=*'
  );
  const teamData = await teamRes.json();

  const servicesRes = await fetch(
    'https://aztec.yeomedia.dev/api/services?populate[image][populate]=*'
  );
  const servicesData = await servicesRes.json();

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
      team: teamData.data,
      services: servicesData.data,
      portfolio: shuffled.filter((item, index) => index < 8),
    },
  };
}
