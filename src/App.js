import { React, useContext, useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import { Container } from './styles';
import {  BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom' 
import UserProvider from './contexts/user';

function App() {
  return (
    <UserProvider>
      <Container>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}>
                <Route path='' element={<Home/>}/>
                <Route path='produtos/' element={<>Produtos</>}/>
                <Route path='produtos/:id' element={<Produtos/>}/>
                <Route path='produtos/*' element={<>OPA! OBJETO NÃO ENCOTNRADO!</>}/>
              </Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='*' element = {<>Ops! Página inválida!</>}/>
            </Routes>
          </BrowserRouter>
        </Container>
    </UserProvider>
  );
}

export default App;
