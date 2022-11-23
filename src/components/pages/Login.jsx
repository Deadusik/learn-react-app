import React, { useContext } from 'react'
import { AuthContext } from '../../context';
import WhiteButton from '../UI/buttons/WhiteButton';
import PostTextInput from '../UI/inputs/PostTextInput';
import module from './Login.module.css'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const signIn = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts');
    }

    return (
        <div className={module.loginContent}>
            <h1>Sign in page</h1>
            <form
                className={module.loginBody__form}
                onSubmit={signIn}>
                <PostTextInput type='text' placeholder='Enter login' />
                <PostTextInput type='password' placeholder='Enter password' />
                <WhiteButton>Log in</WhiteButton>
            </form>
        </div>
    );
}

export default Login;