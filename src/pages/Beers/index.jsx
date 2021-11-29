import { useBeers } from "../../providers/beers";
import { useWedding } from "../../providers/wedding";
import { useGraduation } from "../../providers/graduation";
import { useConfraternization } from "../../providers/confraternization";
import { Card } from "../../components/Card/style";
import { Container } from "../../components/Container/style";

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
    <Container>
      <ul>
        {beers.map((beer) => (
          <Card key={beer.id}>
            <img src={beer.image_url} alt="beer.name" />
            <h2>{beer.name}</h2>
            <h3>Fabricação: {beer.first_brewed}</h3>
            <p>{beer.description}</p>
            <span>
              {beer.volume.value} {beer.volume.unit}
            </span>

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
          </Card>
        ))}
      </ul>
    </Container>
  );
};
