import styled from "styled-components";

export const Container = styled.div`
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  a {
    background-color: var(--primary-color-main);
    width: 210px;
    color: white;
    margin: 5px;
    display: flex;
    padding: 10px;
    justify-content: center;
    border-radius: 10px;
    box-shadow: inset -2px -2px 8px 1px var(--primary-color-light);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: var(--secundary-color-main);
      box-shadow: var(--secundary-color-light);
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  }
  @media (min-width: 800px) {
    & {
      justify-content: flex-start;
    }
    ul {
    }
  }
`;
