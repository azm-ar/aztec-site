import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Btn from '../../general/Btn';
gsap.registerPlugin(ScrollTrigger);
import ReactMarkdown from 'react-markdown';

export default function InsightsInnerSection({ insight }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: true,
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
      },
    });

    tl.fromTo(
      imageRef.current.querySelector('figure'),
      { yPercent: -20 },
      { yPercent: 0, ease: 'power1.inOut' }
    );
  }, []);

  return (
    <section className='insights__inner__section'>
      <div className='insights__inner__section__header'>
        <div className='date'>{insight.attributes.date}</div>
        <h1 className='title'>{insight.attributes.title}</h1>
      </div>
      <div className='insights__inner__section__img' ref={imageRef}>
        <div className='img'>
          <figure>
            <Image
              src={`https://aztec.yeomedia.dev${insight.attributes.image.data.attributes.url}`}
              layout='fill'
              alt={insight.attributes.image.data.attributes.alternativeText}
            />
          </figure>
        </div>
      </div>
      <div className='insights__inner__section__content'>
        <div className='content__wrapper'>
          <ReactMarkdown>{insight.attributes.content}</ReactMarkdown>
          <Btn href='/insights' text='View All Insights' />
        </div>
      </div>
    </section>
  );
}
