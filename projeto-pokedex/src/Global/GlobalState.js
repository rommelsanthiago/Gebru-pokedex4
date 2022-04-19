import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [pokeList, setPokeList] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        getPokeList()
    }, [])

    useEffect(() => {
        const newPokes = []

        pokeList.forEach((item) => {
            const pokes = async () => {
                try {
                    const res = await axios
                    .get(`${BASE_URL}/${item.name}`)
                    newPokes.push(res.data)
                    if (newPokes.length === 30) {
                        const orderedList = newPokes.sort((a, b) => {
                          return a.id - b.id;
                        });
                        setPokemon(orderedList)
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            pokes()
        })
        
    }, [pokeList])

    

    const getPokeList = () => {
        axios
        .get(`${BASE_URL}/?limit=30`)
        .then((res) => {
            setPokeList(res.data.results)
        })
        .catch (err => console.log(err))
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