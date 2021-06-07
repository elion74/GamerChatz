import React from 'react';

import Search from '../../components/Search/Search.js';

import './Navbar.css';

import gamerchatzLogo from '../../assets/gamerchatzLogo.png';

export default function Navbar(){

return(
    <header className = 'navbar'>
        <nav className='nav_links'>
            <ul className = 'list'>
                <li className = 'list_items'>Home</li>
                <li className = 'list_items'>Settings</li>
                <li className = 'list_items'>Source Code</li>
            </ul>
        </nav>

        <Search/>
            
        <img className ='logo' src={gamerchatzLogo} alt='gamerchatzlogo'/>
    </header>
)
}