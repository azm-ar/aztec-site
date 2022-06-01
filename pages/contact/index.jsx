import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import ContactSection from '../../components/sections/contact/ContactSection';
import DotLogo from '../../components/vectors/DotLogo';
import LogoFillClip from '../../components/vectors/LogoFillClip';
import MeetTheTeam from '../../components/general/MeetTheTeam';

export default function Contact({ team }) {
  return (
    <Layout>
      <Seo
        title='Aztec Media | Get in touch'
        description='Call 01935 477073 or hello@aztec.media for a free website quote / free graphic design quote. Leading creative graphic design and web studio in Yeovil, Somerset.'
      />
      <main className='contact'>
        <section className='dot__logo'>
          <DotLogo img='/dots.svg' />
          <LogoFillClip />
        </section>
        <ContactSection />
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

  return {
    props: {
      team: teamData.data,
    },
  };
}
