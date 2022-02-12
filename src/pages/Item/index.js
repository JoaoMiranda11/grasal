import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Item(props) {
    const { id } = useParams();
    const [nutri, setNutri] = useState([]);
    useEffect(()=> {
        function loadAPI() {
            fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
            .then((result)=>  result.json() )
            .then((json)=>{
                setNutri(json.filter((e)=>{
                    return id == e.id;
                }));
            });
        }
        loadAPI();
    }, []);

    return(
        <div>
            Tópico
            <hr/>
            {nutri.map((item)=> { 
                return (<div>
                    {item.titulo}
                    <img src={item.capa} alt={item.titulo} className="capa"/>
                </div>)
            })}
        </div>
    );
}