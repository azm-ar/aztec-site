export default function WorkIntroDetails({ portfolio }) {
  return (
    <section className='intro__details'>
      <h2>{portfolio.attributes.summary}</h2>
    </section>
  );
}
