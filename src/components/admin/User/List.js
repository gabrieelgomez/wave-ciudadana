import React from 'react';
import { Table } from 'antd';
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

const AdminUsersList = (props) => {
  return (
    <StyledTable
      columns={columns}
      dataSource={props.data}
      rowKey={record => record.id}
    />
  )
}

export default AdminUsersList;