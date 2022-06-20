import { useState } from 'react';
import Arrow from '../../vectors/Arrow';

export default function FilterBtn({
  text,
  alias,
  setCurrentSelection,
  currentSelection,
  setWork,
  portfolio,
}) {
  const [animateOut, setAnimateOut] = useState(false);

  return (
    <button
      type='button'
      onClick={() => {
        setCurrentSelection(alias);
        setWork(
          portfolio.filter((item) => item.attributes.filters.includes(alias))
        );
      }}
      className={`${animateOut ? 'animate-out' : ''} ${
        currentSelection === alias ? 'is--active' : ''
      }`}
      onMouseLeave={() => setAnimateOut(true)}
      onTransitionEnd={() => setAnimateOut(false)}
    >
      {text}
      <Arrow />
    </button>
  );
}
