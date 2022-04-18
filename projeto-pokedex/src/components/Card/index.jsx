import React from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Routes/coodinator"
import { Button } from "../Button"

const Card = (props) => {
  const navigate = useNavigate()
  const { poke } = props

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title name={poke.name}>{poke.name}</Styled.Title>
        <Styled.Img src={poke.sprites.front_default} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button >Add</Button>
        <Button onClick={() => goToDetails(navigate, poke.name)}>Details</Button>
      </Styled.FooterCard>
    </Styled.Container>
  )
}

export default Card