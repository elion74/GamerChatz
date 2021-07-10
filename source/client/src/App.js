import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import Settings from './pages/Settings/Settings.js';
import yourChats from './pages/yourChats/yourChats.js';

import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/settings' exact component={Settings} />
        <Route path='/yourchats' exact component={yourChats} />
      </Switch>

    </Router>
  );
}

export default App;
