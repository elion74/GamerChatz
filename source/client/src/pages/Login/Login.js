import React from 'react';

import './Login.css';

import googleLogo from '../../assets/google.png';
import githubLogo from '../../assets/github.png';
import discordLogo from '../../assets/discord.png';
import gamerchatzLogo from '../../assets/gamerchatz.png';

export default function Login (){

return(
    <main className = 'login'>
        <div className ='headline_container'>
            <h1 className ='headline'>Welcome to GamerChatz</h1>
            <img alt= 'gamerchatzlogo' src={gamerchatzLogo}/>
        </div>
        
        <section className = 'login_container'>        
            <div className ='login_modal'>
                <h2 className = 'login_message'>Log in with:</h2>
                <div className = 'logo_container'>
                    <img className = 'logos' alt = 'github' src={githubLogo}/>
                    <img className = 'logos' alt = 'google' src={googleLogo}/> 
                    <img className = 'logos' alt = 'discord ' src={discordLogo}/> 
                </div>
            </div>
        </section>
    </main>
)
}