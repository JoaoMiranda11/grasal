import { useState, React, useEffect } from "react"
import { BodyContent, Card } from './styles';

export default function Home() {
    const [cards, setCards] = useState([]);
    const [Load, setLoad] = useState(true);

    useEffect(async ()=> {
            setCards(['Teste', 'Teste2']);
            setInterval(()=>{
                setLoad(false);
            }, 3000);
    }, []);


    if (Load) {
        return (
            <BodyContent>
                Carregando...
            </BodyContent>
        )
    }

    return(
        <BodyContent>
            {
                cards.map((e)=> {
                    return (
                        <Card key={e}>
                            {e}
                        </Card>
                    )
                })
            }
        </BodyContent>
    )
}