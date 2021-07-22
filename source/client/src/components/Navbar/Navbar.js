import React, {useState} from 'react';

import Search from '../../components/Search/Search.js';

import './Navbar.css';

import gamerchatzLogo from '../../assets/gamerchatzLogo.png';

export default function Navbar() {

    const [open, setOpen] = useState(false);


    return (
        <header className='navbar'>

            {/* burger menu  */}
            <label className='hamburger_menu' onClick ={() => setOpen(prevState => !prevState)}>
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div className={open ? "ham-wrap-open" : 'ham-wrap-close'}>
                <div className = 'hamburgermenu_cross' onClick = {() => setOpen(prevState => !prevState)}>
                    <div className = 'hamburger_line1'></div>
                    <div className = 'hamburger_line2'></div>
                </div>
            </div>

          <nav className='nav_links'>
                <ul className='list'>
                    <li className='list_items'>Home</li>
                    <li className='list_items'>Settings</li>
                    <li className='list_items'>Source Code</li>
                </ul>
            </nav>

            <Search />

            <img className='logo' src={gamerchatzLogo} alt='gamerchatzlogo' />
        </header>
    )
}