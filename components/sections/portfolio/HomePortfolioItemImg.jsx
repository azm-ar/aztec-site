import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemImg({ image, alias }) {
  const portfolioImageRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioImageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    const slideTl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: portfolioImageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    introTl
      .fromTo(
        portfolioImageRef.current.querySelector('figure'),
        { scaleX: 0 },
        { scaleX: 1 }
      )
      .fromTo(
        portfolioImageRef.current.querySelector('.img__cover'),
        { scaleX: 1 },
        {
          scaleX: 0,
        },
        '-=0.6'
      )
      .fromTo(
        portfolioImageRef.current.querySelector('img'),
        { scale: 1.2 },
        { scale: 1 },
        '-=0.9'
      );

    ScrollTrigger.matchMedia({
      '(min-width: 900px)': function () {
        slideTl.fromTo(
          portfolioImageRef.current,
          { y: 0 },
          {
            y: -350,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.1,
          }
        );
      },
    });

    return () => {
      introTl.kill();
      slideTl.kill();
    };
  }, [portfolioImageRef]);

  return (
    <Link href={`/work/${alias}`}>
      <a className='home__portfolio__item__img' ref={portfolioImageRef}>
        <div className='img__wrapper'>
          <figure>
            <div className='img__cover'></div>
            <Image
              src={`https://aztec.yeomedia.dev${image.url}`}
              layout='fill'
              alt={image.alternativeText}
            />
          </figure>
        </div>
      </a>
    </Link>
  );
}
