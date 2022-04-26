import styled  from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3em;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${colors.primary};
`

export const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PaginationBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Pokeball = styled.img`
    width: 40px;
    margin-right: 10px;
`

export const Select = styled.select`
    width: 60px;
    border: 1px solid ${colors.primary};
    border-radius: 5px;
    color: ${colors.primary};
    font-wight: bold;
    font-size: 1em;
`

export const Option = styled.option`
    color: ${colors.primary};
`

export const Span = styled.span`
    width: 15px;
    height: 15px;
    background: ${colors.primary};
    color: ${colors.secondary};
    border: 1px solid transparent;
    border-radius: 50%;
    padding: 3px;
    margin-right: 5px;
`