import Btn from '../../general/Btn';

export default function InnerPortfolioContact({ bgColour, colour }) {
  return (
    <section
      className='inner__portfolio__contact'
      style={{
        backgroundColor: bgColour ? bgColour : '',
        color: colour ? colour : 'var(--blue)',
      }}
    >
      <div>
        <p>
          If you’d like to speak to us about a future project or collaboration,
          say hi!
        </p>
        <Btn href='/project-planner' text='Plan your project' />
      </div>
    </section>
  );
}
