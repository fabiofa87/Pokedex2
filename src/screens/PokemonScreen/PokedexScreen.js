import Header from "../../components/Header/Header";
import { goToPokemonsList } from "../../routes/coordinator";
import { PokeListContainer } from "./style";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useContext } from "react";

const PokdedexScreen = () => {
  const history = useHistory();
  const { pokedex } = useContext(GlobalStateContext);
  return (
    <>
      <Header
        title={"Pokedex"}
        leftButtonFunction={() => goToPokemonsList(history)}
      />
      <PokeListContainer>
        {pokedex &&
          pokedex.map((poke) => {
            return <PokemonCard key={poke.name} isPokedex pokemon={poke} />;
          })}
      </PokeListContainer>
    </>
  );
};

export default PokdedexScreen;
