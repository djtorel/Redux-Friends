import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../../actions';

const Friends = ({ getFriends }) => {
  useEffect(() => {
    getFriends();
  }, [getFriends]);
  return (
    <div>
      <div />
    </div>
  );
};

export default connect(
  () => ({}),
  { getFriends }
)(Friends);
