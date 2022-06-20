import Image from 'next/image';
import Link from 'next/link';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import Arrow from '../../vectors/Arrow';

export default function PortfolioSplide({ portfolio }) {
  return (
    <Splide
      options={{
        arrows: false,
        perPage: 3,
        drag: 'free',
        gap: '4rem',
        padding: '10rem',
        focus: 'center',
        trimSpace: false,
        pagination: false,
        breakpoints: {
          1920: {
            padding: '8rem',
          },
          1600: {
            padding: '6rem',
          },
          1440: {
            perPage: 2,
            padding: '4rem',
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
      {portfolio.map((item, i) => (
        <SplideSlide key={i}>
          <Link href={`/work/${item.attributes.alias}`}>
            <a>
              <div className='img'>
                <figure>
                  <Image
                    src={`https://aztec.yeomedia.dev${item.attributes.mainImage.data.attributes.url}`}
                    layout='fill'
                    alt={
                      item.attributes.mainImage.data.attributes.alternativeText
                    }
                    className='services__slider__img'
                    quality={25}
                  />
                </figure>
              </div>
              <div className='content'>
                <h3>
                  <span className='number'>
                    {i + 1 >= 10 ? i + 1 : `0${i + 1}`}
                  </span>
                  <span className='text'>
                    {item.attributes.title}
                    <div className='underline'></div>
                  </span>
                  <span className='arrow'>
                    <Arrow />
                  </span>
                </h3>
                <p>{item.attributes.summary}</p>
              </div>
            </a>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
}
