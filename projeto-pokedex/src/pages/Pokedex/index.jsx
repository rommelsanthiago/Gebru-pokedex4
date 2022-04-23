import React, { useContext, useState} from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../Routes/coodinator'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import GlobalStateContext from '../../Global/GlobalStateContext'

function Pokedex() {
  const navigate = useNavigate()
  const { pokedex } = useContext(GlobalStateContext)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(pokedex.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPokedex = pokedex.slice(startIndex, endIndex)

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Pokedex</Styled.Title>
        <Button onClick={() => goToHome(navigate)}>Home</Button>
      </Header>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button value={index} key={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >
              {index + 1}
            </button>
          )
        })}
      </div>
      <Styled.Content>
      {currentPokedex && currentPokedex.map((poke) => {
            return <Card key={poke.name} poke={poke} isPokedex />
      })}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Pokedex