import { Outlet, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from 'react';
import { Head, 
    Options, 
    UserInfo, 
    LogoIMG, 
    PageBody, 
    SideBarIcon,
    LogoContainer } from './styles';
import { useUser } from '../../contexts/user';
import logoGrafica from './../../imgs/logo_grasal.png'
import {
    FaAlignJustify,
    FaRegUser
} from 'react-icons/fa';

export default function Header(props) {
    const navigate = useNavigate();
    const { usuarios } = useUser();

    useEffect(()=> {
        
    }, []); 

    return (
        <PageBody>
            <nav>
                <Head>
                    <SideBarIcon>
                        <FaAlignJustify/>
                    </SideBarIcon>
                    <Options className="options">
                        <LogoContainer>
                            <LogoIMG src={logoGrafica}/>
                        </LogoContainer>
                        <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/">
                            Home
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/produtos">
                            Shop
                        </NavLink>
                    </Options>
                    <div>
                        <UserInfo>
                            <div className="IconOption">
                                <FaRegUser onClick={()=>{navigate('/login')}}/>
                            </div>
                            <div className="UserName">
                                {usuarios.nome && `Olá, ${usuarios.nome}!`}
                            </div>
                        </UserInfo>
                    </div>
                </Head>
            </nav>
            <Outlet/>
        </PageBody>
    );
}
