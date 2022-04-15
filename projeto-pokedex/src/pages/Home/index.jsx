import React from "react";

import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../Routes/coodinator";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { useRequestData } from "../../Hooks/useRequestData";

const Home = () => {
  const navigate = useNavigate();
  const [pokemon, err] = useRequestData(`https://pokeapi.co/api/v2/pokemon`);

  const pokemons =
    pokemon &&
    pokemon.map((poke) => {
      return (
        <Card key={poke.name} name={poke.name} url={poke.url} poke={poke} />
      );
    });

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Home</Styled.Title>
        <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
      </Header>
      <Styled.Content>
        {/* <Card /> */}
        {pokemons}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
