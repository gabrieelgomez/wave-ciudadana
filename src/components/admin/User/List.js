import React from 'react';
import { Table, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const { Column } = Table;

const StyledTable = styled(Table)`
  background-color: #fff;
  width: 100%;
  overflow-x: scroll;
  display: inline-block;
`

const AdminUsersList = (props) => {
  return (
    <StyledTable
      dataSource={props.data}
      rowKey={record => record.id}
    >
      <Column title="ID User" dataIndex="id" key="id" render={(text, record) => (
        <Link to={`/admin/user/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Nombre" dataIndex="name" key="name" render={(text, record) => (
        <Link to={`/admin/user/${record.id}`}>{text}</Link>
      )}/>
      <Column title="Apellido" dataIndex="lastname" key="lastname" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Usuario" dataIndex="nickname" key="nickname" />
      <Column
        title="Actions"
        key="actions"
        render={(record) => (
          <span>
            <Link to={`/admin/user/${record.id}/update`}><Icon type="edit"/></Link>
          </span>
        )}
      />
    </StyledTable>
  )
}

export default AdminUsersList;
