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
          <h3>Propuestas</h3>
          <LinkButton name="Crear nueva" action="/admin/proposal/new" />
        </div>
        <AdminProposalsList data={proposals}/>
      </div>
    )
  }
}

export default AdminProposals;
