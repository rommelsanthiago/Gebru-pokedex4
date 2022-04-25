import styled, { keyframes } from "styled-components"
import * as colors from '../../constants/colors'

const rotate = keyframes`
    100% {
       transform: rotate(360deg);
    }
`

export const Container = styled.div`
    width: 50%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 10px 10px 10px ${colors.senary};
    font-family: Arial;
    padding: 3em;
    position: relative;
    overflow: hidden;
    ::before{
        position: absolute;
        content: '';
        width: 150%;
        height: 150%;
        background-image: conic-gradient(from 270deg, transparent 65%, ${colors.primary} 100%);
        left: -25%;
        top: -25%;
        z-index: 1;
        animation: ${rotate} 2s linear infinite;
    }
    ::after{
        position: absolute;
        content: '';
        width: 150%;
        height: 150%;
        background-image: conic-gradient(from 90deg, transparent 65%, ${colors.primary} 100%);
        left: -25%;
        top: -25%;
        z-index: 2;
        animation: ${rotate} 2s linear infinite;
    }
        h1{
            text-align: center;
            font-size: 19px;
            font-weight: lighter;
            padding: 10px;
            color: white;
        }
        p {
            color: ${colors.secondary};
        }
    @media (max-width: 860px) {
        height: 120%;
        padding: 0 3em;
    }
`

export const Content = styled.div`
    position: absolute;
    width: 99%;
    height: 99%;
    top: 0.5%;
    left: 0.5%;
    background: ${colors.tertiary};
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 860px) {
        flex-direction: column;
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
    color: ${colors.secondary};
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    text-align: center;
`
export const Img = styled.img`
    width: 250px;
    height: 250px;
`

const handleColorType = color => {
    switch (color) {
        case 'grass':
            return '#5fba58';
        case 'fire':
            return '#ffa54f';
        case 'water':
            return '#61aede';
        case 'bug':
            return '#93c22d';
        case 'dark':
            return '#5a5366';
        case 'dragon':
            return '#067abe';
        case 'eletric':
            return '#f7db5f';
        case 'fairy':
            return '#f1a3e3';
        case 'fighting':
            return '#db4358';
        case 'flying':
            return '#9fb9e9';
        case 'ghost':
            return '#666ec1';
        case 'ground':
            return '#d6763a';
        case 'ice':
            return '#78d0c4';
        case 'poison':
            return '#a965c9';
        case 'psychic':
            return '#fa7e7e';
        case 'rock':
            return '#c8b98c';
        case 'steel':
            return '#5491a0'
        default:
            return '#939ba1';
    }
}

export const Span = styled.span`
    background-color: ${({ color }) => handleColorType(color)};
    padding: 3px;
    width: 40px ;
    display: block;
    text-align: center;
    font-size: 0.5em;
    position: relative;
    margin-top: 10px;
    border-radius: 5px;
    color: ${colors.secondary};
`

export const PokemonStats = styled.div`
    padding: 10px 30px;
        p{
            letter-spacing: 1px;
        }
`