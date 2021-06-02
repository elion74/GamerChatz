import React from 'react';

import './Group.css';

import img from '../../assets/defaultprofilepic.jpg';


export default function Group(){

return(
    <div className='group'>
        <img className='grouppic' alt='grouppic' src={img}/>
        <p className ='groupname'>groupname</p>
    </div>
)
}