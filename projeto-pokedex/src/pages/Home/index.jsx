import React, { useContext, useState, useMemo } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToPokedex } from "../../Routes/coodinator"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { Button } from "../../components/Button"
import GlobalStateContext from '../../Global/GlobalStateContext'
import Pagination from "../../components/Pagination"

const Home = () => {
  const navigate = useNavigate()
  const { pokemons } = useContext(GlobalStateContext)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  const currentPokemons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage
    const lastPageIndex = firstPageIndex + itemsPerPage
    return pokemons.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, pokemons, itemsPerPage])

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Home</Styled.Title>
        <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
      </Header>
      <Pagination
        currentPage={currentPage}
        totalCount={pokemons.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setCurrentPage(page)}
      />
      <Styled.Content>
        {currentPokemons.map((poke) => {
            return <Card key={poke.name} poke={poke} />
          })}
      </Styled.Content>
      <Pagination
        currentPage={currentPage}
        totalCount={pokemons.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </Styled.Container>
  )
}

export default Home
