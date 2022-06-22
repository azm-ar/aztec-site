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

export default function Branding({ service, services }) {
  return (
    <Layout>
      <Seo
        title={service.attributes.seoTitle}
        description={service.attributes.seoDescription}
      />
      <main className={service.attributes.alias}>
        <ServicesHeader service={service} />
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
    'https://aztec.yeomedia.dev/api/services?populate[image]=*'
  );
  const servicesData = await servicesRes.json();

  const services = servicesData.data.filter(
    (item) => item.attributes.title !== 'Branding'
  );

  const serviceRes = await fetch(
    'https://aztec.yeomedia.dev/api/services/2?populate[servicePageSlider][populate]=*&populate[image]=*&populate[fullWidthImage1]=*&populate[fullWidthImage2]=*&populate[textImage]=*&populate[accordions]=*&populate[servicePageBox]=*'
  );
  const serviceData = await serviceRes.json();

  return {
    props: {
      services,
      service: serviceData.data,
    },
  };
}
