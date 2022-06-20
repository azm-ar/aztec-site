import { useState } from 'react';
import Arrow from '../../vectors/Arrow';

export default function FilterToggleBtn({
  filter,
  text,
  setShowFilters,
  showFilters,
  setWork,
  portfolio,
}) {
  const [animateOut, setAnimateOut] = useState(false);
  if (text === 'All') {
    return (
      <button
        type='button'
        onClick={() => {
          setShowFilters(false);
          setWork(portfolio);
        }}
        className={`${animateOut ? 'animate-out' : ''}`}
        onMouseLeave={() => setAnimateOut(true)}
        onTransitionEnd={() => setAnimateOut(false)}
      >
        {text}
        <Arrow />
      </button>
    );
  } else {
    return (
      <button
        type='button'
        onClick={() => {
          if (showFilters === filter) {
            setShowFilters(false);
          } else {
            setShowFilters(filter);
          }
        }}
        className={`${animateOut ? 'animate-out' : ''}`}
        onMouseLeave={() => setAnimateOut(true)}
        onTransitionEnd={() => setAnimateOut(false)}
      >
        {text}
        <Arrow />
      </button>
    );
  }
}
