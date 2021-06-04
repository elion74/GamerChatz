import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar.js';
import Navbar from '../../components/Navbar/Navbar.js';

import './Home.css';

export default function Home (){

return(    
    <main className ='home'>
       
        <div className = 'wrap'>
            {/* sidebar */}
            <Sidebar />  

            <div className = 'content'>
                <Navbar />
 
            </div>
        </div>

    </main>
)
}