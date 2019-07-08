/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useReducer } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../../actions';

const formCSS = css`
  display: flex;
  height: 30px;
  margin-bottom 20px;
`;

const buttonCSS = css`
  height: 30px;
  background-color: #5a5a5a;
  border: 1px solid #7a7a7a;
  color: #dadada;
`;

const inputCSS = css`
  background-color: #5a5a5a;
  border: 1px solid #7a7a7a;
  margin-right: 3px;
  color: #dadada;
`;

const Login = ({ loggingIn, login, history }) => {
  const [credentials, setCredentials] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
    }
  );
  const handleInput = ({ target: { name, value } }) => {
    setCredentials({ [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    login(credentials).then(res => {
      if (res) {
        history.push('/friends');
      }
    });
  };
  return (
    <div>
      <form css={formCSS} onSubmit={handleSubmit}>
        <input
          css={inputCSS}
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInput}
          placeholder="Login..."
        />
        <input
          css={inputCSS}
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInput}
          placeholder="Password..."
        />
        <button css={buttonCSS}>
          {loggingIn ? (
            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
          ) : (
            'Log in'
          )}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ loggingIn }) => ({ loggingIn });

export default connect(
  mapStateToProps,
  { login }
)(Login);
