import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user';
import { BodyContent, LoginBox, FormLogin, LabelInput, InputText, BtnInputForm } from './styles';

export default function Login() {
    const navigate = useNavigate()
    const {usuarios} = useUser()
    useEffect(()=> {
        if (usuarios.token) navigate('/')
    }, []); 
    return (
        <BodyContent>
            <LoginBox>
                <FormLogin>
                    <InputText className='inputLogin' placeholder='.' type="text" id="login" name="login"/>
                    <LabelInput className='labelInputLogin'  htmlFor="login"><strong>Login</strong></LabelInput>
                    <InputText className='inputPassword' placeholder='.' type="text" id="password" name="password"/>
                    <LabelInput className='labelInputPassword' htmlFor="password"><strong>Password</strong></LabelInput>
                    <input hidden type="submit" id="submit" value="Submit" onClick={()=>{alert('ok')}}/>
                </FormLogin >
                <BtnInputForm htmlFor="submit">Entrar</BtnInputForm>
                <BtnInputForm htmlFor="submit">Voltar</BtnInputForm>
            </LoginBox>
        </BodyContent>
    );
}