import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ServiceInfoText({ service }) {
  const imgRef = useRef(null);
  const textRef = useRef(null);

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
    )
      .fromTo(
        imgRef.current.querySelector('.img__cover'),
        { scaleY: 1 },
        { scaleY: 0 },
        '-=0.4'
      )
      .to(imgRef.current, {
        boxShadow: '0px 5px 50px rgba(0, 0, 0, 0.15)',
        duration: 0.8,
      })
      .fromTo(
        [
          textRef.current.querySelector('h4'),
          textRef.current.querySelector('div'),
        ],
        { y: 25, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' },
        0.8
      );

    return () => tl.kill();
  }, []);

  return (
    <section className='services__info__text'>
      <div className='img' ref={imgRef}>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={`https://aztec.yeomedia.dev${service.attributes.textImage.data.attributes.url}`}
            alt=''
            layout='fill'
          />
        </figure>
      </div>
      <div className='text' ref={textRef}>
        <h4 style={{ color: service.attributes.colour }}>
          {service.attributes.infoTextTitle}
        </h4>
        <div>
          <ReactMarkdown>{service.attributes.infoText}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
