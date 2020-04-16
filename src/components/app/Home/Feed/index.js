import React from 'react';
import Box from '../../Box';
import List from './List';

const Feed = (props) => {
  const { api, tokens, currentUser, pollCategories } = props;

  return (
    <div>
      <Box
        api={api}
        tokens={tokens}
        currentUser={currentUser}
        pollCategories={pollCategories}
      />
      <List 
        api={api}
        tokens={tokens}
        currentUser={currentUser}
      />
    </div>
  )
}

export default Feed;