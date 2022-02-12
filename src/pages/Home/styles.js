import styled from "styled-components";

export const BodyContent = styled.div`
    width: 100%;
    height: 750px;
    justify-content: left;
    background-color: antiquewhite;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
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