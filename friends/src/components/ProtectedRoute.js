import React from 'react';

import FriendsList from './Friends/FriendsList';

const ProtectedRoute = ({ history }) => {
  return (
    <div>
      {localStorage.token ? (
        <div>
          <FriendsList />
        </div>
      ) : (
        history.push('/login')
      )}
    </div>
  );
};

export default ProtectedRoute;
