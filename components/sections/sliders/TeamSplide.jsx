import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Fragment, useEffect, useState } from 'react';
import DualArrow from '../../vectors/DualArrow';

export default function TeamSplide({ direction, teamData, text }) {
  return (
    <Splide
      className={`team__splide ${direction}`}
      options={{
        arrows: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 5,
        gap: '2rem',
        pauseOnHover: false,
        pagination: false,
        autoScroll: {
          speed: 2,
        },
        direction,
        breakpoints: {
          1800: {
            perPage: 4,
          },
          1100: {
            perPage: 3,
          },
          750: {
            perPage: 2,
          },
          400: {
            perPage: 1,
            gap: '6rem',
          },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {teamData.map((item, index) => (
        <Fragment key={index}>
          <SplideSlide>
            <div className='slide__content'>
              <div className='overlay'></div>
              <div className='img'>
                <figure>
                  <Image
                    src={`https://aztec.yeomedia.dev${item.attributes.image.data.attributes.url}`}
                    layout='fill'
                    alt={`Aztec Media Team ${item.attributes.title}`}
                  />
                </figure>
                <figure className='hover__img'>
                  <Image
                    src={`https://aztec.yeomedia.dev${item.attributes.gif.data.attributes.url}`}
                    layout='fill'
                    alt={`Aztec Media Team ${item.attributes.title}`}
                  />
                </figure>
              </div>
              <div className='text'>
                <h4>{item.attributes.name}</h4>
                <p>{item.attributes.title}</p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className='slide__spacer'>
              <p>{text}</p>
              <div className='arrows'>
                <DualArrow />
              </div>
            </div>
          </SplideSlide>
        </Fragment>
      ))}
    </Splide>
  );
}
