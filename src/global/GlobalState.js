import GlobalStateContext from "./GlobalStateContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemonNames();
  }, []);

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(item.url)
        .then((res) => {
          newList.push(res.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => a.id - b.id);
            setPokemons(orderedList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [pokemonNames]);

  const getPokemonNames = () => {
    axios
      .get(`${BASE_URL}/pokemon`)
      .then((res) => {
        setPokemonNames(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = { pokemons, setPokemons, pokedex, setPokedex };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
