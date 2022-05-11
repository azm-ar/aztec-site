import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Accordion({ item }) {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <article className='accordion' onClick={() => setItemOpen(!itemOpen)}>
      <div className='title'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='icon'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
          />
        </svg>
        <p>{item.title}</p>
      </div>
      <div className='more'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className={`plus ${itemOpen ? 'open' : ''}`}
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='minus'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'
          />
        </svg>
      </div>
      <div className={`content ${itemOpen ? 'open' : ''}`}>
        <div className='summary'>
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
