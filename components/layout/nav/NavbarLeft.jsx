import Link from 'next/link';

import Logo from '../../vectors/Logo';
import Line from '../../vectors/Line';
import NavItem from './NavItem';

export default function NavbarLeft() {
  return (
    <section className='navbar__left'>
      <div className='navbar__left__logo nav--anim'>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className='navbar__left__content'>
        <ul className='navbar__left__menu'>
          <li className='navbar__left__menu__item nav--anim'>
            <NavItem
              href='/services/web-design'
              text='Web design'
              number='01'
            />
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <NavItem href='/services/branding' text='Branding' number='02' />
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <NavItem
              href='/services/print-design'
              text='Print Design'
              number='03'
            />
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <NavItem
              href='/services/photography'
              text='Photography'
              number='04'
            />
          </li>
          <li className='navbar__left__menu__item nav--anim'>
            <NavItem
              href='/services/social-media'
              text='Social media'
              number='05'
            />
          </li>
        </ul>
        <div className='navbar__left__sectors'>
          <h4 className='nav--anim'>Sectors</h4>
          <ul>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Commercial
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Hospitality
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Education
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Charities
            </li>
            <li className='nav--anim'>
              <span>
                <Line />
              </span>
              Food &amp; Drink
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
