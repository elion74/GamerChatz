import React from 'react';

import './SettingSidebar.css';


export default function Sidebar(){

return(
    <aside className ='settings_sidebar'>
        <div className = 'settings_topic'>
            <p className = 'settings_items'>My Account</p>
            <p className = 'settings_items'>Privacy</p>
            <p className = 'settings_items'>Language</p>
            <p className = 'settings_items'>Logout</p>
        </div>
    </aside>
)
}