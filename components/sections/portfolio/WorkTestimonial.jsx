import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function WorkTestimonial({ portfolio }) {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'power1.inOut' },
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      [
        textRef.current.querySelectorAll('.icon'),
        textRef.current.querySelector('p'),
      ],
      { y: 25, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.4 }
    );

    return () => tl.kill();
  }, []);

  return (
    <section className='work__testimonial' ref={textRef}>
      <div>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
          </svg>
        </div>
        <p>{portfolio.attributes.testimonial}</p>
      </div>
    </section>
  );
}
