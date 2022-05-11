import ServicesSplide from '../sliders/ServicesSplide';

export default function ServicesSlider({ services, bgColour, colour }) {
  return (
    <section
      className='general__services__slider'
      style={{
        backgroundColor: bgColour ? bgColour : '',
        color: colour ? colour : '',
      }}
    >
      <ServicesSplide services={services} />
    </section>
  );
}
