import { Outlet, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';

import { useUser } from '../../contexts/user';
import { useSelector } from "react-redux";

import { Head, 
    Options, 
    UserInfo, 
    LogoIMG, 
    PageBody, 
    SideBarIcon,
    LogoContainer,
    UserArea,
    Footer,
    Menu } from './styles';
import logoGrafica from './../../imgs/logo_grasal.png'
import {
    FaAlignJustify,
    FaRegUser,
    FaShoppingCart,
    FaWhmcs
} from 'react-icons/fa';

export default function Header(props) {
    const navigate = useNavigate();
    const cartBox = useSelector(state => state.storeCart);
    const [countItemsCart, setCountCart] = useState(0)
    const [ menuBar, setMenuBar ] = useState(0);
    const { usuarios } = useUser();

    useEffect(()=> {
        let count = 0;
        cartBox.forEach(element => {
            count += element.ammount;
        });
        setCountCart(count);
    }, [cartBox]); 

    function showMenu() {
        setMenuBar(menuBar?0:1);
    }

    return (
        <PageBody>
            <nav>
                <Head>
                    <SideBarIcon onClick={showMenu}>
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
                    <UserArea>
                        <div className="count">
                            {countItemsCart}
                        </div>
                        <div className="iconDiv" onClick={()=>{navigate('/cart')}}>
                            <FaShoppingCart />
                        </div>
                        <UserInfo>
                            <div className="IconOption">
                                <FaRegUser className="FAIconUser" onClick={()=>{navigate('/login')}}/>
                            </div>
                            <div className="UserName">
                                {usuarios.nome && `Olá, ${usuarios.nome}!`}
                            </div>
                        </UserInfo>
                        <div className="iconDiv">
                            <FaWhmcs/>
                        </div>
                    </UserArea>
                </Head>
            </nav>
            <Menu show={menuBar}>
                <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "selected_navbar" : "normal_navbar"} to="/produtos">
                    Shop
                </NavLink>
            </Menu>
            <Outlet/>
            <Footer>

            </Footer>
        </PageBody>
    );
}
