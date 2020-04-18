import React from 'react';
import AdminPollsList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminPolls extends React.Component {

  render() {
    const {
      polls
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <h3>Encuestas</h3>
          <LinkButton name="Crear nueva" action="/admin/poll/new" />
        </div>
        <AdminPollsList data={polls}/>
      </div>
    )
  }
}

export default AdminPolls;
