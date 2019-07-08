/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { addFriend } from '../../actions';

const container = css`
  display: flex;
  align-items: center;
  justif-content: center;
  width: 100%;
  margin-left: 15px;
`;

const formCSS = css`
  display: flex;
  height: 30px;
  margin: 20px 0 20px 0;
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

const FriendForm = () => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      age: '',
      email: '',
    }
  );

  const handleInput = ({ target: { name, value } }) => {
    setUserInput({ [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, age, email } = userInput;
    if (name && email && age) {
      dispatch(addFriend({ name, age, email }));
      setUserInput({ name: '', age: '', email: '' });
    }
  };
  return (
    <div css={container}>
      <form css={formCSS} onSubmit={handleSubmit}>
        <input
          css={inputCSS}
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleInput}
          placeholder="Name..."
        />
        <input
          css={inputCSS}
          type="number"
          name="age"
          value={userInput.age}
          onChange={handleInput}
          placeholder="Age..."
        />
        <input
          css={inputCSS}
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleInput}
          placeholder="Email..."
        />
        <button css={buttonCSS} onSubmit={handleSubmit}>
          Add Friend
        </button>
      </form>
    </div>
  );
};

export default FriendForm;
