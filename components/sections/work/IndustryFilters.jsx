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
      </div>
    </section>
  );
}
