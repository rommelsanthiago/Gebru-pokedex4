import React, { useContext } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Routes/coodinator"
import { Button } from "../Button"
import GlobalStateContext from '../../Global/GlobalStateContext'

const Card = (props) => {
  const navigate = useNavigate()
  const { poke } = props
  const { pokemon, setPokemon, pokedex, setPokedex } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    const pokeIndex = pokemon.findIndex(
      (item) => item.name === poke.name
    )
    const newPokeList = [...pokemon]
    newPokeList.splice(pokeIndex, 1)
    const orderedPokemon = newPokeList.sort((a, b) => {
      return a.id - b.id
    })

    const newPokedexList = [...pokedex, poke]
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemon(orderedPokemon)
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title name={poke.name}>{poke.name}</Styled.Title>
        <Styled.Img src={poke.sprites.front_default} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button onClick={addToPokedex} >Add</Button>
        <Button onClick={() => goToDetails(navigate, poke.name)}>Details</Button>
      </Styled.FooterCard>
    </Styled.Container>
  )
}

export default Card