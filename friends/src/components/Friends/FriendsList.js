/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getFriends } from '../../actions';
import Friend from './Friend';
import FriendForm from './FriendForm';

const container = css`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  justif-content: center;
  width: 100%;
  background-color: #3a3a3a;
  border-radius: 4px;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
    <div css={container}>
      {error ? (
        <div>{error}</div>
      ) : (
        <div css={wrapper}>
          <div>
            <FriendForm />
          </div>
          <div>
            {fetchingFriends ? (
              <Loader type="Grid" color="#00BFFF" height="50" width="50" />
            ) : (
              friends.map(({ name, age, email, id }) => (
                <Friend key={id} name={name} age={age} email={email} id={id} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsList;
