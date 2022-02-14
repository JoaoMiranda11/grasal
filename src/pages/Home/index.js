import { useState, React, useEffect } from "react"
import { 
    BodyContent,
    PopUpPromo,
    TimerPopUp,
    MsgPopUp
} from './styles';
import { useUser } from '../../contexts/user'

export default function Home() {
    const { usuarios } = useUser();
    const [TimerShop, SetTimerShop] = useState({time:'',text:''});

    useEffect(async ()=> {
        setInterval(()=>{
            var distance = new Date("Feb 16, 2022 00:00:00").getTime() - new Date().getTime()
            if (distance > 0) {
                var hours = Math.floor(((distance / (1000 * 60 * 60 * 24))*24)+(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                distance = {
                    text:'Promoção acaba em',
                    time:`${hours<10?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}`
                }
            } else {
                distance = {time:'', text:'Confira as promoções!'};
            }
            SetTimerShop( distance );
        }, 1000);
    }, []);

    return(
        <BodyContent>
            <PopUpPromo>
                <MsgPopUp>
                    <div className="text">
                        Venha conhecer nossas promoções!
                    </div>
                </MsgPopUp>
                <TimerPopUp>
                    <div className="text">
                        {TimerShop.text}
                    </div>
                    <div className="timer">
                        {TimerShop.time}
                    </div>
                </TimerPopUp>
            </PopUpPromo>
        </BodyContent>
    )
}