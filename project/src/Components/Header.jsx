import React from 'react';
import logo from './images/no_logo.png';

const Header = () => {
    return (
        <header>
            <div className="logo"><img src={logo} alt="logo..."/></div>
            <nav className="header_nav">
                <a href="/" className="header_nav_button">Home</a>
                <a href="/" className="header_nav_button">Catalog</a>
                <a href="/" className="header_nav_button">Cart</a>
            </nav>
            <div className = "el">

            </div>
        </header>
    );
};

export default Header;