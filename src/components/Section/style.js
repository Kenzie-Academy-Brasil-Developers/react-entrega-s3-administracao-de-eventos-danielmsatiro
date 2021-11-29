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
    background-color: #273335;
    width: 210px;
    color: white;
    margin: 5px;
    display: flex;
    padding: 10px;
    justify-content: center;
    border-radius: 10px;
    box-shadow: inset -2px -2px 8px 1px #286874;
  }

  @media (min-width: 800px) {
    & {
      justify-content: flex-start;
    }
    ul {
    }
  }
`;
