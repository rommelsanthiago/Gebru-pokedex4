import styled  from 'styled-components'

export const ProgressContent = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.imageLoader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
`