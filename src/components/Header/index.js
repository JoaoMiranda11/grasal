import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Head, Options, UserInfo, Select } from './styles';
import './style.css';
import React from 'react';

export default function Header(props) {
    const navigate = useNavigate();

    function goToRoute(id) {
        switch (id) {
            case '1':
                navigate('/');
            break;
            case '2':
                navigate('/carrinho');
            break;
            default:
                alert('Opa! Houve algum erro!')
            break;
        }
    }

    return (
        <nav>
            <Head>
                <Options>
                    <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/carrinho">
                        Carrinho
                    </NavLink>
                </Options>
                <Select onChange={(t)=>{goToRoute(t.target.value)}}>
                    <option disabled defaultValue value="0">Procurar</option>
                    <option value="1" >Home</option>
                    <option value="2" >Carrinho</option>
                    <option>Outro</option>
                </Select>
                <UserInfo>
                    USUARIO
                </UserInfo>
            </Head>
            <Outlet/>
        </nav>
    );
}
