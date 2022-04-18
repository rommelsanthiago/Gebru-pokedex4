import styled, { keyframes } from "styled-components"


const rotate = keyframes`
    to {
        --angle: 360deg;
    }
    from {
        --angle: 0deg;
    }
`

export const Container = styled.div`
    --angle: 0deg;
    width: 400px;
    display: flex;
    justify-content: center;
    margin: 2%;
    border-radius: 10px;
    background-image: linear-gradient(var(--angle), red, blue);
    animation: 10s ${rotate} linear infinite;
    padding: 10px;
`

export const PokemonCardContainer = styled.div`
    background-color: #012E40;
    border-radius: 10px;
    font-family: Arial;
        h1{
            text-align: center;
            font-size: 19px;
            font-weight: lighter;
            padding: 10px;
            color: white;
        }
        p {
            color: white;
        }
`

export const ImgPoke = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Title = styled.h2`
    position: absolute;
    margin-bottom: 200px;
    color: whitesmoke;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`
export const Img = styled.img`
    width: 250px;
    height: 250px;
`

export const Span = styled.span`
    background-color: ${props => props.background};
    padding: 7px;
    width: 100px ;
    display: block;
    text-align: center;
    position: relative;
    margin-top: -30px;
    border-radius: 5px;
    color: white;
`

export const PokemonStats = styled.div`
    padding: 10px 30px;
        p{
            letter-spacing: 1px;
        }
`