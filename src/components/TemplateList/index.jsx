export const TemplateList = ({ eventList, removeFromEvent }) => {
  return (
    <div>
      <ul>
        {eventList.map((beer) => (
          <li key={beer.id}>
            <div>
              <h2>{beer.name}</h2>

              <button onClick={() => removeFromEvent(beer)}>
                Remover Beer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
