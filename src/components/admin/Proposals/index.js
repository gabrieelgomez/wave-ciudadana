import React from 'react';
import AdminProposalsList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminProposals extends React.Component {

  render() {
    const {
      proposals
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <LinkButton name="Crear Propuesta" action="/admin/proposal/new" />
        </div>
        <AdminProposalsList data={proposals}/>
      </div>
    )
  }
}

export default AdminProposals;
