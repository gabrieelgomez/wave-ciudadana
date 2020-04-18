import React from 'react';
import QuickPostBox from './QuickPostBox';
import List from './List';

const Feed = (props) => {
  const { api, tokens, currentUser, pollCategories } = props;

  return (
    <div>
      <QuickPostBox
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