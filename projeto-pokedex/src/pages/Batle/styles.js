import styled  from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    height: 65vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3em;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${colors.primary};
`

export const Pokeball = styled.img`
    width: 40px;
    margin-right: 10px;
`