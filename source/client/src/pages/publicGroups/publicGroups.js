import React from 'react';

import '../yourChats/yourChats.css';// same style as in yourChats page (yourChats.css)

import  fornite from '../../assets/fortnite.jpg';

import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';
import TextBar from '../../components/TextBar/TextBar.js';

export default function publicGroups() {

    return (
        <main className='yourchats'>
            <div className='wrap'>
                <Sidebar />

                <div className='content'>
                    <Navbar />

                    <h1 className='public_headline'>public groups name</h1>
                    
                    <section className = 'publicgroup_container'>
                        <div className = 'publicgroups_box'>
                            <img className = 'game_img' alt='fortnite' src={fornite} />
                            <p className = 'game_name'>Fortnite</p>
                        </div>
                    </section>

                    <section className='chat_sec'>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
                        <p>elion: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi wussup</p>
                        <p>time: hi awussup</p>
                        <p>john: hi wussup</p>
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