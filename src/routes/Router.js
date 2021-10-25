import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokedexDetailsScreen from "../screens/PokemonDetailsScreen/PokdedexDetailsScreen";
import PokedexListScreens from "../screens/PokemonListScreen/PokedexListScreen";
import PokdedexScreen from "../screens/PokemonScreen/PokedexScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={PokedexListScreens} />
        <Route exact path={"/pokemon/:name"} component={PokedexDetailsScreen} />
        <Route exact path={"/pokedex"} component={PokdedexScreen} />
        <Route>
          <h1>404 - Pagina não encontrada.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
