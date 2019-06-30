import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Route path="/login" component={Login} />
        <Route exact path="/friends" component={ProtectedRoute} />
      </div>
    </Router>
  );
}

export default App;
