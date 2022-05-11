import Seo from '../components/layout/Seo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import AboutSection from '../components/sections/about/AboutSection';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import fetch from 'node-fetch';
gsap.registerPlugin(ScrollTrigger);

export default function About({ team }) {
  return (
    <Layout>
      <Seo title='About Us' />
      <main className='about'>
        <AboutSection team={team} />
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

  return {
    props: {
      team: teamData.data,
    },
  };
}
