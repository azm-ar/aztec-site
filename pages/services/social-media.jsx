import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';

export default function SocialMedia() {
  return (
    <Layout>
      <Seo title={'Social Media'} />
      <main className='social-media'>
        <ServicesHeader title='Social Media' />
      </main>
      <Footer />
    </Layout>
  );
}
