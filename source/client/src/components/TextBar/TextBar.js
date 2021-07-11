import React from 'react';

import './TextBar.css';
import sendbutton from '../../assets/sendbutton.png';

export default function TextBar() {

    return (
        <section className='textbar_sec'>
            <input type = 'text' className = 'text_bar'/>
            <button className = 'textbar_button'> <img className = 'textbarbutton_image' alt = 'sendbutton' src = {sendbutton}/></button>
        </section>

    )
}