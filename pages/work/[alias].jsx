import InnerPortfolioContact from '../../components/sections/portfolio/InnerPortfolioContact';
import Seo from '../../components/layout/Seo';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/layout/Footer';
import PortfolioSplide from '../../components/sections/sliders/PortfolioSplide';
import WorkHeading from '../../components/sections/portfolio/WorkHeading';
import WorkIntroDetails from '../../components/sections/portfolio/WorkIntroDetails';
import ShowcaseImage from '../../components/sections/portfolio/ShowcaseImage';
import ProjectDetails from '../../components/sections/portfolio/ProjectDetails';
import WorkImageSlider from '../../components/sections/portfolio/WorkImageSlider';
import WorkImageGrid from '../../components/sections/portfolio/WorkImageGrid';
import WorkTestimonial from '../../components/sections/portfolio/WorkTestimonial';
import FinalImage from '../../components/sections/portfolio/FinalImage';

export default function WorkInnerPage({ portfolio, portfolios }) {
  return (
    <Layout>
      <Seo
        title={`${portfolio.attributes.seoTitle} Aztec Media Work`}
        description={portfolio.attributes.seoDescription}
      />
      <main
        className={`work__main work__main--${portfolio.attributes.title
          .replace(' ', '')
          .toLowerCase()}`}
      >
        <WorkHeading portfolio={portfolio} />
        <WorkIntroDetails portfolio={portfolio} />
        <ShowcaseImage portfolio={portfolio} />
        <ProjectDetails portfolio={portfolio} />
        <WorkImageSlider portfolio={portfolio} />
        <WorkImageGrid portfolio={portfolio} />
        <WorkTestimonial portfolio={portfolio} />
        <FinalImage portfolio={portfolio} />
        <InnerPortfolioContact bgColour='#fff' />
        <section className='more__work__slider'>
          <PortfolioSplide portfolio={portfolios} />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfoliosRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate=*'
  );
  const portfoliosData = await portfoliosRes.json();

  let portfolio = {};

  portfoliosData.data.forEach((item) => {
    if (item.attributes.alias === params.alias) {
      portfolio = item;
    }
  });

  const allPortfoliosRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate[mainImage][populate]=*'
  );
  const allPortfoliosData = await allPortfoliosRes.json();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const shuffled = shuffle(allPortfoliosData.data);

  const portfolios = shuffled.filter((item, index) => {
    if (item.attributes.title !== portfolio.title && index < 10) {
      return item;
    }
  });

  return {
    props: {
      portfolio,
      portfolios,
    },
  };
}

export async function getStaticPaths() {
  const insightsRes = await fetch('https://aztec.yeomedia.dev/api/portfolios');
  const insightsData = await insightsRes.json();

  const aliass = insightsData.data.map((item) => item.attributes.alias);
  const paths = aliass.map((alias) => ({ params: { alias } }));

  return {
    paths,
    fallback: false,
  };
}
