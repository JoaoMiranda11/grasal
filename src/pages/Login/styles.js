import styled from "styled-components";


export const BtnInputForm = styled.div`
font-family: 'Nunito', sans-serif;
color: white;
padding: 3px;
margin: 5px;
text-align: center;
border-radius: 15px;
border: 2px solid;
border-color: rgb(0, 139, 139);
background-color: rgb(0, 139, 139);
width: 80%;
transition: all 0.2s;
cursor:pointer;

&:hover {
    color:rgb(0, 139, 139);
    background-color: white;
}


`;

export const BodyContent = styled.div.attrs(props => ({
    img : props.imgbg
}))`
background-size: 100% 100%;
background-image: url(${props => props.img});
flex: 1;
height: 100%;
background-color: antiquewhite;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const LoginBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 10px;
width: 200px;
height: 250px;
border-radius: 20px;
box-shadow: 3px 3px 5px gray;
background-color: white;
`;

export const FormLogin = styled.form`
margin-top: 10px;
height: 170px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`;

export const InputText = styled.input.attrs(props => ({
    bdcolorL : (props.alertError? 'red' : 'black'),
    bdcolorP : (props.alertError? 'red' : 'black')
}))`
transition: all .2s ease-in-out;
margin-top: 30px;
border: 0px;
border-bottom: 4px solid;
border-color: ${props => props.bdcolorP};
outline: 0px;

&:not(:placeholder-shown) {
    border-color: rgb(0, 139, 139);
    & + .labelInputLogin {
        color: rgb(0, 139, 139);
        position: relative;
        top:-40px;
    }
    & + .labelInputPassword {
        color: rgb(0, 139, 139);
        position: relative;
        top:-40px;
    }
}

&:focus {
    border-color: rgb(0, 139, 139);
    & + .labelInputLogin {
        color: rgb(0, 139, 139);
        position: relative;
        top:-40px;
    }
    & + .labelInputPassword {
        color: rgb(0, 139, 139);
        position: relative;
        top:-40px;
    }
}

&::placeholder {
    color: transparent;
}
`;

export const LabelInput = styled.label`
font-family: 'Oswald', sans-serif;
font-size: 15px;
&.labelInputLogin {
    position: relative;
    top:-27px;
    background-color: white;
    transition: all .2s ease-in-out;
}
&.labelInputPassword {
    position: relative;
    top:-27px;
    background-color: white;
    transition: all .2s ease-in-out;
}
`;