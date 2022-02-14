import styled from "styled-components";


export const ButtonsBuy = styled.div`
display: flex;
flex-direction:row;
justify-content: center;
align-items: center;
width: 100%;
margin:10px;
transition: all 1s;
`;

export const PhaseDiv = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: 100%;
transition: all 1s;
`;

export const TableItems = styled.div`
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    width: 80%;
    & .table {
        background-color: rgb(218, 221, 231 );
        width: 100%;
        & .tbody .tr {
            height: 120px;
            display: flex;
            padding-left: 20px;
            padding-right: 20px;
            justify-content: space-between;
            align-items: center;
            & .td {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                & .title {
                    width: 100%;
                    display: flex;
                    padding: 20px;
                    justify-content: center;
                    align-items: center;
                }
                & .arrowIcon {
                    margin:10px;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
            & .image {
                height: 80px;
                width: 80px;
                transition: all 0.2s;
                &:hover {
                    height: 100px;
                    width: 100px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        overflow-x: scroll;
    }
`
// ${props => props.show}
export const CustomBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: 'Oswald', sans-serif;
background-color: rgb(24, 34, 78);
color: white;
width: 100px;
border: 2px solid;
border-color: rgb(24, 34, 78);
border-radius: 5px;
transition: all 0.2s;
margin: 10px;
cursor:pointer;

&:hover {
    background-color: rgb(195, 200, 245);
    color: rgb(24, 34, 78);
    font-weight: bold;
}
`;

export const BodyContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    & .total {
        width:80%;
        display: flex;
        justify-content: flex-end;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 25px;
        & .text {
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 4px solid;
            border-color: rgb(218, 221, 231);
        }
    }
`;

export const Phases = styled.div.attrs(props=>({
    selected1: (props.selected == 1 ? 'rgb(252, 211, 215)':'white'),
    selected2: (props.selected == 2 ? 'rgb(252, 211, 215)':'white'),
    selected3: (props.selected == 3 ? 'rgb(252, 211, 215)':'white'),
    selected4: (props.selected == 4 ? 'rgb(252, 211, 215)':'white')
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 40px;
    
    & .line {
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 6px solid;
        border-color: gray;
        width: 100%;
        & .phase {
            font-family: 'Nunito', sans-serif;
            font-weight: bold;
            font-size: 25px;
            color: gray;
            margin-bottom: -35px;
            background-color: white;
            & .p1 {
                transition: all 1s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 6px solid;
                border-color: gray;
                border-radius: 50px;
                width: 50px;
                height: 50px;
                background-color: ${props=>props.selected1};
            }
            & .p2 {
                transition: all 1s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 6px solid;
                border-color: gray;
                border-radius: 50px;
                width: 50px;
                height: 50px;
                background-color: ${props=>props.selected2};
            }
            & .p3 {
                transition: all 1s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 6px solid;
                border-color: gray;
                border-radius: 50px;
                width: 50px;
                height: 50px;
                background-color: ${props=>props.selected3};
            }
            & .p4 {
                transition: all 1s;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 6px solid;
                border-color: gray;
                border-radius: 50px;
                width: 50px;
                height: 50px;
                background-color: ${props=>props.selected4};
            }
        }
    }
`;

