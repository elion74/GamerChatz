import React from 'react';

import Chat from '../Chat/Chat.js';
import Group from '../Group/Group.js';

import './Sidebar.css';
import notificationLogo from '../../assets/notification.png';

import img from '../../assets/defaultprofilepic.jpg';


export default function Sidebar(){

return(
    <aside className ='sidebar'>
        <section className = 'yourchats_sec'>
            <h2 className ='yourchats_headline'>Your Chats</h2>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </section>

        <section className ='yourgroups_sec'>
            <h2 className = 'yourgroups_headline'>Your Groups</h2>
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />

        </section>

        <div style = {{width:"80%", margin:"0 auto", borderTop:" #787b7d solid 1px", marginTop:"65px"}}></div>

        <section className = 'profile_sec'>
            <div className = 'profile_container'>
                <img className ='notification' src = {notificationLogo} alt='notification'/>
                <img  className ='yourprofile_pic' src ={img} alt='yourprofilepic'/>
            </div>   
        </section>

    </aside>
)
}