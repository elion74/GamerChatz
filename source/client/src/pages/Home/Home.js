import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';
import PublicGroup from '../../components/PublicGroup/PublicGroup.js';

import * as homestyle from './Home.module.css'

export default function Home() {

    return (
        <main  className = {homestyle.home}>

            <div className = {homestyle.wrap}>
                <Sidebar />

                <div className={homestyle.content}>
                    <Navbar />

                    <h1 className={homestyle.headline}>Public Groups</h1>
                    <section className = {homestyle.publicgroups_sec}>
                        <PublicGroup />
                        <PublicGroup />
                        <PublicGroup />
                        <PublicGroup />
                    </section>
                    <section className = {homestyle.publicgroups_sec}>
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