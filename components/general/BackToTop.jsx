import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function BackToTop() {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  const toTopRef = useRef(null);

  useEffect(() => {
    const topAnim = gsap.fromTo(
      toTopRef.current,
      { autoAlpha: 0, scale: 1 },
      {
        autoAlpha: 1,
        scale: 1.2,
        scrollTrigger: {
          scrub: 1,
          trigger: toTopRef.current,
          start: 'top-=100px bottom',
          end: 'bottom bottom',
        },
      }
    );

    return () => topAnim.kill();
  }, []);

  return (
    <div className='back__top__top' onClick={handleClick} ref={toTopRef}>
      <svg
        width='505'
        height='61'
        viewBox='0 0 505 61'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='shape'
      >
        <g opacity='0.475'>
          <path
            opacity='0.475'
            d='M415.011 40.165C375.771 25.288 323.23 0 252.066 0C180.902 0 128.361 25.288 89.121 40.165C49.881 55.042 0 60.991 0 60.991H504.132C504.132 60.991 454.251 55.041 415.011 40.165Z'
            fill='black'
          />
        </g>
      </svg>
      <p>
        <svg
          width='32'
          height='18'
          viewBox='0 0 32 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='arrow__svg'
        >
          <path
            d='M21.259 0V6.0305H0V11.9713H21.259V18.0018L32.0036 9L21.259 0Z'
            fill='#F69321'
          />
        </svg>
        <span>Back To Top</span>
      </p>
    </div>
  );
}
