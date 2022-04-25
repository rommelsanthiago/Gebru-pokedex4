/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {
    const [pokeList, setPokeList] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [newPokemons, setNewPokemons] = useState([])
    const [progress, setProgress] = useState(1)

    let localPokedex = JSON.parse(localStorage.getItem('pokedex'))

    useEffect(() => {
        getPokeList()
    }, [])

    useEffect(() => {
        const newPokes = []

        if(localPokedex) {
            setPokedex(localPokedex)
        }

        pokeList.forEach((item) => {
            const pokes = async () => {
                try {
                    const res = await axios
                    .get(`${BASE_URL}/${item.name}`)
                    newPokes.push(res.data)
                    if (newPokes.length === (pokeList.length / 2)) {
                        const orderedList = newPokes.sort((a, b) => {
                            return a.id - b.id
                        })
                        setPokemons(orderedList)
                    }
                } catch (err) {
                    console.log(err)
                }
            }
            pokes()
        })
               
    }, [pokeList])
    
    useEffect(() => {
        if(pokedex) {

            const newPokes = newPokemons.filter( x => { 
                return JSON.stringify(pokedex).indexOf(JSON.stringify(x)) < 0
            })
            setPokemons(newPokes)
        }
    }, [newPokemons])

    const getPokeList = () => {
        axios
        .get(`${BASE_URL}/?limit=2000&offset=0`)
        .then((res) => {
            setPokeList(res.data.results)
        })
        .catch (err => console.log(err))
    }

    const data = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        pokeList,
        progress, 
        setProgress,
        setNewPokemons
    }

    return (
        <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState