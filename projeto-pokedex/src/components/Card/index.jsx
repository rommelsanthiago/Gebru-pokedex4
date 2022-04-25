import React, { useContext } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToDetails } from "../../Routes/coodinator"
import { Button } from "../Button"
import Swal from "sweetalert2"
import GlobalStateContext from '../../Global/GlobalStateContext'

const Card = (props) => {
  const navigate = useNavigate()
  const { poke, isPokedex } = props
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

  const toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const showAlertSuccess = () => {
    toastMixin.fire({
      animation: true,
      title: 'Pokemon successfully added'
    })
  }

  const showAlertDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        toastMixin.fire({
          animation: true,
          title: 'Pokemon deleted successfully'
        })
        removeFromPokedex()
      }
    })
  }

  const ShowAlertError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Attention you can only add a maximum of 25 pokemons to your pokedex!'
    })
  }

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

      showAlertSuccess()
    } else {
      ShowAlertError()
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
        <Styled.Title name={poke.name}>#{poke.id} {poke.name}</Styled.Title>
        <Styled.Img src={poke.sprites.front_default} alt="Pokemon" />
      </Styled.Content>
      <Styled.FooterCard>
        <Button onClick={isPokedex ? showAlertDelete : addToPokedex}>
          {isPokedex ? "Remove" : "Add"}
        </Button>
        <Button onClick={() => goToDetails(navigate, poke.name)}>Details</Button>
      </Styled.FooterCard>
    </Styled.Container>
  )
}

export default Card