import { useEffect, useState } from 'react';
import WorkCircles from '../work/WorkCircles';
import FilterBtn from './FilterBtn';

export default function WorkSection({ portfolio }) {
  const [work, setWork] = useState([]);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setWork(portfolio);
  }, [portfolio]);

  return (
    <section className='work__section'>
      <div className='work__header'>
        <h1>Our Work</h1>
        <p>
          Revenue-driven, customer-centric, creating strategic solutions based
          in technology, we help brands.
        </p>
      </div>
      <div className='work__filter__toggle'>
        <button type='button' onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? 'Hide' : 'Show'} Filters
        </button>
      </div>
      {showFilters && (
        <section className='work__filter__btns'>
          <>
            <button
              type='button'
              onClick={() => {
                setCurrentSelection(null);
                setWork(portfolio);
              }}
            >
              All
            </button>
            <FilterBtn
              text='Web Design'
              alias='web-design'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Branding'
              alias='branding'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Print Design'
              alias='print-design'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Photography'
              alias='photography'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Social Media'
              alias='social-media'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Commercial'
              alias='commercial'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Hospitality'
              alias='hospitality'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Education'
              alias='education'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Charities'
              alias='charities'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
            <FilterBtn
              text='Food &amp; Drink'
              alias='food-and-drink'
              setCurrentSelection={setCurrentSelection}
              currentSelection={currentSelection}
              setWork={setWork}
              portfolio={portfolio}
            />
          </>
        </section>
      )}
      <WorkCircles portfolio={work} />
    </section>
  );
}
