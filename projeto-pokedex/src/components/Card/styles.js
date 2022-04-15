import styled from 'styled-components'

export const Container = styled.div`
    width: 12em;
    height: 15em;
    border: 2px solid black;
    margin: 0.5em 0;
`

export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    background-color: grey;
`

export const Title = styled.h2`
    position: absolute;
    color: red;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const FooterCard = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`