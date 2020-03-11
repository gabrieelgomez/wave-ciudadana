import React from 'react';
import { Table } from 'antd';
import { BASE_DOMAIN } from '../../../constants';
import axios from 'axios';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  background-color: #fff;
`

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Apellido',
    dataIndex: 'lastname',
    key: 'lastname'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Usuario',
    dataIndex: 'nickname',
    key: 'nickname',
  }
];

class AdminUsersList extends React.Component {
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
      <StyledTable
        columns={columns}
        dataSource={data}
        rowKey={record => record.id}
      />
    )
  }
}

export default AdminUsersList;