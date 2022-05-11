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
      <Seo title='Home' />
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
    'https://aztec.yeomedia.dev/api/teams?populate=*'
  );
  const teamData = await teamRes.json();

  const servicesRes = await fetch(
    'https://aztec.yeomedia.dev/api/services?populate=*'
  );
  const servicesData = await servicesRes.json();

  const portfolioRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate=*'
  );
  const portfolioData = await portfolioRes.json();

  return {
    props: {
      team: teamData.data,
      services: servicesData.data,
      portfolio: portfolioData.data.filter((item, index) => index < 4),
    },
  };
}
