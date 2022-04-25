import styled from 'styled-components'
import * as Colors from '../../constants/colors'

export const Container = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 1em;
`

export const Item = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    &:hover {
        background-color: ${Colors.septenary};
        cursor: pointer;
    }
`

export const ItemSelected = styled(Item)`
    background-color: ${Colors.primary};
`

export const Dots = styled.li`
    :hover {
        background-color: transparent;
        cursor: default;
    }
`

export const Arrow = styled.div`
    ::before {
        position: relative;
        content: '';
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }
`

export const ArrowLeft = styled(Arrow)`
    transform: rotate(-135deg);
`

export const ArrowRight = styled(Arrow)`
    transform: rotate(45deg);
`

export const DisabledLeft = styled(Arrow)`
    pointer-events: none;
    transform: rotate(-135deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`

export const DisabledRight = styled(Arrow)`
    pointer-events: none;
    transform: rotate(45deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`