import HomePortfolioItem from '../portfolio/HomePortfolioItem';

export default function HomePortfolio({ portfolio }) {
  return (
    <section className='home__portfolio__grid'>
      <div className='grid__wrapper'>
        {portfolio.map((item, index) => (
          <HomePortfolioItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
