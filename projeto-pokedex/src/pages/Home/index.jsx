import React from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../Routes/coodinator'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Button } from '../../components/Button'

const Home = () => {
    const navigate = useNavigate()

    return (
        <Styled.Container>
            <Header>
                <Styled.Title>Home</Styled.Title>
                <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
            </Header>
            <Styled.Content>
                <Card />
            </Styled.Content>
        </Styled.Container>
    )
}

export default Home