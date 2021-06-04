import React from 'react';

import './PublicGroup.css';

import  fornite from '../../assets/fortnite.jpg';

export default function PublicGroup(){

return(
    <div className = 'publicgroup'>
        <img className = 'game_img' alt='fortnite' src={fornite} />
        <p className = 'game_name'>Fortnite</p>
    </div>
)
}