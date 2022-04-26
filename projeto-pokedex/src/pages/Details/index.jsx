import React, { useEffect, useState } from 'react'

import * as Styled from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack, goToBalte } from '../../Routes/coodinator'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import CardDetail from '../../components/CardDetail'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import Pokeball from '../../assets/img/pokeball-icon.png'

const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [photoDetail, setPhotoDetail] = useState({})

  useEffect(() => {
    const photoDetailPokemon = async () => {
      const res = await axios
        .get(`${BASE_URL}/${params.id}`)
        try {
          setPhotoDetail(res.data)
        } catch (err) {
          console.log("ERROR", err.response)
        }
    }
    photoDetailPokemon()
  }, [params])

  return (
    <Styled.Container>
      <Header>
        <Button onClick={() => goToBack(navigate)}>Return</Button>
        <Styled.Title>
          <Styled.Pokeball src={Pokeball} alt='Pokeball' />
          Details
        </Styled.Title>
        <Button onClick={() => goToBalte(navigate)}>BatleZone</Button>
      </Header>
      <Styled.Content>
        <CardDetail photoDetail={photoDetail} />  
      </Styled.Content>
    </Styled.Container>
  )
}

export default Details