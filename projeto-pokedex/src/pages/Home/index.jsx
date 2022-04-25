import React, { useContext, useState, useMemo } from "react"

import * as Styled from "./styles"
import { useNavigate } from "react-router-dom"
import { goToPokedex, goToBalte } from "../../Routes/coodinator"
import Card from "../../components/Card"
import Header from "../../components/Header"
import { Button } from "../../components/Button"
import GlobalStateContext from '../../Global/GlobalStateContext'
import Pagination from "../../components/Pagination"
import Pokeball from '../../assets/img/pokeball-icon.png'
import ProgressBar from '../../components/ProgressBar'

const Home = () => {
  const navigate = useNavigate()
  const { pokemons, pokedex } = useContext(GlobalStateContext)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPokemons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage
    const lastPageIndex = firstPageIndex + itemsPerPage
    return pokemons.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, pokemons, itemsPerPage])

  const onChangeItemsPerPages = (e) => {
    setItemsPerPage(e.target.value)
  }

  return (
    <Styled.Container>
      <Header>
        <Button onClick={() => goToPokedex(navigate)}>
          {pokedex.length > 0 ? <Styled.Span>{pokedex.length}</Styled.Span> : ""} 
          Pokedex
        </Button>
        <Styled.Title>
          <Styled.Pokeball src={Pokeball} alt='Pokeball' />
          Home
        </Styled.Title>
        <Button onClick={() => goToBalte(navigate)}>BatleZone</Button>
      </Header>
      <Styled.Options>
        <div>
          {pokemons.length > 20 ?
          <Styled.Select defaultValue="20" onChange={onChangeItemsPerPages} >
            <Styled.Option value="20">20</Styled.Option>
            <Styled.Option value="50">50</Styled.Option>
            <Styled.Option value="100">100</Styled.Option>
          </Styled.Select>
          : ""}
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={pokemons.length}
          itemsPerPage={itemsPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </Styled.Options>
      <Styled.Content>
        {pokemons.length >= 100 ? currentPokemons.map((poke) => {
            return <Card key={poke.name} poke={poke} />
          }) :
          <ProgressBar />
        }
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
