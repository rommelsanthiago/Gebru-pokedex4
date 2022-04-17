import React, { useEffect, useState } from 'react'

import * as Styled from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../../Routes/coodinator'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import CardDetail from '../../components/CardDetail'
import axios from 'axios'


function Details() {
  const navigate = useNavigate()

  const params = useParams();

  const [photoDetail, setPhotoDetail] = useState("");

  const photoDetailPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    axios
      .get(url)
      .then((res) => setPhotoDetail(res.data))
      .catch((err) => {
        console.log("ERROR", err.response);
      });
  };
  useEffect(() => {
    photoDetailPokemon();
  }, []);


  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Pagina de detalhes</Styled.Title>
        <Button onClick={() => goToBack(navigate)}>Voltar</Button>
      </Header>
      <CardDetail photoDetail={photoDetail} />

    </Styled.Container>
  )
}

export default Details