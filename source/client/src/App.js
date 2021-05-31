import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/Login.js';

import './App.css';

function App() {
  return (
    <Router>
          
      <Switch>
        <Route path = '/' exact component = {Login}/>
      </Switch>

    </Router>
  );
}

export default App;
