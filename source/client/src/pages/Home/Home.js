import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';
import PublicGroup from '../../components/PublicGroup/PublicGroup.js';

import './Home.css';

export default function Home (){

return(    
    <main className ='home'>
       
        <div className = 'wrap'>
            <Sidebar />  

            <div className = 'content'>
                <Navbar />

                <h1 className = 'headline'>Public Groups</h1>
                <section className = 'publicgroups_sec'>
                    <PublicGroup />
                    <PublicGroup />
                    <PublicGroup />
                    <PublicGroup />
                </section>
                <section className = 'publicgroups_sec'>
                    <PublicGroup />
                    <PublicGroup />
                    <PublicGroup />
                    <PublicGroup />
                </section>
            </div>
        </div>

    </main>
)
}