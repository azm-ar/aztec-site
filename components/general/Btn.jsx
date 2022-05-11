import Link from 'next/link';

import Arrow from '../vectors/Arrow';

export default function Btn({ href, text, className }) {
  return (
    <Link href={href}>
      <a className={`btn ${className ? className : ''}`}>
        <span>{text}</span>
        <div className='arrow'>
          <Arrow />
          <div className='btn__hover'></div>
        </div>
      </a>
    </Link>
  );
}
