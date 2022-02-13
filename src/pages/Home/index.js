import { useState, React, useEffect, useContext } from "react"
import { BodyContent, Card, PopUpPromo, CardTable } from './styles';
import { useUser } from '../../contexts/user'

export default function Home() {
    const { usuarios } = useUser();
    const [cards, setCards] = useState([]);
    const [Load, setLoad] = useState(true);

    useEffect(async ()=> {
        setCards(['Teste', 'Teste 2']);  
        setLoad(false);
        // setInterval(()=>{
        // }, 3000);
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
            <PopUpPromo>
                TESTE
            </PopUpPromo>
            <CardTable>
                {
                    cards.map((e)=> {
                        return (
                            <Card key={e}>
                                {e}
                            </Card>
                        )
                    })
                }
            </CardTable>
            <div>
                TESTE
            </div>
        </BodyContent>
    )
}