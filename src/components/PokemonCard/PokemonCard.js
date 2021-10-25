import { ButtonsCard, PokemonCardContainer } from "./style";
import { goToPokemonDetails } from "../../routes/coordinator";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

const PokemonCard = ({ pokemon, isPokedex }) => {
  const history = useHistory();
  const { pokemons, setPokemons, pokedex, setPokedex } =
    useContext(GlobalStateContext);
  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name);
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, pokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };
  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name);

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, pokemon];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };
  return (
    <PokemonCardContainer>
      <img
        src={pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <ButtonsCard>
        <button onClick={() => goToPokemonDetails(history, pokemon.name)}>
          Detalhes
        </button>
        <button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
          {isPokedex ? "Remover da Pokedex" : "Adicionar a Pokedex"}
        </button>
      </ButtonsCard>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
