import React, { useEffect, useState } from "react";

import * as Styled from "./styles";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/coodinator";
import { Button } from "../Button";
import axios from "axios";


function Card(props) {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");

  const photoPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;
    axios
      .get(url)
      .then((res) => setPhoto(res.data.sprites?.other.dream_world.front_default))
      .catch((err) => {
        console.log("ERROR", err.response);
      });
  };
  useEffect(() => {
    photoPokemon();
  }, []);


  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title name={props.name}>{props.name}</Styled.Title>
        <Styled.Img src={photo} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button >Add</Button>
        <Button onClick={() => goToDetails(navigate, props.name)}>Details</Button>
      </Styled.FooterCard>
    </Styled.Container>
  );
}

export default Card;
