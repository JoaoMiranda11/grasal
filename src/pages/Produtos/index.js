import { useState, React, useEffect, useContext } from "react"
import { BodyContent, Card, PopUpPromo, CardTable } from './styles';
import { useUser } from '../../contexts/user'
import api from './../../services/api'

export default function Home() {
    const { usuarios } = useUser();
    const [loadings, setLoads] = useState({card:true});
    const [cards, setCards] = useState([]);

    useEffect(async ()=> {
        async function loadAPI() {
            const response = await api.get('products');
            let currentLoadings = loadings;
            currentLoadings.card = false;
            setLoads(currentLoadings);
            setCards(response.data);
        }
        loadAPI();
    }, []);

    return(
        <BodyContent>
            {loadings.card && <>Carregando...</>}
            <CardTable>
                {
                    cards.map((e)=> {
                        return (
                            <Card key={e.id}>
                                {e.title}
                            </Card>
                        )
                    })
                }
            </CardTable>
        </BodyContent>
    )
}