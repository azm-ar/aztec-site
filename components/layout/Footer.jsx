import Link from 'next/link';
import Btn from '../general/Btn';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import BackToTop from '../general/BackToTop';
import FooterLogo from '../general/FooterLogo';
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const [emailAnimateOut, setEmailAnimateOut] = useState(false);
  const [phoneAnimateOut, setPhoneAnimateOut] = useState(false);

  const footerRef = useRef(null);

  useEffect(() => {
    const footerAnim = gsap
      .timeline({
        scrollTrigger: {
          scrub: true,
          trigger: 'main',
          start: 'bottom bottom',
          end: 'bottom top',
        },
        defaults: {
          duration: 1,
          ease: 'none',
        },
      })
      .fromTo(
        footerRef.current,
        { yPercent: -30 },
        {
          yPercent: 0,
        }
      );

    return () => footerAnim.kill();
  }, [footerRef]);

  return (
    <footer className='footer'>
      <div className='footer__wrapper' ref={footerRef}>
        <BackToTop />
        <section className='footer__cta'>
          <h5>
            Starting a{' '}
            <Link href='/project-planner'>
              <a>
                <span className='underline'></span>new project
              </a>
            </Link>{' '}
            or <br />
            want to collaborate with us?
          </h5>
          <Btn href='/' text={`Let's talk`} />
        </section>
        <section className='footer__details'>
          <address className='footer__contact'>
            <ul>
              <li>Aztec Media</li>
              <li>8 Buckland Road</li>
              <li>Pen Mill Trading Estate</li>
              <li>Yeovil</li>
              <li>Somerset</li>
              <li>BA21 5EA</li>
            </ul>
            <div>
              <a
                href='tel:01935477073'
                className={phoneAnimateOut ? 'animate-out' : ''}
                onMouseLeave={() => setPhoneAnimateOut(true)}
                onTransitionEnd={() => setPhoneAnimateOut(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
                </svg>
                <span>01935 477073</span>
              </a>
              <a
                href='mailto:hello@aztec.media'
                className={emailAnimateOut ? 'animate-out' : ''}
                onMouseLeave={() => setEmailAnimateOut(true)}
                onTransitionEnd={() => setEmailAnimateOut(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
                </svg>
                <span>hello@aztec.media</span>
              </a>
              <div className='icons'>
                <div className='icon'></div>
                <div className='icon'></div>
              </div>
            </div>
          </address>
          <div className='footer__furniture'>
            <FooterLogo />
            <h6>Expert Website Designers Somerset</h6>
            <h6>
              Part of{' '}
              <a href='https://yeomedia.group' rel='noreferrer' target='_blank'>
                The Yeomedia Group
              </a>
            </h6>
            <p>
              Copyright &copy; 1993 - {new Date().getFullYear()} Aztec Media
            </p>
            <p>
              <span>All Rights Reserved</span>
              <span className='dash'>/</span>
              <span>
                <a>Terms &amp; Conditions</a>
              </span>
              <span className='dash'>/</span>
              <span>
                <a>Privacy Notice</a>
              </span>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
}
