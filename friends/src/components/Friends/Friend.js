import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';

import { updateFriend } from '../../actions/';

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

  return isEditMode ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleInput}
        />
        <input
          type="number"
          name="age"
          value={userInput.age}
          onChange={handleInput}
        />
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleInput}
        />
        <button onSubmit={handleSubmit}>Update Friend</button>
      </form>
    </div>
  ) : (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
      <button onClick={() => setIsEditMode(true)}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Friend;
