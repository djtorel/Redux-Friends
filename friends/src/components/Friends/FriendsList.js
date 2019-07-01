import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getFriends } from '../../actions';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = () => {
  const { friends, error, fetchingFriends } = useSelector(
    ({ friends, error, fetchingFriends }) => ({
      friends,
      error,
      fetchingFriends,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (friends.length === 0) {
      dispatch(getFriends());
    }
  }, [dispatch, friends.length]);

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div>
            <FriendForm />
          </div>
          {fetchingFriends ? (
            <Loader type="Grid" color="#00BFFF" height="50" width="50" />
          ) : (
            friends.map(({ name, age, email, id }) => (
              <Friend key={id} name={name} age={age} email={email} id={id} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
