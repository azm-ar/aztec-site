import Accordion from './Accordion';

export default function ServiceIntroDetails({ service }) {
  return (
    <section className='service__intro__details'>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi
        voluptatem nobis mollitia, at magni?
      </p>
      <div className='accordions'>
        {service.attributes.accordions.map((item) => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
