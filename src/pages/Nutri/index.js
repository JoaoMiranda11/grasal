import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import Home from '../Home'

export default function Nutri(props) {
    const Navigate = useNavigate();
    const user = props.user;
    const [nutri, setNutri] = useState([]);
    const {id} = useParams();
    const [itemsSaved, setItemS] = useState([]);

    useEffect( async ()=> {
        if ( id == null || id != user.link ) {
            Navigate('/home');
        } else {
            let cards = (JSON.parse(localStorage.getItem('cards')));
            setItemS(JSON.parse(localStorage.getItem('cards')) || []);
            function loadAPI() {
                fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
                .then((result)=>  result.json() )
                .then((json)=>{
                setNutri(json.map((item)=> {
                    item.saved = (cards.map((e)=>  e.id).includes(item.id)?'Salvo':'Salvar');
                    return item
                }));
                });
            }
            loadAPI();
        }
    }, []);

    function showDetails(id) {
        Navigate('/item/'+id);
    }

    function saveCard(item, target) {
        target.target.innerHTML = 'Carregando...';
        setTimeout(()=>{
            let cards = JSON.parse(localStorage.getItem('cards')) || [];
            function changeNutri(text) {
                setNutri(nutri.map((e)=> {
                    if (e.id == item.id) {
                        e.saved = text
                    }
                    return e
                }));
            }
    
            if (!cards.some((e)=> {
                return e.id == item.id
            })) {
                cards.push(item);
                localStorage.setItem('cards', JSON.stringify(cards));
                changeNutri('Salvo')
            } else {
                cards = cards.filter((e)=> e.id != item.id);
                localStorage.setItem('cards', JSON.stringify(cards));
                changeNutri('Salvar')
            }
        }, 1000);
        
    }

    return (
        <div className="container">
            <header>
            <strong>React Nutri - {user.name}</strong>
            </header>
            <div className='main-div'>
            {nutri.map((item)=>{
                return (
                <article key={item.id} className="card">
                    <div className='content'>
                    <h1 className='title'>
                        <strong> {item.titulo} </strong>
                    </h1>
                    <img src={item.capa} alt={item.titulo} className="capa"/>
                    <p className='subtitulo'>
                        {item.subtitulo}
                    </p>
                    </div>
                    <a className='botao' onClick={()=> showDetails(item.id)}>
                        Acessar
                    </a>
                    <a className='botao' onClick={(target)=> saveCard(item, target)}>
                        {item.saved}
                    </a> 
                </article>
                )
            })}
            </div>
        </div>
    );
}

