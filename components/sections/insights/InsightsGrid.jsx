import Link from 'next/link';
import BtnNoLink from '../../general/BtnNoLink';

export default function InsightsGrid({ insights }) {
  return (
    <section className='insights__grid'>
      <div className='grid'>
        {insights.map((item, index) =>
          index > 0 ? (
            <article key={index} className='insights__item'>
              <Link href={`/insights/${item.attributes.alias}`}>
                <a>
                  <div className='date'>{item.attributes.date}</div>
                  <div className='title'>{item.attributes.title}</div>
                  <BtnNoLink text='Read on' />
                </a>
              </Link>
            </article>
          ) : (
            ''
          )
        )}
      </div>
    </section>
  );
}
