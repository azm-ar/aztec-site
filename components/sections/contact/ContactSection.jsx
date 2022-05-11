import Btn from '../../general/Btn';
import ContactForm from './ContactForm';
import Arrow from '../../vectors/Arrow';

export default function ContactSection() {
  return (
    <section className='contact__section'>
      <div className='grid'>
        <div className='contact__text'>
          <h1>
            Let&apos;s build something <br />
            awesome together
          </h1>
          <Btn href='tel:01935477073' text='Give us a call' />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
