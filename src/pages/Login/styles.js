import styled from "styled-components";

export const BtnInputForm = styled.label`
`;

export const BodyContent = styled.div`
flex: 1;
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
margin-top: 30px;
height: 170px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
`;

export const InputText = styled.input`
transition: all .2s ease-in-out;
margin-top: 30px;
border: 0px;
border-bottom: 4px solid;
outline: 0px;

.inputLogin {

}


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
font-size: 15px;
&.labelInputLogin {
    position: relative;
    top:-25px;
    background-color: white;
    transition: all .2s ease-in-out;
}
&.labelInputPassword {
    position: relative;
    top:-25px;
    background-color: white;
    transition: all .2s ease-in-out;
}
`;