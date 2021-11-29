import { Card } from "../Card/style";
import { Container } from "../Container/style";

export const TemplateList = ({ eventList, removeFromEvent }) => {
  return (
    <Container>
      <ul>
        {eventList.map((beer) => (
          <Card key={beer.id}>
            <img src={beer.image_url} alt="beer.name" />
            <h2>{beer.name}</h2>
            <h3>{beer.first_brewed}</h3>
            <p>{beer.description}</p>
            <span>
              {beer.volume.value} {beer.volume.unit}
            </span>
            <button onClick={() => removeFromEvent(beer)}>Remover Beer</button>
          </Card>
        ))}
      </ul>
    </Container>
  );
};
