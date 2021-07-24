import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Search from '../../components/Search/Search.js';
import Chat from '../Chat/Chat.js';
import Group from '../Group/Group.js';

import './Navbar.css';

import gamerchatzLogo from '../../assets/gamerchatzLogo.png';

import notificationLogo from '../../assets/notification.png';
import img from '../../assets/defaultprofilepic.jpg';



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

                { open ?
                <>
                <h2 className = 'wrapchats_headline'>Your Chats</h2>
                <section className = 'wrap_chats'>
                 <Chat /> 
                 <Chat /> 
                 <Chat /> 
                 <Chat /> 
                 <Chat /> 
                 <Chat /> 
                </section>

                <h2 className = 'wrapchats_headline'>Your Groups</h2>
                <section className = 'wrap_chats'>
                 <Group/> 
                 <Group /> 
                 <Group /> 
                 <Group /> 
                 <Group /> 
                 <Group /> 
                </section>
            
                {/* <h2 className = 'wrap_sourcecode'>Source Code</h2> */}
                <h2 className = 'wrapchats_headline'><a className = 'wrap_sourcecode' href = 'https://github.com/elion74/GamerChatz'>Source Code</a></h2>
                
                <div style = {{width:"80%", margin:"0 auto", borderTop:" #787b7d solid 1px", marginTop:"65px", marginBottom:'60px'}}></div>

                <section className = 'profile_sec'>
                    <div className = 'profile_container'>
                        <img className ='notification' src = {notificationLogo} alt='notification'/>
                        <img  className ='yourprofile_pic' src ={img} alt='yourprofilepic'/>
                    </div>   
                </section>
                </>
                :''}
            </div>

            <nav className='nav_links'>
                <ul className='list'>
                    <li className='list_items'><Link to = '/home' style={{ textDecoration: 'none', color:'#787b7d'}}>Home</Link></li>
                    <li className='list_items'><Link to = '/settings' style={{ textDecoration: 'none', color:'#787b7d'}}>Settings</Link></li>
                    <a className = 'list_items' href = 'https://github.com/elion74/GamerChatz'>Source Code</a>
                </ul>
            </nav>

            <Search />

            <img className='logo' src={gamerchatzLogo} alt='gamerchatzlogo' />
        </header>
    )
}