import Image from 'next/image';

export default function ServiceMainDetails({ service }) {
  return (
    <section className='service__main__details'>
      <div className='img'>
        <figure>
          <Image
            src={`https://aztec.yeomedia.dev${service.attributes.fullWidthImage1.data.attributes.url}`}
            alt='#'
            layout='fill'
          />
        </figure>
      </div>
      <div className='content' style={{ backgroundColor: '#5B7B7A' }}>
        <h3>{service.attributes.servicePageBox.title}</h3>
        <ul className='grid'>
          <li>
            <h4>{service.attributes.servicePageBox.heading1}</h4>
            <p>{service.attributes.servicePageBox.text1}</p>
          </li>
          <li>
            <h4>{service.attributes.servicePageBox.heading2}</h4>
            <p>{service.attributes.servicePageBox.text2}</p>
          </li>
          <li>
            <h4>{service.attributes.servicePageBox.heading3}</h4>
            <p>{service.attributes.servicePageBox.text3}</p>
          </li>
          <li>
            <h4>{service.attributes.servicePageBox.heading4}</h4>
            <p>{service.attributes.servicePageBox.text4}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
