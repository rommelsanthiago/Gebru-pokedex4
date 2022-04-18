import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [pokeList, setPokeList] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect( () => {
        getPokemon()
    }, [])

    

    useEffect( () => {
        const newPoke = []

        pokeList.forEach((item) => {
            axios
            .get(`${BASE_URL}/${item.name}`)
            .then((res) => {
                newPoke.push(res.data)
                setPokemon(newPoke)
            })
            // try {
            //     const results = async () => {
            //         const result = await res
            //         newPoke.push(result.data)
            //     }
            //     results()
            //     // console.log(poke)
            // } 
            .catch (err => console.log(err))
        })
        
    }, [pokeList])

    // console.log(pokemon)
    // console.log(listPokemon)

    const getPokemon = async () => {
        try {
            const res = await axios 
            .get(`${BASE_URL}`)
                setPokeList(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const data = {
        pokemon,
        setPokemon,
        pokedex,
        setPokedex
    }

    return (
        <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState