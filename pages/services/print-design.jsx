import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import ServicesSlider from '../../components/sections/services/ServicesSlider';
import ServicesPageSlider from '../../components/sections/services/ServicesPageSlider';
import ServiceMainDetails from '../../components/sections/services/ServiceMainDetails';
import ServiceIntroDetails from '../../components/sections/services/ServiceIntroDetails';
import ServiceFullImg from '../../components/sections/services/ServiceFullImg';
import ServiceInfoText from '../../components/sections/services/ServiceInfoText';
import ServiceTestimonial from '../../components/sections/services/ServiceTestimonial';

export default function PrintDesign({ service, services }) {
  return (
    <Layout>
      <Seo
        title={service.attributes.seoTitle}
        description={service.attributes.seoDescription}
      />
      <main className='print-design'>
        <ServicesHeader
          title='Print Design'
          colour={service.attributes.colour}
        />
        <ServicesPageSlider service={service} />
        <ServiceMainDetails service={service} />
        <ServiceIntroDetails service={service} />
        <ServiceFullImg service={service} />
        <ServiceInfoText service={service} />
        <ServiceTestimonial service={service} />
        <ServicesSlider
          services={services}
          bgColour={service.attributes.colour}
          colour='#fff'
        />
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const servicesRes = await fetch(
    'https://aztec.yeomedia.dev/api/services?populate[servicePageSlider][populate]=*&populate[image]=*&populate[fullWidthImage1]=*&populate[fullWidthImage2]=*&populate[textImage]=*&populate[accordions]=*&populate[servicePageBox]=*'
  );
  const servicesData = await servicesRes.json();

  const services = servicesData.data.filter(
    (item) => item.attributes.title !== 'Print Design'
  );

  const service = servicesData.data.filter(
    (item) => item.attributes.title === 'Print Design'
  );

  return {
    props: {
      services,
      service: service[0],
    },
  };
}
