/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { updateFriend, deleteFriend } from '../../actions/';

const container = css`
  margin: 10px 0 10px 0;
  background-color: #5a5a5a;
  border-radius: 4px;
  padding 10px;
  width: 100%;
`;

const formCSS = css`
  display: flex;
  flex-direction: column;
`;

const buttonCSS = css`
  height: 30px;
  background-color: #5a5a5a;
  border: 1px solid #7a7a7a;
  color: #dadada;
  width: 100%;
`;

const buttonsCSS = css`
  height: 30px;
  background-color: #3a3a3a;
  border: 1px solid #7a7a7a;
  color: #dadada;
  width: 50%;
`;

const friendField = css`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #6a6a6a;
  font-size: 18px;
  color: #dadada;
  border: 1px solid #8a8a8a;
  border: none;
`;

const Friend = ({ name, age, email, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name,
      age,
      email,
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
      dispatch(updateFriend(id, { name, age, email }));
      setIsEditMode(false);
    }
  };

  return (
    <div css={container}>
      {isEditMode ? (
        <div>
          <form css={formCSS} onSubmit={handleSubmit}>
            <input
              css={friendField}
              type="text"
              name="name"
              value={userInput.name}
              onChange={handleInput}
              placeholder="Name..."
            />
            <input
              css={friendField}
              type="number"
              name="age"
              value={userInput.age}
              onChange={handleInput}
              placeholder="Age..."
            />
            <input
              css={friendField}
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleInput}
              placeholder="Email..."
            />
            <button css={buttonCSS} onSubmit={handleSubmit}>
              Update Friend
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div css={friendField}>Name: {name}</div>
          <div css={friendField}>Age: {age}</div>
          <div css={friendField}>Email: {email}</div>
          <div>
            <button css={buttonsCSS} onClick={() => setIsEditMode(true)}>
              Edit
            </button>
            <button css={buttonsCSS} onClick={() => dispatch(deleteFriend(id))}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Friend;
