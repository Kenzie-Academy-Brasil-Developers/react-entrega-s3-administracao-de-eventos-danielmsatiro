import styled from "styled-components";

export const Card = styled.li`
  width: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  img {
    height: 150px;
  }
  h2,
  h3,
  button,
  p,
  span {
    text-align: center;
    width: 100%;
    margin-top: 5px;
    color: var(--primary-color-main);
  }
  p {
    line-height: 1.1;
  }
  span {
    font-weight: bold;
  }
  button {
    width: 100%;
    background-color: var(--secundary-color-main);
    color: white;
    border-radius: 5px;
    transition: all 0.3s;
    &:hover {
      background-color: var(--secundary-color-light);
    }
  }
`;
