import React from 'react';

import Chat from '../Chat/Chat.js';
import Group from '../Group/Group.js';

import './Sidebar.css';


export default function Sidebar(){

return(
    <aside className ='sidebar'>
        <section className = 'yourchats_sec'>
            <h2 className ='yourchats_headline'>Your chats</h2>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </section>

        <section className ='yourgroups_sec'>
            <h2 className = 'yourgroups_headline'>Your groups</h2>
            <Group />
            <Group />
            <Group />
            {/* group component or chat component */}
        </section>

        <section>
            
            {/* profile */}
        </section>

    </aside>
)
}