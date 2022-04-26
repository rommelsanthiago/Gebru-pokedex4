import React, { useContext, useState, useMemo} from 'react'

import * as Styled from './styles'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToBalte } from '../../Routes/coodinator'
import Card from '../../components/Card'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Pagination from "../../components/Pagination"
import Pokeball from '../../assets/img/pokeball-icon.png'
import ProgressBar from '../../components/ProgressBar'
import tumblrPokedex from '../../assets/img/tumblr-pokedex.webp'

const Pokedex = () => {
  const navigate = useNavigate()
  const { pokedex, progress } = useContext(GlobalStateContext)
  const [itemsPerPage, setItemsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPokedex = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage
    const lastPageIndex = firstPageIndex + itemsPerPage
    return pokedex.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, pokedex, itemsPerPage])

  const onChangeItemsPerPages = (e) => {
    setItemsPerPage(e.target.value)
  }

  return (
    <Styled.Container>
      <Header>
        <Button onClick={() => goToHome(navigate)}>Home</Button>
        <Styled.Title>
          <Styled.Pokeball src={Pokeball} alt='Pokeball' />
          Pokedex
        </Styled.Title>
        <Button onClick={() => goToBalte(navigate)}>BatleZone</Button>
      </Header>
      <Styled.Options>
        {pokedex.length > 20 ?
          <Styled.Select defaultValue="20" onChange={onChangeItemsPerPages} >
            <Styled.Option value="20">20</Styled.Option>
            <Styled.Option value="50">50</Styled.Option>
            <Styled.Option value="100">100</Styled.Option>
          </Styled.Select>
          : ""}
        <Pagination
          currentPage={currentPage}
          totalCount={pokedex.length}
          itemsPerPage={itemsPerPage}
          onPageChange={page => setCurrentPage(page)}
        />
      </Styled.Options>
      <Styled.Content>
        {pokedex.length >= 1 ? 
        currentPokedex.map((poke) => {
            return <Card key={poke.name} poke={poke} isPokedex />
        }) : 
        (progress < 100 ? 
        <ProgressBar /> : 
        <Styled.Tumblr>
          Add pokemons to your pokedex
          <img src={tumblrPokedex} alt='tumblr pokedex' />
        </Styled.Tumblr>)
        }
      </Styled.Content>
      <Pagination
        currentPage={currentPage}
        totalCount={pokedex.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </Styled.Container>
  )
}

export default Pokedex