import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import Seo from '../../components/layout/Seo';
import ServicesHeader from '../../components/sections/services/ServicesHeader';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import ServicesSlider from '../../components/sections/services/ServicesSlider';
import Accordion from '../../components/sections/services/Accordion';
import ReactMarkdown from 'react-markdown';

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
        <section className='services__page__slider'>
          <div
            className='colour'
            style={{ backgroundColor: service.attributes.colour }}
          ></div>
          <Splide
            hasTrack={false}
            options={{
              type: 'loop',
              rewind: true,
              arrows: false,
              pagination: false,
              perPage: 1,
              perMove: 1,
              autoplay: false,
              padding: '10rem',
              focus: 'center',
              gap: '6rem',
              updateOnMove: true,
              breakpoints: {
                1200: {
                  gap: '4rem',
                  padding: '6rem',
                },
                768: {
                  padding: '3rem',
                  gap: '2rem',
                },
                550: {
                  padding: '2rem',
                  gap: '1rem',
                },
              },
            }}
            className='work__img__splide'
          >
            <SplideTrack>
              {service.attributes.servicePageSlider.map((item) => (
                <SplideSlide key={item.id}>
                  <div className='overlay'></div>
                  <div className='img'>
                    <figure>
                      <Image
                        src={`https://aztec.yeomedia.dev${item.image.data.attributes.url}`}
                        alt='#'
                        layout='fill'
                        priority
                      />
                    </figure>
                  </div>
                  <div className='content'>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </section>
        <section className='service__main__details'>
          <div className='img'>
            <figure>
              <Image
                src={`https://aztec.yeomedia.dev${service.attributes.fullWidthImage1.data.attributes.url}`}
                alt='#'
                layout='fill'
              />
            </figure>
          </div>
          <div className='content' style={{ backgroundColor: '#5B7B7A' }}>
            <h3>{service.attributes.servicePageBox.title}</h3>
            <ul className='grid'>
              <li>
                <h4>{service.attributes.servicePageBox.heading1}</h4>
                <p>{service.attributes.servicePageBox.text1}</p>
              </li>
              <li>
                <h4>{service.attributes.servicePageBox.heading2}</h4>
                <p>{service.attributes.servicePageBox.text2}</p>
              </li>
              <li>
                <h4>{service.attributes.servicePageBox.heading3}</h4>
                <p>{service.attributes.servicePageBox.text3}</p>
              </li>
              <li>
                <h4>{service.attributes.servicePageBox.heading4}</h4>
                <p>{service.attributes.servicePageBox.text4}</p>
              </li>
            </ul>
          </div>
        </section>
        <section className='service__intro__details'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nisi voluptatem nobis mollitia, at magni?
          </p>
          <div className='accordions'>
            {service.attributes.accordions.map((item) => (
              <Accordion key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className='services__full__img'>
          <div className='img'>
            <figure>
              <Image
                src='/layout.jpg'
                alt='#'
                width={3185}
                height={2215}
                layout='responsive'
              />
            </figure>
          </div>
        </section>
        <section className='services__info__text'>
          <div className='img'>
            <figure>
              <Image
                src={`https://aztec.yeomedia.dev${service.attributes.fullWidthImage2.data.attributes.url}`}
                alt=''
                layout='fill'
              />
            </figure>
          </div>
          <div className='text'>
            <h4 style={{ color: '#5B7B7A' }}>
              {service.attributes.infoTextTitle}
            </h4>
            <ReactMarkdown>{service.attributes.infoText}</ReactMarkdown>
          </div>
        </section>
        <section
          className='services__testimonial'
          style={{ backgroundColor: service.attributes.colour, color: '#fff' }}
        >
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
            <p>{service.attributes.testimonialText}</p>
          </div>
        </section>
        <ServicesSlider services={services} bgColour='#5B7B7A' colour='#fff' />
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
