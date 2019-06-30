import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../../actions';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInput}
        />
        <button>
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
