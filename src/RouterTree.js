
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Cart from './pages/Cart'
import {  Routes, Route } from 'react-router-dom' 



export default function RouterTree() {
    return (
        <Routes>
            <Route path='/' element={<Header/>}>
                <Route path='' element={<Home/>}/>
                <Route path='produtos/' element={<Produtos/>}/>
                <Route path='produtos/:id' element={<Produto/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='produtos/*' element={<>OPA! OBJETO NÃO ENCOTNRADO!</>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element = {<>Ops! Página inválida!</>}/>
        </Routes>
    );
}