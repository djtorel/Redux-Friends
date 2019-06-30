import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Login from './components/Login/Login';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Route path="/login" component={Login} />
        <Route exact path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
