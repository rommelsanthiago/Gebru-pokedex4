import React from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../Routes/coodinator'
import Header from '../../components/Header'
import { Button } from '../../components/Button'

function Details() {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Pagina de detalhes</Styled.Title>
        <Button onClick={() => goToBack(navigate)}>Voltar</Button>
      </Header>
    </Styled.Container>
  )
}

export default Details