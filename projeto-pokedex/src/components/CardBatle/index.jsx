import React, { useState, useEffect } from "react"
import * as Styled from "./styles"
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

const CardBatle = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon(props.poke)
    }, [props.poke])

    const getPokemon = (pokeName) => {
        const poke = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/${pokeName}`)
                setPokemon( res.data)
            } catch (err) {
                console.log(err)
            }
        }
        poke()
    }

    const types = pokemon.types
    
    const stats = pokemon.stats

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.ImgPoke>
                    <Styled.Title>{pokemon.name}</Styled.Title>
                    <Styled.Img src={pokemon.sprites?.other.home.front_default} alt={pokemon.name} />
                </Styled.ImgPoke>
                <Styled.Title>
                    TYPE
                    {
                        types && types.map(type => {
                            return <Styled.Span key={type.type.name} >{type.type.name}</Styled.Span>
                        })
                    }
                </Styled.Title>
                <Styled.PokemonStats>
                    <p>Experience: {pokemon.base_experience}</p>
                    {stats && stats.map((item) => {
                        return <p key={item.stat.name}>
                            {item.stat.name}: {item.base_stat}
                        </p>
                    })}
                </Styled.PokemonStats>
            </Styled.Content>
        </Styled.Container>
    )
}

export default CardBatle;