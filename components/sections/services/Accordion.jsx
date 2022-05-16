import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Accordion({ item }) {
  const [itemOpen, setItemOpen] = useState(false);

  return (
    <article className='accordion' onClick={() => setItemOpen(!itemOpen)}>
      <div className='title'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 640 512'
          className='icon'
        >
          <path d='M624 384h-608C7.188 384 0 391.2 0 400V416c0 35.2 28.81 64 64 64h512c35.19 0 64-28.8 64-64v-16C640 391.2 632.8 384 624 384zM624 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-16h608V416zM72 352c4.418 0 8-3.582 8-8V80c0-17.67 14.33-32 32-32h416c17.67 0 32 14.33 32 32v264c0 4.418 3.582 8 8 8S576 348.4 576 344V80C576 53.6 554.4 32 528 32h-416C85.6 32 64 53.6 64 80v264C64 348.4 67.58 352 72 352zM269.7 146.3c-3.125-3.125-8.188-3.125-11.31 0l-64 64c-3.125 3.125-3.125 8.188 0 11.31l64 64C259.9 287.2 261.1 288 264 288s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L211.3 216l58.34-58.34C272.8 154.5 272.8 149.5 269.7 146.3zM370.3 285.7C371.9 287.2 373.1 288 376 288s4.094-.7813 5.656-2.344l64-64c3.125-3.125 3.125-8.188 0-11.31l-64-64c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L428.7 216l-58.34 58.34C367.2 277.5 367.2 282.5 370.3 285.7z' />
        </svg>
        <p>{item.title}</p>
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
      </div>
      <div className={`content ${itemOpen ? 'open' : ''}`}>
        <div className='summary'>
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}