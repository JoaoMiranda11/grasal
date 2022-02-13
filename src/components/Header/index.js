import { Outlet, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Head, Options, UserInfo, Select } from './styles';
import './style.css';
import { useUser } from '../../contexts/user';

export default function Header(props) {
    const navigate = useNavigate();
    const { usuarios } = useUser();

    useEffect(()=> {
        if(!usuarios.token) {
            navigate('/login');
        }
    }, []);

    function goToRoute(id) {
        switch (id) {
            case '1':
                navigate('/');
            break;
            case '2':
                navigate('/produtos');
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
                    <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/produtos">
                        Produtos
                    </NavLink>
                </Options>
                <Select onChange={(t)=>{goToRoute(t.target.value)}}>
                    <option disabled defaultValue value="0">Procurar</option>
                    <option value="1" >Home</option>
                    <option value="2" >Produtos</option>
                    <option>Outro</option>
                </Select>
                <UserInfo>
                    {usuarios.nome}
                </UserInfo>
            </Head>
            <Outlet/>
        </nav>
    );
}
