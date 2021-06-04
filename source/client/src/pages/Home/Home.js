import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar.js';

import './Home.css';

export default function Home (){

return(    
    <main className ='home'>
       
        <div className = 'wrap'>
            {/* sidebar */}
            <Sidebar />  

            <div className = 'content'>

               {/* navbar */}
 
            </div>
        </div>

    </main>
)
}