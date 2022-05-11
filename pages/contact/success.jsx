import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';

export default function Contact() {
  return (
    <Layout>
      <Seo title='Contact Us' />
      <main className='contact'>
        <section className='contact__header'>
          <h1>Success</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            inventore vitae ex porro aspernatur quo numquam, a animi earum quis!
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
