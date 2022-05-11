import Image from 'next/image';
import Link from 'next/link';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../../vectors/Arrow';

export default function ServicesSplide({ services }) {
  return (
    <Splide
      options={{
        arrows: false,
        perPage: 3,
        drag: 'free',
        gap: '4rem',
        focus: 'center',
        trimSpace: false,
        pagination: false,
        breakpoints: {
          1440: {
            perPage: 2,
          },
          800: {
            perPage: 1,
            padding: {
              right: '8rem',
              left: '4rem',
            },
            gap: '2rem',
          },
          500: {
            perPage: 1,
            padding: {
              right: '4rem',
              left: '2rem',
            },
            gap: '2rem',
          },
        },
      }}
      className='services__splide'
    >
      {services.map((service, i) => (
        <SplideSlide key={i}>
          <Link href={`/services/${service.attributes.alias}`}>
            <a>
              <div className='img'>
                <figure>
                  <Image
                    src={`https://aztec.yeomedia.dev${service.attributes.image.data.attributes.url}`}
                    layout='fill'
                    alt={
                      service.attributes.image.data.attributes.alternativeText
                    }
                    priority='true'
                    className='services__slider__img'
                  />
                </figure>
              </div>
              <div className='content'>
                <h3>
                  <span className='number'>{service.attributes.number}</span>
                  <span className='text'>
                    {service.attributes.title}
                    <div className='underline'></div>
                  </span>
                  <span className='arrow'>
                    <Arrow />
                  </span>
                </h3>

                <p>{service.attributes.summary}</p>
              </div>
            </a>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
}
