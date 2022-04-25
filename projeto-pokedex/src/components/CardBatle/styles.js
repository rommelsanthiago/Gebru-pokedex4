import styled, { keyframes } from "styled-components"
import * as colors from '../../constants/colors'

const rotate = keyframes`
    100% {
       transform: rotate(360deg);
    }
`

export const Container = styled.div`
    width: 15em;
    height: 25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 10px 10px 10px ${colors.senary};
    font-family: Arial;
    margin: 3em;
    position: relative;
    overflow: hidden;
    ::before{
        position: absolute;
        content: '';
        width: 180%;
        height: 180%;
        background-image: conic-gradient(from 180deg, transparent 65%, ${colors.primary} 100%);
        left: -25%;
        top: -25%;
        z-index: 1;
        animation: ${rotate} 2s linear infinite;
    }
    ::after{
        position: absolute;
        content: '';
        width: 180%;
        height: 180%;
        background-image: conic-gradient(from 60deg, transparent 65%, ${colors.primary} 100%);
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
`

export const Content = styled.div`
    width: 97%;
    height: 97%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 1.5%;
    left: 1.5%;
    background: ${colors.tertiary};
    z-index: 3;
`

export const ImgPoke = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
`

export const Title = styled.h2`
    color: ${colors.secondary};
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    text-align: center;
`
export const Img = styled.img`
    width: 100%;
    background-image: red;
`

export const Span = styled.span`
    background-color: ${props => props.background};
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