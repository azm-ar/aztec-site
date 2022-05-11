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

export default function PremierTraffic({ portfolio, portfolios }) {
  return (
    <Layout>
      <Seo title={'Saucony'} />
      <main className='work__main work__main--saucony'>
        <WorkHeading portfolio={portfolio} />
        <WorkIntroDetails portfolio={portfolio} />
        <ShowcaseImage portfolio={portfolio} />
        <ProjectDetails portfolio={portfolio} />
        <WorkImageSlider portfolio={portfolio} />
        <WorkImageGrid portfolio={portfolio} />
        <WorkTestimonial portfolio={portfolio} />
        <FinalImage portfolio={portfolio} />
        <InnerPortfolioContact bgColour='#fff' colour='rgb(19, 19, 19)' />
        <section className='more__work__slider'>
          <PortfolioSplide portfolio={portfolios} />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const portfolioRes = await fetch(
    'https://aztec.yeomedia.dev/api/portfolios?populate=*'
  );
  const portfolioData = await portfolioRes.json();

  const portfolio = portfolioData.data.filter(
    (item) => item.attributes.title === 'Saucony'
  );

  const portfolios = portfolioData.data.filter(
    (item) => item.attributes.title !== 'Saucony'
  );

  return {
    props: {
      portfolios,
      portfolio: portfolio[0],
    },
  };
}
