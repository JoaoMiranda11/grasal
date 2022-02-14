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

export const CardTable = styled.div.attrs(props=>({
    loaded : (!props.loaded?100:0)
}))`
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
    opacity: ${props=>props.loaded};
    transition: all 1.5s ease;
    
    @media (max-width: 600px) {
        align-items: center;
        justify-content: center;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border: 5px solid;
    background-color: white;
    box-shadow: 2px 2px 5px gray;
    border-color: white;
    width: 195px;
    height: 250px;
    border-radius: 20px;
    transition: all .2s ease-in-out;

    & .title {
        border-color: rgb(24, 34, 78);
        padding: 10px;
        border-bottom: 2px solid;
        width: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        & .name {
            font-family: 'Oswald', sans-serif;
            font-size: 20px;
            font-weight: bold;
        }
        & .price {
            margin-bottom: -10px;
            font-family: 'Nunito', sans-serif;
            font-size: 15px;
        }
    }

    & .options {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        & .addCart {
            margin:5px;
            border: 2px solid;
            border-color: rgb(24, 34, 78);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            padding: 5px;
            color:white;
            background-color: rgb(24, 34, 78);
            cursor:pointer;
        }
        & .description {
            margin:5px;
            border: 2px solid;
            border-color: rgb(24, 34, 78);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            padding: 5px;
            color:white;
            background-color: rgb(24, 34, 78);
            cursor:pointer;
        }
        & :hover {
            transition: .15s all;
            color:rgb(24, 34, 78);
            background-color: white;
        }
    }

    & .image {
        height: 100px;
        width: 100px;
    }

    &:hover {
        transform: scale(1.05); 
        box-shadow: 1px 1px 2px black;
    }
`;