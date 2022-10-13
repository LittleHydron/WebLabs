import React from 'react';
import logo from './images/no_logo.png';
import srch from './images/searchImage.png';
import {Link} from "react-router-dom"

const Header = () => {
    return (
    <header className="wrap">
        <div className="logo"><img src={logo} alt="logo..."/></div>
        <nav className="header_nav">
            <Link to="/" className="header_nav_button">Home</Link>
            <Link to="/catalog" className="header_nav_button">Catalog</Link>
            <Link to="/cart" className="header_nav_button">Cart</Link>
        </nav>
        <div className = "el">
            <div className="searchField" id = "searchField">
                <div id="searchImage"><img src={srch} alt="search..."/></div>
                <input type="text" id = "searchInput"/>
            </div>
        </div>
    </header>
    );
};

export default Header;