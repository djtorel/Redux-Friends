import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../../actions';

const Friends = ({ getFriends, friends, error }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {friends.map(friend => (
            <div key={friend.id}>
              <div>{friend.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ friends, error }) => ({ friends, error });

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
