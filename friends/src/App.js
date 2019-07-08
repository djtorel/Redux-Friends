/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/Friends/FriendsList';

const rootCSS = css`
  font-family: 'Roboto', sans-serif;
  background-color: #1a1a1a;
  min-height: 100vh;
  color: #dadada;
  width: 100%;
`;

const navCSS = css`
  height: 4rem;
  border-bottom: 1px solid #6a6a6a;
  font-size: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  background-color: #3a3a3a;
`;

const linkCSS = css`
  text-decoration: none;
  margin-right: 20px;
  color: #9a9a9a;
`;
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justif-content: center;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <div css={rootCSS}>
        <nav css={navCSS}>
          <Link css={linkCSS} to="/login">
            Login
          </Link>
          <Link css={linkCSS} to="/friends">
            Friends
          </Link>
        </nav>
        <div css={container}>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/friends" component={FriendsList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
