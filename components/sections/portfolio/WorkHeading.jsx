import Btn from '../../general/Btn';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function WorkHeading({ portfolio }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'expo.out' },
    });

    tl.fromTo(
      imgRef.current.querySelector('figure'),
      { scaleY: 0 },
      { scaleY: 1, delay: 0.4 }
    )
      .fromTo(
        imgRef.current.querySelector('.img__cover'),
        { scaleY: 1 },
        { scaleY: 0 },
        '-=0.4'
      )
      .to(imgRef.current, { boxShadow: '0px 5px 50px rgba(0, 0, 0, 0.2)' });

    return () => tl.kill();
  }, []);

  return (
    <section className='work__heading'>
      <div
        className='colour'
        style={{ backgroundColor: portfolio.attributes.bgColour }}
      ></div>
      <div className='title'>
        <p>{portfolio.attributes.topBarText}</p>
        <div>
          <h1>{portfolio.attributes.title}</h1>
          <Btn href='/project-planner' text='Plan your project' />
        </div>
      </div>
      <div className='main__img' ref={imgRef}>
        <figure>
          <div className='img__cover'></div>
          <Image
            src={`https://aztec.yeomedia.dev${portfolio.attributes.mainImage.data.attributes.url}`}
            layout='fill'
            alt={portfolio.attributes.mainImage.data.attributes.alternativeText}
            priority='true'
          />
        </figure>
      </div>
    </section>
  );
}
