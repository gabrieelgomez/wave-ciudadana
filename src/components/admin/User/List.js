import React from 'react';
import { Table, Icon } from 'antd';
import { StyledTable } from '../../styled';
import { Link } from 'react-router-dom';
const { Column } = Table;

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
