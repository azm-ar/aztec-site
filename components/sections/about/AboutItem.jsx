import Image from 'next/image';
import { useEffect, useRef } from 'react';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

export default function AboutItem({ item }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
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
        trigger: imageRef.current,
        start: 'top 70%',
      },
      defaults: {
        ease: 'power2.inOut',
        duration: 1,
      },
    });

    introTl
      .fromTo(
        imageRef.current.querySelector('figure'),
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        imageRef.current.querySelector('.img__cover'),
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: 'power2.inOut',
        },
        '-=0.6'
      )
      .fromTo(
        imageRef.current.querySelector('img'),
        { scale: 1.2 },
        {
          scale: 1,
          ease: 'power2.inOut',
        },
        '-=0.8'
      );

    ScrollTrigger.matchMedia({
      '(min-width: 774px)': function () {
        slideTl.fromTo(
          imageRef.current,
          { y: 0 },
          {
            y: -75,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              scrub: 1,
              trigger: imageRef.current,
              start: 'top 70%',
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className='about__item'>
      <div className='about__item__img' ref={imageRef}>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={`https://aztec.yeomedia.dev${item.attributes.image.data.attributes.url}`}
            layout='fill'
            alt={item.attributes.image.data.attributes.alternativeText}
          />
        </figure>
        <div className='hover__img'>
          <figure>
            <Image
              src={`https://aztec.yeomedia.dev${item.attributes.gif.data.attributes.url}`}
              layout='fill'
              alt={item.attributes.image.data.attributes.alternativeText}
            />
          </figure>
        </div>
        <LogoFillClip />
      </div>
      <div className='about__item__text'>
        <p className='title'>Designer</p>
        <h3>
          <Link href={`mailto:${item.attributes.email}`}>
            <a>
              {item.attributes.name} <span className='underline'></span>
            </a>
          </Link>
        </h3>
        <p className='summary'>{item.attributes.summary}</p>
        <div className='details'>
          <p className='skill'>
            <span> Skill:</span> {item.attributes.title}
          </p>
          <p className='colour' style={{ borderColor: 'lightcoral' }}>
            <span>Favourite Colour:</span> {item.attributes.colour}
          </p>
        </div>
      </div>
    </div>
  );
}
