import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getFriends } from '../../actions';
import Friend from './Friend';

const Friends = ({ getFriends, friends, error, fetchingFriends }) => {
  useEffect(() => {
    if (friends.length === 0) {
      getFriends();
    }
  }, [friends.length, getFriends]);
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
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

const mapStateToProps = ({ friends, error, fetchingFriends }) => ({
  friends,
  error,
  fetchingFriends,
});

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
