import React from 'react';

import '../yourChats/yourChats.css';// same style as in yourChats page (yourChats.css)

import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';
import TextBar from '../../components/TextBar/TextBar.js';

export default function yourGroups() {

    return (
        <main className='yourchats'>
            <div className='wrap'>
                <Sidebar />

                <div className='content'>
                    <Navbar />

                    <h1 className='headline'>Groupname</h1>
                    <section className='chat_sec'>
                        <p>elion: hi wussup</p>
                        <p>joe: hi wussup</p>
                        <p>tim: hi wussup</p>
                        <p>John: hi wussup</p>
                    </section>

                    <TextBar />

                </div>
            </div>


        </main>
    )
}