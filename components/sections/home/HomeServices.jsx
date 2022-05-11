import Btn from '../../general/Btn';
import ServicesSplide from '../sliders/ServicesSplide';

export default function HomeServices({ services }) {
  return (
    <section className='home__services'>
      <div className='home__services__header'>
        <div className='text'>
          <h2>Website + Digital</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            nostrum exercitationem deleniti pariatur reiciendis molestias.
          </p>
        </div>
        <div className='button'>
          <Btn href='/about' text='What we do' />
        </div>
      </div>
      <div className='home__services__slider'>
        <ServicesSplide services={services} />
      </div>
    </section>
  );
}
