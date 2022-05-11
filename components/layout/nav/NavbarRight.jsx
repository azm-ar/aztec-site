import NavItem, { NavItemNoLink } from './NavItem';
import { useEffect, useState, useRef } from 'react';
import Arrow from '../../vectors/Arrow';
import Logo from '../../vectors/Logo';
import gsap from 'gsap';

export default function NavbarRight() {
  const [emailAnimateOut, setEmailAnimateOut] = useState(false);
  const [phoneAnimateOut, setPhoneAnimateOut] = useState(false);

  const [innerMenuOpen, setInnerMenuOpen] = useState(false);

  return (
    <section className='navbar__right'>
      <div className='mob__logo'>
        <Logo />
      </div>
      <div className='navbar__right__contact'>
        <a
          href='mailto:hello@aztec.media'
          className={`email nav--anim ${emailAnimateOut ? 'animate-out' : ''}`}
          onMouseLeave={() => setEmailAnimateOut(true)}
          onTransitionEnd={() => setEmailAnimateOut(false)}
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
            </svg>
          </span>
          hello@aztec.media
        </a>
        <a
          href='tel:01935477073'
          className={`phone nav--anim ${phoneAnimateOut ? 'animate-out' : ''}`}
          onMouseLeave={() => setPhoneAnimateOut(true)}
          onTransitionEnd={() => setPhoneAnimateOut(false)}
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
          </span>
          01935 477073
        </a>
      </div>
      <ul className='navbar__right__menu'>
        <li className='navbar__right__menu__item nav--anim'>
          <NavItem href='/about' text='Who we are' number='06' />
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <NavItem href='/work' text='Our work' number='07' />
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <NavItem href='/insights' text='Insights' number='08' />
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <NavItem href='/contact' text='Get in touch' number='09' />
        </li>
        <li className='navbar__right__menu__item nav--anim'>
          <NavItem href='/careers' text='Careers' number='10' />
        </li>
        <li
          className='navbar__right__menu__item nav--anim mobile__services'
          onClick={() => {
            if (!gsap.isTweening('.navbar__right .inner__menu')) {
              setInnerMenuOpen(true);
            }
          }}
        >
          <NavItemNoLink text='Services' />
        </li>
      </ul>
      <InnerMenu
        innerMenuOpen={innerMenuOpen}
        setInnerMenuOpen={setInnerMenuOpen}
      />
      <div className='navbar__right__details'>
        <h5 className='nav--anim'>
          Part of the{' '}
          <a href='https://yeomedia.group' target='_blank' rel='noreferrer'>
            YeoMedia Group
          </a>
        </h5>
        <address>
          <p className='nav--anim'>8 Buckland Road,</p>
          <p className='nav--anim'>Pen Mill Trading Estate, Yeovil</p>
          <p className='nav--anim'>Somerset, BA21 5EA</p>
        </address>
        <p className='directions nav--anim'>
          <a
            href='https://www.google.com/maps/place/AztecMedia/@50.9533822,-2.6086676,14.19z/data=!4m5!3m4!1s0x4872404e06af5321:0xc59416c83f452e37!8m2!3d50.9468842!4d-2.609976'
            target='_blank'
            rel='noreferrer'
          >
            Get Directions
          </a>
        </p>
      </div>
    </section>
  );
}

export function InnerMenu({ innerMenuOpen, setInnerMenuOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const introTl = gsap.timeline({
      defaults: { duration: 0.6, ease: 'power2.inOut' },
    });
    const outroTl = gsap.timeline({
      defaults: { duration: 0.4, ease: 'power2.inOut' },
    });

    if (innerMenuOpen) {
      introTl
        .fromTo(menuRef.current, { scaleX: 0 }, { scaleX: 1 })
        .fromTo(
          [
            menuRef.current.querySelectorAll('li'),
            menuRef.current.querySelector('.back'),
          ],
          { autoAlpha: 0, y: -15 },
          { autoAlpha: 1, y: 0, stagger: 0.05 }
        );
    } else {
      outroTl
        .fromTo(
          [
            menuRef.current.querySelectorAll('li'),
            menuRef.current.querySelector('.back'),
          ],
          { autoAlpha: 1, y: 0 },
          { autoAlpha: 0, y: 15, stagger: 0.025 }
        )
        .fromTo(menuRef.current, { scaleX: 1 }, { scaleX: 0 });
    }
  }, [innerMenuOpen]);

  return (
    <ul
      className={`inner__menu ${innerMenuOpen ? 'active' : ''}`}
      ref={menuRef}
    >
      <div
        className='back'
        onClick={() => {
          if (!gsap.isTweening('.navbar__right .inner__menu')) {
            setInnerMenuOpen(false);
          }
        }}
      >
        <Arrow />
        <div className='hover__circle'></div>
      </div>
      <li className='inner__menu__item'>
        <NavItem href='/services/web-design' text='Web Design' />
      </li>
      <li className='inner__menu__item'>
        <NavItem href='/services/branding' text='Branding' />
      </li>
      <li className='inner__menu__item'>
        <NavItem href='/services/print-design' text='Print Design' />
      </li>
      <li className='inner__menu__item'>
        <NavItem href='/services/photography' text='Photography' />
      </li>
      <li className='inner__menu__item'>
        <NavItem href='/services/social-media' text='Social Media' />
      </li>
    </ul>
  );
}
