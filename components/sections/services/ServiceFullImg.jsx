import Image from 'next/image';

export default function ServiceFullImg({ service }) {
  return (
    <section className='services__full__img'>
      <div className='img'>
        <figure>
          <Image
            src={`https://aztec.yeomedia.dev${service.attributes.fullWidthImage2.data.attributes.url}`}
            alt='#'
            width={3185}
            height={2215}
            layout='responsive'
          />
        </figure>
      </div>
    </section>
  );
}
