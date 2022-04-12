import React from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/coodinator'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Button } from '../../components/Button'

function Pokedex() {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Pagina Pokedex</Styled.Title>
        <Button onClick={() => goToHome(navigate)}>Home</Button>
      </Header>
      <Styled.Content>
          <Card />
      </Styled.Content>
    </Styled.Container>
  )
}

export default Pokedex