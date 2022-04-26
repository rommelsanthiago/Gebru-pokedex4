import React from "react"
import * as Styled from "./styled"

const CardDetail = (props) => {
    const { photoDetail } = props
    const stats = photoDetail.stats
    const types = photoDetail.types

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.ImgPoke>
                    <Styled.Title>{photoDetail?.name}</Styled.Title>
                    <Styled.Img src={photoDetail.sprites?.other.home.front_default} alt={photoDetail?.name} />
                </Styled.ImgPoke>
                <Styled.Title>
                    TYPE
                    {
                        types && types.map(type => {
                            console.log(type.type.name)
                            return <Styled.Span
                                color={type.type.name} 
                                key={type.type.name} >
                                    {type.type.name}
                            </Styled.Span>
                        })
                    }
                </Styled.Title>
                <Styled.PokemonStats>
                    <p>Experience: {photoDetail?.base_experience}</p>
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

export default CardDetail;