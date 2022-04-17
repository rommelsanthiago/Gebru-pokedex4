import React from "react"
import { ImgPoke, PokemonCardContainer, PokemonStats, PokemonType } from "./styled"

const CardDetail = (props) => {

    return (
        <PokemonCardContainer>
            <ImgPoke>
                <img src={props.photoDetail.sprites?.other.home.front_default} alt="foto frente pokemon" />
            </ImgPoke>

            <PokemonType>
                <span> {props.photoDetail.types?.[0].type.name}</span>
            </PokemonType>

            <PokemonStats>
                <h1 >{"Nome:"} {props.photoDetail?.name}</h1>
                <p>Experiência: {props.photoDetail?.base_experience}</p>
                <p>{props.photoDetail.stats?.[0].stat.name}: {props.photoDetail.stats?.[0].base_stat}</p>
                <p>{props.photoDetail.stats?.[1].stat.name}: {props.photoDetail.stats?.[1].base_stat}</p>
                <p>{props.photoDetail.stats?.[2].stat.name}: {props.photoDetail.stats?.[2].base_stat}</p>
                <p>{props.photoDetail.stats?.[3].stat.name}: {props.photoDetail.stats?.[3].base_stat}</p>
                <p>{props.photoDetail.stats?.[4].stat.name}: {props.photoDetail.stats?.[4].base_stat}</p>
                <p>{props.photoDetail.stats?.[5].stat.name}: {props.photoDetail.stats?.[5].base_stat}</p>
                <h1>Pokemon Card</h1>
            </PokemonStats>

        </PokemonCardContainer>
    )
}

export default CardDetail;