import React from 'react';
import QuickPostBox from './QuickPostBox';
import List from './List';

const Feed = (props) => {

  const { api, tokens, currentUser, pollCategories, pollsHome, savePollsHome } = props;

  return (
    <div>
      <QuickPostBox
        pollCategories={pollCategories}
      />
      <List
        api={api}
        tokens={tokens}
        pollsHome={pollsHome}
        savePollsHome={savePollsHome}
        currentUser={currentUser}
      />
    </div>
  )
}

export default Feed;
