import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import { Container } from './styles';
import {  BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom' 

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route path='' element={<Home/>}/>
            <Route path='carrinho/' element={<>carrinho</>}/>
            <Route path='carrinho/:id' element={<Carrinho/>}/>
            <Route path='carrinho/*' element={<>OPA! OBJETO NÃO ENCOTNRADO!</>}/>
          </Route>
          <Route path='/login' element={<>Login</>}/>
          <Route path='*' element = {<>Ops! Página inválida!</>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
