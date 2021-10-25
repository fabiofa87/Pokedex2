import { useHistory } from "react-router";
import { goToPokedex } from "../../routes/coordinator";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./style";

const Header = ({ title, leftButtonFunction, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Pokedex";
      case "Pokedex":
        return "Voltar para Lista de Pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <h1>{title}</h1>
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(history)}>
          Pokedex
        </RightHeaderButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
