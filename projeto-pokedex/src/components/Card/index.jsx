import React, { useContext } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Routes/coodinator"
import { Button } from "../Button"
import GlobalStateContext from '../../Global/GlobalStateContext'

const Card = (props) => {
  const navigate = useNavigate()
  const { poke, isPokedex } = props
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

  const addToPokedex = () => {
    if(pokedex.length < 25){
      const pokeIndex = pokemons.findIndex(
        (item) => item.name === poke.name
      )
      const newPokeList = [...pokemons]
      newPokeList.splice(pokeIndex, 1)
      const orderedPokemon = newPokeList.sort((a, b) => {
        return a.id - b.id
      })
  
      const newPokedexList = [...pokedex, poke]
      const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id
      })
  
      setPokedex(orderedPokedex)
      setPokemons(orderedPokemon)
      setInLocalStorage("pokedex", orderedPokedex)
    } else {
      alert("Atenção você só pode adicionanr no maximo 25 pokemons a sua pokedex!")
    }
  }

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === poke.name
    )

    const newPokeList = [...pokedex]
    newPokeList.splice(pokeIndex, 1)
    const orderedPokedex = newPokeList.sort((a, b) => {
      return a.id - b.id
    })

    const newPokemonsList = [...pokemons, poke]
    const orderedPokemon = newPokemonsList.sort((a, b) => {
      return a.id - b.id
    })

    setPokedex(orderedPokedex)
    setPokemons(orderedPokemon)
    setInLocalStorage("pokedex", orderedPokedex)
  }

  const setInLocalStorage = (keyName, value) => {
    try {
        localStorage.setItem(keyName, JSON.stringify(value))
    } catch (error) {
        console.log('Error in local storage', error)
        setInLocalStorage(keyName, JSON.parse(localStorage.getItem(keyName)))
    }
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title name={poke.name}>{poke.name}</Styled.Title>
        <Styled.Img src={poke.sprites.front_default} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
          {isPokedex ? "Remove" : "Add"}
        </Button>
        <Button onClick={() => goToDetails(navigate, poke.name)}>Details</Button>
      </Styled.FooterCard>
    </Styled.Container>
  )
}

export default Card