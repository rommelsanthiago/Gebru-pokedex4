import React from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToBack } from '../../Routes/coodinator'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import Pokeball from '../../assets/img/pokeball-icon.png'

const Batle = () => {
  const navigate = useNavigate()

  return (
    <Styled.Container>
      <Header>
        <Button onClick={() => goToHome(navigate)}>Home</Button>
        <Styled.Title>
          <Styled.Pokeball src={Pokeball} alt='Pokeball' />
          Batle Zone
        </Styled.Title>
        <Button onClick={() => goToBack(navigate)}>Return</Button>
      </Header>
      <Styled.Content>
        <img src={'http://cartoriocatizane.com.br/wp-content/uploads/2018/04/desenvolvimento.jpg'} alt='Page' />
      </Styled.Content>
    </Styled.Container>
  )
}

export default Batle