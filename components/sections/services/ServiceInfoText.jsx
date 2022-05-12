import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function ServiceInfoText({ service }) {
  return (
    <section className='services__info__text'>
      <div className='img'>
        <figure>
          <Image
            src={`https://aztec.yeomedia.dev${service.attributes.textImage.data.attributes.url}`}
            alt=''
            layout='fill'
          />
        </figure>
      </div>
      <div className='text'>
        <h4 style={{ color: '#5B7B7A' }}>{service.attributes.infoTextTitle}</h4>
        <ReactMarkdown>{service.attributes.infoText}</ReactMarkdown>
      </div>
    </section>
  );
}
