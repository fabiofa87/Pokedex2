import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 20%;
  align-items: center;
  justify-items: center;
  background-color: #fff4;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  gap: 10px;
  margin: 10px;
  img {
    width: 70%;
    height: 70%;
  }
`;

export const ButtonsCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
