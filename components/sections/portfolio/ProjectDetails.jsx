import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetails({ portfolio }) {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.inOut' },
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      [
        textRef.current.querySelectorAll('.left span'),
        textRef.current.querySelector('.right p'),
      ],
      { y: 25, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.1 }
    );

    return () => tl.kill();
  }, []);

  return (
    <section className='project__details' ref={textRef}>
      <div>
        <div className='left'>
          <ul>
            <li>
              <span>What we did</span>
              {portfolio.attributes.service1 &&
                portfolio.attributes.service1 !== '' && (
                  <span>- {portfolio.attributes.service1}</span>
                )}
              {portfolio.attributes.service2 &&
                portfolio.attributes.service2 !== '' && (
                  <span>- {portfolio.attributes.service2}</span>
                )}
              {portfolio.attributes.service3 &&
                portfolio.attributes.service3 !== '' && (
                  <span>- {portfolio.attributes.service3}</span>
                )}
              {portfolio.attributes.service4 &&
                portfolio.attributes.service4 !== '' && (
                  <span>- {portfolio.attributes.service4}</span>
                )}
            </li>
            {portfolio.attributes.website &&
              portfolio.attributes.website !== '' && (
                <li>
                  <span>Website</span>
                  <span>
                    <a
                      href={`https://${portfolio.attributes.website}`}
                      rel='noreferrer nofollower'
                      target='_blank'
                    >
                      - {portfolio.attributes.website}
                    </a>
                  </span>
                </li>
              )}
          </ul>
        </div>
        <div className='right'>
          <p>{portfolio.attributes.detailsText}</p>
        </div>
      </div>
    </section>
  );
}
