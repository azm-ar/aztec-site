export default function ServicesHeader({ title, colour }) {
  return (
    <section
      className='services__header'
      style={{ backgroundColor: colour ? colour : 'var(--blue)' }}
    >
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea magni
        temporibus excepturi eos et impedit necessitatibus quod dolore
        aspernatur nisi, commodi deserunt accusamus dicta?
      </p>
    </section>
  );
}
