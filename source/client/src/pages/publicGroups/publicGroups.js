import React from 'react';

import '../yourChats/yourChats.css';// same style as in yourChats page (yourChats.css)


import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';
import TextBar from '../../components/TextBar/TextBar.js';
import PublicGroup from '../../components/PublicGroup/PublicGroup.js';

export default function publicGroups() {

    return (
        <main className='yourchats'>
            <div className='wrap'>
                <Sidebar />

                <div className='content'>
                    <Navbar />

                    <h1 className='headline'>public groups name</h1>
                    
                    <div className = 'publicgroups_box'>
                        {/* <PublicGroup /> */}
                        asdf

                    </div>

                    <section className='chat_sec'>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                    </section>

                    <TextBar />

                </div>
            </div>


        </main>
    )
}