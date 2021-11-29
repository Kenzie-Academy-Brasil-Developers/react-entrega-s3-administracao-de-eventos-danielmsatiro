import { useBeers } from "../../providers/beers";
import { useWedding } from "../../providers/wedding";
import { useGraduation } from "../../providers/graduation";
import { useConfraternization } from "../../providers/confraternization";

export const Beers = () => {
  const { beers } = useBeers();
  const { wedding, addToWedding } = useWedding();
  const { graduation, addToGraduation } = useGraduation();
  const { confraternization, addToConfraternization } = useConfraternization();

  const handleToEvent = (beer, eventList, addToEvent) => {
    if (eventList.every((item) => item.id !== beer.id)) {
      console.log("Produto adicionado ao evento");
      return addToEvent(beer);
    }
    return console.log("Produto já adicionado");
  };

  return (
    <div>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <h2>{beer.name}</h2>
            <button onClick={() => handleToEvent(beer, wedding, addToWedding)}>
              Lista de Wedding
            </button>
            <button
              onClick={() => handleToEvent(beer, graduation, addToGraduation)}
            >
              Lista de Graduation
            </button>
            <button
              onClick={() =>
                handleToEvent(beer, confraternization, addToConfraternization)
              }
            >
              Lista de Confraternization
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
