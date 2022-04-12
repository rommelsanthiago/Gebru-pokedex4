import styled from 'styled-components'

export const Container = styled.button`
    padding: 5px;
    font-weight: bold;
    color: red;
    background: transparent;
    border: 1px solid red;
    border-radius: 10px;
    &&: hover{
        background: red;
        color: white;
    }
`