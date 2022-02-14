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

export const CardTable = styled.div`
    width: 100%;
    height: 50%;
    margin-top: 50px;
    justify-content: left;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 50px;
    padding-right: 50px;

    @media (max-width: 580px) {
        align-items: center;
        justify-content: center;
    }
`;

export const Card = styled.div`
    display: flex;
    text-align: center;
    margin: 10px;
    justify-content: center;
    align-items: center;
    border: 5px solid;
    background-color: white;
    box-shadow: 2px 2px 5px gray;
    border-color: white;
    width: 200px;
    height: 250px;
    border-radius: 20px;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.05); 
        box-shadow: 1px 1px 2px black;
    }
`;