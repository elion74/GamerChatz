import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import Settings from './pages/Settings/Settings.js';
import yourChats from './pages/yourChats/yourChats.js';
import yourGroups from './pages/yourGroups/yourGroups.js';
import publicGroups from './pages/publicGroups/publicGroups.js'

import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/settings' exact component={Settings} />
        <Route path='/yourchats' exact component={yourChats} />
        <Route path='/yourgroups' exact component={yourGroups} />
        <Route path='/publicgroups' exact component={publicGroups} />
      </Switch>

    </Router>
  );
}

export default App;
