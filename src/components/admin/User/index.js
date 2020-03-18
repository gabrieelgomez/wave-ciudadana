import React from 'react';
import { BASE_DOMAIN } from '../../../constants';
import axios from 'axios';
import AdminUsersList from './List';
import LinkButton from '../../common/ui/LinkButton';
import { api } from '../../../services/api'

class AdminUsers extends React.Component {

  render() {
    // const data = this.state.users;
    const {
      users
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <LinkButton name="Crear Usuario" action="/user/new" />
        </div>
        <AdminUsersList data={users}/>
      </div>
    )
  }
}

export default AdminUsers;
