import React, { useEffect, useContext } from 'react'
import module from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import WhiteButton from './UI/buttons/WhiteButton'
import { AuthContext } from '../context'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigator = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigator('/login');
    }

    return (
        <div className={module.Navbar}>
            <WhiteButton onClick={logout}>Log out</WhiteButton>
            <div>
                <Link to={'/'}>About</Link>
                <Link style={{ marginLeft: '5px' }} to={'posts'}>Posts</Link>
            </div>
        </div>
    );
}

export default Navbar;