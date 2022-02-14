import styled from "styled-components";

//rgb(252, 211, 215) rosa
//rgb(24, 34, 78) azul

export const BodyContent = styled.div`
    min-height: 750px;
    width: 100%;
    height: 100%;
    justify-content: left;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
`;

export const PopUpPromo = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
`;

export const MsgPopUp = styled.div`
background-color: rgb(218, 221, 231);
width: 50%;
height: 100%;
font-size: 20px;
font-family: 'Oswald', sans-serif;

& .text {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const TimerPopUp = styled.div`
background-color: rgb(218, 221, 231);
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Oswald', sans-serif;
transition: all .2s ease-in-out;

@media (max-width: 580px) {
    align-items: center;
    justify-content: center;
}

& .timer {
    font-size: 50px;
    transition: all .2s ease-in-out;
    @media (max-width: 580px) {
        font-size: 30px;
    }
}
& .text {
    margin-bottom:-20px;
    transition: all .2s ease-in-out;
    @media (max-width: 580px) {
        margin-bottom:-10px;
        font-size: 12px;
    }
}


`;