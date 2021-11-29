import { Link } from "react-router-dom";
import { Container } from "./style";

export const Section = () => {
  return (
    <Container>
      <ul>
        <Link to="/">Lista de Bebidas</Link>
        <Link to="/confraternization">Lista de Confraternização</Link>
        <Link to="/graduation">Lista de Formatura</Link>
        <Link to="/wedding">Lista de Casamento</Link>
      </ul>
    </Container>
  );
};
