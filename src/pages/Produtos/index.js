import { useState, React, useEffect, useContext } from "react"
import { BodyContent, Card, PopUpPromo, CardTable } from './styles';

import itemIMG from '../../services/server_files/item_img.jpeg'
import { 
    FaCartPlus,
    FaSearch
} from 'react-icons/fa';
import { toast } from "react-toast";

import { useUser } from '../../contexts/user'

import api from './../../services/api'
import { useDispatch } from "react-redux";

export default function Home() {
    const success = (msg) => toast.success(msg)
    const dispatch = useDispatch();
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


    function handleAddCart(item) {
        success('Added to cart!');
        dispatch({
            type: 'ADD_SHOPCART',
            item: item
        });
    }

    return(
        <BodyContent>
            {loadings.card && <>Carregando...</>}
            <CardTable loaded={loadings.card}>
                {
                    cards.length === 0 ? <>Nenhum item encontrado!</>:
                    cards.map((e)=> {
                        return (
                            <Card key={e.id}>
                                <div className="title">
                                    <div className="name">
                                        {e.title}
                                    </div>
                                    <div className="price">
                                        {e.priceBRL}
                                    </div>
                                </div>
                                <img src={itemIMG} className="image"/>
                                <div className="options">
                                    <div className="description">
                                        <FaSearch/>
                                    </div>
                                    <div className="addCart" onClick={()=>{handleAddCart(e)}}>
                                        <FaCartPlus/>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
            </CardTable>
        </BodyContent>
    )
}