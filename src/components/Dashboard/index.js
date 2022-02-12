import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './style.css';

export default function Pages(props) {
    const user = props.user;
    const pages = props.pages;
    const Navigate = useNavigate();
    
    useEffect(()=> {
        Navigate('/home');
    }, []);

    return (
    <div>
        <nav className='dashboard'>
            <Link className='option' to="/home">Home</Link>
            <Link className='option' to={"/nutri/"+user.link}>Nutrição</Link>
        </nav>
        <Outlet/>
    </div>
    );
}