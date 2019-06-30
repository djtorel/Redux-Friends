import React from 'react';

import Friends from './Friends/Friends';

const ProtectedRoute = ({ history }) => {
  return (
    <div>
      {localStorage.token ? (
        <div>
          <Friends />{' '}
        </div>
      ) : (
        history.push('/login')
      )}
    </div>
  );
};

export default ProtectedRoute;
