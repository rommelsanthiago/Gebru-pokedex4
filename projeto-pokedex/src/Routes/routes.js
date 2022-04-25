import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../pages/Details'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import Batle from '../pages/Batle'

export const Router = () => (
    <Routes>
        <Route index element={ <Home /> } />
        <Route path='pokedex' element={ <Pokedex /> } />
        <Route path='details/:id' element={ <Details /> } />
        <Route path='batlezone' element={ <Batle /> } />
    </Routes> 
)
