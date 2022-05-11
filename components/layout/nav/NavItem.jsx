import Link from 'next/link';
import { useState } from 'react';

export default function NavItem({ href, text, number }) {
  const [animateOut, setAnimateOut] = useState(false);

  return (
    <Link href={href}>
      <a
        className={`${animateOut ? 'animate-out' : ''}`}
        onMouseLeave={() => setAnimateOut(true)}
        onTransitionEnd={() => setAnimateOut(false)}
      >
        <span>{number}</span>
        {text}
      </a>
    </Link>
  );
}

export function NavItemNoLink({ text }) {
  const [animateOut, setAnimateOut] = useState(false);

  return (
    <div
      className={`${animateOut ? 'animate-out' : ''}`}
      onMouseLeave={() => setAnimateOut(true)}
      onTransitionEnd={() => setAnimateOut(false)}
    >
      {text}
    </div>
  );
}
