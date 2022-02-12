import { useParams } from "react-router-dom";
import { React, useEffect, useState } from 'react'

export default function Carrinho() {
    const [TextIni , setText] = useState('Carregando...');
    const { id } = useParams();

    useEffect(()=> {
        setInterval(
            () => {
                setText(id);
            }
        , 2000);
    }, [id]);

    return(
        <>
            {TextIni}
        </>
    )
}