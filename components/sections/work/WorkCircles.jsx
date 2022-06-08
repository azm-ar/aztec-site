import WorkCircle from './WorkCircle';

export default function WorkCircles({ portfolio }) {
  return (
    <section className='work__circles'>
      {portfolio.map((item, index) => (
        <WorkCircle
          key={index}
          item={item}
          priority={index < 12 ? true : false}
          index={portfolio.length - index}
        />
      ))}
    </section>
  );
}
