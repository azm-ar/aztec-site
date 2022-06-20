import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Accordion from './Accordion';

export default function ServiceIntroDetails({ service }) {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'expo.out' },
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(textRef.current, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });

    return () => tl.kill();
  }, []);

  return (
    <section className='service__intro__details'>
      <p ref={textRef}>{service.attributes.introText}</p>
      <div className='accordions'>
        {service.attributes.accordions.map((item) => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
