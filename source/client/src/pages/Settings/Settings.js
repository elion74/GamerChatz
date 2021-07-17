import React from 'react';

import SettingSidebar from '../../components/SettingSidebar/SettingSidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';

// import './Settings.css';
import * as settingstyle from './Settings.module.css';

import img from '../../assets/defaultprofilepic.jpg';

export default function Settings() {

    return (
        <main className = {settingstyle.settings}>
            <SettingSidebar />
            <div className = {settingstyle.content}>
                <Navbar />
                <h1 className = {settingstyle.head}>Settings Page</h1>

                <section className = {settingstyle.profile_sec}>
                    <div className = {settingstyle.profileinfo_container}>
                        <p className = {settingstyle.profile_info}>Username</p>
                        <div className = {settingstyle.profile_field}></div>

                        <p className = {settingstyle.profile_info}>Email</p>
                        <div className = {settingstyle.profile_field}></div>
                    </div>

                    <div className = {settingstyle.profilepic_container}>
                        <img className = {settingstyle.profile_pic} alt='profilepicture' src={img} />
                        <p className = {settingstyle.profilepic_text}>profile picture</p>
                    </div>
                </section>

                <hr size='1' className = {settingstyle.seperation_line} />

                <section className = {settingstyle.button_sec}>
                    <button className = {settingstyle.change_password}>change password</button>
                </section>

                <hr size='1' className = {settingstyle.seperation_line} />

                <section className = {settingstyle.button_sec}>
                    <button className = {settingstyle.delete_account}>delete account</button>
                </section>

            </div>
        </main>
    )
}