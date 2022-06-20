import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';

export default function ServicesPageSlider({ service }) {
  return (
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
                    priority={true}
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
  );
}
