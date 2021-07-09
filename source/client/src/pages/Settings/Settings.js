import React from 'react';

import SettingSidebar from '../../components/SettingSidebar/SettingSidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';

import './Settings.css';

import img from '../../assets/defaultprofilepic.jpg';

export default function Settings(){

return(
    <main className = 'settings'>
        <SettingSidebar/>
        <div className = 'content'>
            <Navbar/>
            <h1 className = 'head'>Settings</h1>
            
            <section className = 'profile_sec'>
                <div className = 'profileinfo_container'>
                    <p className = 'profile_info'>Username</p>
                    <div className = 'profile_field'></div>

                    <p className = 'profile_info'>Email</p>
                    <div className = 'profile_field'></div>
                </div>

                <div className = 'profilepic_container'>
                    <img className ='profile_pic' alt ='profilepicture' src ={img}/>
                    <p className ='profilepic_text'>profile picture</p>
                </div>
            </section>
        </div>
    </main>
)
}