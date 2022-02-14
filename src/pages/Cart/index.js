import { useState, React, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toast";
import { 
    BodyContent,
    Phases,
    TableItems,
    CustomBtn,
    PhaseDiv,
    ButtonsBuy
 } from './styles';
import { useUser } from '../../contexts/user';
import { useSelector, useDispatch } from "react-redux";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import itemIMG from '../../services/server_files/item_img.jpeg'

export default function Produto() {
    const success = (msg) => toast.success(msg);
    const infoAlert = (msg) => toast.info(msg);
    const dispatch = useDispatch();
    const { wealth } = useUser();
    const [phasesBuy, setPhase] = useState(1);
    const [itemsCart, setItems] = useState([]);
    const [buySettings, setBuyS] = useState({total:0});
    const cartBox = useSelector(state => state.storeCart);

    useEffect(()=>{
        var cb = cartBox;
        var bs = buySettings;
        setItems(cb);
        let total = 0;
        cb.forEach(e => {
            total += (e.ammount * e.priceBRL)
        });
        bs.total = total;
        setBuyS(bs);
    }, [cartBox]);


    function handleAddCart(item) {
        success('Added to cart!');
        dispatch({
            type: 'ADD_SHOPCART',
            item: item
        });
    }

    async function nextPhase() {
        var pb= phasesBuy;
        var ic= itemsCart;
        if (ic.length > 0) {
            if (pb == 4) {
                await handleClearCart();
            }
            setPhase(pb>3?1:pb+1);
        } else {
            infoAlert("You haven't items!")
        }
    }

    function handleRemoveCart(item) {
        success('Removed from cart!');
        dispatch({
            type: 'REMOVE_SHOPCART',
            item: item
        });
    }

    function handleClearCart() {
        success('Bought!');
        dispatch({
            type: 'CLEAR_SHOPCART'
        });
    }

    return (
        <BodyContent>
            <Phases  selected={phasesBuy}>
                <div className="line">
                    <div className="phase">
                        <a className="p1">
                            1
                        </a>
                    </div>
                    <div className="phase">
                        <a className="p2">
                            2
                        </a>
                    </div>
                    <div className="phase">
                        <a className="p3">
                            3
                        </a>
                    </div>
                    <div className="phase">
                        <a className="p4">
                            4
                        </a>
                    </div>
                </div>
            </Phases>
            <PhaseDiv>
                {
                    phasesBuy == 1 &&
                    <TableItems>
                        {
                            <table className="table">
                                <tbody  className="tbody">
                                    {itemsCart.map((item)=>
                                        <tr key={item.id} className="tr">
                                            <td className="td">
                                                    <img src={itemIMG} className="image"/>
                                                <a className="title">
                                                    {item.title}
                                                </a>
                                            </td>
                                            <td  className="td">
                                                <div className="arrowIcon" onClick={()=>{handleRemoveCart(item)}}>
                                                    <FaLessThan/>
                                                </div>
                                                {item.ammount}
                                                <div  className="arrowIcon" onClick={()=>{handleAddCart(item)}}>
                                                    <FaGreaterThan/>
                                                </div>
                                            </td>
                                            <td  className="td">
                                                {item.priceBRL} {wealth}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            
                        }
                    </TableItems>
                }
            </PhaseDiv>
            <div className="total">
                <div className="text">
                    Total: {buySettings.total}
                </div>
            </div>
            <ButtonsBuy>
                <CustomBtn onClick={nextPhase}>
                    {phasesBuy == 4 ? 'Finish' : 'Next'}
                </CustomBtn>
                {phasesBuy > 1 && 
                    <CustomBtn onClick={nextPhase}>
                        Back
                    </CustomBtn>
                }
            </ButtonsBuy>
        </BodyContent>
    );
}