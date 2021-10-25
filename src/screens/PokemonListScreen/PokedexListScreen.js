import Header from "../../components/Header/Header";
import { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokemonListScreenContainer } from "./style";
import { goToPokedex } from "../../routes/coordinator";
import { useHistory } from "react-router";

const PokedexListScreens = () => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <Header
        title={"Lista de Pokemons"}
        leftButtonFunction={() => goToPokedex(history)}
      />
      <PokemonListScreenContainer>
        {pokemons &&
          pokemons.map((poke) => {
            return <PokemonCard key={poke.name} pokemon={poke} />;
          })}
      </PokemonListScreenContainer>
    </>
  );
};

export default PokedexListScreens;
