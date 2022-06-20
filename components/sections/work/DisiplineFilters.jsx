import FilterBtn from './FilterBtn';

export default function IndustryFilters({
  currentSelection,
  setCurrentSelection,
  setWork,
  portfolio,
}) {
  return (
    <section className='work__filter__btns'>
      <div className='btns__wrapper'>
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
      </div>
    </section>
  );
}
