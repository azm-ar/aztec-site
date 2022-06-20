import { useEffect, useState } from 'react';
import WorkCircles from '../work/WorkCircles';
import IndustryFilters from './IndustryFilters';
import DisiplineFilters from './DisiplineFilters';
import FilterToggleBtn from './FilterToggleBtn';

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
      <div
        className='work__filter__toggle'
        style={{
          paddingBottom: showFilters ? '' : '4rem',
        }}
      >
        <FilterToggleBtn
          text={'All'}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
          setWork={setWork}
          portfolio={portfolio}
        />
        <FilterToggleBtn
          filter='industry'
          text={'Filter By Industry'}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
        />
        <FilterToggleBtn
          filter='disipline'
          text={'Filter By Disipline'}
          setShowFilters={setShowFilters}
          showFilters={showFilters}
        />
      </div>
      {showFilters && showFilters === 'disipline' && (
        <DisiplineFilters
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          setWork={setWork}
          portfolio={portfolio}
        />
      )}
      {showFilters && showFilters === 'industry' && (
        <IndustryFilters
          currentSelection={currentSelection}
          setCurrentSelection={setCurrentSelection}
          setWork={setWork}
          portfolio={portfolio}
        />
      )}
      <WorkCircles portfolio={work} />
    </section>
  );
}
