import React from 'react';

import './Chat.css';
import img from '../../assets/defaultprofilepic.jpg';


export default function Chat(){

return(
    <div className='chat'>
        <img className='profilepic' alt='profilepic' src={img}/>
        <p className ='username'>username</p>
    </div>
)
}