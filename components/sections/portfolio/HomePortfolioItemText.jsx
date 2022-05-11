import { useRef, useEffect } from 'react';
import Btn from '../../general/Btn';
import DotLogo from '../../vectors/DotLogo';
import LogoFillClip from '../../vectors/LogoFillClip';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HomePortfolioItemText({ item, id }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        textRef.current.querySelector('h3'),
        textRef.current.querySelector('p'),
        textRef.current.querySelector('.btn'),
      ],
      { autoAlpha: 0, y: 25 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <article className='home__portfolio__item__text' ref={textRef}>
      <section className='dot__logo'>
        <DotLogo img='/dots-blue.svg' />
        <LogoFillClip />
      </section>
      <h3>
        {item.attributes.title}
        <span className='underline'></span>
      </h3>
      <p>{item.attributes.summary}</p>
      <Btn href={`/work/${item.attributes.alias}`} text='Case Study' />
    </article>
  );
}
