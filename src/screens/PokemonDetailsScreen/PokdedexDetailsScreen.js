import Header from "../../components/Header/Header";
import {
  TypeAndMovesContainer,
  PokeInfosContainer,
  ImgWrapper,
  ImagesContainer,
  StatsContainer,
  TitleContainer,
  TypesContainer,
  MovesContainer,
} from "./style";
import { useParams, useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goBack } from "../../routes/coordinator";

const PokedexDetailsScreen = () => {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const { name } = useParams();
  const { pokemons } = useContext(GlobalStateContext);
  const history = useHistory();
  useEffect(() => {
    const currentPokemon = pokemons.find((item) => {
      return item.name === name;
    });
    setSelectedPokemon(currentPokemon);
  }, []);

  return (
    <>
      <Header leftButtonFunction={() => history.goBack()} showRightButton />
      <PokeInfosContainer>
        {selectedPokemon && selectedPokemon.sprites && (
          <ImagesContainer>
            <ImgWrapper src={selectedPokemon.sprites.front_default} />
            <ImgWrapper src={selectedPokemon.sprites.back_default} />
          </ImagesContainer>
        )}
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          {selectedPokemon &&
            selectedPokemon.stats &&
            selectedPokemon.stats.map((stat) => {
              return (
                <p key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              );
            })}
        </StatsContainer>
        <TypeAndMovesContainer>
          {selectedPokemon &&
            selectedPokemon.types &&
            selectedPokemon.types.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>;
            })}
        </TypeAndMovesContainer>
        <MovesContainer>
          <TypesContainer>Principais Ataques</TypesContainer>
          {selectedPokemon &&
            selectedPokemon.moves &&
            selectedPokemon.moves.map((move, index) => {
              return index < 5 && <p key={move.move.name}>{move.move.name}</p>;
            })}
        </MovesContainer>
      </PokeInfosContainer>
    </>
  );
};

export default PokedexDetailsScreen;
