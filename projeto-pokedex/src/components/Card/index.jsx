import React from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToDetails } from '../../Routes/coodinator'
import { Button } from '../Button'

function Card() {
  const navigate = useNavigate()

  return (
    <Styled.Container>
        <Styled.Content>
            <Styled.Title>Name</Styled.Title>
            <Styled.Img src='https://picsum.photos/200' alt='Pokemon'/>  
        </Styled.Content>
        <Styled.FooterCard>
            <Button>Add</Button>
            <Button onClick={() => goToDetails(navigate)}>Details</Button>
        </Styled.FooterCard>
    </Styled.Container>
  )
}

export default Card