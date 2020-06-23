import React from 'react';
import QuickPostBox from './QuickPostBox';
import List from './List';

const Feed = (props) => {
  const { api, tokens, currentUser, pollCategories, polls, getPolls } = props;

  return (
    <div>
      <QuickPostBox
        api={api}
        tokens={tokens}
        currentUser={currentUser}
        pollCategories={pollCategories}
        getPolls={getPolls}
      />
      <List 
        api={api}
        tokens={tokens}
        currentUser={currentUser}
        polls={polls}
      />
    </div>
  )
}

export default Feed;