import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';

export default function Photography() {
  return (
    <Layout>
      <Seo title={'Photography'} />
      <main className='photography'>
        <ServicesHeader title='Photography' />
      </main>
      <Footer />
    </Layout>
  );
}
