export default function ServicesHeader({ service }) {
  return (
    <section
      className='services__header'
      style={{
        backgroundColor: service.attributes.colour
          ? service.attributes.colour
          : 'var(--blue)',
      }}
    >
      <h1>{service.attributes.title}</h1>
      <p>{service.attributes.summary}</p>
    </section>
  );
}
