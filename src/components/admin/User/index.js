import React from 'react';
import { BASE_DOMAIN } from '../../../constants';
import axios from 'axios';
import AdminUsersList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    axios({
      method: 'GET',
      url: `${BASE_DOMAIN}/v1/users/`,
      headers: headers
    })
    .then((response) => {
      const data = response.data.data.map((item, idx) => {
        return {
          id: item.id,
          ...item.attributes
        }
      });

      this.setState({
        users: data
      })
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }

  render() {
    const data = this.state.users;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <LinkButton name="Crear Usuario" action="/user/new" />
        </div>
        <AdminUsersList data={data}/>
      </div>
    )
  }
}

export default AdminUsers;