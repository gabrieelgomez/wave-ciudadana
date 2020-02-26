import React from 'react';
import ProposalsList from '../components/ProposalsList';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <ProposalsList />
      </div>
    );
  }
}

export default Home;