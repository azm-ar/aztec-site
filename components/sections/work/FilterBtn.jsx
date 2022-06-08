export default function FilterBtn({
  text,
  alias,
  setCurrentSelection,
  currentSelection,
  setWork,
  portfolio,
}) {
  return (
    <button
      type='button'
      onClick={() => {
        if (currentSelection !== alias) {
          setCurrentSelection(alias);
          setWork(
            portfolio.filter((item) => item.attributes.filters.includes(alias))
          );
        } else {
          setCurrentSelection(null);
          setWork(portfolio);
        }
      }}
    >
      {text}
    </button>
  );
}
