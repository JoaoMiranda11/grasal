import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user';
import { BodyContent, LoginBox, FormLogin, LabelInput, InputText, BtnInputForm } from './styles';
import background from "../../imgs/bg.jpg";
import { toast } from 'react-toast';

export default function Login() {
    const navigate = useNavigate();
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');
    const [DataUser, setDataUser] = useState({login:'', pass:''});
    const {usuarios, setUsuarios} = useUser();

    useEffect(()=> {
        setDataUser({login: Login, senha: Password});
    }, [Login, Password]);

    function authLogin() {
        if (Login === 'jsm2.pe@gmail.com' && Password === '123'){
            let user = usuarios;
            user.nome = 'João Miranda'
            user.token = '110399';
            setUsuarios(user);
            return true
        }
        return false
    }

    function login() {
        if(Login == '') {toast.info('Ops! Invalid Login!', ); return;}
        if(Password == '') {toast.info('Ops! Invalid Password!'); return;}
        if (authLogin()) {
            navigate('/');
        } else {
            toast.error('Ops! Invalid login or password!');
        }
    }

    useEffect(()=> {
        if (usuarios.token) navigate('/')
    }, []); 
    return (
        <BodyContent imgbg={background}>
            <LoginBox>
                <FormLogin onSubmit={(e)=>{console.log(e)}}>
                    <InputText 
                        onChange={(e)=>{setLogin(e.target.value)}} value={Login}
                        className='inputLogin' placeholder='.' type="text" id="login" name="login"/>
                    <LabelInput  className='labelInputLogin'  htmlFor="login">
                        <strong>User</strong>
                    </LabelInput>
                    <InputText
                        onChange={(e)=>{setPassword(e.target.value)}} value={Password}
                        className='inputPassword' placeholder='.' type="password" id="password" name="password"/>
                    <LabelInput  className='labelInputPassword' htmlFor="password">
                        <strong>Password</strong>
                    </LabelInput>
                </FormLogin >
                <BtnInputForm onClick={login}>Login</BtnInputForm>
                <BtnInputForm onClick={()=>{navigate('/')}}>Back</BtnInputForm>
            </LoginBox>
        </BodyContent>
    );
}