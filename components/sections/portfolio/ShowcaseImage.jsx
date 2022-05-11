import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseImage({ portfolio }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'expo.out' },
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      imgRef.current.querySelector('figure'),
      { scaleY: 0 },
      { scaleY: 1 }
    ).fromTo(
      imgRef.current.querySelector('.img__cover'),
      { scaleY: 1 },
      { scaleY: 0 },
      '-=0.4'
    );

    return () => tl.kill();
  }, []);

  return (
    <section className='showcase__img' ref={imgRef}>
      <figure>
        <div className='img__cover'></div>
        <Image
          src={`https://aztec.yeomedia.dev${portfolio.attributes.fullWidthImage1.data.attributes.url}`}
          layout='fill'
          alt={
            portfolio.attributes.fullWidthImage1.data.attributes.alternativeText
          }
        />
      </figure>
    </section>
  );
}
