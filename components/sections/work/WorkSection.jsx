import WorkCircles from '../work/WorkCircles';

export default function WorkSection({ portfolio }) {
  return (
    <section className='work__section'>
      <div className='work__header'>
        <h1>Our Work</h1>
        <p>
          Revenue-driven, customer-centric, creating strategic solutions based
          in technology, we help brands.
        </p>
      </div>
      <WorkCircles portfolio={portfolio} />
    </section>
  );
}
