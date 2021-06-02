import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';

import './App.css';

function App() {
  return (
    <Router>
          
      <Switch>
        <Route path = '/' exact component = {Login}/>
        <Route path= '/home' exact component ={Home}/>
      </Switch>

    </Router>
  );
}

export default App;
