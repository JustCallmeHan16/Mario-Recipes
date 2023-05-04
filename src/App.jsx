import { Container } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Recipes from './pages/Recipes'
import Error from './pages/Error'

const App = () => {
  return (
    <Container maxWidth={{lg : 'container.lg'}}>
      <Routes>
        <Route exact path='/' element={<Recipes/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Container>
  )
}

export default App