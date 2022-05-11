import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';

export default function WorkImageSlider({ portfolio }) {
  return (
    <section className='work__img__slider'>
      <Splide
        hasTrack={false}
        options={{
          rewind: true,
          arrows: false,
          pagination: false,
          perPage: 1,
          perMove: 1,
          autoplay: true,
          padding: '10rem',
          focus: 'center',
          gap: '6rem',
          updateOnMove: true,
          resetProgress: false,
          breakpoints: {
            1200: {
              gap: '4rem',
              padding: '6rem',
            },
            768: {
              padding: '3rem',
              gap: '2rem',
            },
          },
        }}
        className='work__img__splide'
      >
        <SplideTrack>
          {portfolio.attributes.sliderImages.data.map((img) => (
            <SplideSlide key={img.id}>
              <div className='img work__slider__img'>
                <figure>
                  <Image
                    src={`https://aztec.yeomedia.dev${img.attributes.url}`}
                    alt={img.attributes.alternativeText}
                    layout='fill'
                  />
                </figure>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className='splide__progress'>
          <div className='splide__progress__bar' />
        </div>
      </Splide>
    </section>
  );
}
