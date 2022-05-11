import CareersItem from './CareersItem';

export default function CareersGrid({ careers }) {
  return (
    <section className='careers__grid'>
      {careers.map((item) => (
        <CareersItem key={item.id} item={item} />
      ))}
    </section>
  );
}
