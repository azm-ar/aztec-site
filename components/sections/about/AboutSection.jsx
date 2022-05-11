import { useEffect, useRef } from 'react';
import Btn from '../../general/Btn';
import AboutGrid from './AboutGrid';
import gsap from 'gsap';

export default function AboutSection({ team }) {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        headerRef.current.querySelector('h1'),
        headerRef.current.querySelector('p'),
        headerRef.current.querySelectorAll('.btn'),
      ],
      { autoAlpha: 0, y: 25 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.inOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className='about__section' ref={headerRef}>
      <div className='about__section__header'>
        <div className='text'>
          <h1>Creative bunch.</h1>
          <p>
            Revenue-driven, customer-centric, creating strategic solutions based
            in technology, we help brands.
          </p>
        </div>
        <div className='btns'>
          <Btn href='/' text='What we do' />
          <Btn href='/' text='Recent Work' />
        </div>
      </div>
      <AboutGrid team={team} />
    </section>
  );
}
