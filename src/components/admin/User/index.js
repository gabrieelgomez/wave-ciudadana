import React from 'react';
import AdminUsersList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminUsers extends React.Component {

  render() {
    const {
      users
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <h3>Usuarios</h3>
          <LinkButton name="Crear nuevo" action="/admin/user/new" />
        </div>
        <AdminUsersList data={users}/>
      </div>
    )
  }
}

export default AdminUsers;
