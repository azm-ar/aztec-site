import gsap from 'gsap';
import { useSnapshot } from 'valtio';
import { navState } from '../../utils/navState';
import Navbar from './Navbar';
import Logo from '../vectors/Logo';
import LogoText from '../vectors/LogoText';
import Link from 'next/link';

export default function Header() {
  const navStateSnapshot = useSnapshot(navState);

  return (
    <header className='header'>
      <Link href='/'>
        <a className='header__logo' title='Back to the Aztec Media homepage'>
          <Logo />
          <LogoText />
        </a>
      </Link>
      <div className='header__right'>
        <div className='planner'>
          <Link href='/project-planner'>
            <a className='plan'>
              <p>Project Planner</p>
              <div className='slide'></div>
            </a>
          </Link>
          <a className='phone' href='tel:01935477073'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
            <div className='slide'></div>
          </a>
        </div>
        <button
          type='button'
          className={`burger ${navStateSnapshot.open ? 'nav--open' : ''}`}
          title='Toggle Navigation Menu'
          aria-label='Toggle Navigation Menu'
          onClick={() => {
            if (
              !gsap.isTweening([
                '.navbar__left',
                '.navbar__right',
                '.navbar__right .nav--anim',
                '.navbar__left .nav--anim',
              ])
            ) {
              navState.open = !navState.open;
            }
          }}
        >
          <p className='menu'>Menu</p>
          <div className='lines'>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
          </div>
        </button>
      </div>
      <Navbar />
    </header>
  );
}
