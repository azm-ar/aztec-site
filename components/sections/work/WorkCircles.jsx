import WorkCircle from './WorkCircle';

export default function WorkCircles({ portfolio }) {
  return (
    <section className='work__circles'>
      {portfolio.map((item, index) => (
        <WorkCircle key={index} item={item} index={portfolio.length - index} />
      ))}
    </section>
  );
}
