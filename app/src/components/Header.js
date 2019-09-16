import React from 'react';
import Nav from '../components/Nav';
import Logo from '../images/logo.png';

function Header(){
    return (
        <header className="header">
            <a href="./index.html">
                <img src={Logo} alt="Logo" />
            </a>
            <Nav />

        </header>
    )
}

export default Header;