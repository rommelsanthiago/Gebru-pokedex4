import React, { useState, useEffect } from "react"
import * as Styled from "./styled"

const CardDetail = (props) => {
    const [color, setColor] = useState('#00597c')
    const { photoDetail } = props
    const stats = photoDetail.stats

    useEffect(() => {
        types()
    })

    let type = photoDetail.types?.[0].type.name && photoDetail.types?.[0].type.name
    const types = () => {
        switch (type) {
            case 'grass':
                setColor('green');
            break;
            case 'fire':
                setColor('#ff4100');
            break;
            case 'water':
                setColor('#00b7ff');
            break;
            case 'bug':
                setColor('#70530c')
            break;
            default:
                setColor('#00597c');
        }
    }

    console.log(type)

    return (
        <Styled.Container>
            <Styled.PokemonCardContainer>
                <Styled.ImgPoke>
                    <Styled.Title>{photoDetail?.name}</Styled.Title>
                    <Styled.Img src={photoDetail.sprites?.other.home.front_default} alt={photoDetail?.name} />
                </Styled.ImgPoke>
                <div>
                    <Styled.Span background={color}> {photoDetail.types?.[0].type.name}</Styled.Span>
                </div>
                <Styled.PokemonStats>
                    <p>Experience: {photoDetail?.base_experience}</p>
                    {stats && stats.map((item) => {
                        return <p key={item.stat.name}>
                            {item.stat.name}: {item.base_stat}
                        </p>
                    })}
                </Styled.PokemonStats>
            </Styled.PokemonCardContainer>
        </Styled.Container>
    )
}

export default CardDetail;